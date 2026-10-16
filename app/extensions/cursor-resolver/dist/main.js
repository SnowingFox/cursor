(() => {
  "use strict";
  var e = { 21: (e2, t2, n2) => {
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
  }, 38: function(e2, t2, n2) {
    var r2 = this && this.__createBinding || (Object.create ? function(e3, t3, n3, r3) {
      void 0 === r3 && (r3 = n3);
      var o3 = Object.getOwnPropertyDescriptor(t3, n3);
      o3 && !("get" in o3 ? !t3.__esModule : o3.writable || o3.configurable) || (o3 = { enumerable: true, get: function() {
        return t3[n3];
      } }), Object.defineProperty(e3, r3, o3);
    } : function(e3, t3, n3, r3) {
      void 0 === r3 && (r3 = n3), e3[r3] = t3[n3];
    }), o2 = this && this.__exportStar || function(e3, t3) {
      for (var n3 in e3) "default" === n3 || Object.prototype.hasOwnProperty.call(t3, n3) || r2(t3, e3, n3);
    };
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toPlainMessage = t2.createRegistryFromDescriptors = t2.createRegistry = t2.createDescriptorSet = t2.BinaryReader = t2.BinaryWriter = t2.WireType = t2.MethodIdempotency = t2.MethodKind = t2.clearExtension = t2.hasExtension = t2.setExtension = t2.getExtension = t2.ScalarType = t2.LongType = t2.isMessage = t2.Message = t2.codegenInfo = t2.protoDelimited = t2.protoBase64 = t2.protoInt64 = t2.protoDouble = t2.proto2 = t2.proto3 = void 0;
    var a2 = n2(599);
    Object.defineProperty(t2, "proto3", { enumerable: true, get: function() {
      return a2.proto3;
    } });
    var s2 = n2(291);
    Object.defineProperty(t2, "proto2", { enumerable: true, get: function() {
      return s2.proto2;
    } });
    var i2 = n2(492);
    Object.defineProperty(t2, "protoDouble", { enumerable: true, get: function() {
      return i2.protoDouble;
    } });
    var l2 = n2(498);
    Object.defineProperty(t2, "protoInt64", { enumerable: true, get: function() {
      return l2.protoInt64;
    } });
    var u2 = n2(526);
    Object.defineProperty(t2, "protoBase64", { enumerable: true, get: function() {
      return u2.protoBase64;
    } });
    var c2 = n2(638);
    Object.defineProperty(t2, "protoDelimited", { enumerable: true, get: function() {
      return c2.protoDelimited;
    } });
    var m2 = n2(596);
    Object.defineProperty(t2, "codegenInfo", { enumerable: true, get: function() {
      return m2.codegenInfo;
    } });
    var p2 = n2(193);
    Object.defineProperty(t2, "Message", { enumerable: true, get: function() {
      return p2.Message;
    } });
    var d2 = n2(706);
    Object.defineProperty(t2, "isMessage", { enumerable: true, get: function() {
      return d2.isMessage;
    } });
    var f2 = n2(408);
    Object.defineProperty(t2, "LongType", { enumerable: true, get: function() {
      return f2.LongType;
    } }), Object.defineProperty(t2, "ScalarType", { enumerable: true, get: function() {
      return f2.ScalarType;
    } });
    var T2 = n2(771);
    Object.defineProperty(t2, "getExtension", { enumerable: true, get: function() {
      return T2.getExtension;
    } }), Object.defineProperty(t2, "setExtension", { enumerable: true, get: function() {
      return T2.setExtension;
    } }), Object.defineProperty(t2, "hasExtension", { enumerable: true, get: function() {
      return T2.hasExtension;
    } }), Object.defineProperty(t2, "clearExtension", { enumerable: true, get: function() {
      return T2.clearExtension;
    } });
    var g2 = n2(422);
    Object.defineProperty(t2, "MethodKind", { enumerable: true, get: function() {
      return g2.MethodKind;
    } }), Object.defineProperty(t2, "MethodIdempotency", { enumerable: true, get: function() {
      return g2.MethodIdempotency;
    } });
    var E2 = n2(831);
    Object.defineProperty(t2, "WireType", { enumerable: true, get: function() {
      return E2.WireType;
    } }), Object.defineProperty(t2, "BinaryWriter", { enumerable: true, get: function() {
      return E2.BinaryWriter;
    } }), Object.defineProperty(t2, "BinaryReader", { enumerable: true, get: function() {
      return E2.BinaryReader;
    } });
    var y2 = n2(101);
    Object.defineProperty(t2, "createDescriptorSet", { enumerable: true, get: function() {
      return y2.createDescriptorSet;
    } });
    var h2 = n2(942);
    Object.defineProperty(t2, "createRegistry", { enumerable: true, get: function() {
      return h2.createRegistry;
    } });
    var N2 = n2(269);
    Object.defineProperty(t2, "createRegistryFromDescriptors", { enumerable: true, get: function() {
      return N2.createRegistryFromDescriptors;
    } });
    var _2 = n2(174);
    Object.defineProperty(t2, "toPlainMessage", { enumerable: true, get: function() {
      return _2.toPlainMessage;
    } }), o2(n2(636), t2), o2(n2(443), t2), o2(n2(245), t2), o2(n2(374), t2), o2(n2(574), t2), o2(n2(668), t2), o2(n2(970), t2), o2(n2(206), t2), o2(n2(814), t2), o2(n2(907), t2), o2(n2(469), t2), o2(n2(21), t2);
  }, 84: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.varint32read = t2.varint32write = t2.uInt64ToString = t2.int64ToString = t2.int64FromString = t2.varint64write = t2.varint64read = void 0, t2.varint64read = function() {
      let e3 = 0, t3 = 0;
      for (let n4 = 0; n4 < 28; n4 += 7) {
        let r3 = this.buf[this.pos++];
        if (e3 |= (127 & r3) << n4, !(128 & r3)) return this.assertBounds(), [e3, t3];
      }
      let n3 = this.buf[this.pos++];
      if (e3 |= (15 & n3) << 28, t3 = (112 & n3) >> 4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      for (let n4 = 3; n4 <= 31; n4 += 7) {
        let r3 = this.buf[this.pos++];
        if (t3 |= (127 & r3) << n4, !(128 & r3)) return this.assertBounds(), [e3, t3];
      }
      throw new Error("invalid varint");
    }, t2.varint64write = function(e3, t3, n3) {
      for (let r4 = 0; r4 < 28; r4 += 7) {
        const o4 = e3 >>> r4, a3 = !(o4 >>> 7 == 0 && 0 == t3), s3 = 255 & (a3 ? 128 | o4 : o4);
        if (n3.push(s3), !a3) return;
      }
      const r3 = e3 >>> 28 & 15 | (7 & t3) << 4, o3 = !!(t3 >> 3);
      if (n3.push(255 & (o3 ? 128 | r3 : r3)), o3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const r4 = t3 >>> e4, o4 = !(r4 >>> 7 == 0), a3 = 255 & (o4 ? 128 | r4 : r4);
          if (n3.push(a3), !o4) return;
        }
        n3.push(t3 >>> 31 & 1);
      }
    };
    const n2 = 4294967296;
    function r2(e3, t3) {
      if ({ lo: e3, hi: t3 } = (function(e4, t4) {
        return { lo: e4 >>> 0, hi: t4 >>> 0 };
      })(e3, t3), t3 <= 2097151) return String(n2 * t3 + e3);
      const r3 = 16777215 & (e3 >>> 24 | t3 << 8), o3 = t3 >> 16 & 65535;
      let a3 = (16777215 & e3) + 6777216 * r3 + 6710656 * o3, i2 = r3 + 8147497 * o3, l2 = 2 * o3;
      const u2 = 1e7;
      return a3 >= u2 && (i2 += Math.floor(a3 / u2), a3 %= u2), i2 >= u2 && (l2 += Math.floor(i2 / u2), i2 %= u2), l2.toString() + s2(i2) + s2(a3);
    }
    function o2(e3, t3) {
      return { lo: 0 | e3, hi: 0 | t3 };
    }
    function a2(e3, t3) {
      return t3 = ~t3, e3 ? e3 = 1 + ~e3 : t3 += 1, o2(e3, t3);
    }
    t2.int64FromString = function(e3) {
      const t3 = "-" === e3[0];
      t3 && (e3 = e3.slice(1));
      const r3 = 1e6;
      let s3 = 0, i2 = 0;
      function l2(t4, o3) {
        const a3 = Number(e3.slice(t4, o3));
        i2 *= r3, s3 = s3 * r3 + a3, s3 >= n2 && (i2 += s3 / n2 | 0, s3 %= n2);
      }
      return l2(-24, -18), l2(-18, -12), l2(-12, -6), l2(-6), t3 ? a2(s3, i2) : o2(s3, i2);
    }, t2.int64ToString = function(e3, t3) {
      let n3 = o2(e3, t3);
      const s3 = 2147483648 & n3.hi;
      s3 && (n3 = a2(n3.lo, n3.hi));
      const i2 = r2(n3.lo, n3.hi);
      return s3 ? "-" + i2 : i2;
    }, t2.uInt64ToString = r2;
    const s2 = (e3) => {
      const t3 = String(e3);
      return "0000000".slice(t3.length) + t3;
    };
    t2.varint32write = function(e3, t3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) t3.push(127 & e3 | 128), e3 >>>= 7;
        t3.push(e3);
      } else {
        for (let n3 = 0; n3 < 9; n3++) t3.push(127 & e3 | 128), e3 >>= 7;
        t3.push(1);
      }
    }, t2.varint32read = function() {
      let e3 = this.buf[this.pos++], t3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), t3;
      e3 = this.buf[this.pos++], t3 |= (15 & e3) << 28;
      for (let t4 = 5; 128 & e3 && t4 < 10; t4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), t3 >>> 0;
    };
  }, 98: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.assertFloat32 = t2.assertUInt32 = t2.assertInt32 = t2.assert = void 0, t2.assert = function(e3, t3) {
      if (!e3) throw new Error(t3);
    };
    t2.assertInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }, t2.assertUInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }, t2.assertFloat32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    };
  }, 101: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createDescriptorSet = void 0;
    const r2 = n2(374), o2 = n2(98), a2 = n2(422), s2 = n2(822), i2 = n2(663), l2 = n2(301), u2 = n2(408), c2 = n2(706);
    function m2(e3, t3, n3) {
      var r3, a3;
      (0, o2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const s3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (a3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== a3 && a3 }, N2(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: _2(e3, t3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return P2(this.proto.sourceCodeInfo, [F2.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return P2(this.proto.sourceCodeInfo, [F2.FileDescriptorProto_Package]);
      }, getFeatures() {
        var t4;
        return n3(null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
      t3.mapEntries.clear();
      for (const r4 of e3.enumType) f2(r4, s3, void 0, t3, n3);
      for (const r4 of e3.messageType) T2(r4, s3, void 0, t3, n3);
      for (const r4 of e3.service) g2(r4, s3, t3, n3);
      p2(s3, t3, n3);
      for (const e4 of t3.mapEntries.values()) d2(e4, t3, n3);
      for (const e4 of s3.messages) d2(e4, t3, n3), p2(e4, t3, n3);
      t3.mapEntries.clear(), t3.files.push(s3);
    }
    function p2(e3, t3, n3) {
      switch (e3.kind) {
        case "file":
          for (const r3 of e3.proto.extension) {
            const o3 = h2(r3, e3, void 0, t3, n3);
            e3.extensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          break;
        case "message":
          for (const r3 of e3.proto.extension) {
            const o3 = h2(r3, e3.file, e3, t3, n3);
            e3.nestedExtensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          for (const r3 of e3.nestedMessages) p2(r3, t3, n3);
      }
    }
    function d2(e3, t3, n3) {
      const r3 = e3.proto.oneofDecl.map((t4) => (function(e4, t5, n4) {
        return (0, o2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: t5, fields: [], name: e4.name, toString() {
          return `oneof ${t5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, F2.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return P2(t5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var r4;
          return n4(t5.getFeatures(), null === (r4 = e4.options) || void 0 === r4 ? void 0 : r4.features);
        } };
      })(t4, e3, n3)), a3 = /* @__PURE__ */ new Set();
      for (const o3 of e3.proto.field) {
        const s3 = w2(o3, r3), i3 = y2(o3, e3.file, e3, s3, t3, n3);
        e3.fields.push(i3), void 0 === s3 ? e3.members.push(i3) : (s3.fields.push(i3), a3.has(s3) || (a3.add(s3), e3.members.push(s3)));
      }
      for (const t4 of r3.filter((e4) => a3.has(e4))) e3.oneofs.push(t4);
      for (const r4 of e3.nestedMessages) d2(r4, t3, n3);
    }
    function f2(e3, t3, n3, r3, a3) {
      var i3, l3, u3;
      (0, o2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const c3 = { kind: "enum", proto: e3, deprecated: null !== (l3 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== l3 && l3, file: t3, parent: n3, name: e3.name, typeName: I2(e3, n3, t3), values: [], sharedPrefix: (0, s2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var t4;
        return null !== (t4 = e4.name) && void 0 !== t4 ? t4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [F2.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4, o3;
        return a3(null !== (r4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== r4 ? r4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      r3.enums.set(c3.typeName, c3), e3.value.forEach((e4) => {
        var n4, r4;
        (0, o2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, o2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), c3.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (r4 = null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.deprecated) && void 0 !== r4 && r4, parent: c3, name: e4.name, number: e4.number, toString() {
          return `enum value ${c3.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let t4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (t4 += " [deprecated = true]"), t4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, F2.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return P2(t3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return a3(c3.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } });
      }), (null !== (u3 = null == n3 ? void 0 : n3.nestedEnums) && void 0 !== u3 ? u3 : t3.enums).push(c3);
    }
    function T2(e3, t3, n3, r3, a3) {
      var s3, i3, l3, u3;
      (0, o2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const c3 = { kind: "message", proto: e3, deprecated: null !== (i3 = null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.deprecated) && void 0 !== i3 && i3, file: t3, parent: n3, name: e3.name, typeName: I2(e3, n3, t3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [F2.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4, o3;
        return a3(null !== (r4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== r4 ? r4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      true === (null === (l3 = e3.options) || void 0 === l3 ? void 0 : l3.mapEntry) ? r3.mapEntries.set(c3.typeName, c3) : ((null !== (u3 = null == n3 ? void 0 : n3.nestedMessages) && void 0 !== u3 ? u3 : t3.messages).push(c3), r3.messages.set(c3.typeName, c3));
      for (const n4 of e3.enumType) f2(n4, t3, c3, r3, a3);
      for (const n4 of e3.nestedType) T2(n4, t3, c3, r3, a3);
    }
    function g2(e3, t3, n3, r3) {
      var a3, s3;
      (0, o2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i3 = { kind: "service", proto: e3, deprecated: null !== (s3 = null === (a3 = e3.options) || void 0 === a3 ? void 0 : a3.deprecated) && void 0 !== s3 && s3, file: t3, name: e3.name, typeName: I2(e3, void 0, t3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [F2.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return r3(t3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
      t3.services.push(i3), n3.services.set(i3.typeName, i3);
      for (const t4 of e3.method) i3.methods.push(E2(t4, i3, n3, r3));
    }
    function E2(e3, t3, n3, s3) {
      var i3, l3, u3;
      let c3, m3;
      switch ((0, o2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, o2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), c3 = true === e3.clientStreaming && true === e3.serverStreaming ? a2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? a2.MethodKind.ClientStreaming : true === e3.serverStreaming ? a2.MethodKind.ServerStreaming : a2.MethodKind.Unary, null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.idempotencyLevel) {
        case r2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          m3 = a2.MethodIdempotency.Idempotent;
          break;
        case r2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          m3 = a2.MethodIdempotency.NoSideEffects;
          break;
        case r2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          m3 = void 0;
      }
      const p3 = n3.messages.get(S2(e3.inputType)), d3 = n3.messages.get(S2(e3.outputType));
      (0, o2.assert)(p3, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, o2.assert)(d3, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const f3 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (u3 = null === (l3 = e3.options) || void 0 === l3 ? void 0 : l3.deprecated) && void 0 !== u3 && u3, parent: t3, name: f3, methodKind: c3, input: p3, output: d3, idempotency: m3, toString: () => `rpc ${t3.typeName}.${f3}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, F2.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return P2(t3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return s3(t3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
    }
    function y2(e3, t3, n3, a3, i3, l3) {
      var c3, m3, p3;
      (0, o2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, o2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, o2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const d3 = { proto: e3, deprecated: null !== (m3 = null === (c3 = e3.options) || void 0 === c3 ? void 0 : c3.deprecated) && void 0 !== m3 && m3, name: e3.name, number: e3.number, parent: n3, oneof: a3, optional: O2(e3, t3.syntax), packedByDefault: b2(e3, l3), packed: k2(t3, n3, e3, l3), jsonName: e3.jsonName === (0, s2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: D2, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, F2.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return l3(n3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } }, f3 = e3.label === r2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case r2.FieldDescriptorProto_Type.MESSAGE:
        case r2.FieldDescriptorProto_Type.GROUP: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i3.mapEntries.get(S2(e3.typeName));
          if (void 0 !== t4) return (0, o2.assert)(f3, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var t5, n5;
            (0, o2.assert)(null === (t5 = e4.proto.options) || void 0 === t5 ? void 0 : t5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, o2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const r3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, o2.assert)(r3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const a4 = r3.scalar;
            (0, o2.assert)(void 0 !== a4 && a4 !== u2.ScalarType.BYTES && a4 !== u2.ScalarType.FLOAT && a4 !== u2.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (n5 = r3.proto.type) && void 0 !== n5 ? n5 : -1}`);
            const s3 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, o2.assert)(s3, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), s3.fieldKind) {
              case "scalar":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "scalar" }) };
              case "message":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "message" }) };
              case "enum":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(t4));
          const n4 = i3.messages.get(S2(e3.typeName));
          return (0, o2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "message", repeated: f3, message: n4 });
        }
        case r2.FieldDescriptorProto_Type.ENUM: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i3.enums.get(S2(e3.typeName));
          return (0, o2.assert)(void 0 !== t4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "enum", getDefaultValue: R2, repeated: f3, enum: t4 });
        }
        default: {
          const t4 = v2[e3.type];
          return (0, o2.assert)(t4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "scalar", getDefaultValue: R2, repeated: f3, scalar: t4, longType: (null === (p3 = e3.options) || void 0 === p3 ? void 0 : p3.jstype) == r2.FieldOptions_JSType.JS_STRING ? u2.LongType.STRING : u2.LongType.BIGINT });
        }
      }
    }
    function h2(e3, t3, n3, r3, a3) {
      (0, o2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const s3 = y2(e3, t3, null, void 0, r3, a3), i3 = r3.messages.get(S2(e3.extendee));
      return (0, o2.assert)(i3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, s3), { kind: "extension", typeName: I2(e3, n3, t3), parent: n3, file: t3, extendee: i3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const n4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [F2.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return P2(t3.proto.sourceCodeInfo, n4);
      }, getFeatures() {
        var r4;
        return a3((null != n3 ? n3 : t3).getFeatures(), null === (r4 = e3.options) || void 0 === r4 ? void 0 : r4.features);
      } });
    }
    function N2(e3, t3) {
      let n3, o3;
      switch (e3) {
        case void 0:
        case "proto2":
          o3 = "proto2", n3 = r2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          o3 = "proto3", n3 = r2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (o3 = "editions", t3) {
            case void 0:
            case r2.Edition.EDITION_1_TEST_ONLY:
            case r2.Edition.EDITION_2_TEST_ONLY:
            case r2.Edition.EDITION_99997_TEST_ONLY:
            case r2.Edition.EDITION_99998_TEST_ONLY:
            case r2.Edition.EDITION_99999_TEST_ONLY:
            case r2.Edition.EDITION_UNKNOWN:
              n3 = r2.Edition.EDITION_UNKNOWN;
              break;
            default:
              n3 = t3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && t3 === r2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(t3)}`);
      return { syntax: o3, edition: n3 };
    }
    function _2(e3, t3) {
      return e3.dependency.map((e4) => {
        const n3 = t3.files.find((t4) => t4.proto.name === e4);
        return (0, o2.assert)(n3), n3;
      });
    }
    function I2(e3, t3, n3) {
      let r3;
      return (0, o2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), r3 = t3 ? `${t3.typeName}.${e3.name}` : void 0 !== n3.proto.package ? `${n3.proto.package}.${e3.name}` : `${e3.name}`, r3;
    }
    function S2(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function w2(e3, t3) {
      var n3;
      const r3 = e3.oneofIndex;
      if (void 0 === r3) return;
      let a3;
      return true !== e3.proto3Optional && (a3 = t3[r3], (0, o2.assert)(a3, `invalid FieldDescriptorProto: oneof #${r3} for field #${null !== (n3 = e3.number) && void 0 !== n3 ? n3 : -1} not found`)), a3;
    }
    function O2(e3, t3) {
      switch (t3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === r2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function b2(e3, t3) {
      const { repeatedFieldEncoding: n3 } = t3();
      if (n3 != r2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case r2.FieldDescriptorProto_Type.STRING:
        case r2.FieldDescriptorProto_Type.BYTES:
        case r2.FieldDescriptorProto_Type.GROUP:
        case r2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function k2(e3, t3, n3, o3) {
      var a3, s3, i3, l3, u3, c3;
      switch (n3.type) {
        case r2.FieldDescriptorProto_Type.STRING:
        case r2.FieldDescriptorProto_Type.BYTES:
        case r2.FieldDescriptorProto_Type.GROUP:
        case r2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case r2.Edition.EDITION_PROTO2:
              return null !== (s3 = null === (a3 = n3.options) || void 0 === a3 ? void 0 : a3.packed) && void 0 !== s3 && s3;
            case r2.Edition.EDITION_PROTO3:
              return null === (l3 = null === (i3 = n3.options) || void 0 === i3 ? void 0 : i3.packed) || void 0 === l3 || l3;
            default: {
              const { repeatedFieldEncoding: a4 } = o3(null !== (u3 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== u3 ? u3 : e3.getFeatures(), null === (c3 = n3.options) || void 0 === c3 ? void 0 : c3.features);
              return a4 == r2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    t2.createDescriptorSet = function(e3, t3) {
      var n3;
      const o3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, a3 = (0, c2.isMessage)(e3, r2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? r2.FileDescriptorSet.fromBinary(e3).file : e3, s3 = /* @__PURE__ */ new Map();
      for (const e4 of a3) {
        const r3 = null !== (n3 = e4.edition) && void 0 !== n3 ? n3 : N2(e4.syntax, e4.edition).edition;
        let a4 = s3.get(r3);
        void 0 === a4 && (a4 = (0, l2.createFeatureResolver)(r3, null == t3 ? void 0 : t3.featureSetDefaults, null == t3 ? void 0 : t3.serializationOptions), s3.set(r3, a4)), m2(e4, o3, a4);
      }
      return o3;
    };
    const v2 = { [r2.FieldDescriptorProto_Type.DOUBLE]: u2.ScalarType.DOUBLE, [r2.FieldDescriptorProto_Type.FLOAT]: u2.ScalarType.FLOAT, [r2.FieldDescriptorProto_Type.INT64]: u2.ScalarType.INT64, [r2.FieldDescriptorProto_Type.UINT64]: u2.ScalarType.UINT64, [r2.FieldDescriptorProto_Type.INT32]: u2.ScalarType.INT32, [r2.FieldDescriptorProto_Type.FIXED64]: u2.ScalarType.FIXED64, [r2.FieldDescriptorProto_Type.FIXED32]: u2.ScalarType.FIXED32, [r2.FieldDescriptorProto_Type.BOOL]: u2.ScalarType.BOOL, [r2.FieldDescriptorProto_Type.STRING]: u2.ScalarType.STRING, [r2.FieldDescriptorProto_Type.GROUP]: void 0, [r2.FieldDescriptorProto_Type.MESSAGE]: void 0, [r2.FieldDescriptorProto_Type.BYTES]: u2.ScalarType.BYTES, [r2.FieldDescriptorProto_Type.UINT32]: u2.ScalarType.UINT32, [r2.FieldDescriptorProto_Type.ENUM]: void 0, [r2.FieldDescriptorProto_Type.SFIXED32]: u2.ScalarType.SFIXED32, [r2.FieldDescriptorProto_Type.SFIXED64]: u2.ScalarType.SFIXED64, [r2.FieldDescriptorProto_Type.SINT32]: u2.ScalarType.SINT32, [r2.FieldDescriptorProto_Type.SINT64]: u2.ScalarType.SINT64 };
    function P2(e3, t3) {
      if (!e3) return { leadingDetached: [], sourcePath: t3 };
      for (const n3 of e3.location) if (n3.path.length === t3.length && !n3.path.some((e4, n4) => t3[n4] !== e4)) return { leadingDetached: n3.leadingDetachedComments, leading: n3.leadingComments, trailing: n3.trailingComments, sourcePath: t3 };
      return { leadingDetached: [], sourcePath: t3 };
    }
    var F2;
    function D2() {
      var e3, t3, n3;
      const o3 = [];
      this.repeated && o3.push("repeated"), this.optional && o3.push("optional");
      let a3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === r2.FieldDescriptorProto_Label.REQUIRED && o3.push("required"), this.fieldKind) {
        case "scalar":
          a3 = u2.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          a3 = this.enum.typeName;
          break;
        case "message":
          a3 = this.message.typeName;
          break;
        case "map": {
          const e4 = u2.ScalarType[this.mapKey].toLowerCase();
          let t4;
          switch (this.mapValue.kind) {
            case "scalar":
              t4 = u2.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              t4 = this.mapValue.enum.typeName;
              break;
            case "message":
              t4 = this.mapValue.message.typeName;
          }
          a3 = `map<${e4}, ${t4}>`;
          break;
        }
      }
      o3.push(`${a3} ${this.name} = ${this.number}`);
      const s3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && s3.push(`packed = ${this.proto.options.packed.toString()}`);
      let i3 = this.proto.defaultValue;
      return void 0 !== i3 && (this.proto.type != r2.FieldDescriptorProto_Type.BYTES && this.proto.type != r2.FieldDescriptorProto_Type.STRING || (i3 = '"' + i3.replace('"', '\\"') + '"'), s3.push(`default = ${i3}`)), void 0 !== this.jsonName && s3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.jstype) && s3.push(`jstype = ${r2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.deprecated) && s3.push("deprecated = true"), s3.length > 0 && o3.push("[" + s3.join(", ") + "]"), o3.join(" ");
    }
    function R2() {
      const e3 = this.proto.defaultValue;
      if (void 0 !== e3) switch (this.fieldKind) {
        case "enum":
          return (0, i2.parseTextFormatEnumValue)(this.enum, e3);
        case "scalar":
          return (0, i2.parseTextFormatScalarValue)(this.scalar, e3);
        default:
          return;
      }
    }
    !(function(e3) {
      e3[e3.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e3[e3.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e3[e3.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e3[e3.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e3[e3.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e3[e3.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e3[e3.DescriptorProto_Field = 2] = "DescriptorProto_Field", e3[e3.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e3[e3.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e3[e3.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e3[e3.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e3[e3.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e3[e3.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(F2 || (F2 = {}));
  }, 141: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.writeMapEntry = t2.makeBinaryFormat = void 0;
    const r2 = n2(831), o2 = n2(212), a2 = n2(455), s2 = n2(98), i2 = n2(803), l2 = n2(408), u2 = n2(706), c2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), m2 = { readUnknownFields: true, readerFactory: (e3) => new r2.BinaryReader(e3) }, p2 = { writeUnknownFields: true, writerFactory: () => new r2.BinaryWriter() };
    function d2(e3) {
      return e3 ? Object.assign(Object.assign({}, m2), e3) : m2;
    }
    function f2(e3) {
      return e3 ? Object.assign(Object.assign({}, p2), e3) : p2;
    }
    function T2(e3, t3, n3, o3, s3) {
      let { repeated: i3, localName: c3 } = n3;
      switch (n3.oneof && ((e3 = e3[n3.oneof.localName]).case != c3 && delete e3.value, e3.case = c3, c3 = "value"), n3.kind) {
        case "scalar":
        case "enum":
          const m3 = "enum" == n3.kind ? l2.ScalarType.INT32 : n3.T;
          let p3 = y2;
          if ("scalar" == n3.kind && n3.L > 0 && (p3 = E2), i3) {
            let n4 = e3[c3];
            if (o3 == r2.WireType.LengthDelimited && m3 != l2.ScalarType.STRING && m3 != l2.ScalarType.BYTES) {
              let e4 = t3.uint32() + t3.pos;
              for (; t3.pos < e4; ) n4.push(p3(t3, m3));
            } else n4.push(p3(t3, m3));
          } else e3[c3] = p3(t3, m3);
          break;
        case "message":
          const d3 = n3.T;
          i3 ? e3[c3].push(g2(t3, new d3(), s3, n3)) : (0, u2.isMessage)(e3[c3]) ? g2(t3, e3[c3], s3, n3) : (e3[c3] = g2(t3, new d3(), s3, n3), !d3.fieldWrapper || n3.oneof || n3.repeated || (e3[c3] = d3.fieldWrapper.unwrapField(e3[c3])));
          break;
        case "map":
          let [f3, T3] = (function(e4, t4, n4) {
            const r3 = t4.uint32(), o4 = t4.pos + r3;
            let s4, i4;
            for (; t4.pos < o4; ) {
              const [r4] = t4.tag();
              switch (r4) {
                case 1:
                  s4 = y2(t4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i4 = y2(t4, e4.V.T);
                      break;
                    case "enum":
                      i4 = t4.int32();
                      break;
                    case "message":
                      i4 = g2(t4, new e4.V.T(), n4, void 0);
                  }
              }
            }
            void 0 === s4 && (s4 = (0, a2.scalarZeroValue)(e4.K, l2.LongType.BIGINT));
            "string" != typeof s4 && "number" != typeof s4 && (s4 = s4.toString());
            if (void 0 === i4) switch (e4.V.kind) {
              case "scalar":
                i4 = (0, a2.scalarZeroValue)(e4.V.T, l2.LongType.BIGINT);
                break;
              case "enum":
                i4 = e4.V.T.values[0].no;
                break;
              case "message":
                i4 = new e4.V.T();
            }
            return [s4, i4];
          })(n3, t3, s3);
          e3[c3][f3] = T3;
      }
    }
    function g2(e3, t3, n3, r3) {
      const o3 = t3.getType().runtime.bin, a3 = null == r3 ? void 0 : r3.delimited;
      return o3.readMessage(t3, e3, a3 ? r3.no : e3.uint32(), n3, a3), t3;
    }
    function E2(e3, t3) {
      const n3 = y2(e3, t3);
      return "bigint" == typeof n3 ? n3.toString() : n3;
    }
    function y2(e3, t3) {
      switch (t3) {
        case l2.ScalarType.STRING:
          return e3.string();
        case l2.ScalarType.BOOL:
          return e3.bool();
        case l2.ScalarType.DOUBLE:
          return e3.double();
        case l2.ScalarType.FLOAT:
          return e3.float();
        case l2.ScalarType.INT32:
          return e3.int32();
        case l2.ScalarType.INT64:
          return e3.int64();
        case l2.ScalarType.UINT64:
          return e3.uint64();
        case l2.ScalarType.FIXED64:
          return e3.fixed64();
        case l2.ScalarType.BYTES:
          return e3.bytes();
        case l2.ScalarType.FIXED32:
          return e3.fixed32();
        case l2.ScalarType.SFIXED32:
          return e3.sfixed32();
        case l2.ScalarType.SFIXED64:
          return e3.sfixed64();
        case l2.ScalarType.SINT64:
          return e3.sint64();
        case l2.ScalarType.UINT32:
          return e3.uint32();
        case l2.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function h2(e3, t3, n3, o3) {
      (0, s2.assert)(void 0 !== t3);
      const a3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i3 = "enum" == e3.kind ? l2.ScalarType.INT32 : e3.T;
          if (a3) if ((0, s2.assert)(Array.isArray(t3)), e3.packed) !(function(e4, t4, n4, o4) {
            if (!o4.length) return;
            e4.tag(n4, r2.WireType.LengthDelimited).fork();
            let [, a4] = S2(t4);
            for (let t5 = 0; t5 < o4.length; t5++) e4[a4](o4[t5]);
            e4.join();
          })(n3, i3, e3.no, t3);
          else for (const r3 of t3) I2(n3, i3, e3.no, r3);
          else I2(n3, i3, e3.no, t3);
          break;
        case "message":
          if (a3) {
            (0, s2.assert)(Array.isArray(t3));
            for (const r3 of t3) _2(n3, o3, e3, r3);
          } else _2(n3, o3, e3, t3);
          break;
        case "map":
          (0, s2.assert)("object" == typeof t3 && null != t3);
          for (const [r3, a4] of Object.entries(t3)) N2(n3, o3, e3, r3, a4);
      }
    }
    function N2(e3, t3, n3, o3, a3) {
      e3.tag(n3.no, r2.WireType.LengthDelimited), e3.fork();
      let i3 = o3;
      switch (n3.K) {
        case l2.ScalarType.INT32:
        case l2.ScalarType.FIXED32:
        case l2.ScalarType.UINT32:
        case l2.ScalarType.SFIXED32:
        case l2.ScalarType.SINT32:
          i3 = Number.parseInt(o3);
          break;
        case l2.ScalarType.BOOL:
          (0, s2.assert)("true" == o3 || "false" == o3), i3 = "true" == o3;
      }
      switch (I2(e3, n3.K, 1, i3), n3.V.kind) {
        case "scalar":
          I2(e3, n3.V.T, 2, a3);
          break;
        case "enum":
          I2(e3, l2.ScalarType.INT32, 2, a3);
          break;
        case "message":
          (0, s2.assert)(void 0 !== a3), e3.tag(2, r2.WireType.LengthDelimited).bytes(a3.toBinary(t3));
      }
      e3.join();
    }
    function _2(e3, t3, n3, a3) {
      const s3 = (0, o2.wrapField)(n3.T, a3);
      n3.delimited ? e3.tag(n3.no, r2.WireType.StartGroup).raw(s3.toBinary(t3)).tag(n3.no, r2.WireType.EndGroup) : e3.tag(n3.no, r2.WireType.LengthDelimited).bytes(s3.toBinary(t3));
    }
    function I2(e3, t3, n3, r3) {
      (0, s2.assert)(void 0 !== r3);
      let [o3, a3] = S2(t3);
      e3.tag(n3, o3)[a3](r3);
    }
    function S2(e3) {
      let t3 = r2.WireType.Varint;
      switch (e3) {
        case l2.ScalarType.BYTES:
        case l2.ScalarType.STRING:
          t3 = r2.WireType.LengthDelimited;
          break;
        case l2.ScalarType.DOUBLE:
        case l2.ScalarType.FIXED64:
        case l2.ScalarType.SFIXED64:
          t3 = r2.WireType.Bit64;
          break;
        case l2.ScalarType.FIXED32:
        case l2.ScalarType.SFIXED32:
        case l2.ScalarType.FLOAT:
          t3 = r2.WireType.Bit32;
      }
      return [t3, l2.ScalarType[e3].toLowerCase()];
    }
    t2.makeBinaryFormat = function() {
      return { makeReadOptions: d2, makeWriteOptions: f2, listUnknownFields(e3) {
        var t3;
        return null !== (t3 = e3[c2]) && void 0 !== t3 ? t3 : [];
      }, discardUnknownFields(e3) {
        delete e3[c2];
      }, writeUnknownFields(e3, t3) {
        const n3 = e3[c2];
        if (n3) for (const e4 of n3) t3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, t3, n3, r3) {
        const o3 = e3;
        Array.isArray(o3[c2]) || (o3[c2] = []), o3[c2].push({ no: t3, wireType: n3, data: r3 });
      }, readMessage(e3, t3, n3, o3, a3) {
        const s3 = e3.getType(), i3 = a3 ? t3.len : t3.pos + n3;
        let l3, u3;
        for (; t3.pos < i3 && ([l3, u3] = t3.tag(), true !== a3 || u3 != r2.WireType.EndGroup); ) {
          const n4 = s3.fields.find(l3);
          if (!n4) {
            const n5 = t3.skip(u3, l3);
            o3.readUnknownFields && this.onUnknownField(e3, l3, u3, n5);
            continue;
          }
          T2(e3, t3, n4, u3, o3);
        }
        if (a3 && (u3 != r2.WireType.EndGroup || l3 !== n3)) throw new Error("invalid end group tag");
      }, readField: T2, writeMessage(e3, t3, n3) {
        const r3 = e3.getType();
        for (const o3 of r3.fields.byNumber()) {
          if (!(0, i2.isFieldSet)(o3, e3)) {
            if (o3.req) throw new Error(`cannot encode field ${r3.typeName}.${o3.name} to binary: required field not set`);
            continue;
          }
          h2(o3, o3.oneof ? e3[o3.oneof.localName].value : e3[o3.localName], t3, n3);
        }
        return n3.writeUnknownFields && this.writeUnknownFields(e3, t3), t3;
      }, writeField(e3, t3, n3, r3) {
        void 0 !== t3 && h2(e3, t3, n3, r3);
      } };
    }, t2.writeMapEntry = N2;
  }, 174: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toPlainMessage = void 0;
    const r2 = n2(706);
    function o2(e3) {
      if (!(0, r2.isMessage)(e3)) return e3;
      const t3 = e3.getType(), n3 = {};
      for (const r3 of t3.fields.byMember()) {
        const t4 = e3[r3.localName];
        let o3;
        if (r3.repeated) o3 = t4.map((e4) => a2(e4));
        else if ("map" == r3.kind) {
          o3 = {};
          for (const [e4, n4] of Object.entries(t4)) o3[e4] = a2(n4);
        } else if ("oneof" == r3.kind) {
          o3 = r3.findField(t4.case) ? { case: t4.case, value: a2(t4.value) } : { case: void 0 };
        } else o3 = a2(t4);
        n3[r3.localName] = o3;
      }
      return n3;
    }
    function a2(e3) {
      if (void 0 === e3) return e3;
      if ((0, r2.isMessage)(e3)) return o2(e3);
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    t2.toPlainMessage = o2;
  }, 186: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.InternalOneofInfo = void 0;
    const r2 = n2(822), o2 = n2(98);
    t2.InternalOneofInfo = class {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = (0, r2.localOneofName)(e3);
      }
      addField(e3) {
        (0, o2.assert)(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
      }
      findField(e3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e4 = 0; e4 < this.fields.length; e4++) this._lookup[this.fields[e4].localName] = this.fields[e4];
        }
        return this._lookup[e3];
      }
    };
  }, 193: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Message = void 0;
    t2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, t3) {
        const n2 = this.getType().runtime.bin, r2 = n2.makeReadOptions(t3);
        return n2.readMessage(this, r2.readerFactory(e3), e3.byteLength, r2), this;
      }
      fromJson(e3, t3) {
        const n2 = this.getType(), r2 = n2.runtime.json, o2 = r2.makeReadOptions(t3);
        return r2.readMessage(n2, e3, o2, this), this;
      }
      fromJsonString(e3, t3) {
        let n2;
        try {
          n2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(n2, t3);
      }
      toBinary(e3) {
        const t3 = this.getType().runtime.bin, n2 = t3.makeWriteOptions(e3), r2 = n2.writerFactory();
        return t3.writeMessage(this, r2, n2), r2.finish();
      }
      toJson(e3) {
        const t3 = this.getType().runtime.json, n2 = t3.makeWriteOptions(e3);
        return t3.writeMessage(this, n2);
      }
      toJsonString(e3) {
        var t3;
        const n2 = this.toJson(e3);
        return JSON.stringify(n2, null, null !== (t3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== t3 ? t3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }, 206: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.SourceContext = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), this.fileName = "", o2.proto3.util.initPartial(e3, this);
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
    t2.SourceContext = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.SourceContext", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }, 212: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getUnwrappedFieldType = t2.wrapField = void 0;
    const r2 = n2(408), o2 = n2(706);
    t2.wrapField = function(e3, t3) {
      return (0, o2.isMessage)(t3) || !e3.fieldWrapper ? t3 : e3.fieldWrapper.wrapField(t3);
    }, t2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return a2[e3.message.typeName];
    };
    const a2 = { "google.protobuf.DoubleValue": r2.ScalarType.DOUBLE, "google.protobuf.FloatValue": r2.ScalarType.FLOAT, "google.protobuf.Int64Value": r2.ScalarType.INT64, "google.protobuf.UInt64Value": r2.ScalarType.UINT64, "google.protobuf.Int32Value": r2.ScalarType.INT32, "google.protobuf.UInt32Value": r2.ScalarType.UINT32, "google.protobuf.BoolValue": r2.ScalarType.BOOL, "google.protobuf.StringValue": r2.ScalarType.STRING, "google.protobuf.BytesValue": r2.ScalarType.BYTES };
  }, 228: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeFieldInfos = void 0;
    const r2 = n2(186), o2 = n2(822), a2 = n2(408);
    t2.normalizeFieldInfos = function(e3, t3) {
      var n3, s2, i2, l2, u2, c2;
      const m2 = [];
      let p2;
      for (const d2 of "function" == typeof e3 ? e3() : e3) {
        const e4 = d2;
        if (e4.localName = (0, o2.localFieldName)(d2.name, void 0 !== d2.oneof), e4.jsonName = null !== (n3 = d2.jsonName) && void 0 !== n3 ? n3 : (0, o2.fieldJsonName)(d2.name), e4.repeated = null !== (s2 = d2.repeated) && void 0 !== s2 && s2, "scalar" == d2.kind && (e4.L = null !== (i2 = d2.L) && void 0 !== i2 ? i2 : a2.LongType.BIGINT), e4.delimited = null !== (l2 = d2.delimited) && void 0 !== l2 && l2, e4.req = null !== (u2 = d2.req) && void 0 !== u2 && u2, e4.opt = null !== (c2 = d2.opt) && void 0 !== c2 && c2, void 0 === d2.packed && (e4.packed = !!t3 && ("enum" == d2.kind || "scalar" == d2.kind && d2.T != a2.ScalarType.BYTES && d2.T != a2.ScalarType.STRING)), void 0 !== d2.oneof) {
          const t4 = "string" == typeof d2.oneof ? d2.oneof : d2.oneof.name;
          p2 && p2.name == t4 || (p2 = new r2.InternalOneofInfo(t4)), e4.oneof = p2, p2.addField(e4);
        }
        m2.push(e4);
      }
      return m2;
    };
  }, 245: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Any = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var t3;
        if ("" === this.typeUrl) return {};
        const n3 = this.typeUrlToName(this.typeUrl), r3 = null === (t3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === t3 ? void 0 : t3.findMessage(n3);
        if (!r3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o3 = r3.fromBinary(this.value).toJson(e3);
        return (n3.startsWith("google.protobuf.") || null === o3 || Array.isArray(o3) || "object" != typeof o3) && (o3 = { value: o3 }), o3["@type"] = this.typeUrl, o3;
      }
      fromJson(e3, t3) {
        var n3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const r3 = e3["@type"];
        if ("string" != typeof r3 || "" == r3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o3 = this.typeUrlToName(r3), a3 = null === (n3 = null == t3 ? void 0 : t3.typeRegistry) || void 0 === n3 ? void 0 : n3.findMessage(o3);
        if (!a3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r3} is not in the type registry`);
        let s2;
        if (o3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) s2 = a3.fromJson(e3.value, t3);
        else {
          const n4 = Object.assign({}, e3);
          delete n4["@type"], s2 = a3.fromJson(n4, t3);
        }
        return this.packFrom(s2), this;
      }
      packFrom(e3) {
        this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
      }
      unpackTo(e3) {
        return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
      }
      unpack(e3) {
        if ("" === this.typeUrl) return;
        const t3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return t3 ? t3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const t3 = this.typeUrlToName(this.typeUrl);
        let n3 = "";
        return n3 = "string" == typeof e3 ? e3 : e3.typeName, t3 === n3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const t3 = e3.lastIndexOf("/"), n3 = t3 >= 0 ? e3.substring(t3 + 1) : e3;
        if (!n3.length) throw new Error(`invalid type url: ${e3}`);
        return n3;
      }
      static pack(e3) {
        const t3 = new a2();
        return t3.packFrom(e3), t3;
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
    t2.Any = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.Any", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }, 269: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistryFromDescriptors = void 0;
    const r2 = n2(98), o2 = n2(599), a2 = n2(291), s2 = n2(822), i2 = n2(907), l2 = n2(574), u2 = n2(245), c2 = n2(668), m2 = n2(970), p2 = n2(814), d2 = n2(609), f2 = n2(21), T2 = n2(374), g2 = n2(101), E2 = n2(706), y2 = [u2.Any, l2.Duration, c2.Empty, m2.FieldMask, p2.Struct, p2.Value, p2.ListValue, i2.Timestamp, l2.Duration, f2.DoubleValue, f2.FloatValue, f2.Int64Value, f2.Int32Value, f2.UInt32Value, f2.UInt64Value, f2.BoolValue, f2.StringValue, f2.BytesValue], h2 = [(0, d2.getEnumType)(p2.NullValue)];
    function N2(e3, t3) {
      var n3;
      const o3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == T2.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (n3 = e3.oneof) || void 0 === n3 ? void 0 : n3.name, opt: e3.optional, req: e3.proto.label === T2.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let n4;
          switch ((0, r2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              n4 = e3.mapValue.scalar;
              break;
            case "enum":
              n4 = _2(e3.mapValue.enum, t3, e3);
              break;
            case "message":
              n4 = _2(e3.mapValue.message, t3, e3);
          }
          o3.K = e3.mapKey, o3.V = { kind: e3.mapValue.kind, T: n4 };
          break;
        }
        case "message":
          o3.T = _2(e3.message, t3, e3);
          break;
        case "enum":
          o3.T = _2(e3.enum, t3, e3), o3.default = e3.getDefaultValue();
          break;
        case "scalar":
          o3.L = e3.longType, o3.T = e3.scalar, o3.default = e3.getDefaultValue();
      }
      return o3;
    }
    function _2(e3, t3, n3) {
      const o3 = "message" == e3.kind ? t3.findMessage(e3.typeName) : t3.findEnum(e3.typeName);
      return (0, r2.assert)(o3, `${e3.toString()}" for ${n3.toString()} not found`), o3;
    }
    t2.createRegistryFromDescriptors = function(e3, t3 = true) {
      const n3 = e3 instanceof Uint8Array || (0, E2.isMessage)(e3, T2.FileDescriptorSet) ? (0, g2.createDescriptorSet)(e3) : e3, r3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map(), u3 = /* @__PURE__ */ new Map(), c3 = {};
      if (t3) {
        for (const e4 of y2) i3.set(e4.typeName, e4);
        for (const e4 of h2) r3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const t4 = r3.get(e4);
        if (t4) return t4;
        const i4 = n3.enums.get(e4);
        if (!i4) return;
        const l4 = ("proto3" == i4.file.syntax ? o2.proto3 : a2.proto2).makeEnumType(e4, i4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, s2.localName)(e5) })), {});
        return r3.set(e4, l4), l4;
      }, findMessage(e4) {
        const t4 = i3.get(e4);
        if (t4) return t4;
        const r4 = n3.messages.get(e4);
        if (!r4) return;
        const l4 = "proto3" == r4.file.syntax ? o2.proto3 : a2.proto2, u4 = [], c4 = l4.makeMessageType(e4, () => u4, { localName: (0, s2.localName)(r4) });
        i3.set(e4, c4);
        for (const e5 of r4.fields) u4.push(N2(e5, this));
        return c4;
      }, findService(e4) {
        const t4 = c3[e4];
        if (t4) return t4;
        const r4 = n3.services.get(e4);
        if (!r4) return;
        const o3 = {};
        for (const e5 of r4.methods) {
          const t5 = _2(e5.input, this, e5), n4 = _2(e5.output, this, e5);
          o3[(0, s2.localName)(e5)] = { name: e5.name, I: t5, O: n4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return c3[e4] = { typeName: r4.typeName, methods: o3 };
      }, findExtensionFor(e4, t4) {
        var r4;
        if (!n3.messages.has(e4)) return;
        let o3 = u3.get(e4);
        if (!o3) {
          o3 = /* @__PURE__ */ new Map(), u3.set(e4, o3);
          for (const t5 of n3.extensions.values()) t5.extendee.typeName == e4 && o3.set(t5.number, t5);
        }
        const a3 = null === (r4 = u3.get(e4)) || void 0 === r4 ? void 0 : r4.get(t4);
        return a3 ? this.findExtension(a3.typeName) : void 0;
      }, findExtension(e4) {
        const t4 = l3.get(e4);
        if (t4) return t4;
        const r4 = n3.extensions.get(e4);
        if (!r4) return;
        const s3 = _2(r4.extendee, this, r4), i4 = ("proto3" == r4.file.syntax ? o2.proto3 : a2.proto2).makeExtension(e4, s3, N2(r4, this));
        return l3.set(e4, i4), i4;
      } };
    };
  }, 291: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto2 = void 0;
    const r2 = n2(829), o2 = n2(331), a2 = n2(228);
    t2.proto2 = (0, r2.makeProtoRuntime)("proto2", (e3) => new o2.InternalFieldList(e3, (e4) => (0, a2.normalizeFieldInfos)(e4, false)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        const n3 = t3.localName, r3 = e3;
        if (t3.repeated) r3[n3] = [];
        else switch (t3.kind) {
          case "oneof":
            r3[n3] = { case: void 0 };
            break;
          case "map":
            r3[n3] = {};
        }
      }
    });
  }, 301: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createFeatureResolver = void 0;
    const r2 = n2(374), o2 = n2(526);
    t2.createFeatureResolver = function(e3, t3, n3) {
      var a2;
      const s2 = null != t3 ? t3 : (i2 = n3, r2.FeatureSetDefaults.fromBinary(o2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i2));
      var i2;
      const l2 = s2.minimumEdition, u2 = s2.maximumEdition;
      if (void 0 === l2 || void 0 === u2 || s2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < l2) throw new Error(`Edition ${r2.Edition[e3]} is earlier than the minimum supported edition ${r2.Edition[l2]}`);
      if (u2 < e3) throw new Error(`Edition ${r2.Edition[e3]} is later than the maximum supported edition ${r2.Edition[u2]}`);
      let c2;
      for (const t4 of s2.defaults) {
        const n4 = null !== (a2 = t4.edition) && void 0 !== a2 ? a2 : 0;
        if (n4 > e3) continue;
        if (void 0 !== c2 && c2.e > n4) continue;
        let o3;
        t4.fixedFeatures && t4.overridableFeatures ? (o3 = t4.fixedFeatures, o3.fromBinary(t4.overridableFeatures.toBinary())) : o3 = t4.fixedFeatures ? t4.fixedFeatures : t4.overridableFeatures ? t4.overridableFeatures : new r2.FeatureSet(), c2 = { e: n4, f: o3 };
      }
      if (void 0 === c2) throw new Error(`No valid default found for edition ${r2.Edition[e3]}`);
      const m2 = c2.f.toBinary(n3);
      return (...t4) => {
        const o3 = r2.FeatureSet.fromBinary(m2, n3);
        for (const e4 of t4) void 0 !== e4 && o3.fromBinary(e4.toBinary(n3), n3);
        if (!(function(e4) {
          for (const t5 of r2.FeatureSet.fields.list()) {
            const n4 = e4[t5.localName];
            if (void 0 === n4) return false;
            if ("enum" == t5.kind && 0 === n4) return false;
          }
          return true;
        })(o3)) throw new Error(`Invalid FeatureSet for edition ${r2.Edition[e3]}`);
        return o3;
      };
    };
  }, 331: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.InternalFieldList = void 0;
    t2.InternalFieldList = class {
      constructor(e3, t3) {
        this._fields = e3, this._normalizer = t3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.jsonName] = e4[t3.name] = t3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.no] = t3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, t3) => e3.no - t3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let t3;
          for (const n2 of this.list()) n2.oneof ? n2.oneof !== t3 && (t3 = n2.oneof, e3.push(t3)) : e3.push(n2);
        }
        return this.members;
      }
    };
  }, 374: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.GeneratedCodeInfo_Annotation_Semantic = t2.GeneratedCodeInfo_Annotation = t2.GeneratedCodeInfo = t2.SourceCodeInfo_Location = t2.SourceCodeInfo = t2.FeatureSetDefaults_FeatureSetEditionDefault = t2.FeatureSetDefaults = t2.FeatureSet_JsonFormat = t2.FeatureSet_MessageEncoding = t2.FeatureSet_Utf8Validation = t2.FeatureSet_RepeatedFieldEncoding = t2.FeatureSet_EnumType = t2.FeatureSet_FieldPresence = t2.FeatureSet = t2.UninterpretedOption_NamePart = t2.UninterpretedOption = t2.MethodOptions_IdempotencyLevel = t2.MethodOptions = t2.ServiceOptions = t2.EnumValueOptions = t2.EnumOptions = t2.OneofOptions = t2.FieldOptions_FeatureSupport = t2.FieldOptions_EditionDefault = t2.FieldOptions_OptionTargetType = t2.FieldOptions_OptionRetention = t2.FieldOptions_JSType = t2.FieldOptions_CType = t2.FieldOptions = t2.MessageOptions = t2.FileOptions_OptimizeMode = t2.FileOptions = t2.MethodDescriptorProto = t2.ServiceDescriptorProto = t2.EnumValueDescriptorProto = t2.EnumDescriptorProto_EnumReservedRange = t2.EnumDescriptorProto = t2.OneofDescriptorProto = t2.FieldDescriptorProto_Label = t2.FieldDescriptorProto_Type = t2.FieldDescriptorProto = t2.ExtensionRangeOptions_Declaration = t2.ExtensionRangeOptions_VerificationState = t2.ExtensionRangeOptions = t2.DescriptorProto_ReservedRange = t2.DescriptorProto_ExtensionRange = t2.DescriptorProto = t2.FileDescriptorProto = t2.FileDescriptorSet = t2.Edition = void 0;
    const r2 = n2(291), o2 = n2(193);
    var a2, s2, i2, l2, u2, c2, m2, p2, d2, f2, T2, g2, E2, y2, h2, N2, _2;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(a2 || (t2.Edition = a2 = {})), r2.proto2.util.setEnumType(a2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class I2 extends o2.Message {
      constructor(e3) {
        super(), this.file = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new I2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new I2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new I2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(I2, e3, t3);
      }
    }
    t2.FileDescriptorSet = I2, I2.runtime = r2.proto2, I2.typeName = "google.protobuf.FileDescriptorSet", I2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: S2, repeated: true }]);
    class S2 extends o2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new S2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new S2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new S2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(S2, e3, t3);
      }
    }
    t2.FileDescriptorProto = S2, S2.runtime = r2.proto2, S2.typeName = "google.protobuf.FileDescriptorProto", S2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: w2, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: D2, repeated: true }, { no: 6, name: "service", kind: "message", T: U2, repeated: true }, { no: 7, name: "extension", kind: "message", T: P2, repeated: true }, { no: 8, name: "options", kind: "message", T: L2, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: H2, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class w2 extends o2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new w2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new w2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new w2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(w2, e3, t3);
      }
    }
    t2.DescriptorProto = w2, w2.runtime = r2.proto2, w2.typeName = "google.protobuf.DescriptorProto", w2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: P2, repeated: true }, { no: 6, name: "extension", kind: "message", T: P2, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: w2, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: D2, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: O2, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: F2, repeated: true }, { no: 7, name: "options", kind: "message", T: B2, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: b2, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class O2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new O2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new O2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new O2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(O2, e3, t3);
      }
    }
    t2.DescriptorProto_ExtensionRange = O2, O2.runtime = r2.proto2, O2.typeName = "google.protobuf.DescriptorProto.ExtensionRange", O2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: k2, opt: true }]);
    class b2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new b2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new b2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new b2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(b2, e3, t3);
      }
    }
    t2.DescriptorProto_ReservedRange = b2, b2.runtime = r2.proto2, b2.typeName = "google.protobuf.DescriptorProto.ReservedRange", b2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class k2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new k2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new k2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new k2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(k2, e3, t3);
      }
    }
    t2.ExtensionRangeOptions = k2, k2.runtime = r2.proto2, k2.typeName = "google.protobuf.ExtensionRangeOptions", k2.fields = r2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }, { no: 2, name: "declaration", kind: "message", T: v2, repeated: true }, { no: 50, name: "features", kind: "message", T: X2, opt: true }, { no: 3, name: "verification", kind: "enum", T: r2.proto2.getEnumType(s2), opt: true, default: s2.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(s2 || (t2.ExtensionRangeOptions_VerificationState = s2 = {})), r2.proto2.util.setEnumType(s2, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class v2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new v2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new v2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new v2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(v2, e3, t3);
      }
    }
    t2.ExtensionRangeOptions_Declaration = v2, v2.runtime = r2.proto2, v2.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", v2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class P2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new P2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new P2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new P2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(P2, e3, t3);
      }
    }
    t2.FieldDescriptorProto = P2, P2.runtime = r2.proto2, P2.typeName = "google.protobuf.FieldDescriptorProto", P2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: r2.proto2.getEnumType(l2), opt: true }, { no: 5, name: "type", kind: "enum", T: r2.proto2.getEnumType(i2), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: M2, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(i2 || (t2.FieldDescriptorProto_Type = i2 = {})), r2.proto2.util.setEnumType(i2, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(l2 || (t2.FieldDescriptorProto_Label = l2 = {})), r2.proto2.util.setEnumType(l2, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class F2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new F2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new F2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new F2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(F2, e3, t3);
      }
    }
    t2.OneofDescriptorProto = F2, F2.runtime = r2.proto2, F2.typeName = "google.protobuf.OneofDescriptorProto", F2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: C2, opt: true }]);
    class D2 extends o2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new D2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new D2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new D2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(D2, e3, t3);
      }
    }
    t2.EnumDescriptorProto = D2, D2.runtime = r2.proto2, D2.typeName = "google.protobuf.EnumDescriptorProto", D2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: J2, repeated: true }, { no: 3, name: "options", kind: "message", T: j2, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: R2, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class R2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new R2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new R2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new R2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(R2, e3, t3);
      }
    }
    t2.EnumDescriptorProto_EnumReservedRange = R2, R2.runtime = r2.proto2, R2.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", R2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class J2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new J2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new J2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new J2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(J2, e3, t3);
      }
    }
    t2.EnumValueDescriptorProto = J2, J2.runtime = r2.proto2, J2.typeName = "google.protobuf.EnumValueDescriptorProto", J2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: V2, opt: true }]);
    class U2 extends o2.Message {
      constructor(e3) {
        super(), this.method = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new U2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new U2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new U2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(U2, e3, t3);
      }
    }
    t2.ServiceDescriptorProto = U2, U2.runtime = r2.proto2, U2.typeName = "google.protobuf.ServiceDescriptorProto", U2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: A2, repeated: true }, { no: 3, name: "options", kind: "message", T: G2, opt: true }]);
    class A2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new A2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new A2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new A2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(A2, e3, t3);
      }
    }
    t2.MethodDescriptorProto = A2, A2.runtime = r2.proto2, A2.typeName = "google.protobuf.MethodDescriptorProto", A2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: q2, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class L2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new L2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new L2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new L2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(L2, e3, t3);
      }
    }
    t2.FileOptions = L2, L2.runtime = r2.proto2, L2.typeName = "google.protobuf.FileOptions", L2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: r2.proto2.getEnumType(u2), opt: true, default: u2.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(u2 || (t2.FileOptions_OptimizeMode = u2 = {})), r2.proto2.util.setEnumType(u2, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class B2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new B2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new B2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new B2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(B2, e3, t3);
      }
    }
    t2.MessageOptions = B2, B2.runtime = r2.proto2, B2.typeName = "google.protobuf.MessageOptions", B2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class M2 extends o2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new M2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new M2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new M2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(M2, e3, t3);
      }
    }
    t2.FieldOptions = M2, M2.runtime = r2.proto2, M2.typeName = "google.protobuf.FieldOptions", M2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: r2.proto2.getEnumType(c2), opt: true, default: c2.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: r2.proto2.getEnumType(m2), opt: true, default: m2.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: r2.proto2.getEnumType(p2), opt: true }, { no: 19, name: "targets", kind: "enum", T: r2.proto2.getEnumType(d2), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: x2, repeated: true }, { no: 21, name: "features", kind: "message", T: X2, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Y2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(c2 || (t2.FieldOptions_CType = c2 = {})), r2.proto2.util.setEnumType(c2, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(m2 || (t2.FieldOptions_JSType = m2 = {})), r2.proto2.util.setEnumType(m2, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(p2 || (t2.FieldOptions_OptionRetention = p2 = {})), r2.proto2.util.setEnumType(p2, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(d2 || (t2.FieldOptions_OptionTargetType = d2 = {})), r2.proto2.util.setEnumType(d2, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class x2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new x2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new x2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new x2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(x2, e3, t3);
      }
    }
    t2.FieldOptions_EditionDefault = x2, x2.runtime = r2.proto2, x2.typeName = "google.protobuf.FieldOptions.EditionDefault", x2.fields = r2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class Y2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Y2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Y2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Y2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Y2, e3, t3);
      }
    }
    t2.FieldOptions_FeatureSupport = Y2, Y2.runtime = r2.proto2, Y2.typeName = "google.protobuf.FieldOptions.FeatureSupport", Y2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class C2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new C2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new C2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new C2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(C2, e3, t3);
      }
    }
    t2.OneofOptions = C2, C2.runtime = r2.proto2, C2.typeName = "google.protobuf.OneofOptions", C2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class j2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new j2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new j2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new j2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(j2, e3, t3);
      }
    }
    t2.EnumOptions = j2, j2.runtime = r2.proto2, j2.typeName = "google.protobuf.EnumOptions", j2.fields = r2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class V2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new V2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new V2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new V2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(V2, e3, t3);
      }
    }
    t2.EnumValueOptions = V2, V2.runtime = r2.proto2, V2.typeName = "google.protobuf.EnumValueOptions", V2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: X2, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Y2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class G2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new G2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new G2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new G2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(G2, e3, t3);
      }
    }
    t2.ServiceOptions = G2, G2.runtime = r2.proto2, G2.typeName = "google.protobuf.ServiceOptions", G2.fields = r2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: X2, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class q2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new q2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new q2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new q2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(q2, e3, t3);
      }
    }
    t2.MethodOptions = q2, q2.runtime = r2.proto2, q2.typeName = "google.protobuf.MethodOptions", q2.fields = r2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: r2.proto2.getEnumType(f2), opt: true, default: f2.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(f2 || (t2.MethodOptions_IdempotencyLevel = f2 = {})), r2.proto2.util.setEnumType(f2, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class $2 extends o2.Message {
      constructor(e3) {
        super(), this.name = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals($2, e3, t3);
      }
    }
    t2.UninterpretedOption = $2, $2.runtime = r2.proto2, $2.typeName = "google.protobuf.UninterpretedOption", $2.fields = r2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W2, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new W2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new W2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new W2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(W2, e3, t3);
      }
    }
    t2.UninterpretedOption_NamePart = W2, W2.runtime = r2.proto2, W2.typeName = "google.protobuf.UninterpretedOption.NamePart", W2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class X2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new X2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new X2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new X2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(X2, e3, t3);
      }
    }
    t2.FeatureSet = X2, X2.runtime = r2.proto2, X2.typeName = "google.protobuf.FeatureSet", X2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: r2.proto2.getEnumType(T2), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: r2.proto2.getEnumType(g2), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: r2.proto2.getEnumType(E2), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: r2.proto2.getEnumType(y2), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: r2.proto2.getEnumType(h2), opt: true }, { no: 6, name: "json_format", kind: "enum", T: r2.proto2.getEnumType(N2), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(T2 || (t2.FeatureSet_FieldPresence = T2 = {})), r2.proto2.util.setEnumType(T2, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(g2 || (t2.FeatureSet_EnumType = g2 = {})), r2.proto2.util.setEnumType(g2, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(E2 || (t2.FeatureSet_RepeatedFieldEncoding = E2 = {})), r2.proto2.util.setEnumType(E2, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(y2 || (t2.FeatureSet_Utf8Validation = y2 = {})), r2.proto2.util.setEnumType(y2, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(h2 || (t2.FeatureSet_MessageEncoding = h2 = {})), r2.proto2.util.setEnumType(h2, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(N2 || (t2.FeatureSet_JsonFormat = N2 = {})), r2.proto2.util.setEnumType(N2, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class K2 extends o2.Message {
      constructor(e3) {
        super(), this.defaults = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new K2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new K2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new K2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(K2, e3, t3);
      }
    }
    t2.FeatureSetDefaults = K2, K2.runtime = r2.proto2, K2.typeName = "google.protobuf.FeatureSetDefaults", K2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: Z2, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class Z2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Z2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Z2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Z2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Z2, e3, t3);
      }
    }
    t2.FeatureSetDefaults_FeatureSetEditionDefault = Z2, Z2.runtime = r2.proto2, Z2.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Z2.fields = r2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: X2, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: X2, opt: true }]);
    class H2 extends o2.Message {
      constructor(e3) {
        super(), this.location = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new H2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new H2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new H2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(H2, e3, t3);
      }
    }
    t2.SourceCodeInfo = H2, H2.runtime = r2.proto2, H2.typeName = "google.protobuf.SourceCodeInfo", H2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: z2, repeated: true }]);
    class z2 extends o2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new z2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new z2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new z2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(z2, e3, t3);
      }
    }
    t2.SourceCodeInfo_Location = z2, z2.runtime = r2.proto2, z2.typeName = "google.protobuf.SourceCodeInfo.Location", z2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Q2 extends o2.Message {
      constructor(e3) {
        super(), this.annotation = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Q2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Q2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Q2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Q2, e3, t3);
      }
    }
    t2.GeneratedCodeInfo = Q2, Q2.runtime = r2.proto2, Q2.typeName = "google.protobuf.GeneratedCodeInfo", Q2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee2, repeated: true }]);
    class ee2 extends o2.Message {
      constructor(e3) {
        super(), this.path = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ee2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ee2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ee2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(ee2, e3, t3);
      }
    }
    t2.GeneratedCodeInfo_Annotation = ee2, ee2.runtime = r2.proto2, ee2.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: r2.proto2.getEnumType(_2), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(_2 || (t2.GeneratedCodeInfo_Annotation_Semantic = _2 = {})), r2.proto2.util.setEnumType(_2, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }, 408: (e2, t2) => {
    var n2, r2;
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LongType = t2.ScalarType = void 0, (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(n2 || (t2.ScalarType = n2 = {})), (function(e3) {
      e3[e3.BIGINT = 0] = "BIGINT", e3[e3.STRING = 1] = "STRING";
    })(r2 || (t2.LongType = r2 = {}));
  }, 422: (e2, t2) => {
    var n2, r2;
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MethodIdempotency = t2.MethodKind = void 0, (function(e3) {
      e3[e3.Unary = 0] = "Unary", e3[e3.ServerStreaming = 1] = "ServerStreaming", e3[e3.ClientStreaming = 2] = "ClientStreaming", e3[e3.BiDiStreaming = 3] = "BiDiStreaming";
    })(n2 || (t2.MethodKind = n2 = {})), (function(e3) {
      e3[e3.NoSideEffects = 1] = "NoSideEffects", e3[e3.Idempotent = 2] = "Idempotent";
    })(r2 || (t2.MethodIdempotency = r2 = {}));
  }, 443: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Mixin = t2.Method = t2.Api = void 0;
    const r2 = n2(193), o2 = n2(469), a2 = n2(206), s2 = n2(599);
    class i2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o2.Syntax.PROTO2, s2.proto3.util.initPartial(e3, this);
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
        return s2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Api = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.Api", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: l2, repeated: true }, { no: 3, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: u2, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s2.proto3.getEnumType(o2.Syntax) }]);
    class l2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = o2.Syntax.PROTO2, s2.proto3.util.initPartial(e3, this);
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
        return s2.proto3.util.equals(l2, e3, t3);
      }
    }
    t2.Method = l2, l2.runtime = s2.proto3, l2.typeName = "google.protobuf.Method", l2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s2.proto3.getEnumType(o2.Syntax) }]);
    class u2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", s2.proto3.util.initPartial(e3, this);
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
        return s2.proto3.util.equals(u2, e3, t3);
      }
    }
    t2.Mixin = u2, u2.runtime = s2.proto3, u2.typeName = "google.protobuf.Mixin", u2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }, 455: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isScalarZeroValue = t2.scalarZeroValue = t2.scalarEquals = void 0;
    const r2 = n2(498), o2 = n2(408);
    t2.scalarEquals = function(e3, t3, n3) {
      if (t3 === n3) return true;
      if (e3 == o2.ScalarType.BYTES) {
        if (!(t3 instanceof Uint8Array && n3 instanceof Uint8Array)) return false;
        if (t3.length !== n3.length) return false;
        for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] !== n3[e4]) return false;
        return true;
      }
      switch (e3) {
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return t3 == n3;
      }
      return false;
    }, t2.scalarZeroValue = function(e3, t3) {
      switch (e3) {
        case o2.ScalarType.BOOL:
          return false;
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return 0 == t3 ? r2.protoInt64.zero : "0";
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
          return 0;
        case o2.ScalarType.BYTES:
          return new Uint8Array(0);
        case o2.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, t2.isScalarZeroValue = function(e3, t3) {
      switch (e3) {
        case o2.ScalarType.BOOL:
          return false === t3;
        case o2.ScalarType.STRING:
          return "" === t3;
        case o2.ScalarType.BYTES:
          return t3 instanceof Uint8Array && !t3.byteLength;
        default:
          return 0 == t3;
      }
    };
  }, 469: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Option = t2.EnumValue = t2.Enum = t2.Field_Cardinality = t2.Field_Kind = t2.Field = t2.Type = t2.Syntax = void 0;
    const r2 = n2(599), o2 = n2(193), a2 = n2(206), s2 = n2(245);
    var i2, l2, u2;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(i2 || (t2.Syntax = i2 = {})), r2.proto3.util.setEnumType(i2, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class c2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", r2.proto3.util.initPartial(e3, this);
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
        return r2.proto3.util.equals(c2, e3, t3);
      }
    }
    t2.Type = c2, c2.runtime = r2.proto3, c2.typeName = "google.protobuf.Type", c2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: m2, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: f2, repeated: true }, { no: 5, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(i2) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class m2 extends o2.Message {
      constructor(e3) {
        super(), this.kind = l2.TYPE_UNKNOWN, this.cardinality = u2.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", r2.proto3.util.initPartial(e3, this);
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
        return r2.proto3.util.equals(m2, e3, t3);
      }
    }
    t2.Field = m2, m2.runtime = r2.proto3, m2.typeName = "google.protobuf.Field", m2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: r2.proto3.getEnumType(l2) }, { no: 2, name: "cardinality", kind: "enum", T: r2.proto3.getEnumType(u2) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: f2, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(l2 || (t2.Field_Kind = l2 = {})), r2.proto3.util.setEnumType(l2, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(u2 || (t2.Field_Cardinality = u2 = {})), r2.proto3.util.setEnumType(u2, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class p2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", r2.proto3.util.initPartial(e3, this);
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
        return r2.proto3.util.equals(p2, e3, t3);
      }
    }
    t2.Enum = p2, p2.runtime = r2.proto3, p2.typeName = "google.protobuf.Enum", p2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: d2, repeated: true }, { no: 3, name: "options", kind: "message", T: f2, repeated: true }, { no: 4, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(i2) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class d2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], r2.proto3.util.initPartial(e3, this);
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
        return r2.proto3.util.equals(d2, e3, t3);
      }
    }
    t2.EnumValue = d2, d2.runtime = r2.proto3, d2.typeName = "google.protobuf.EnumValue", d2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: f2, repeated: true }]);
    class f2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", r2.proto3.util.initPartial(e3, this);
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
        return r2.proto3.util.equals(f2, e3, t3);
      }
    }
    t2.Option = f2, f2.runtime = r2.proto3, f2.typeName = "google.protobuf.Option", f2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: s2.Any }]);
  }, 492: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoDouble = void 0, t2.protoDouble = { NaN: Number.NaN, POSITIVE_INFINITY: Number.POSITIVE_INFINITY, NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY };
  }, 498: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoInt64 = void 0;
    const r2 = n2(98), o2 = n2(84);
    t2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t4 = BigInt("-9223372036854775808"), n4 = BigInt("9223372036854775807"), r3 = BigInt("0"), o3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const r4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (r4 > n4 || r4 < t4) throw new Error(`int64 invalid: ${e4}`);
          return r4;
        }, uParse(e4) {
          const t5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t5 > o3 || t5 < r3) throw new Error(`uint64 invalid: ${e4}`);
          return t5;
        }, enc(t5) {
          return e3.setBigInt64(0, this.parse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(t5) {
          return e3.setBigInt64(0, this.uParse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (t5, n5) => (e3.setInt32(0, t5, true), e3.setInt32(4, n5, true), e3.getBigInt64(0, true)), uDec: (t5, n5) => (e3.setInt32(0, t5, true), e3.setInt32(4, n5, true), e3.getBigUint64(0, true)) };
      }
      const t3 = (e4) => (0, r2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), n3 = (e4) => (0, r2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, o2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), (0, o2.int64FromString)(e4)), dec: (e4, t4) => (0, o2.int64ToString)(e4, t4), uDec: (e4, t4) => (0, o2.uInt64ToString)(e4, t4) };
    })();
  }, 526: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoBase64 = void 0;
    let n2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), r2 = [];
    for (let e3 = 0; e3 < n2.length; e3++) r2[n2[e3].charCodeAt(0)] = e3;
    r2["-".charCodeAt(0)] = n2.indexOf("+"), r2["_".charCodeAt(0)] = n2.indexOf("/"), t2.protoBase64 = { dec(e3) {
      let t3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? t3 -= 2 : "=" == e3[e3.length - 1] && (t3 -= 1);
      let n3, o2 = new Uint8Array(t3), a2 = 0, s2 = 0, i2 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        if (n3 = r2[e3.charCodeAt(t4)], void 0 === n3) switch (e3[t4]) {
          case "=":
            s2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (s2) {
          case 0:
            i2 = n3, s2 = 1;
            break;
          case 1:
            o2[a2++] = i2 << 2 | (48 & n3) >> 4, i2 = n3, s2 = 2;
            break;
          case 2:
            o2[a2++] = (15 & i2) << 4 | (60 & n3) >> 2, i2 = n3, s2 = 3;
            break;
          case 3:
            o2[a2++] = (3 & i2) << 6 | n3, s2 = 0;
        }
      }
      if (1 == s2) throw Error("invalid base64 string.");
      return o2.subarray(0, a2);
    }, enc(e3) {
      let t3, r3 = "", o2 = 0, a2 = 0;
      for (let s2 = 0; s2 < e3.length; s2++) switch (t3 = e3[s2], o2) {
        case 0:
          r3 += n2[t3 >> 2], a2 = (3 & t3) << 4, o2 = 1;
          break;
        case 1:
          r3 += n2[a2 | t3 >> 4], a2 = (15 & t3) << 2, o2 = 2;
          break;
        case 2:
          r3 += n2[a2 | t3 >> 6], r3 += n2[63 & t3], o2 = 0;
      }
      return o2 && (r3 += n2[a2], r3 += "=", 1 == o2 && (r3 += "=")), r3;
    } };
  }, 536: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeJsonFormat = void 0;
    const r2 = n2(98), o2 = n2(498), a2 = n2(526), s2 = n2(802), i2 = n2(771), l2 = n2(803), u2 = n2(212), c2 = n2(455), m2 = n2(455), p2 = n2(408), d2 = n2(706), f2 = { ignoreUnknownFields: false }, T2 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function g2(e3) {
      return e3 ? Object.assign(Object.assign({}, f2), e3) : f2;
    }
    function E2(e3) {
      return e3 ? Object.assign(Object.assign({}, T2), e3) : T2;
    }
    const y2 = /* @__PURE__ */ Symbol(), h2 = /* @__PURE__ */ Symbol();
    function N2(e3) {
      if (null === e3) return "null";
      switch (typeof e3) {
        case "object":
          return Array.isArray(e3) ? "array" : "object";
        case "string":
          return e3.length > 100 ? "string" : `"${e3.split('"').join('\\"')}"`;
        default:
          return String(e3);
      }
    }
    function _2(e3, t3, n3, o3, a3) {
      let s3 = n3.localName;
      if (n3.repeated) {
        if ((0, r2.assert)("map" != n3.kind), null === t3) return;
        if (!Array.isArray(t3)) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`);
        const i3 = e3[s3];
        for (const e4 of t3) {
          if (null === e4) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(e4)}`);
          switch (n3.kind) {
            case "message":
              i3.push(n3.T.fromJson(e4, o3));
              break;
            case "enum":
              const t4 = w2(n3.T, e4, o3.ignoreUnknownFields, true);
              t4 !== h2 && i3.push(t4);
              break;
            case "scalar":
              try {
                i3.push(S2(n3.T, e4, n3.L, true));
              } catch (t5) {
                let r3 = `cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(e4)}`;
                throw t5 instanceof Error && t5.message.length > 0 && (r3 += `: ${t5.message}`), new Error(r3);
              }
          }
        }
      } else if ("map" == n3.kind) {
        if (null === t3) return;
        if ("object" != typeof t3 || Array.isArray(t3)) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`);
        const r3 = e3[s3];
        for (const [e4, s4] of Object.entries(t3)) {
          if (null === s4) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = I2(n3.K, e4);
          } catch (e5) {
            let r4 = `cannot decode map key for field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (r4 += `: ${e5.message}`), new Error(r4);
          }
          switch (n3.V.kind) {
            case "message":
              r3[i3] = n3.V.T.fromJson(s4, o3);
              break;
            case "enum":
              const e5 = w2(n3.V.T, s4, o3.ignoreUnknownFields, true);
              e5 !== h2 && (r3[i3] = e5);
              break;
            case "scalar":
              try {
                r3[i3] = S2(n3.V.T, s4, p2.LongType.BIGINT, true);
              } catch (e6) {
                let r4 = `cannot decode map value for field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (r4 += `: ${e6.message}`), new Error(r4);
              }
          }
        }
      } else switch (n3.oneof && (e3 = e3[n3.oneof.localName] = { case: s3 }, s3 = "value"), n3.kind) {
        case "message":
          const r3 = n3.T;
          if (null === t3 && "google.protobuf.Value" != r3.typeName) return;
          let i3 = e3[s3];
          (0, d2.isMessage)(i3) ? i3.fromJson(t3, o3) : (e3[s3] = i3 = r3.fromJson(t3, o3), r3.fieldWrapper && !n3.oneof && (e3[s3] = r3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const u3 = w2(n3.T, t3, o3.ignoreUnknownFields, false);
          switch (u3) {
            case y2:
              (0, l2.clearField)(n3, e3);
              break;
            case h2:
              break;
            default:
              e3[s3] = u3;
          }
          break;
        case "scalar":
          try {
            const r4 = S2(n3.T, t3, n3.L, false);
            if (r4 === y2) (0, l2.clearField)(n3, e3);
            else e3[s3] = r4;
          } catch (e4) {
            let r4 = `cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (r4 += `: ${e4.message}`), new Error(r4);
          }
      }
    }
    function I2(e3, t3) {
      if (e3 === p2.ScalarType.BOOL) switch (t3) {
        case "true":
          t3 = true;
          break;
        case "false":
          t3 = false;
      }
      return S2(e3, t3, p2.LongType.BIGINT, true).toString();
    }
    function S2(e3, t3, n3, s3) {
      if (null === t3) return s3 ? (0, c2.scalarZeroValue)(e3, n3) : y2;
      switch (e3) {
        case p2.ScalarType.DOUBLE:
        case p2.ScalarType.FLOAT:
          if ("NaN" === t3) return Number.NaN;
          if ("Infinity" === t3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t3) return Number.NEGATIVE_INFINITY;
          if ("" === t3) break;
          if ("string" == typeof t3 && t3.trim().length !== t3.length) break;
          if ("string" != typeof t3 && "number" != typeof t3) break;
          const s4 = Number(t3);
          if (Number.isNaN(s4)) break;
          if (!Number.isFinite(s4)) break;
          return e3 == p2.ScalarType.FLOAT && (0, r2.assertFloat32)(s4), s4;
        case p2.ScalarType.INT32:
        case p2.ScalarType.FIXED32:
        case p2.ScalarType.SFIXED32:
        case p2.ScalarType.SINT32:
        case p2.ScalarType.UINT32:
          let i3;
          if ("number" == typeof t3 ? i3 = t3 : "string" == typeof t3 && t3.length > 0 && t3.trim().length === t3.length && (i3 = Number(t3)), void 0 === i3) break;
          return e3 == p2.ScalarType.UINT32 || e3 == p2.ScalarType.FIXED32 ? (0, r2.assertUInt32)(i3) : (0, r2.assertInt32)(i3), i3;
        case p2.ScalarType.INT64:
        case p2.ScalarType.SFIXED64:
        case p2.ScalarType.SINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const l3 = o2.protoInt64.parse(t3);
          return n3 ? l3.toString() : l3;
        case p2.ScalarType.FIXED64:
        case p2.ScalarType.UINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const u3 = o2.protoInt64.uParse(t3);
          return n3 ? u3.toString() : u3;
        case p2.ScalarType.BOOL:
          if ("boolean" != typeof t3) break;
          return t3;
        case p2.ScalarType.STRING:
          if ("string" != typeof t3) break;
          try {
            encodeURIComponent(t3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return t3;
        case p2.ScalarType.BYTES:
          if ("" === t3) return new Uint8Array(0);
          if ("string" != typeof t3) break;
          return a2.protoBase64.dec(t3);
      }
      throw new Error();
    }
    function w2(e3, t3, n3, r3) {
      if (null === t3) return "google.protobuf.NullValue" == e3.typeName ? 0 : r3 ? e3.values[0].no : y2;
      switch (typeof t3) {
        case "number":
          if (Number.isInteger(t3)) return t3;
          break;
        case "string":
          const r4 = e3.findName(t3);
          if (void 0 !== r4) return r4.no;
          if (n3) return h2;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${N2(t3)}`);
    }
    function O2(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function b2(e3, t3, n3) {
      if ("map" == e3.kind) {
        (0, r2.assert)("object" == typeof t3 && null != t3);
        const o3 = {}, a3 = Object.entries(t3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [t5, n4] of a3) o3[t5.toString()] = v2(e3.V.T, n4);
            break;
          case "message":
            for (const [e4, t5] of a3) o3[e4.toString()] = t5.toJson(n3);
            break;
          case "enum":
            const t4 = e3.V.T;
            for (const [e4, r3] of a3) o3[e4.toString()] = k2(t4, r3, n3.enumAsInteger);
        }
        return n3.emitDefaultValues || a3.length > 0 ? o3 : void 0;
      }
      if (e3.repeated) {
        (0, r2.assert)(Array.isArray(t3));
        const o3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let n4 = 0; n4 < t3.length; n4++) o3.push(v2(e3.T, t3[n4]));
            break;
          case "enum":
            for (let r3 = 0; r3 < t3.length; r3++) o3.push(k2(e3.T, t3[r3], n3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < t3.length; e4++) o3.push(t3[e4].toJson(n3));
        }
        return n3.emitDefaultValues || o3.length > 0 ? o3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return v2(e3.T, t3);
        case "enum":
          return k2(e3.T, t3, n3.enumAsInteger);
        case "message":
          return (0, u2.wrapField)(e3.T, t3).toJson(n3);
      }
    }
    function k2(e3, t3, n3) {
      var o3;
      if ((0, r2.assert)("number" == typeof t3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (n3) return t3;
      const a3 = e3.findNumber(t3);
      return null !== (o3 = null == a3 ? void 0 : a3.name) && void 0 !== o3 ? o3 : t3;
    }
    function v2(e3, t3) {
      switch (e3) {
        case p2.ScalarType.INT32:
        case p2.ScalarType.SFIXED32:
        case p2.ScalarType.SINT32:
        case p2.ScalarType.FIXED32:
        case p2.ScalarType.UINT32:
          return (0, r2.assert)("number" == typeof t3), t3;
        case p2.ScalarType.FLOAT:
        case p2.ScalarType.DOUBLE:
          return (0, r2.assert)("number" == typeof t3), Number.isNaN(t3) ? "NaN" : t3 === Number.POSITIVE_INFINITY ? "Infinity" : t3 === Number.NEGATIVE_INFINITY ? "-Infinity" : t3;
        case p2.ScalarType.STRING:
          return (0, r2.assert)("string" == typeof t3), t3;
        case p2.ScalarType.BOOL:
          return (0, r2.assert)("boolean" == typeof t3), t3;
        case p2.ScalarType.UINT64:
        case p2.ScalarType.FIXED64:
        case p2.ScalarType.INT64:
        case p2.ScalarType.SFIXED64:
        case p2.ScalarType.SINT64:
          return (0, r2.assert)("bigint" == typeof t3 || "string" == typeof t3 || "number" == typeof t3), t3.toString();
        case p2.ScalarType.BYTES:
          return (0, r2.assert)(t3 instanceof Uint8Array), a2.protoBase64.enc(t3);
      }
    }
    t2.makeJsonFormat = function() {
      return { makeReadOptions: g2, makeWriteOptions: E2, readMessage(e3, t3, n3, r3) {
        if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${N2(t3)}`);
        r3 = null != r3 ? r3 : new e3();
        const o3 = /* @__PURE__ */ new Map(), a3 = n3.typeRegistry;
        for (const [l3, u3] of Object.entries(t3)) {
          const t4 = e3.fields.findJsonName(l3);
          if (t4) {
            if (t4.oneof) {
              if (null === u3 && "scalar" == t4.kind) continue;
              const n4 = o3.get(t4.oneof);
              if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${n4}", "${l3}"`);
              o3.set(t4.oneof, l3);
            }
            _2(r3, u3, t4, n3, e3);
          } else {
            let t5 = false;
            if ((null == a3 ? void 0 : a3.findExtension) && l3.startsWith("[") && l3.endsWith("]")) {
              const o4 = a3.findExtension(l3.substring(1, l3.length - 1));
              if (o4 && o4.extendee.typeName == e3.typeName) {
                t5 = true;
                const [e4, a4] = (0, s2.createExtensionContainer)(o4);
                _2(e4, u3, o4.field, n3, o4), (0, i2.setExtension)(r3, o4, a4(), n3);
              }
            }
            if (!t5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${l3}" is unknown`);
          }
        }
        return r3;
      }, writeMessage(e3, t3) {
        const n3 = e3.getType(), r3 = {};
        let o3;
        try {
          for (o3 of n3.fields.byNumber()) {
            if (!(0, l2.isFieldSet)(o3, e3)) {
              if (o3.req) throw "required field not set";
              if (!t3.emitDefaultValues) continue;
              if (!O2(o3)) continue;
            }
            const n4 = b2(o3, o3.oneof ? e3[o3.oneof.localName].value : e3[o3.localName], t3);
            void 0 !== n4 && (r3[t3.useProtoFieldName ? o3.name : o3.jsonName] = n4);
          }
          const a3 = t3.typeRegistry;
          if (null == a3 ? void 0 : a3.findExtensionFor) for (const o4 of n3.runtime.bin.listUnknownFields(e3)) {
            const s3 = a3.findExtensionFor(n3.typeName, o4.no);
            if (s3 && (0, i2.hasExtension)(e3, s3)) {
              const n4 = (0, i2.getExtension)(e3, s3, t3), o5 = b2(s3.field, n4, t3);
              void 0 !== o5 && (r3[s3.field.jsonName] = o5);
            }
          }
        } catch (e4) {
          const t4 = o3 ? `cannot encode field ${n3.typeName}.${o3.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, r4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(t4 + (r4.length > 0 ? `: ${r4}` : ""));
        }
        return r3;
      }, readScalar: (e3, t3, n3) => S2(e3, t3, null != n3 ? n3 : p2.LongType.BIGINT, true), writeScalar(e3, t3, n3) {
        if (void 0 !== t3) return n3 || (0, m2.isScalarZeroValue)(e3, t3) ? v2(e3, t3) : void 0;
      }, debug: N2 };
    };
  }, 574: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Duration = void 0;
    const r2 = n2(193), o2 = n2(498), a2 = n2(599);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, a2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        const r3 = Number(n3[1]);
        if (r3 > 315576e6 || r3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        if (this.seconds = o2.protoInt64.parse(r3), "string" == typeof n3[2]) {
          const e4 = n3[2] + "0".repeat(9 - n3[2].length);
          this.nanos = parseInt(e4), (r3 < 0 || Object.is(r3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e3) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let t3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e4 = Math.abs(this.nanos).toString();
          e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), t3 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (t3 = "-" + t3);
        }
        return t3 + "s";
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return a2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.Duration = s2, s2.runtime = a2.proto3, s2.typeName = "google.protobuf.Duration", s2.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }, 596: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.codegenInfo = void 0;
    const r2 = n2(822), o2 = n2(212), a2 = n2(455), s2 = n2(924), i2 = "@bufbuild/protobuf";
    t2.codegenInfo = { packageName: "@bufbuild/protobuf", localName: r2.localName, reifyWkt: s2.reifyWkt, getUnwrappedFieldType: o2.getUnwrappedFieldType, scalarDefaultValue: a2.scalarZeroValue, scalarZeroValue: a2.scalarZeroValue, safeIdentifier: r2.safeIdentifier, safeObjectProperty: r2.safeObjectProperty, symbols: { proto2: { typeOnly: false, privateImportPath: "./proto2.js", publicImportPath: i2 }, proto3: { typeOnly: false, privateImportPath: "./proto3.js", publicImportPath: i2 }, Message: { typeOnly: false, privateImportPath: "./message.js", publicImportPath: i2 }, PartialMessage: { typeOnly: true, privateImportPath: "./message.js", publicImportPath: i2 }, PlainMessage: { typeOnly: true, privateImportPath: "./message.js", publicImportPath: i2 }, FieldList: { typeOnly: true, privateImportPath: "./field-list.js", publicImportPath: i2 }, MessageType: { typeOnly: true, privateImportPath: "./message-type.js", publicImportPath: i2 }, Extension: { typeOnly: true, privateImportPath: "./extension.js", publicImportPath: i2 }, BinaryReadOptions: { typeOnly: true, privateImportPath: "./binary-format.js", publicImportPath: i2 }, BinaryWriteOptions: { typeOnly: true, privateImportPath: "./binary-format.js", publicImportPath: i2 }, JsonReadOptions: { typeOnly: true, privateImportPath: "./json-format.js", publicImportPath: i2 }, JsonWriteOptions: { typeOnly: true, privateImportPath: "./json-format.js", publicImportPath: i2 }, JsonValue: { typeOnly: true, privateImportPath: "./json-format.js", publicImportPath: i2 }, JsonObject: { typeOnly: true, privateImportPath: "./json-format.js", publicImportPath: i2 }, protoDouble: { typeOnly: false, privateImportPath: "./proto-double.js", publicImportPath: i2 }, protoInt64: { typeOnly: false, privateImportPath: "./proto-int64.js", publicImportPath: i2 }, ScalarType: { typeOnly: false, privateImportPath: "./scalar.js", publicImportPath: i2 }, LongType: { typeOnly: false, privateImportPath: "./scalar.js", publicImportPath: i2 }, MethodKind: { typeOnly: false, privateImportPath: "./service-type.js", publicImportPath: i2 }, MethodIdempotency: { typeOnly: false, privateImportPath: "./service-type.js", publicImportPath: i2 }, IMessageTypeRegistry: { typeOnly: true, privateImportPath: "./type-registry.js", publicImportPath: i2 } }, wktSourceFiles: ["google/protobuf/compiler/plugin.proto", "google/protobuf/any.proto", "google/protobuf/api.proto", "google/protobuf/descriptor.proto", "google/protobuf/duration.proto", "google/protobuf/empty.proto", "google/protobuf/field_mask.proto", "google/protobuf/source_context.proto", "google/protobuf/struct.proto", "google/protobuf/timestamp.proto", "google/protobuf/type.proto", "google/protobuf/wrappers.proto"] };
  }, 599: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto3 = void 0;
    const r2 = n2(829), o2 = n2(331), a2 = n2(455), s2 = n2(228);
    t2.proto3 = (0, r2.makeProtoRuntime)("proto3", (e3) => new o2.InternalFieldList(e3, (e4) => (0, s2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        if (t3.opt) continue;
        const n3 = t3.localName, r3 = e3;
        if (t3.repeated) r3[n3] = [];
        else switch (t3.kind) {
          case "oneof":
            r3[n3] = { case: void 0 };
            break;
          case "enum":
            r3[n3] = 0;
            break;
          case "map":
            r3[n3] = {};
            break;
          case "scalar":
            r3[n3] = (0, a2.scalarZeroValue)(t3.T, t3.L);
        }
      }
    });
  }, 609: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeEnum = t2.makeEnumType = t2.setEnumType = t2.getEnumType = void 0;
    const r2 = n2(98), o2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function a2(e3, t3, n3, r3) {
      e3[o2] = s2(t3, n3.map((t4) => ({ no: t4.no, name: t4.name, localName: e3[t4.no] })), r3);
    }
    function s2(e3, t3, n3) {
      const r3 = /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ Object.create(null), a3 = [];
      for (const e4 of t3) {
        const t4 = i2(e4);
        a3.push(t4), r3[e4.name] = t4, o3[e4.no] = t4;
      }
      return { typeName: e3, values: a3, findName: (e4) => r3[e4], findNumber: (e4) => o3[e4] };
    }
    function i2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    t2.getEnumType = function(e3) {
      const t3 = e3[o2];
      return (0, r2.assert)(t3, "missing enum type on enum object"), t3;
    }, t2.setEnumType = a2, t2.makeEnumType = s2, t2.makeEnum = function(e3, t3, n3) {
      const r3 = {};
      for (const e4 of t3) {
        const t4 = i2(e4);
        r3[t4.localName] = t4.no, r3[t4.no] = t4.localName;
      }
      return a2(r3, e3, t3, n3), r3;
    };
  }, 636: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CodeGeneratorResponse_File = t2.CodeGeneratorResponse_Feature = t2.CodeGeneratorResponse = t2.CodeGeneratorRequest = t2.Version = void 0;
    const r2 = n2(193), o2 = n2(291), a2 = n2(374);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(s2, e3, t3);
      }
    }
    t2.Version = s2, s2.runtime = o2.proto2, s2.typeName = "google.protobuf.compiler.Version", s2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i2 extends r2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o2.proto2.util.initPartial(e3, this);
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
        return o2.proto2.util.equals(i2, e3, t3);
      }
    }
    t2.CodeGeneratorRequest = i2, i2.runtime = o2.proto2, i2.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: a2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: a2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: s2, opt: true }]);
    class l2 extends r2.Message {
      constructor(e3) {
        super(), this.file = [], o2.proto2.util.initPartial(e3, this);
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
        return o2.proto2.util.equals(l2, e3, t3);
      }
    }
    var u2;
    t2.CodeGeneratorResponse = l2, l2.runtime = o2.proto2, l2.typeName = "google.protobuf.compiler.CodeGeneratorResponse", l2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: c2, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(u2 || (t2.CodeGeneratorResponse_Feature = u2 = {})), o2.proto2.util.setEnumType(u2, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class c2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
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
        return o2.proto2.util.equals(c2, e3, t3);
      }
    }
    t2.CodeGeneratorResponse_File = c2, c2.runtime = o2.proto2, c2.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", c2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: a2.GeneratedCodeInfo, opt: true }]);
  }, 638: function(e2, t2, n2) {
    var r2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, n3 = e3[Symbol.asyncIterator];
      return n3 ? n3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, r3("next"), r3("throw"), r3("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function r3(n4) {
        t3[n4] = e3[n4] && function(t4) {
          return new Promise(function(r4, o3) {
            (function(e4, t5, n5, r5) {
              Promise.resolve(r5).then(function(t6) {
                e4({ value: t6, done: n5 });
              }, t5);
            })(r4, o3, (t4 = e3[n4](t4)).done, t4.value);
          });
        };
      }
    }, o2 = this && this.__await || function(e3) {
      return this instanceof o2 ? (this.v = e3, this) : new o2(e3);
    }, a2 = this && this.__asyncGenerator || function(e3, t3, n3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r3, a3 = n3.apply(e3, t3 || []), s3 = [];
      return r3 = {}, i2("next"), i2("throw"), i2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, c2);
        };
      }), r3[Symbol.asyncIterator] = function() {
        return this;
      }, r3;
      function i2(e4, t4) {
        a3[e4] && (r3[e4] = function(t5) {
          return new Promise(function(n4, r4) {
            s3.push([e4, t5, n4, r4]) > 1 || l2(e4, t5);
          });
        }, t4 && (r3[e4] = t4(r3[e4])));
      }
      function l2(e4, t4) {
        try {
          (n4 = a3[e4](t4)).value instanceof o2 ? Promise.resolve(n4.value.v).then(u2, c2) : m2(s3[0][2], n4);
        } catch (e5) {
          m2(s3[0][3], e5);
        }
        var n4;
      }
      function u2(e4) {
        l2("next", e4);
      }
      function c2(e4) {
        l2("throw", e4);
      }
      function m2(e4, t4) {
        e4(t4), s3.shift(), s3.length && l2(s3[0][0], s3[0][1]);
      }
    };
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoDelimited = void 0;
    const s2 = n2(831);
    t2.protoDelimited = { enc(e3, t3) {
      const n3 = e3.getType().runtime.bin.makeWriteOptions(t3);
      return n3.writerFactory().bytes(e3.toBinary(n3)).finish();
    }, dec(e3, t3, n3) {
      const r3 = e3.runtime.bin.makeReadOptions(n3);
      return e3.fromBinary(r3.readerFactory(t3).bytes(), r3);
    }, decStream(e3, n3) {
      return a2(this, arguments, function* () {
        var a3, s3, i2, l2;
        function u2(e4, t3) {
          const n4 = new Uint8Array(e4.byteLength + t3.byteLength);
          return n4.set(e4), n4.set(t3, e4.length), n4;
        }
        let c2 = new Uint8Array(0);
        try {
          for (var m2, p2 = true, d2 = r2(n3); !(a3 = (m2 = yield o2(d2.next())).done); p2 = true) {
            l2 = m2.value, p2 = false;
            for (c2 = u2(c2, l2); ; ) {
              const n4 = t2.protoDelimited.peekSize(c2);
              if (n4.eof) break;
              if (n4.offset + n4.size > c2.byteLength) break;
              yield yield o2(t2.protoDelimited.dec(e3, c2)), c2 = c2.subarray(n4.offset + n4.size);
            }
          }
        } catch (e4) {
          s3 = { error: e4 };
        } finally {
          try {
            p2 || a3 || !(i2 = d2.return) || (yield o2(i2.call(d2)));
          } finally {
            if (s3) throw s3.error;
          }
        }
        if (c2.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const t3 = { eof: true, size: null, offset: null };
      for (let n3 = 0; n3 < 10; n3++) {
        if (n3 > e3.byteLength) return t3;
        if (!(128 & e3[n3])) {
          const n4 = new s2.BinaryReader(e3);
          let r3;
          try {
            r3 = n4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return t3;
            throw e4;
          }
          return { eof: false, size: r3, offset: n4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }, 663: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.parseTextFormatScalarValue = t2.parseTextFormatEnumValue = void 0;
    const r2 = n2(98), o2 = n2(498), a2 = n2(408);
    t2.parseTextFormatEnumValue = function(e3, t3) {
      const n3 = e3.values.find((e4) => e4.name === t3);
      return (0, r2.assert)(n3, `cannot parse ${e3.name} default value: ${t3}`), n3.number;
    }, t2.parseTextFormatScalarValue = function(e3, t3) {
      switch (e3) {
        case a2.ScalarType.STRING:
          return t3;
        case a2.ScalarType.BYTES: {
          const n3 = (function(e4) {
            const t4 = [], n4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const t5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), t5;
              }
              return false;
            } };
            for (; n4.next(); ) if ("\\" === n4.c) {
              if (n4.next()) switch (n4.c) {
                case "\\":
                  t4.push(n4.c.charCodeAt(0));
                  break;
                case "b":
                  t4.push(8);
                  break;
                case "f":
                  t4.push(12);
                  break;
                case "n":
                  t4.push(10);
                  break;
                case "r":
                  t4.push(13);
                  break;
                case "t":
                  t4.push(9);
                  break;
                case "v":
                  t4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e5 = n4.c, r3 = n4.take(2);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 8);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "x": {
                  const e5 = n4.c, r3 = n4.take(2);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 16);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "u": {
                  const e5 = n4.c, r3 = n4.take(4);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 16);
                  if (isNaN(o3)) return false;
                  const a3 = new Uint8Array(4);
                  new DataView(a3.buffer).setInt32(0, o3, true), t4.push(a3[0], a3[1], a3[2], a3[3]);
                  break;
                }
                case "U": {
                  const e5 = n4.c, r3 = n4.take(8);
                  if (false === r3) return false;
                  const a3 = o2.protoInt64.uEnc(e5 + r3), s2 = new Uint8Array(8), i2 = new DataView(s2.buffer);
                  i2.setInt32(0, a3.lo, true), i2.setInt32(4, a3.hi, true), t4.push(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5], s2[6], s2[7]);
                  break;
                }
              }
            } else t4.push(n4.c.charCodeAt(0));
            return new Uint8Array(t4);
          })(t3);
          if (false === n3) throw new Error(`cannot parse ${a2.ScalarType[e3]} default value: ${t3}`);
          return n3;
        }
        case a2.ScalarType.INT64:
        case a2.ScalarType.SFIXED64:
        case a2.ScalarType.SINT64:
          return o2.protoInt64.parse(t3);
        case a2.ScalarType.UINT64:
        case a2.ScalarType.FIXED64:
          return o2.protoInt64.uParse(t3);
        case a2.ScalarType.DOUBLE:
        case a2.ScalarType.FLOAT:
          switch (t3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(t3);
          }
        case a2.ScalarType.BOOL:
          return "true" === t3;
        case a2.ScalarType.INT32:
        case a2.ScalarType.UINT32:
        case a2.ScalarType.SINT32:
        case a2.ScalarType.FIXED32:
        case a2.ScalarType.SFIXED32:
          return parseInt(t3, 10);
      }
    };
  }, 668: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Empty = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto3.util.initPartial(e3, this);
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
    t2.Empty = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.Empty", a2.fields = o2.proto3.util.newFieldList(() => []);
  }, 672: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeUtilCommon = void 0;
    const r2 = n2(609), o2 = n2(455), a2 = n2(408), s2 = n2(706);
    function i2(e3) {
      if (void 0 === e3) return e3;
      if ((0, s2.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    function l2(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    t2.makeUtilCommon = function() {
      return { setEnumType: r2.setEnumType, initPartial(e3, t3) {
        if (void 0 === e3) return;
        const n3 = t3.getType();
        for (const r3 of n3.fields.byMember()) {
          const n4 = r3.localName, o3 = t3, i3 = e3;
          if (null != i3[n4]) switch (r3.kind) {
            case "oneof":
              const e4 = i3[n4].case;
              if (void 0 === e4) continue;
              const t4 = r3.findField(e4);
              let u2 = i3[n4].value;
              t4 && "message" == t4.kind && !(0, s2.isMessage)(u2, t4.T) ? u2 = new t4.T(u2) : t4 && "scalar" === t4.kind && t4.T === a2.ScalarType.BYTES && (u2 = l2(u2)), o3[n4] = { case: e4, value: u2 };
              break;
            case "scalar":
            case "enum":
              let c2 = i3[n4];
              r3.T === a2.ScalarType.BYTES && (c2 = r3.repeated ? c2.map(l2) : l2(c2)), o3[n4] = c2;
              break;
            case "map":
              switch (r3.V.kind) {
                case "scalar":
                case "enum":
                  if (r3.V.T === a2.ScalarType.BYTES) for (const [e6, t5] of Object.entries(i3[n4])) o3[n4][e6] = l2(t5);
                  else Object.assign(o3[n4], i3[n4]);
                  break;
                case "message":
                  const e5 = r3.V.T;
                  for (const t5 of Object.keys(i3[n4])) {
                    let r4 = i3[n4][t5];
                    e5.fieldWrapper || (r4 = new e5(r4)), o3[n4][t5] = r4;
                  }
              }
              break;
            case "message":
              const m2 = r3.T;
              if (r3.repeated) o3[n4] = i3[n4].map((e5) => (0, s2.isMessage)(e5, m2) ? e5 : new m2(e5));
              else {
                const e5 = i3[n4];
                m2.fieldWrapper ? "google.protobuf.BytesValue" === m2.typeName ? o3[n4] = l2(e5) : o3[n4] = e5 : o3[n4] = (0, s2.isMessage)(e5, m2) ? e5 : new m2(e5);
              }
          }
        }
      }, equals: (e3, t3, n3) => t3 === n3 || !(!t3 || !n3) && e3.fields.byMember().every((e4) => {
        const r3 = t3[e4.localName], s3 = n3[e4.localName];
        if (e4.repeated) {
          if (r3.length !== s3.length) return false;
          switch (e4.kind) {
            case "message":
              return r3.every((t4, n4) => e4.T.equals(t4, s3[n4]));
            case "scalar":
              return r3.every((t4, n4) => (0, o2.scalarEquals)(e4.T, t4, s3[n4]));
            case "enum":
              return r3.every((e5, t4) => (0, o2.scalarEquals)(a2.ScalarType.INT32, e5, s3[t4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(r3, s3);
          case "enum":
            return (0, o2.scalarEquals)(a2.ScalarType.INT32, r3, s3);
          case "scalar":
            return (0, o2.scalarEquals)(e4.T, r3, s3);
          case "oneof":
            if (r3.case !== s3.case) return false;
            const t4 = e4.findField(r3.case);
            if (void 0 === t4) return true;
            switch (t4.kind) {
              case "message":
                return t4.T.equals(r3.value, s3.value);
              case "enum":
                return (0, o2.scalarEquals)(a2.ScalarType.INT32, r3.value, s3.value);
              case "scalar":
                return (0, o2.scalarEquals)(t4.T, r3.value, s3.value);
            }
            throw new Error(`oneof cannot contain ${t4.kind}`);
          case "map":
            const n4 = Object.keys(r3).concat(Object.keys(s3));
            switch (e4.V.kind) {
              case "message":
                const t5 = e4.V.T;
                return n4.every((e5) => t5.equals(r3[e5], s3[e5]));
              case "enum":
                return n4.every((e5) => (0, o2.scalarEquals)(a2.ScalarType.INT32, r3[e5], s3[e5]));
              case "scalar":
                const i3 = e4.V.T;
                return n4.every((e5) => (0, o2.scalarEquals)(i3, r3[e5], s3[e5]));
            }
        }
      }), clone(e3) {
        const t3 = e3.getType(), n3 = new t3(), r3 = n3;
        for (const n4 of t3.fields.byMember()) {
          const t4 = e3[n4.localName];
          let o3;
          if (n4.repeated) o3 = t4.map(i2);
          else if ("map" == n4.kind) {
            o3 = r3[n4.localName];
            for (const [e4, n5] of Object.entries(t4)) o3[e4] = i2(n5);
          } else if ("oneof" == n4.kind) {
            o3 = n4.findField(t4.case) ? { case: t4.case, value: i2(t4.value) } : { case: void 0 };
          } else o3 = i2(t4);
          r3[n4.localName] = o3;
        }
        for (const n4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(r3, n4.no, n4.wireType, n4.data);
        return n3;
      } };
    };
  }, 682: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeMessageType = void 0;
    const r2 = n2(193);
    t2.makeMessageType = function(e3, t3, n3, o2) {
      var a2;
      const s2 = null !== (a2 = null == o2 ? void 0 : o2.localName) && void 0 !== a2 ? a2 : t3.substring(t3.lastIndexOf(".") + 1), i2 = { [s2]: function(t4) {
        e3.util.initFields(this), e3.util.initPartial(t4, this);
      } }[s2];
      return Object.setPrototypeOf(i2.prototype, new r2.Message()), Object.assign(i2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(n3), fromBinary: (e4, t4) => new i2().fromBinary(e4, t4), fromJson: (e4, t4) => new i2().fromJson(e4, t4), fromJsonString: (e4, t4) => new i2().fromJsonString(e4, t4), equals: (t4, n4) => e3.util.equals(i2, t4, n4) }), i2;
    };
  }, 706: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isMessage = void 0;
    const r2 = n2(193);
    t2.isMessage = function(e3, t3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(r2.Message.prototype).every((t4) => t4 in e3 && "function" == typeof e3[t4])) return false;
      const n3 = e3.getType();
      return null !== n3 && "function" == typeof n3 && "typeName" in n3 && "string" == typeof n3.typeName && (void 0 === t3 || n3.typeName == t3.typeName);
    };
  }, 771: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.hasExtension = t2.clearExtension = t2.setExtension = t2.getExtension = void 0;
    const r2 = n2(98), o2 = n2(802);
    function a2(e3, t3) {
      const n3 = e3.getType();
      return t3.extendee.typeName === n3.typeName && !!n3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == t3.field.no);
    }
    function s2(e3, t3) {
      (0, r2.assert)(e3.extendee.typeName == t3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    t2.getExtension = function(e3, t3, n3) {
      s2(t3, e3);
      const r3 = t3.runtime.bin.makeReadOptions(n3), a3 = (0, o2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), t3.field), [i2, l2] = (0, o2.createExtensionContainer)(t3);
      for (const e4 of a3) t3.runtime.bin.readField(i2, r3.readerFactory(e4.data), t3.field, e4.wireType, r3);
      return l2();
    }, t2.setExtension = function(e3, t3, n3, r3) {
      s2(t3, e3);
      const o3 = t3.runtime.bin.makeReadOptions(r3), i2 = t3.runtime.bin.makeWriteOptions(r3);
      if (a2(e3, t3)) {
        const n4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const t4 of n4) e3.getType().runtime.bin.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
      const l2 = i2.writerFactory();
      let u2 = t3.field;
      u2.opt || u2.repeated || "enum" != u2.kind && "scalar" != u2.kind || (u2 = Object.assign(Object.assign({}, t3.field), { opt: true })), t3.runtime.bin.writeField(u2, n3, l2, i2);
      const c2 = o3.readerFactory(l2.finish());
      for (; c2.pos < c2.len; ) {
        const [t4, n4] = c2.tag(), r4 = c2.skip(n4, t4);
        e3.getType().runtime.bin.onUnknownField(e3, t4, n4, r4);
      }
    }, t2.clearExtension = function(e3, t3) {
      if (s2(t3, e3), a2(e3, t3)) {
        const n3 = e3.getType().runtime.bin, r3 = n3.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        n3.discardUnknownFields(e3);
        for (const t4 of r3) n3.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
    }, t2.hasExtension = a2;
  }, 802: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.filterUnknownFields = t2.createExtensionContainer = t2.makeExtension = void 0;
    const r2 = n2(455);
    t2.makeExtension = function(e3, t3, n3, r3) {
      let o2;
      return { typeName: t3, extendee: n3, get field() {
        if (!o2) {
          const n4 = "function" == typeof r3 ? r3() : r3;
          n4.name = t3.split(".").pop(), n4.jsonName = `[${t3}]`, o2 = e3.util.newFieldList([n4]).list()[0];
        }
        return o2;
      }, runtime: e3 };
    }, t2.createExtensionContainer = function(e3) {
      const t3 = e3.field.localName, n3 = /* @__PURE__ */ Object.create(null);
      return n3[t3] = (function(e4) {
        const t4 = e4.field;
        if (t4.repeated) return [];
        if (void 0 !== t4.default) return t4.default;
        switch (t4.kind) {
          case "enum":
            return t4.T.values[0].no;
          case "scalar":
            return (0, r2.scalarZeroValue)(t4.T, t4.L);
          case "message":
            const e5 = t4.T, n4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(n4) : n4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [n3, () => n3[t3]];
    }, t2.filterUnknownFields = function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    };
  }, 803: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.clearField = t2.isFieldSet = void 0;
    const r2 = n2(455);
    t2.isFieldSet = function(e3, t3) {
      const n3 = e3.localName;
      if (e3.repeated) return t3[n3].length > 0;
      if (e3.oneof) return t3[e3.oneof.localName].case === n3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== t3[n3] : "enum" == e3.kind ? t3[n3] !== e3.T.values[0].no : !(0, r2.isScalarZeroValue)(e3.T, t3[n3]);
        case "message":
          return void 0 !== t3[n3];
        case "map":
          return Object.keys(t3[n3]).length > 0;
      }
    }, t2.clearField = function(e3, t3) {
      const n3 = e3.localName, o2 = !e3.opt && !e3.req;
      if (e3.repeated) t3[n3] = [];
      else if (e3.oneof) t3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          t3[n3] = {};
          break;
        case "enum":
          t3[n3] = o2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          t3[n3] = o2 ? (0, r2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          t3[n3] = void 0;
      }
    };
  }, 814: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ListValue = t2.Value = t2.Struct = t2.NullValue = void 0;
    const r2 = n2(599), o2 = n2(193);
    var a2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(a2 || (t2.NullValue = a2 = {})), r2.proto3.util.setEnumType(a2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class s2 extends o2.Message {
      constructor(e3) {
        super(), this.fields = {}, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const t3 = {};
        for (const [n3, r3] of Object.entries(this.fields)) t3[n3] = r3.toJson(e3);
        return t3;
      }
      fromJson(e3, t3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + r2.proto3.json.debug(e3));
        for (const [t4, n3] of Object.entries(e3)) this.fields[t4] = i2.fromJson(n3);
        return this;
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.Struct = s2, s2.runtime = r2.proto3, s2.typeName = "google.protobuf.Struct", s2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i2 } }]);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        switch (this.kind.case) {
          case "nullValue":
            return null;
          case "numberValue":
            if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
            return this.kind.value;
          case "boolValue":
          case "stringValue":
            return this.kind.value;
          case "structValue":
          case "listValue":
            return this.kind.value.toJson(Object.assign(Object.assign({}, e3), { emitDefaultValues: true }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e3, t3) {
        switch (typeof e3) {
          case "number":
            this.kind = { case: "numberValue", value: e3 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e3 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e3 };
            break;
          case "object":
            null === e3 ? this.kind = { case: "nullValue", value: a2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: l2.fromJson(e3) } : this.kind = { case: "structValue", value: s2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + r2.proto3.json.debug(e3));
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
        return r2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Value = i2, i2.runtime = r2.proto3, i2.typeName = "google.protobuf.Value", i2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: r2.proto3.getEnumType(a2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: s2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: l2, oneof: "kind" }]);
    class l2 extends o2.Message {
      constructor(e3) {
        super(), this.values = [], r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, t3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + r2.proto3.json.debug(e3));
        for (let t4 of e3) this.values.push(i2.fromJson(t4));
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
        return r2.proto3.util.equals(l2, e3, t3);
      }
    }
    t2.ListValue = l2, l2.runtime = r2.proto3, l2.typeName = "google.protobuf.ListValue", l2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i2, repeated: true }]);
  }, 822: (e2, t2) => {
    function n2(e3, n3) {
      const r3 = o2(e3);
      return n3 ? r3 : (0, t2.safeObjectProperty)(u2(r3));
    }
    function r2(e3) {
      return n2(e3, false);
    }
    function o2(e3) {
      let t3 = false;
      const n3 = [];
      for (let r3 = 0; r3 < e3.length; r3++) {
        let o3 = e3.charAt(r3);
        switch (o3) {
          case "_":
            t3 = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            n3.push(o3), t3 = false;
            break;
          default:
            t3 && (t3 = false, o3 = o3.toUpperCase()), n3.push(o3);
        }
      }
      return n3.join("");
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.safeIdentifier = t2.safeObjectProperty = t2.findEnumSharedPrefix = t2.fieldJsonName = t2.localOneofName = t2.localFieldName = t2.localName = void 0, t2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return n2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return r2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const n3 = e3.file.proto.package, r3 = void 0 === n3 ? 0 : n3.length + 1, o3 = e3.typeName.substring(r3).replace(/\./g, "_");
          return (0, t2.safeObjectProperty)((0, t2.safeIdentifier)(o3));
        }
        case "enum_value": {
          let n3 = e3.name;
          const r3 = e3.parent.sharedPrefix;
          return void 0 !== r3 && (n3 = n3.substring(r3.length)), (0, t2.safeObjectProperty)(n3);
        }
        case "rpc": {
          let n3 = e3.name;
          return 0 == n3.length ? n3 : (n3 = n3[0].toLowerCase() + n3.substring(1), (0, t2.safeObjectProperty)(n3));
        }
      }
    }, t2.localFieldName = n2, t2.localOneofName = r2, t2.fieldJsonName = o2, t2.findEnumSharedPrefix = function(e3, t3) {
      const n3 = ((r3 = e3).substring(0, 1) + r3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var r3;
      for (const e4 of t3) {
        if (!e4.toLowerCase().startsWith(n3)) return;
        const t4 = e4.substring(n3.length);
        if (0 == t4.length) return;
        if (/^\d/.test(t4)) return;
      }
      return n3;
    };
    const a2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), s2 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i2 = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), l2 = (e3) => `${e3}$`, u2 = (e3) => i2.has(e3) ? l2(e3) : e3;
    t2.safeObjectProperty = (e3) => s2.has(e3) ? l2(e3) : e3;
    t2.safeIdentifier = (e3) => a2.has(e3) ? l2(e3) : e3;
  }, 829: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeProtoRuntime = void 0;
    const r2 = n2(609), o2 = n2(682), a2 = n2(802), s2 = n2(536), i2 = n2(141), l2 = n2(672);
    t2.makeProtoRuntime = function(e3, t3, n3) {
      return { syntax: e3, json: (0, s2.makeJsonFormat)(), bin: (0, i2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, l2.makeUtilCommon)()), { newFieldList: t3, initFields: n3 }), makeMessageType(e4, t4, n4) {
        return (0, o2.makeMessageType)(this, e4, t4, n4);
      }, makeEnum: r2.makeEnum, makeEnumType: r2.makeEnumType, getEnumType: r2.getEnumType, makeExtension(e4, t4, n4) {
        return (0, a2.makeExtension)(this, e4, t4, n4);
      } };
    };
  }, 831: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BinaryReader = t2.BinaryWriter = t2.WireType = void 0;
    const r2 = n2(84), o2 = n2(98), a2 = n2(498);
    var s2;
    !(function(e3) {
      e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32";
    })(s2 || (t2.WireType = s2 = {}));
    t2.BinaryWriter = class {
      constructor(e3) {
        this.stack = [], this.textEncoder = null != e3 ? e3 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3 += this.chunks[t4].length;
        let t3 = new Uint8Array(e3), n3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3.set(this.chunks[e4], n3), n3 += this.chunks[e4].length;
        return this.chunks = [], t3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), t3 = this.stack.pop();
        if (!t3) throw new Error("invalid state, fork stack empty");
        return this.chunks = t3.chunks, this.buf = t3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, t3) {
        return this.uint32((e3 << 3 | t3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for ((0, o2.assertUInt32)(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return (0, o2.assertInt32)(e3), (0, r2.varint32write)(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let t3 = this.textEncoder.encode(e3);
        return this.uint32(t3.byteLength), this.raw(t3);
      }
      float(e3) {
        (0, o2.assertFloat32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setFloat32(0, e3, true), this.raw(t3);
      }
      double(e3) {
        let t3 = new Uint8Array(8);
        return new DataView(t3.buffer).setFloat64(0, e3, true), this.raw(t3);
      }
      fixed32(e3) {
        (0, o2.assertUInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setUint32(0, e3, true), this.raw(t3);
      }
      sfixed32(e3) {
        (0, o2.assertInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setInt32(0, e3, true), this.raw(t3);
      }
      sint32(e3) {
        return (0, o2.assertInt32)(e3), e3 = (e3 << 1 ^ e3 >> 31) >>> 0, (0, r2.varint32write)(e3, this.buf), this;
      }
      sfixed64(e3) {
        let t3 = new Uint8Array(8), n3 = new DataView(t3.buffer), r3 = a2.protoInt64.enc(e3);
        return n3.setInt32(0, r3.lo, true), n3.setInt32(4, r3.hi, true), this.raw(t3);
      }
      fixed64(e3) {
        let t3 = new Uint8Array(8), n3 = new DataView(t3.buffer), r3 = a2.protoInt64.uEnc(e3);
        return n3.setInt32(0, r3.lo, true), n3.setInt32(4, r3.hi, true), this.raw(t3);
      }
      int64(e3) {
        let t3 = a2.protoInt64.enc(e3);
        return (0, r2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
      sint64(e3) {
        let t3 = a2.protoInt64.enc(e3), n3 = t3.hi >> 31, o3 = t3.lo << 1 ^ n3, s3 = (t3.hi << 1 | t3.lo >>> 31) ^ n3;
        return (0, r2.varint64write)(o3, s3, this.buf), this;
      }
      uint64(e3) {
        let t3 = a2.protoInt64.uEnc(e3);
        return (0, r2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
    };
    t2.BinaryReader = class {
      constructor(e3, t3) {
        this.varint64 = r2.varint64read, this.uint32 = r2.varint32read, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = null != t3 ? t3 : new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), t3 = e3 >>> 3, n3 = 7 & e3;
        if (t3 <= 0 || n3 < 0 || n3 > 5) throw new Error("illegal tag: field no " + t3 + " wire type " + n3);
        return [t3, n3];
      }
      skip(e3, t3) {
        let n3 = this.pos;
        switch (e3) {
          case s2.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case s2.Bit64:
            this.pos += 4;
          case s2.Bit32:
            this.pos += 4;
            break;
          case s2.LengthDelimited:
            let n4 = this.uint32();
            this.pos += n4;
            break;
          case s2.StartGroup:
            for (; ; ) {
              const [e4, n5] = this.tag();
              if (n5 === s2.EndGroup) {
                if (void 0 !== t3 && e4 !== t3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(n5, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(n3, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e3 = this.uint32();
        return e3 >>> 1 ^ -(1 & e3);
      }
      int64() {
        return a2.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return a2.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [e3, t3] = this.varint64(), n3 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & t3) << 31) ^ n3, t3 = t3 >>> 1 ^ n3, a2.protoInt64.dec(e3, t3);
      }
      bool() {
        let [e3, t3] = this.varint64();
        return 0 !== e3 || 0 !== t3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return a2.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return a2.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e3 = this.uint32(), t3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(t3, t3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }, 907: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Timestamp = void 0;
    const r2 = n2(193), o2 = n2(498), a2 = n2(599);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, a2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${a2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!n3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const r3 = Date.parse(n3[1] + "-" + n3[2] + "-" + n3[3] + "T" + n3[4] + ":" + n3[5] + ":" + n3[6] + (n3[8] ? n3[8] : "Z"));
        if (Number.isNaN(r3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (r3 < Date.parse("0001-01-01T00:00:00Z") || r3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = o2.protoInt64.parse(r3 / 1e3), this.nanos = 0, n3[7] && (this.nanos = parseInt("1" + n3[7] + "0".repeat(9 - n3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const t3 = 1e3 * Number(this.seconds);
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let n3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          n3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(t3).toISOString().replace(".000Z", n3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return s2.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const t3 = e3.getTime();
        return new s2({ seconds: o2.protoInt64.parse(Math.floor(t3 / 1e3)), nanos: t3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return a2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.Timestamp = s2, s2.runtime = a2.proto3, s2.typeName = "google.protobuf.Timestamp", s2.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }, 924: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.reifyWkt = void 0;
    const r2 = n2(408);
    t2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.STRING), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.BYTES);
          if (t3 && n3) return { typeName: e3.typeName, typeUrl: t3, value: n3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.INT64), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.INT32);
          if (t3 && n3) return { typeName: e3.typeName, seconds: t3, nanos: n3 };
          break;
        }
        case "google.protobuf.Duration": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.INT64), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.INT32);
          if (t3 && n3) return { typeName: e3.typeName, seconds: t3, nanos: n3 };
          break;
        }
        case "google.protobuf.Struct": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == t3 ? void 0 : t3.fieldKind) || "message" !== t3.mapValue.kind || "google.protobuf.Value" !== t3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: t3 };
        }
        case "google.protobuf.Value": {
          const t3 = e3.oneofs.find((e4) => "kind" === e4.name), n3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === t3);
          if ("enum" !== (null == n3 ? void 0 : n3.fieldKind) || "google.protobuf.NullValue" !== n3.enum.typeName) return;
          const o2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.DOUBLE && e4.oneof === t3), a2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.STRING && e4.oneof === t3), s2 = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.BOOL && e4.oneof === t3), i2 = e3.fields.find((e4) => 5 == e4.number && e4.oneof === t3);
          if ("message" !== (null == i2 ? void 0 : i2.fieldKind) || "google.protobuf.Struct" !== i2.message.typeName) return;
          const l2 = e3.fields.find((e4) => 6 == e4.number && e4.oneof === t3);
          if ("message" !== (null == l2 ? void 0 : l2.fieldKind) || "google.protobuf.ListValue" !== l2.message.typeName) return;
          if (t3 && o2 && a2 && s2) return { typeName: e3.typeName, kind: t3, nullValue: n3, numberValue: o2, stringValue: a2, boolValue: s2, structValue: i2, listValue: l2 };
          break;
        }
        case "google.protobuf.ListValue": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && e4.repeated);
          if ("message" != (null == t3 ? void 0 : t3.fieldKind) || "google.protobuf.Value" !== t3.message.typeName) break;
          return { typeName: e3.typeName, values: t3 };
        }
        case "google.protobuf.FieldMask": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === r2.ScalarType.STRING && e4.repeated);
          if (t3) return { typeName: e3.typeName, paths: t3 };
          break;
        }
        case "google.protobuf.DoubleValue":
        case "google.protobuf.FloatValue":
        case "google.protobuf.Int64Value":
        case "google.protobuf.UInt64Value":
        case "google.protobuf.Int32Value":
        case "google.protobuf.UInt32Value":
        case "google.protobuf.BoolValue":
        case "google.protobuf.StringValue":
        case "google.protobuf.BytesValue": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "value" == e4.name);
          if (!t3) break;
          if ("scalar" !== t3.fieldKind) break;
          return { typeName: e3.typeName, value: t3 };
        }
      }
    };
  }, 942: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistry = void 0, t2.createRegistry = function(...e3) {
      const t3 = {}, n2 = {}, r2 = {}, o2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), s2 = { findMessage: (e4) => t3[e4], findEnum: (e4) => n2[e4], findService: (e4) => r2[e4], findExtensionFor(e4, t4) {
        var n3, r3;
        return null !== (r3 = null === (n3 = a2.get(e4)) || void 0 === n3 ? void 0 : n3.get(t4)) && void 0 !== r3 ? r3 : void 0;
      }, findExtension(e4) {
        var t4;
        return null !== (t4 = o2.get(e4)) && void 0 !== t4 ? t4 : void 0;
      } };
      function i2(e4) {
        var u2;
        if ("fields" in e4) s2.findMessage(e4.typeName) || (t3[e4.typeName] = e4, e4.fields.list().forEach(l2));
        else if ("methods" in e4) {
          if (!s2.findService(e4.typeName)) {
            r2[e4.typeName] = e4;
            for (const t4 of Object.values(e4.methods)) i2(t4.I), i2(t4.O);
          }
        } else if ("extendee" in e4) {
          if (!o2.has(e4.typeName)) {
            o2.set(e4.typeName, e4);
            const t4 = e4.extendee.typeName;
            a2.has(t4) || a2.set(t4, /* @__PURE__ */ new Map()), null === (u2 = a2.get(t4)) || void 0 === u2 || u2.set(e4.field.no, e4), i2(e4.extendee), l2(e4.field);
          }
        } else n2[e4.typeName] = e4;
      }
      function l2(e4) {
        "message" == e4.kind ? i2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i2(e4.V.T) : "enum" == e4.kind && i2(e4.T);
      }
      for (const t4 of e3) i2(t4);
      return s2;
    };
  }, 970: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.FieldMask = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), this.paths = [], o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let t3 = false;
            const n3 = [];
            for (let r3 = 0; r3 < e5.length; r3++) {
              let o3 = e5.charAt(r3);
              switch (o3) {
                case "_":
                  t3 = true;
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  n3.push(o3), t3 = false;
                  break;
                default:
                  t3 && (t3 = false, o3 = o3.toUpperCase()), n3.push(o3);
              }
            }
            return n3.join("");
          })(e4);
        }).join(",");
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o2.proto3.json.debug(e3));
        if ("" === e3) return this;
        return this.paths = e3.split(",").map(function(e4) {
          if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t4 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
          return "_" === t4[0] ? t4.substring(1) : t4;
        }), this;
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
    t2.FieldMask = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.FieldMask", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  } }, t = {};
  function n(r2) {
    var o2 = t[r2];
    if (void 0 !== o2) return o2.exports;
    var a2 = t[r2] = { exports: {} };
    return e[r2].call(a2.exports, a2, a2.exports, n), a2.exports;
  }
  n.d = (e2, t2) => {
    for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var r = {};
  n.r(r), n.d(r, { activate: () => Kr, deactivate: () => Zr });
  const o = require("vscode");
  var a = n(38);
  function s(e2, t2) {
    if (!e2) throw new Error(t2);
  }
  function i(e2) {
    if ("number" != typeof e2) throw new Error("invalid int 32: " + typeof e2);
    if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648) throw new Error("invalid int 32: " + e2);
  }
  function l(e2) {
    if ("number" != typeof e2) throw new Error("invalid uint 32: " + typeof e2);
    if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0) throw new Error("invalid uint 32: " + e2);
  }
  function u(e2) {
    if ("number" != typeof e2) throw new Error("invalid float 32: " + typeof e2);
    if (Number.isFinite(e2) && (e2 > 34028234663852886e22 || e2 < -34028234663852886e22)) throw new Error("invalid float 32: " + e2);
  }
  const c = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
  function m(e2) {
    const t2 = e2[c];
    return s(t2, "missing enum type on enum object"), t2;
  }
  function p(e2, t2, n2, r2) {
    e2[c] = d(t2, n2.map((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] })), r2);
  }
  function d(e2, t2, n2) {
    const r2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ Object.create(null), a2 = [];
    for (const e3 of t2) {
      const t3 = T(e3);
      a2.push(t3), r2[e3.name] = t3, o2[e3.no] = t3;
    }
    return { typeName: e2, values: a2, findName: (e3) => r2[e3], findNumber: (e3) => o2[e3] };
  }
  function f(e2, t2, n2) {
    const r2 = {};
    for (const e3 of t2) {
      const t3 = T(e3);
      r2[t3.localName] = t3.no, r2[t3.no] = t3.localName;
    }
    return p(r2, e2, t2, n2), r2;
  }
  function T(e2) {
    return "localName" in e2 ? e2 : { ...e2, localName: e2.name };
  }
  class g {
    equals(e2) {
      return this.getType().runtime.util.equals(this.getType(), this, e2);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e2, t2) {
      const n2 = this.getType().runtime.bin, r2 = n2.makeReadOptions(t2);
      return n2.readMessage(this, r2.readerFactory(e2), e2.byteLength, r2), this;
    }
    fromJson(e2, t2) {
      const n2 = this.getType(), r2 = n2.runtime.json, o2 = r2.makeReadOptions(t2);
      return r2.readMessage(n2, e2, o2, this), this;
    }
    fromJsonString(e2, t2) {
      let n2;
      try {
        n2 = JSON.parse(e2);
      } catch (e3) {
        throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
      return this.fromJson(n2, t2);
    }
    toBinary(e2) {
      const t2 = this.getType().runtime.bin, n2 = t2.makeWriteOptions(e2), r2 = n2.writerFactory();
      return t2.writeMessage(this, r2, n2), r2.finish();
    }
    toJson(e2) {
      const t2 = this.getType().runtime.json, n2 = t2.makeWriteOptions(e2);
      return t2.writeMessage(this, n2);
    }
    toJsonString(e2) {
      const t2 = this.toJson(e2);
      return JSON.stringify(t2, null, e2?.prettySpaces ?? 0);
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: true });
    }
    getType() {
      return Object.getPrototypeOf(this).constructor;
    }
  }
  function E() {
    let e2 = 0, t2 = 0;
    for (let n3 = 0; n3 < 28; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (e2 |= (127 & r2) << n3, !(128 & r2)) return this.assertBounds(), [e2, t2];
    }
    let n2 = this.buf[this.pos++];
    if (e2 |= (15 & n2) << 28, t2 = (112 & n2) >> 4, !(128 & n2)) return this.assertBounds(), [e2, t2];
    for (let n3 = 3; n3 <= 31; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (t2 |= (127 & r2) << n3, !(128 & r2)) return this.assertBounds(), [e2, t2];
    }
    throw new Error("invalid varint");
  }
  function y(e2, t2, n2) {
    for (let r3 = 0; r3 < 28; r3 += 7) {
      const o3 = e2 >>> r3, a2 = !(o3 >>> 7 == 0 && 0 == t2), s2 = 255 & (a2 ? 128 | o3 : o3);
      if (n2.push(s2), !a2) return;
    }
    const r2 = e2 >>> 28 & 15 | (7 & t2) << 4, o2 = !!(t2 >> 3);
    if (n2.push(255 & (o2 ? 128 | r2 : r2)), o2) {
      for (let e3 = 3; e3 < 31; e3 += 7) {
        const r3 = t2 >>> e3, o3 = !(r3 >>> 7 == 0), a2 = 255 & (o3 ? 128 | r3 : r3);
        if (n2.push(a2), !o3) return;
      }
      n2.push(t2 >>> 31 & 1);
    }
  }
  const h = 4294967296;
  function N(e2) {
    const t2 = "-" === e2[0];
    t2 && (e2 = e2.slice(1));
    const n2 = 1e6;
    let r2 = 0, o2 = 0;
    function a2(t3, a3) {
      const s2 = Number(e2.slice(t3, a3));
      o2 *= n2, r2 = r2 * n2 + s2, r2 >= h && (o2 += r2 / h | 0, r2 %= h);
    }
    return a2(-24, -18), a2(-18, -12), a2(-12, -6), a2(-6), t2 ? S(r2, o2) : I(r2, o2);
  }
  function _(e2, t2) {
    if ({ lo: e2, hi: t2 } = (function(e3, t3) {
      return { lo: e3 >>> 0, hi: t3 >>> 0 };
    })(e2, t2), t2 <= 2097151) return String(h * t2 + e2);
    const n2 = 16777215 & (e2 >>> 24 | t2 << 8), r2 = t2 >> 16 & 65535;
    let o2 = (16777215 & e2) + 6777216 * n2 + 6710656 * r2, a2 = n2 + 8147497 * r2, s2 = 2 * r2;
    const i2 = 1e7;
    return o2 >= i2 && (a2 += Math.floor(o2 / i2), o2 %= i2), a2 >= i2 && (s2 += Math.floor(a2 / i2), a2 %= i2), s2.toString() + w(a2) + w(o2);
  }
  function I(e2, t2) {
    return { lo: 0 | e2, hi: 0 | t2 };
  }
  function S(e2, t2) {
    return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, I(e2, t2);
  }
  const w = (e2) => {
    const t2 = String(e2);
    return "0000000".slice(t2.length) + t2;
  };
  function O(e2, t2) {
    if (e2 >= 0) {
      for (; e2 > 127; ) t2.push(127 & e2 | 128), e2 >>>= 7;
      t2.push(e2);
    } else {
      for (let n2 = 0; n2 < 9; n2++) t2.push(127 & e2 | 128), e2 >>= 7;
      t2.push(1);
    }
  }
  function b() {
    let e2 = this.buf[this.pos++], t2 = 127 & e2;
    if (!(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, !(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, !(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, !(128 & e2)) return this.assertBounds(), t2;
    e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
    for (let t3 = 5; 128 & e2 && t3 < 10; t3++) e2 = this.buf[this.pos++];
    if (128 & e2) throw new Error("invalid varint");
    return this.assertBounds(), t2 >>> 0;
  }
  const k = (function() {
    const e2 = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e2.getBigInt64 && "function" == typeof e2.getBigUint64 && "function" == typeof e2.setBigInt64 && "function" == typeof e2.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
      const t3 = BigInt("-9223372036854775808"), n3 = BigInt("9223372036854775807"), r2 = BigInt("0"), o2 = BigInt("18446744073709551615");
      return { zero: BigInt(0), supported: true, parse(e3) {
        const r3 = "bigint" == typeof e3 ? e3 : BigInt(e3);
        if (r3 > n3 || r3 < t3) throw new Error(`int64 invalid: ${e3}`);
        return r3;
      }, uParse(e3) {
        const t4 = "bigint" == typeof e3 ? e3 : BigInt(e3);
        if (t4 > o2 || t4 < r2) throw new Error(`uint64 invalid: ${e3}`);
        return t4;
      }, enc(t4) {
        return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
      }, uEnc(t4) {
        return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
      }, dec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigInt64(0, true)), uDec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigUint64(0, true)) };
    }
    const t2 = (e3) => s(/^-?[0-9]+$/.test(e3), `int64 invalid: ${e3}`), n2 = (e3) => s(/^[0-9]+$/.test(e3), `uint64 invalid: ${e3}`);
    return { zero: "0", supported: false, parse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), e3), enc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), N(e3)), uEnc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), N(e3)), dec: (e3, t3) => (function(e4, t4) {
      let n3 = I(e4, t4);
      const r2 = 2147483648 & n3.hi;
      r2 && (n3 = S(n3.lo, n3.hi));
      const o2 = _(n3.lo, n3.hi);
      return r2 ? "-" + o2 : o2;
    })(e3, t3), uDec: (e3, t3) => _(e3, t3) };
  })();
  var v = ((e2) => (e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64", e2))(v || {}), P = ((e2) => (e2[e2.BIGINT = 0] = "BIGINT", e2[e2.STRING = 1] = "STRING", e2))(P || {});
  function F(e2, t2, n2) {
    if (t2 === n2) return true;
    if (e2 == v.BYTES) {
      if (!(t2 instanceof Uint8Array && n2 instanceof Uint8Array)) return false;
      if (t2.length !== n2.length) return false;
      for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== n2[e3]) return false;
      return true;
    }
    switch (e2) {
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return t2 == n2;
    }
    return false;
  }
  function D(e2, t2) {
    switch (e2) {
      case v.BOOL:
        return false;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return 0 == t2 ? k.zero : "0";
      case v.DOUBLE:
      case v.FLOAT:
        return 0;
      case v.BYTES:
        return new Uint8Array(0);
      case v.STRING:
        return "";
      default:
        return 0;
    }
  }
  function R(e2, t2) {
    switch (e2) {
      case v.BOOL:
        return false === t2;
      case v.STRING:
        return "" === t2;
      case v.BYTES:
        return t2 instanceof Uint8Array && !t2.byteLength;
      default:
        return 0 == t2;
    }
  }
  function J(e2) {
    const t2 = e2.field.localName, n2 = /* @__PURE__ */ Object.create(null);
    return n2[t2] = (function(e3) {
      const t3 = e3.field;
      if (t3.repeated) return [];
      if (void 0 !== t3.default) return t3.default;
      switch (t3.kind) {
        case "enum":
          return t3.T.values[0].no;
        case "scalar":
          return D(t3.T, t3.L);
        case "message":
          const e4 = t3.T, n3 = new e4();
          return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(n3) : n3;
        case "map":
          throw "map fields are not allowed to be extensions";
      }
    })(e2), [n2, () => n2[t2]];
  }
  let U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), A = [];
  for (let e2 = 0; e2 < U.length; e2++) A[U[e2].charCodeAt(0)] = e2;
  A["-".charCodeAt(0)] = U.indexOf("+"), A["_".charCodeAt(0)] = U.indexOf("/");
  const L = { dec(e2) {
    let t2 = 3 * e2.length / 4;
    "=" == e2[e2.length - 2] ? t2 -= 2 : "=" == e2[e2.length - 1] && (t2 -= 1);
    let n2, r2 = new Uint8Array(t2), o2 = 0, a2 = 0, s2 = 0;
    for (let t3 = 0; t3 < e2.length; t3++) {
      if (n2 = A[e2.charCodeAt(t3)], void 0 === n2) switch (e2[t3]) {
        case "=":
          a2 = 0;
        case "\n":
        case "\r":
        case "	":
        case " ":
          continue;
        default:
          throw Error("invalid base64 string.");
      }
      switch (a2) {
        case 0:
          s2 = n2, a2 = 1;
          break;
        case 1:
          r2[o2++] = s2 << 2 | (48 & n2) >> 4, s2 = n2, a2 = 2;
          break;
        case 2:
          r2[o2++] = (15 & s2) << 4 | (60 & n2) >> 2, s2 = n2, a2 = 3;
          break;
        case 3:
          r2[o2++] = (3 & s2) << 6 | n2, a2 = 0;
      }
    }
    if (1 == a2) throw Error("invalid base64 string.");
    return r2.subarray(0, o2);
  }, enc(e2) {
    let t2, n2 = "", r2 = 0, o2 = 0;
    for (let a2 = 0; a2 < e2.length; a2++) switch (t2 = e2[a2], r2) {
      case 0:
        n2 += U[t2 >> 2], o2 = (3 & t2) << 4, r2 = 1;
        break;
      case 1:
        n2 += U[o2 | t2 >> 4], o2 = (15 & t2) << 2, r2 = 2;
        break;
      case 2:
        n2 += U[o2 | t2 >> 6], n2 += U[63 & t2], r2 = 0;
    }
    return r2 && (n2 += U[o2], n2 += "=", 1 == r2 && (n2 += "=")), n2;
  } };
  function B(e2, t2, n2) {
    Y(t2, e2);
    const r2 = t2.runtime.bin.makeReadOptions(n2), o2 = (function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    })(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), [a2, s2] = J(t2);
    for (const e3 of o2) t2.runtime.bin.readField(a2, r2.readerFactory(e3.data), t2.field, e3.wireType, r2);
    return s2();
  }
  function M(e2, t2, n2, r2) {
    Y(t2, e2);
    const o2 = t2.runtime.bin.makeReadOptions(r2), a2 = t2.runtime.bin.makeWriteOptions(r2);
    if (x(e2, t2)) {
      const n3 = e2.getType().runtime.bin.listUnknownFields(e2).filter((e3) => e3.no != t2.field.no);
      e2.getType().runtime.bin.discardUnknownFields(e2);
      for (const t3 of n3) e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
    }
    const s2 = a2.writerFactory();
    let i2 = t2.field;
    i2.opt || i2.repeated || "enum" != i2.kind && "scalar" != i2.kind || (i2 = { ...t2.field, opt: true }), t2.runtime.bin.writeField(i2, n2, s2, a2);
    const l2 = o2.readerFactory(s2.finish());
    for (; l2.pos < l2.len; ) {
      const [t3, n3] = l2.tag(), r3 = l2.skip(n3, t3);
      e2.getType().runtime.bin.onUnknownField(e2, t3, n3, r3);
    }
  }
  function x(e2, t2) {
    const n2 = e2.getType();
    return t2.extendee.typeName === n2.typeName && !!n2.runtime.bin.listUnknownFields(e2).find((e3) => e3.no == t2.field.no);
  }
  function Y(e2, t2) {
    s(e2.extendee.typeName == t2.getType().typeName, `extension ${e2.typeName} can only be applied to message ${e2.extendee.typeName}`);
  }
  function C(e2, t2) {
    const n2 = e2.localName;
    if (e2.repeated) return t2[n2].length > 0;
    if (e2.oneof) return t2[e2.oneof.localName].case === n2;
    switch (e2.kind) {
      case "enum":
      case "scalar":
        return e2.opt || e2.req ? void 0 !== t2[n2] : "enum" == e2.kind ? t2[n2] !== e2.T.values[0].no : !R(e2.T, t2[n2]);
      case "message":
        return void 0 !== t2[n2];
      case "map":
        return Object.keys(t2[n2]).length > 0;
    }
  }
  function j(e2, t2) {
    const n2 = e2.localName, r2 = !e2.opt && !e2.req;
    if (e2.repeated) t2[n2] = [];
    else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
    else switch (e2.kind) {
      case "map":
        t2[n2] = {};
        break;
      case "enum":
        t2[n2] = r2 ? e2.T.values[0].no : void 0;
        break;
      case "scalar":
        t2[n2] = r2 ? D(e2.T, e2.L) : void 0;
        break;
      case "message":
        t2[n2] = void 0;
    }
  }
  function V(e2, t2) {
    if (null === e2 || "object" != typeof e2) return false;
    if (!Object.getOwnPropertyNames(g.prototype).every((t3) => t3 in e2 && "function" == typeof e2[t3])) return false;
    const n2 = e2.getType();
    return null !== n2 && "function" == typeof n2 && "typeName" in n2 && "string" == typeof n2.typeName && (void 0 === t2 || n2.typeName == t2.typeName);
  }
  function G(e2, t2) {
    const n2 = V(t2);
    return n2 || e2.fieldWrapper ? n2 || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2) : new e2(t2);
  }
  v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES;
  const q = { ignoreUnknownFields: false }, $ = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
  function W(e2) {
    return e2 ? { ...q, ...e2 } : q;
  }
  function X(e2) {
    return e2 ? { ...$, ...e2 } : $;
  }
  const K = /* @__PURE__ */ Symbol(), Z = /* @__PURE__ */ Symbol();
  function H(e2) {
    if (null === e2) return "null";
    switch (typeof e2) {
      case "object":
        return Array.isArray(e2) ? "array" : "object";
      case "string":
        return e2.length > 100 ? "string" : `"${e2.split('"').join('\\"')}"`;
      default:
        return String(e2);
    }
  }
  function z(e2, t2, n2, r2, o2) {
    let a2 = n2.localName;
    if (n2.repeated) {
      if (s("map" != n2.kind), null === t2) return;
      if (!Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`);
      const i2 = e2[a2];
      for (const e3 of t2) {
        if (null === e3) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(e3)}`);
        switch (n2.kind) {
          case "message":
            i2.push(n2.T.fromJson(e3, r2));
            break;
          case "enum":
            const t3 = te(n2.T, e3, r2.ignoreUnknownFields, true);
            t3 !== Z && i2.push(t3);
            break;
          case "scalar":
            try {
              i2.push(ee(n2.T, e3, n2.L, true));
            } catch (t4) {
              let r3 = `cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(e3)}`;
              throw t4 instanceof Error && t4.message.length > 0 && (r3 += `: ${t4.message}`), new Error(r3);
            }
        }
      }
    } else if ("map" == n2.kind) {
      if (null === t2) return;
      if ("object" != typeof t2 || Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`);
      const s2 = e2[a2];
      for (const [e3, a3] of Object.entries(t2)) {
        if (null === a3) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: map value null`);
        let i2;
        try {
          i2 = Q(n2.K, e3);
        } catch (e4) {
          let r3 = `cannot decode map key for field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
          throw e4 instanceof Error && e4.message.length > 0 && (r3 += `: ${e4.message}`), new Error(r3);
        }
        switch (n2.V.kind) {
          case "message":
            s2[i2] = n2.V.T.fromJson(a3, r2);
            break;
          case "enum":
            const e4 = te(n2.V.T, a3, r2.ignoreUnknownFields, true);
            e4 !== Z && (s2[i2] = e4);
            break;
          case "scalar":
            try {
              s2[i2] = ee(n2.V.T, a3, P.BIGINT, true);
            } catch (e5) {
              let r3 = `cannot decode map value for field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
              throw e5 instanceof Error && e5.message.length > 0 && (r3 += `: ${e5.message}`), new Error(r3);
            }
        }
      }
    } else switch (n2.oneof && (e2 = e2[n2.oneof.localName] = { case: a2 }, a2 = "value"), n2.kind) {
      case "message":
        const s2 = n2.T;
        if (null === t2 && "google.protobuf.Value" != s2.typeName) return;
        let i2 = e2[a2];
        V(i2) ? i2.fromJson(t2, r2) : (e2[a2] = i2 = s2.fromJson(t2, r2), s2.fieldWrapper && !n2.oneof && (e2[a2] = s2.fieldWrapper.unwrapField(i2)));
        break;
      case "enum":
        const l2 = te(n2.T, t2, r2.ignoreUnknownFields, false);
        switch (l2) {
          case K:
            j(n2, e2);
            break;
          case Z:
            break;
          default:
            e2[a2] = l2;
        }
        break;
      case "scalar":
        try {
          const r3 = ee(n2.T, t2, n2.L, false);
          if (r3 === K) j(n2, e2);
          else e2[a2] = r3;
        } catch (e3) {
          let r3 = `cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
          throw e3 instanceof Error && e3.message.length > 0 && (r3 += `: ${e3.message}`), new Error(r3);
        }
    }
  }
  function Q(e2, t2) {
    if (e2 === v.BOOL) switch (t2) {
      case "true":
        t2 = true;
        break;
      case "false":
        t2 = false;
    }
    return ee(e2, t2, P.BIGINT, true).toString();
  }
  function ee(e2, t2, n2, r2) {
    if (null === t2) return r2 ? D(e2, n2) : K;
    switch (e2) {
      case v.DOUBLE:
      case v.FLOAT:
        if ("NaN" === t2) return Number.NaN;
        if ("Infinity" === t2) return Number.POSITIVE_INFINITY;
        if ("-Infinity" === t2) return Number.NEGATIVE_INFINITY;
        if ("" === t2) break;
        if ("string" == typeof t2 && t2.trim().length !== t2.length) break;
        if ("string" != typeof t2 && "number" != typeof t2) break;
        const r3 = Number(t2);
        if (Number.isNaN(r3)) break;
        if (!Number.isFinite(r3)) break;
        return e2 == v.FLOAT && u(r3), r3;
      case v.INT32:
      case v.FIXED32:
      case v.SFIXED32:
      case v.SINT32:
      case v.UINT32:
        let o2;
        if ("number" == typeof t2 ? o2 = t2 : "string" == typeof t2 && t2.length > 0 && t2.trim().length === t2.length && (o2 = Number(t2)), void 0 === o2) break;
        return e2 == v.UINT32 || e2 == v.FIXED32 ? l(o2) : i(o2), o2;
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        if ("number" != typeof t2 && "string" != typeof t2) break;
        const a2 = k.parse(t2);
        return n2 ? a2.toString() : a2;
      case v.FIXED64:
      case v.UINT64:
        if ("number" != typeof t2 && "string" != typeof t2) break;
        const s2 = k.uParse(t2);
        return n2 ? s2.toString() : s2;
      case v.BOOL:
        if ("boolean" != typeof t2) break;
        return t2;
      case v.STRING:
        if ("string" != typeof t2) break;
        try {
          encodeURIComponent(t2);
        } catch (e3) {
          throw new Error("invalid UTF8");
        }
        return t2;
      case v.BYTES:
        if ("" === t2) return new Uint8Array(0);
        if ("string" != typeof t2) break;
        return L.dec(t2);
    }
    throw new Error();
  }
  function te(e2, t2, n2, r2) {
    if (null === t2) return "google.protobuf.NullValue" == e2.typeName ? 0 : r2 ? e2.values[0].no : K;
    switch (typeof t2) {
      case "number":
        if (Number.isInteger(t2)) return t2;
        break;
      case "string":
        const r3 = e2.findName(t2);
        if (void 0 !== r3) return r3.no;
        if (n2) return Z;
    }
    throw new Error(`cannot decode enum ${e2.typeName} from JSON: ${H(t2)}`);
  }
  function ne(e2) {
    return !(!e2.repeated && "map" != e2.kind) || !e2.oneof && ("message" != e2.kind && (!e2.opt && !e2.req));
  }
  function re(e2, t2, n2) {
    if ("map" == e2.kind) {
      s("object" == typeof t2 && null != t2);
      const r2 = {}, o2 = Object.entries(t2);
      switch (e2.V.kind) {
        case "scalar":
          for (const [t4, n3] of o2) r2[t4.toString()] = ae(e2.V.T, n3);
          break;
        case "message":
          for (const [e3, t4] of o2) r2[e3.toString()] = t4.toJson(n2);
          break;
        case "enum":
          const t3 = e2.V.T;
          for (const [e3, a2] of o2) r2[e3.toString()] = oe(t3, a2, n2.enumAsInteger);
      }
      return n2.emitDefaultValues || o2.length > 0 ? r2 : void 0;
    }
    if (e2.repeated) {
      s(Array.isArray(t2));
      const r2 = [];
      switch (e2.kind) {
        case "scalar":
          for (let n3 = 0; n3 < t2.length; n3++) r2.push(ae(e2.T, t2[n3]));
          break;
        case "enum":
          for (let o2 = 0; o2 < t2.length; o2++) r2.push(oe(e2.T, t2[o2], n2.enumAsInteger));
          break;
        case "message":
          for (let e3 = 0; e3 < t2.length; e3++) r2.push(t2[e3].toJson(n2));
      }
      return n2.emitDefaultValues || r2.length > 0 ? r2 : void 0;
    }
    switch (e2.kind) {
      case "scalar":
        return ae(e2.T, t2);
      case "enum":
        return oe(e2.T, t2, n2.enumAsInteger);
      case "message":
        return G(e2.T, t2).toJson(n2);
    }
  }
  function oe(e2, t2, n2) {
    if (s("number" == typeof t2), "google.protobuf.NullValue" == e2.typeName) return null;
    if (n2) return t2;
    const r2 = e2.findNumber(t2);
    return r2?.name ?? t2;
  }
  function ae(e2, t2) {
    switch (e2) {
      case v.INT32:
      case v.SFIXED32:
      case v.SINT32:
      case v.FIXED32:
      case v.UINT32:
        return s("number" == typeof t2), t2;
      case v.FLOAT:
      case v.DOUBLE:
        return s("number" == typeof t2), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
      case v.STRING:
        return s("string" == typeof t2), t2;
      case v.BOOL:
        return s("boolean" == typeof t2), t2;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return s("bigint" == typeof t2 || "string" == typeof t2 || "number" == typeof t2), t2.toString();
      case v.BYTES:
        return s(t2 instanceof Uint8Array), L.enc(t2);
    }
  }
  var se = ((e2) => (e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32", e2))(se || {});
  class ie {
    constructor(e2) {
      this.stack = [], this.textEncoder = e2 ?? new TextEncoder(), this.chunks = [], this.buf = [];
    }
    finish() {
      this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
      let e2 = 0;
      for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
      let t2 = new Uint8Array(e2), n2 = 0;
      for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], n2), n2 += this.chunks[e3].length;
      return this.chunks = [], t2;
    }
    fork() {
      return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
    }
    join() {
      let e2 = this.finish(), t2 = this.stack.pop();
      if (!t2) throw new Error("invalid state, fork stack empty");
      return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
    }
    tag(e2, t2) {
      return this.uint32((e2 << 3 | t2) >>> 0);
    }
    raw(e2) {
      return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
    }
    uint32(e2) {
      for (l(e2); e2 > 127; ) this.buf.push(127 & e2 | 128), e2 >>>= 7;
      return this.buf.push(e2), this;
    }
    int32(e2) {
      return i(e2), O(e2, this.buf), this;
    }
    bool(e2) {
      return this.buf.push(e2 ? 1 : 0), this;
    }
    bytes(e2) {
      return this.uint32(e2.byteLength), this.raw(e2);
    }
    string(e2) {
      let t2 = this.textEncoder.encode(e2);
      return this.uint32(t2.byteLength), this.raw(t2);
    }
    float(e2) {
      u(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
    }
    double(e2) {
      let t2 = new Uint8Array(8);
      return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
    }
    fixed32(e2) {
      l(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
    }
    sfixed32(e2) {
      i(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
    }
    sint32(e2) {
      return i(e2), O(e2 = (e2 << 1 ^ e2 >> 31) >>> 0, this.buf), this;
    }
    sfixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = k.enc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    fixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = k.uEnc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    int64(e2) {
      let t2 = k.enc(e2);
      return y(t2.lo, t2.hi, this.buf), this;
    }
    sint64(e2) {
      let t2 = k.enc(e2), n2 = t2.hi >> 31;
      return y(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
    }
    uint64(e2) {
      let t2 = k.uEnc(e2);
      return y(t2.lo, t2.hi, this.buf), this;
    }
  }
  class le {
    constructor(e2, t2) {
      this.varint64 = E, this.uint32 = b, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = t2 ?? new TextDecoder();
    }
    tag() {
      let e2 = this.uint32(), t2 = e2 >>> 3, n2 = 7 & e2;
      if (t2 <= 0 || n2 < 0 || n2 > 5) throw new Error("illegal tag: field no " + t2 + " wire type " + n2);
      return [t2, n2];
    }
    skip(e2, t2) {
      let n2 = this.pos;
      switch (e2) {
        case 0:
          for (; 128 & this.buf[this.pos++]; ) ;
          break;
        case 1:
          this.pos += 4;
        case 5:
          this.pos += 4;
          break;
        case 2:
          let n3 = this.uint32();
          this.pos += n3;
          break;
        case 3:
          for (; ; ) {
            const [e3, n4] = this.tag();
            if (4 === n4) {
              if (void 0 !== t2 && e3 !== t2) throw new Error("invalid end group tag");
              break;
            }
            this.skip(n4, e3);
          }
          break;
        default:
          throw new Error("cant skip wire type " + e2);
      }
      return this.assertBounds(), this.buf.subarray(n2, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
      return 0 | this.uint32();
    }
    sint32() {
      let e2 = this.uint32();
      return e2 >>> 1 ^ -(1 & e2);
    }
    int64() {
      return k.dec(...this.varint64());
    }
    uint64() {
      return k.uDec(...this.varint64());
    }
    sint64() {
      let [e2, t2] = this.varint64(), n2 = -(1 & e2);
      return e2 = (e2 >>> 1 | (1 & t2) << 31) ^ n2, t2 = t2 >>> 1 ^ n2, k.dec(e2, t2);
    }
    bool() {
      let [e2, t2] = this.varint64();
      return 0 !== e2 || 0 !== t2;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, true);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, true);
    }
    fixed64() {
      return k.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return k.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    bytes() {
      let e2 = this.uint32(), t2 = this.pos;
      return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  }
  const ue = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), ce = { readUnknownFields: true, readerFactory: (e2) => new le(e2) }, me = { writeUnknownFields: true, writerFactory: () => new ie() };
  function pe(e2) {
    return e2 ? { ...ce, ...e2 } : ce;
  }
  function de(e2) {
    return e2 ? { ...me, ...e2 } : me;
  }
  function fe(e2, t2, n2, r2, o2) {
    let { repeated: a2, localName: s2 } = n2;
    switch (n2.oneof && ((e2 = e2[n2.oneof.localName]).case != s2 && delete e2.value, e2.case = s2, s2 = "value"), n2.kind) {
      case "scalar":
      case "enum":
        const i2 = "enum" == n2.kind ? v.INT32 : n2.T;
        let l2 = Ee;
        if ("scalar" == n2.kind && n2.L > 0 && (l2 = ge), a2) {
          let n3 = e2[s2];
          if (r2 == se.LengthDelimited && i2 != v.STRING && i2 != v.BYTES) {
            let e3 = t2.uint32() + t2.pos;
            for (; t2.pos < e3; ) n3.push(l2(t2, i2));
          } else n3.push(l2(t2, i2));
        } else e2[s2] = l2(t2, i2);
        break;
      case "message":
        const u2 = n2.T;
        a2 ? e2[s2].push(Te(t2, new u2(), o2, n2)) : V(e2[s2]) ? Te(t2, e2[s2], o2, n2) : (e2[s2] = Te(t2, new u2(), o2, n2), !u2.fieldWrapper || n2.oneof || n2.repeated || (e2[s2] = u2.fieldWrapper.unwrapField(e2[s2])));
        break;
      case "map":
        let [c2, m2] = (function(e3, t3, n3) {
          const r3 = t3.uint32(), o3 = t3.pos + r3;
          let a3, s3;
          for (; t3.pos < o3; ) {
            const [r4] = t3.tag();
            switch (r4) {
              case 1:
                a3 = Ee(t3, e3.K);
                break;
              case 2:
                switch (e3.V.kind) {
                  case "scalar":
                    s3 = Ee(t3, e3.V.T);
                    break;
                  case "enum":
                    s3 = t3.int32();
                    break;
                  case "message":
                    s3 = Te(t3, new e3.V.T(), n3, void 0);
                }
            }
          }
          void 0 === a3 && (a3 = D(e3.K, P.BIGINT));
          "string" != typeof a3 && "number" != typeof a3 && (a3 = a3.toString());
          if (void 0 === s3) switch (e3.V.kind) {
            case "scalar":
              s3 = D(e3.V.T, P.BIGINT);
              break;
            case "enum":
              s3 = e3.V.T.values[0].no;
              break;
            case "message":
              s3 = new e3.V.T();
          }
          return [a3, s3];
        })(n2, t2, o2);
        e2[s2][c2] = m2;
    }
  }
  function Te(e2, t2, n2, r2) {
    const o2 = t2.getType().runtime.bin, a2 = r2?.delimited;
    return o2.readMessage(t2, e2, a2 ? r2.no : e2.uint32(), n2, a2), t2;
  }
  function ge(e2, t2) {
    const n2 = Ee(e2, t2);
    return "bigint" == typeof n2 ? n2.toString() : n2;
  }
  function Ee(e2, t2) {
    switch (t2) {
      case v.STRING:
        return e2.string();
      case v.BOOL:
        return e2.bool();
      case v.DOUBLE:
        return e2.double();
      case v.FLOAT:
        return e2.float();
      case v.INT32:
        return e2.int32();
      case v.INT64:
        return e2.int64();
      case v.UINT64:
        return e2.uint64();
      case v.FIXED64:
        return e2.fixed64();
      case v.BYTES:
        return e2.bytes();
      case v.FIXED32:
        return e2.fixed32();
      case v.SFIXED32:
        return e2.sfixed32();
      case v.SFIXED64:
        return e2.sfixed64();
      case v.SINT64:
        return e2.sint64();
      case v.UINT32:
        return e2.uint32();
      case v.SINT32:
        return e2.sint32();
    }
  }
  function ye(e2, t2, n2, r2) {
    s(void 0 !== t2);
    const o2 = e2.repeated;
    switch (e2.kind) {
      case "scalar":
      case "enum":
        let a2 = "enum" == e2.kind ? v.INT32 : e2.T;
        if (o2) if (s(Array.isArray(t2)), e2.packed) !(function(e3, t3, n3, r3) {
          if (!r3.length) return;
          e3.tag(n3, se.LengthDelimited).fork();
          let [, o3] = Ie(t3);
          for (let t4 = 0; t4 < r3.length; t4++) e3[o3](r3[t4]);
          e3.join();
        })(n2, a2, e2.no, t2);
        else for (const r3 of t2) _e(n2, a2, e2.no, r3);
        else _e(n2, a2, e2.no, t2);
        break;
      case "message":
        if (o2) {
          s(Array.isArray(t2));
          for (const o3 of t2) Ne(n2, r2, e2, o3);
        } else Ne(n2, r2, e2, t2);
        break;
      case "map":
        s("object" == typeof t2 && null != t2);
        for (const [o3, a3] of Object.entries(t2)) he(n2, r2, e2, o3, a3);
    }
  }
  function he(e2, t2, n2, r2, o2) {
    e2.tag(n2.no, se.LengthDelimited), e2.fork();
    let a2 = r2;
    switch (n2.K) {
      case v.INT32:
      case v.FIXED32:
      case v.UINT32:
      case v.SFIXED32:
      case v.SINT32:
        a2 = Number.parseInt(r2);
        break;
      case v.BOOL:
        s("true" == r2 || "false" == r2), a2 = "true" == r2;
    }
    switch (_e(e2, n2.K, 1, a2), n2.V.kind) {
      case "scalar":
        _e(e2, n2.V.T, 2, o2);
        break;
      case "enum":
        _e(e2, v.INT32, 2, o2);
        break;
      case "message":
        s(void 0 !== o2), e2.tag(2, se.LengthDelimited).bytes(o2.toBinary(t2));
    }
    e2.join();
  }
  function Ne(e2, t2, n2, r2) {
    const o2 = G(n2.T, r2);
    n2.delimited ? e2.tag(n2.no, se.StartGroup).raw(o2.toBinary(t2)).tag(n2.no, se.EndGroup) : e2.tag(n2.no, se.LengthDelimited).bytes(o2.toBinary(t2));
  }
  function _e(e2, t2, n2, r2) {
    s(void 0 !== r2);
    let [o2, a2] = Ie(t2);
    e2.tag(n2, o2)[a2](r2);
  }
  function Ie(e2) {
    let t2 = se.Varint;
    switch (e2) {
      case v.BYTES:
      case v.STRING:
        t2 = se.LengthDelimited;
        break;
      case v.DOUBLE:
      case v.FIXED64:
      case v.SFIXED64:
        t2 = se.Bit64;
        break;
      case v.FIXED32:
      case v.SFIXED32:
      case v.FLOAT:
        t2 = se.Bit32;
    }
    return [t2, v[e2].toLowerCase()];
  }
  function Se(e2) {
    if (void 0 === e2) return e2;
    if (V(e2)) return e2.clone();
    if (e2 instanceof Uint8Array) {
      const t2 = new Uint8Array(e2.byteLength);
      return t2.set(e2), t2;
    }
    return e2;
  }
  function we(e2) {
    return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
  }
  function Oe(e2, t2, n2) {
    return { syntax: e2, json: { makeReadOptions: W, makeWriteOptions: X, readMessage(e3, t3, n3, r2) {
      if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${H(t3)}`);
      r2 = r2 ?? new e3();
      const o2 = /* @__PURE__ */ new Map(), a2 = n3.typeRegistry;
      for (const [s2, i2] of Object.entries(t3)) {
        const t4 = e3.fields.findJsonName(s2);
        if (t4) {
          if (t4.oneof) {
            if (null === i2 && "scalar" == t4.kind) continue;
            const n4 = o2.get(t4.oneof);
            if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${n4}", "${s2}"`);
            o2.set(t4.oneof, s2);
          }
          z(r2, i2, t4, n3, e3);
        } else {
          let t5 = false;
          if (a2?.findExtension && s2.startsWith("[") && s2.endsWith("]")) {
            const o3 = a2.findExtension(s2.substring(1, s2.length - 1));
            if (o3 && o3.extendee.typeName == e3.typeName) {
              t5 = true;
              const [e4, a3] = J(o3);
              z(e4, i2, o3.field, n3, o3), M(r2, o3, a3(), n3);
            }
          }
          if (!t5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${s2}" is unknown`);
        }
      }
      return r2;
    }, writeMessage(e3, t3) {
      const n3 = e3.getType(), r2 = {};
      let o2;
      try {
        for (o2 of n3.fields.byNumber()) {
          if (!C(o2, e3)) {
            if (o2.req) throw "required field not set";
            if (!t3.emitDefaultValues) continue;
            if (!ne(o2)) continue;
          }
          const n4 = re(o2, o2.oneof ? e3[o2.oneof.localName].value : e3[o2.localName], t3);
          void 0 !== n4 && (r2[t3.useProtoFieldName ? o2.name : o2.jsonName] = n4);
        }
        const a2 = t3.typeRegistry;
        if (a2?.findExtensionFor) for (const o3 of n3.runtime.bin.listUnknownFields(e3)) {
          const s2 = a2.findExtensionFor(n3.typeName, o3.no);
          if (s2 && x(e3, s2)) {
            const n4 = B(e3, s2, t3), o4 = re(s2.field, n4, t3);
            void 0 !== o4 && (r2[s2.field.jsonName] = o4);
          }
        }
      } catch (e4) {
        const t4 = o2 ? `cannot encode field ${n3.typeName}.${o2.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, r3 = e4 instanceof Error ? e4.message : String(e4);
        throw new Error(t4 + (r3.length > 0 ? `: ${r3}` : ""));
      }
      return r2;
    }, readScalar: (e3, t3, n3) => ee(e3, t3, n3 ?? P.BIGINT, true), writeScalar(e3, t3, n3) {
      if (void 0 !== t3) return n3 || R(e3, t3) ? ae(e3, t3) : void 0;
    }, debug: H }, bin: { makeReadOptions: pe, makeWriteOptions: de, listUnknownFields: (e3) => e3[ue] ?? [], discardUnknownFields(e3) {
      delete e3[ue];
    }, writeUnknownFields(e3, t3) {
      const n3 = e3[ue];
      if (n3) for (const e4 of n3) t3.tag(e4.no, e4.wireType).raw(e4.data);
    }, onUnknownField(e3, t3, n3, r2) {
      const o2 = e3;
      Array.isArray(o2[ue]) || (o2[ue] = []), o2[ue].push({ no: t3, wireType: n3, data: new Uint8Array(r2) });
    }, readMessage(e3, t3, n3, r2, o2) {
      const a2 = e3.getType(), s2 = o2 ? t3.len : t3.pos + n3;
      let i2, l2;
      for (; t3.pos < s2 && ([i2, l2] = t3.tag(), true !== o2 || l2 != se.EndGroup); ) {
        const n4 = a2.fields.find(i2);
        if (!n4) {
          const n5 = t3.skip(l2, i2);
          r2.readUnknownFields && this.onUnknownField(e3, i2, l2, n5);
          continue;
        }
        fe(e3, t3, n4, l2, r2);
      }
      if (o2 && (l2 != se.EndGroup || i2 !== n3)) throw new Error("invalid end group tag");
    }, readField: fe, writeMessage(e3, t3, n3) {
      const r2 = e3.getType();
      for (const o2 of r2.fields.byNumber()) if (C(o2, e3)) ye(o2, o2.oneof ? e3[o2.oneof.localName].value : e3[o2.localName], t3, n3);
      else if (o2.req) throw new Error(`cannot encode field ${r2.typeName}.${o2.name} to binary: required field not set`);
      return n3.writeUnknownFields && this.writeUnknownFields(e3, t3), t3;
    }, writeField(e3, t3, n3, r2) {
      void 0 !== t3 && ye(e3, t3, n3, r2);
    } }, util: { ...{ setEnumType: p, initPartial(e3, t3) {
      if (void 0 === e3) return;
      const n3 = t3.getType();
      for (const r2 of n3.fields.byMember()) {
        const n4 = r2.localName, o2 = t3, a2 = e3;
        if (null != a2[n4]) switch (r2.kind) {
          case "oneof":
            const e4 = a2[n4].case;
            if (void 0 === e4) continue;
            const t4 = r2.findField(e4);
            let s2 = a2[n4].value;
            t4 && "message" == t4.kind && !V(s2, t4.T) ? s2 = new t4.T(s2) : t4 && "scalar" === t4.kind && t4.T === v.BYTES && (s2 = we(s2)), o2[n4] = { case: e4, value: s2 };
            break;
          case "scalar":
          case "enum":
            let i2 = a2[n4];
            r2.T === v.BYTES && (i2 = r2.repeated ? i2.map(we) : we(i2)), o2[n4] = i2;
            break;
          case "map":
            switch (r2.V.kind) {
              case "scalar":
              case "enum":
                if (r2.V.T === v.BYTES) for (const [e6, t5] of Object.entries(a2[n4])) o2[n4][e6] = we(t5);
                else Object.assign(o2[n4], a2[n4]);
                break;
              case "message":
                const e5 = r2.V.T;
                for (const t5 of Object.keys(a2[n4])) {
                  let r3 = a2[n4][t5];
                  e5.fieldWrapper || (r3 = new e5(r3)), o2[n4][t5] = r3;
                }
            }
            break;
          case "message":
            const l2 = r2.T;
            if (r2.repeated) o2[n4] = a2[n4].map((e5) => V(e5, l2) ? e5 : new l2(e5));
            else {
              const e5 = a2[n4];
              l2.fieldWrapper ? "google.protobuf.BytesValue" === l2.typeName ? o2[n4] = we(e5) : o2[n4] = e5 : o2[n4] = V(e5, l2) ? e5 : new l2(e5);
            }
        }
      }
    }, equals: (e3, t3, n3) => t3 === n3 || !(!t3 || !n3) && e3.fields.byMember().every((e4) => {
      const r2 = t3[e4.localName], o2 = n3[e4.localName];
      if (e4.repeated) {
        if (r2.length !== o2.length) return false;
        switch (e4.kind) {
          case "message":
            return r2.every((t4, n4) => e4.T.equals(t4, o2[n4]));
          case "scalar":
            return r2.every((t4, n4) => F(e4.T, t4, o2[n4]));
          case "enum":
            return r2.every((e5, t4) => F(v.INT32, e5, o2[t4]));
        }
        throw new Error(`repeated cannot contain ${e4.kind}`);
      }
      switch (e4.kind) {
        case "message":
          return e4.T.equals(r2, o2);
        case "enum":
          return F(v.INT32, r2, o2);
        case "scalar":
          return F(e4.T, r2, o2);
        case "oneof":
          if (r2.case !== o2.case) return false;
          const t4 = e4.findField(r2.case);
          if (void 0 === t4) return true;
          switch (t4.kind) {
            case "message":
              return t4.T.equals(r2.value, o2.value);
            case "enum":
              return F(v.INT32, r2.value, o2.value);
            case "scalar":
              return F(t4.T, r2.value, o2.value);
          }
          throw new Error(`oneof cannot contain ${t4.kind}`);
        case "map":
          const n4 = Object.keys(r2).concat(Object.keys(o2));
          switch (e4.V.kind) {
            case "message":
              const t5 = e4.V.T;
              return n4.every((e5) => t5.equals(r2[e5], o2[e5]));
            case "enum":
              return n4.every((e5) => F(v.INT32, r2[e5], o2[e5]));
            case "scalar":
              const a2 = e4.V.T;
              return n4.every((e5) => F(a2, r2[e5], o2[e5]));
          }
      }
    }), clone(e3) {
      const t3 = e3.getType(), n3 = new t3(), r2 = n3;
      for (const n4 of t3.fields.byMember()) {
        const t4 = e3[n4.localName];
        let o2;
        if (n4.repeated) o2 = t4.map(Se);
        else if ("map" == n4.kind) {
          o2 = r2[n4.localName];
          for (const [e4, n5] of Object.entries(t4)) o2[e4] = Se(n5);
        } else o2 = "oneof" == n4.kind ? n4.findField(t4.case) ? { case: t4.case, value: Se(t4.value) } : { case: void 0 } : Se(t4);
        r2[n4.localName] = o2;
      }
      for (const n4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(r2, n4.no, n4.wireType, n4.data);
      return n3;
    } }, newFieldList: t2, initFields: n2 }, makeMessageType(e3, t3, n3) {
      return (function(e4, t4, n4, r2) {
        const o2 = r2?.localName ?? t4.substring(t4.lastIndexOf(".") + 1), a2 = { [o2]: function(t5) {
          e4.util.initFields(this), e4.util.initPartial(t5, this);
        } }[o2];
        return Object.setPrototypeOf(a2.prototype, new g()), Object.assign(a2, { runtime: e4, typeName: t4, fields: e4.util.newFieldList(n4), fromBinary: (e5, t5) => new a2().fromBinary(e5, t5), fromJson: (e5, t5) => new a2().fromJson(e5, t5), fromJsonString: (e5, t5) => new a2().fromJsonString(e5, t5), equals: (t5, n5) => e4.util.equals(a2, t5, n5) }), a2;
      })(this, e3, t3, n3);
    }, makeEnum: f, makeEnumType: d, getEnumType: m, makeExtension(e3, t3, n3) {
      return /* @__PURE__ */ (function(e4, t4, n4, r2) {
        let o2;
        return { typeName: t4, extendee: n4, get field() {
          if (!o2) {
            const n5 = "function" == typeof r2 ? r2() : r2;
            n5.name = t4.split(".").pop(), n5.jsonName = `[${t4}]`, o2 = e4.util.newFieldList([n5]).list()[0];
          }
          return o2;
        }, runtime: e4 };
      })(this, e3, t3, n3);
    } };
  }
  class be {
    constructor(e2, t2) {
      this._fields = e2, this._normalizer = t2;
    }
    findJsonName(e2) {
      if (!this.jsonNames) {
        const e3 = {};
        for (const t2 of this.list()) e3[t2.jsonName] = e3[t2.name] = t2;
        this.jsonNames = e3;
      }
      return this.jsonNames[e2];
    }
    find(e2) {
      if (!this.numbers) {
        const e3 = {};
        for (const t2 of this.list()) e3[t2.no] = t2;
        this.numbers = e3;
      }
      return this.numbers[e2];
    }
    list() {
      return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
      return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e2, t2) => e2.no - t2.no)), this.numbersAsc;
    }
    byMember() {
      if (!this.members) {
        this.members = [];
        const e2 = this.members;
        let t2;
        for (const n2 of this.list()) n2.oneof ? n2.oneof !== t2 && (t2 = n2.oneof, e2.push(t2)) : e2.push(n2);
      }
      return this.members;
    }
  }
  function ke(e2, t2) {
    const n2 = Fe(e2);
    return t2 ? n2 : Ae(Ue(n2));
  }
  function ve(e2) {
    return ke(e2, false);
  }
  const Pe = Fe;
  function Fe(e2) {
    let t2 = false;
    const n2 = [];
    for (let r2 = 0; r2 < e2.length; r2++) {
      let o2 = e2.charAt(r2);
      switch (o2) {
        case "_":
          t2 = true;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          n2.push(o2), t2 = false;
          break;
        default:
          t2 && (t2 = false, o2 = o2.toUpperCase()), n2.push(o2);
      }
    }
    return n2.join("");
  }
  const De = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), Re = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Je = (e2) => `${e2}$`, Ue = (e2) => Re.has(e2) ? Je(e2) : e2, Ae = (e2) => De.has(e2) ? Je(e2) : e2;
  class Le {
    constructor(e2) {
      this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e2, this.localName = ve(e2);
    }
    addField(e2) {
      s(e2.oneof === this, `field ${e2.name} not one of ${this.name}`), this.fields.push(e2);
    }
    findField(e2) {
      if (!this._lookup) {
        this._lookup = /* @__PURE__ */ Object.create(null);
        for (let e3 = 0; e3 < this.fields.length; e3++) this._lookup[this.fields[e3].localName] = this.fields[e3];
      }
      return this._lookup[e2];
    }
  }
  function Be(e2, t2) {
    const n2 = [];
    let r2;
    for (const o2 of "function" == typeof e2 ? e2() : e2) {
      const e3 = o2;
      if (e3.localName = ke(o2.name, void 0 !== o2.oneof), e3.jsonName = o2.jsonName ?? Pe(o2.name), e3.repeated = o2.repeated ?? false, "scalar" == o2.kind && (e3.L = o2.L ?? P.BIGINT), e3.delimited = o2.delimited ?? false, e3.req = o2.req ?? false, e3.opt = o2.opt ?? false, void 0 === o2.packed && (e3.packed = !!t2 && ("enum" == o2.kind || "scalar" == o2.kind && o2.T != v.BYTES && o2.T != v.STRING)), void 0 !== o2.oneof) {
        const t3 = "string" == typeof o2.oneof ? o2.oneof : o2.oneof.name;
        r2 && r2.name == t3 || (r2 = new Le(t3)), e3.oneof = r2, r2.addField(e3);
      }
      n2.push(e3);
    }
    return n2;
  }
  const Me = Oe("proto3", (e2) => new be(e2, (e3) => Be(e3, true)), (e2) => {
    for (const t2 of e2.getType().fields.byMember()) {
      if (t2.opt) continue;
      const n2 = t2.localName, r2 = e2;
      if (t2.repeated) r2[n2] = [];
      else switch (t2.kind) {
        case "oneof":
          r2[n2] = { case: void 0 };
          break;
        case "enum":
          r2[n2] = 0;
          break;
        case "map":
          r2[n2] = {};
          break;
        case "scalar":
          r2[n2] = D(t2.T, t2.L);
      }
    }
  }), xe = Oe("proto2", (e2) => new be(e2, (e3) => Be(e3, false)), (e2) => {
    for (const t2 of e2.getType().fields.byMember()) {
      const n2 = t2.localName, r2 = e2;
      if (t2.repeated) r2[n2] = [];
      else switch (t2.kind) {
        case "oneof":
          r2[n2] = { case: void 0 };
          break;
        case "map":
          r2[n2] = {};
      }
    }
  });
  Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
  var Ye = ((e2) => (e2[e2.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e2[e2.EDITION_LEGACY = 900] = "EDITION_LEGACY", e2[e2.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e2[e2.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e2[e2.EDITION_2023 = 1e3] = "EDITION_2023", e2[e2.EDITION_2024 = 1001] = "EDITION_2024", e2[e2.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e2[e2.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e2[e2.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e2[e2.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e2[e2.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e2[e2.EDITION_MAX = 2147483647] = "EDITION_MAX", e2))(Ye || {});
  xe.util.setEnumType(Ye, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
  const Ce = class e2 extends g {
    constructor(e3) {
      super(), this.file = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ce.runtime = xe, Ce.typeName = "google.protobuf.FileDescriptorSet", Ce.fields = xe.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: Ve, repeated: true }]);
  const je = class e2 extends g {
    constructor(e3) {
      super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  je.runtime = xe, je.typeName = "google.protobuf.FileDescriptorProto", je.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: qe, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: lt, repeated: true }, { no: 6, name: "service", kind: "message", T: ft, repeated: true }, { no: 7, name: "extension", kind: "message", T: nt, repeated: true }, { no: 8, name: "options", kind: "message", T: yt, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: an, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  let Ve = je;
  const Ge = class e2 extends g {
    constructor(e3) {
      super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ge.runtime = xe, Ge.typeName = "google.protobuf.DescriptorProto", Ge.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: nt, repeated: true }, { no: 6, name: "extension", kind: "message", T: nt, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: Ge, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: lt, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: We, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: st, repeated: true }, { no: 7, name: "options", kind: "message", T: _t, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: Ke, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
  let qe = Ge;
  const $e = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  $e.runtime = xe, $e.typeName = "google.protobuf.DescriptorProto.ExtensionRange", $e.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: He, opt: true }]);
  let We = $e;
  const Xe = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Xe.runtime = xe, Xe.typeName = "google.protobuf.DescriptorProto.ReservedRange", Xe.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
  let Ke = Xe;
  const Ze = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], this.declaration = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ze.runtime = xe, Ze.typeName = "google.protobuf.ExtensionRangeOptions", Ze.fields = xe.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }, { no: 2, name: "declaration", kind: "message", T: et, repeated: true }, { no: 50, name: "features", kind: "message", T: Xt, opt: true }, { no: 3, name: "verification", kind: "enum", T: xe.getEnumType(ze), opt: true, default: 1 }]);
  let He = Ze;
  var ze = ((e2) => (e2[e2.DECLARATION = 0] = "DECLARATION", e2[e2.UNVERIFIED = 1] = "UNVERIFIED", e2))(ze || {});
  xe.util.setEnumType(ze, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
  const Qe = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Qe.runtime = xe, Qe.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Qe.fields = xe.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
  let et = Qe;
  const tt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  tt.runtime = xe, tt.typeName = "google.protobuf.FieldDescriptorProto", tt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: xe.getEnumType(ot), opt: true }, { no: 5, name: "type", kind: "enum", T: xe.getEnumType(rt), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: St, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
  let nt = tt;
  var rt = ((e2) => (e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.GROUP = 10] = "GROUP", e2[e2.MESSAGE = 11] = "MESSAGE", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.ENUM = 14] = "ENUM", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64", e2))(rt || {});
  xe.util.setEnumType(rt, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
  var ot = ((e2) => (e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REPEATED = 3] = "REPEATED", e2[e2.REQUIRED = 2] = "REQUIRED", e2))(ot || {});
  xe.util.setEnumType(ot, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
  const at = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  at.runtime = xe, at.typeName = "google.protobuf.OneofDescriptorProto", at.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Jt, opt: true }]);
  let st = at;
  const it = class e2 extends g {
    constructor(e3) {
      super(), this.value = [], this.reservedRange = [], this.reservedName = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  it.runtime = xe, it.typeName = "google.protobuf.EnumDescriptorProto", it.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: pt, repeated: true }, { no: 3, name: "options", kind: "message", T: At, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: ct, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
  let lt = it;
  const ut = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  ut.runtime = xe, ut.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", ut.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
  let ct = ut;
  const mt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  mt.runtime = xe, mt.typeName = "google.protobuf.EnumValueDescriptorProto", mt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Bt, opt: true }]);
  let pt = mt;
  const dt = class e2 extends g {
    constructor(e3) {
      super(), this.method = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  dt.runtime = xe, dt.typeName = "google.protobuf.ServiceDescriptorProto", dt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: gt, repeated: true }, { no: 3, name: "options", kind: "message", T: xt, opt: true }]);
  let ft = dt;
  const Tt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Tt.runtime = xe, Tt.typeName = "google.protobuf.MethodDescriptorProto", Tt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: Ct, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
  let gt = Tt;
  const Et = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Et.runtime = xe, Et.typeName = "google.protobuf.FileOptions", Et.fields = xe.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: xe.getEnumType(ht), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let yt = Et;
  var ht = ((e2) => (e2[e2.SPEED = 1] = "SPEED", e2[e2.CODE_SIZE = 2] = "CODE_SIZE", e2[e2.LITE_RUNTIME = 3] = "LITE_RUNTIME", e2))(ht || {});
  xe.util.setEnumType(ht, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
  const Nt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Nt.runtime = xe, Nt.typeName = "google.protobuf.MessageOptions", Nt.fields = xe.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let _t = Nt;
  const It = class e2 extends g {
    constructor(e3) {
      super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  It.runtime = xe, It.typeName = "google.protobuf.FieldOptions", It.fields = xe.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: xe.getEnumType(wt), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: xe.getEnumType(Ot), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: xe.getEnumType(bt), opt: true }, { no: 19, name: "targets", kind: "enum", T: xe.getEnumType(kt), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: Pt, repeated: true }, { no: 21, name: "features", kind: "message", T: Xt, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Dt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let St = It;
  var wt = ((e2) => (e2[e2.STRING = 0] = "STRING", e2[e2.CORD = 1] = "CORD", e2[e2.STRING_PIECE = 2] = "STRING_PIECE", e2))(wt || {});
  xe.util.setEnumType(wt, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
  var Ot = ((e2) => (e2[e2.JS_NORMAL = 0] = "JS_NORMAL", e2[e2.JS_STRING = 1] = "JS_STRING", e2[e2.JS_NUMBER = 2] = "JS_NUMBER", e2))(Ot || {});
  xe.util.setEnumType(Ot, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
  var bt = ((e2) => (e2[e2.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e2[e2.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e2[e2.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e2))(bt || {});
  xe.util.setEnumType(bt, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
  var kt = ((e2) => (e2[e2.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e2[e2.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e2[e2.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e2[e2.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e2[e2.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e2[e2.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e2[e2.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e2[e2.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e2[e2.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e2[e2.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e2))(kt || {});
  xe.util.setEnumType(kt, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
  const vt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  vt.runtime = xe, vt.typeName = "google.protobuf.FieldOptions.EditionDefault", vt.fields = xe.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
  let Pt = vt;
  const Ft = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ft.runtime = xe, Ft.typeName = "google.protobuf.FieldOptions.FeatureSupport", Ft.fields = xe.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  let Dt = Ft;
  const Rt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Rt.runtime = xe, Rt.typeName = "google.protobuf.OneofOptions", Rt.fields = xe.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Jt = Rt;
  const Ut = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ut.runtime = xe, Ut.typeName = "google.protobuf.EnumOptions", Ut.fields = xe.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let At = Ut;
  const Lt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Lt.runtime = xe, Lt.typeName = "google.protobuf.EnumValueOptions", Lt.fields = xe.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: Xt, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Dt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Bt = Lt;
  const Mt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Mt.runtime = xe, Mt.typeName = "google.protobuf.ServiceOptions", Mt.fields = xe.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: Xt, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let xt = Mt;
  const Yt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Yt.runtime = xe, Yt.typeName = "google.protobuf.MethodOptions", Yt.fields = xe.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: xe.getEnumType(jt), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Ct = Yt;
  var jt = ((e2) => (e2[e2.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e2[e2.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e2[e2.IDEMPOTENT = 2] = "IDEMPOTENT", e2))(jt || {});
  xe.util.setEnumType(jt, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
  const Vt = class e2 extends g {
    constructor(e3) {
      super(), this.name = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Vt.runtime = xe, Vt.typeName = "google.protobuf.UninterpretedOption", Vt.fields = xe.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: $t, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
  let Gt = Vt;
  const qt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  qt.runtime = xe, qt.typeName = "google.protobuf.UninterpretedOption.NamePart", qt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
  let $t = qt;
  const Wt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Wt.runtime = xe, Wt.typeName = "google.protobuf.FeatureSet", Wt.fields = xe.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: xe.getEnumType(Kt), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: xe.getEnumType(Zt), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: xe.getEnumType(Ht), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: xe.getEnumType(zt), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: xe.getEnumType(Qt), opt: true }, { no: 6, name: "json_format", kind: "enum", T: xe.getEnumType(en), opt: true }]);
  let Xt = Wt;
  var Kt = ((e2) => (e2[e2.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e2[e2.EXPLICIT = 1] = "EXPLICIT", e2[e2.IMPLICIT = 2] = "IMPLICIT", e2[e2.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e2))(Kt || {});
  xe.util.setEnumType(Kt, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
  var Zt = ((e2) => (e2[e2.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSED = 2] = "CLOSED", e2))(Zt || {});
  xe.util.setEnumType(Zt, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
  var Ht = ((e2) => (e2[e2.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e2[e2.PACKED = 1] = "PACKED", e2[e2.EXPANDED = 2] = "EXPANDED", e2))(Ht || {});
  xe.util.setEnumType(Ht, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
  var zt = ((e2) => (e2[e2.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e2[e2.VERIFY = 2] = "VERIFY", e2[e2.NONE = 3] = "NONE", e2))(zt || {});
  xe.util.setEnumType(zt, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
  var Qt = ((e2) => (e2[e2.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e2[e2.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e2[e2.DELIMITED = 2] = "DELIMITED", e2))(Qt || {});
  xe.util.setEnumType(Qt, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
  var en = ((e2) => (e2[e2.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e2[e2.ALLOW = 1] = "ALLOW", e2[e2.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e2))(en || {});
  xe.util.setEnumType(en, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
  const tn = class e2 extends g {
    constructor(e3) {
      super(), this.defaults = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  tn.runtime = xe, tn.typeName = "google.protobuf.FeatureSetDefaults", tn.fields = xe.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: rn, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  const nn = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  nn.runtime = xe, nn.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", nn.fields = xe.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: Xt, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: Xt, opt: true }]);
  let rn = nn;
  const on = class e2 extends g {
    constructor(e3) {
      super(), this.location = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  on.runtime = xe, on.typeName = "google.protobuf.SourceCodeInfo", on.fields = xe.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: ln, repeated: true }]);
  let an = on;
  const sn = class e2 extends g {
    constructor(e3) {
      super(), this.path = [], this.span = [], this.leadingDetachedComments = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  sn.runtime = xe, sn.typeName = "google.protobuf.SourceCodeInfo.Location", sn.fields = xe.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
  let ln = sn;
  const un = class e2 extends g {
    constructor(e3) {
      super(), this.annotation = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  un.runtime = xe, un.typeName = "google.protobuf.GeneratedCodeInfo", un.fields = xe.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: pn, repeated: true }]);
  let cn = un;
  const mn = class e2 extends g {
    constructor(e3) {
      super(), this.path = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  mn.runtime = xe, mn.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", mn.fields = xe.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: xe.getEnumType(dn), opt: true }]);
  let pn = mn;
  var dn = ((e2) => (e2[e2.NONE = 0] = "NONE", e2[e2.SET = 1] = "SET", e2[e2.ALIAS = 2] = "ALIAS", e2))(dn || {});
  xe.util.setEnumType(dn, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  rt.DOUBLE, v.DOUBLE, rt.FLOAT, v.FLOAT, rt.INT64, v.INT64, rt.UINT64, v.UINT64, rt.INT32, v.INT32, rt.FIXED64, v.FIXED64, rt.FIXED32, v.FIXED32, rt.BOOL, v.BOOL, rt.STRING, v.STRING, rt.GROUP, rt.MESSAGE, rt.BYTES, v.BYTES, rt.UINT32, v.UINT32, rt.ENUM, rt.SFIXED32, v.SFIXED32, rt.SFIXED64, v.SFIXED64, rt.SINT32, v.SINT32, rt.SINT64, v.SINT64;
  const fn = class e2 extends g {
    constructor(e3) {
      super(), this.seconds = k.zero, this.nanos = 0, Me.util.initPartial(e3, this);
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Me.json.debug(e3)}`);
      const n2 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
      if (!n2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
      const r2 = Date.parse(n2[1] + "-" + n2[2] + "-" + n2[3] + "T" + n2[4] + ":" + n2[5] + ":" + n2[6] + (n2[8] ? n2[8] : "Z"));
      if (Number.isNaN(r2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
      if (r2 < Date.parse("0001-01-01T00:00:00Z") || r2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
      return this.seconds = k.parse(r2 / 1e3), this.nanos = 0, n2[7] && (this.nanos = parseInt("1" + n2[7] + "0".repeat(9 - n2[7].length)) - 1e9), this;
    }
    toJson(e3) {
      const t2 = 1e3 * Number(this.seconds);
      if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
      if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
      let n2 = "Z";
      if (this.nanos > 0) {
        const e4 = (this.nanos + 1e9).toString().substring(1);
        n2 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
      }
      return new Date(t2).toISOString().replace(".000Z", n2);
    }
    toDate() {
      return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
      return e2.fromDate(/* @__PURE__ */ new Date());
    }
    static fromDate(t2) {
      const n2 = t2.getTime();
      return new e2({ seconds: k.parse(Math.floor(n2 / 1e3)), nanos: n2 % 1e3 * 1e6 });
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  fn.runtime = Me, fn.typeName = "google.protobuf.Timestamp", fn.fields = Me.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  const Tn = class e2 extends g {
    constructor(e3) {
      super(), this.seconds = k.zero, this.nanos = 0, Me.util.initPartial(e3, this);
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      const n2 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
      if (null === n2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      const r2 = Number(n2[1]);
      if (r2 > 315576e6 || r2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      if (this.seconds = k.parse(r2), "string" == typeof n2[2]) {
        const e4 = n2[2] + "0".repeat(9 - n2[2].length);
        this.nanos = parseInt(e4), (r2 < 0 || Object.is(r2, -0)) && (this.nanos = -this.nanos);
      }
      return this;
    }
    toJson(e3) {
      if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
      let t2 = this.seconds.toString();
      if (0 !== this.nanos) {
        let e4 = Math.abs(this.nanos).toString();
        e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), t2 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (t2 = "-" + t2);
      }
      return t2 + "s";
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Tn.runtime = Me, Tn.typeName = "google.protobuf.Duration", Tn.fields = Me.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  const gn = class e2 extends g {
    constructor(e3) {
      super(), this.typeUrl = "", this.value = new Uint8Array(0), Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      if ("" === this.typeUrl) return {};
      const t2 = this.typeUrlToName(this.typeUrl), n2 = e3?.typeRegistry?.findMessage(t2);
      if (!n2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
      let r2 = n2.fromBinary(this.value).toJson(e3);
      return (t2.startsWith("google.protobuf.") || null === r2 || Array.isArray(r2) || "object" != typeof r2) && (r2 = { value: r2 }), r2["@type"] = this.typeUrl, r2;
    }
    fromJson(e3, t2) {
      if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
      if (0 == Object.keys(e3).length) return this;
      const n2 = e3["@type"];
      if ("string" != typeof n2 || "" == n2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
      const r2 = this.typeUrlToName(n2), o2 = t2?.typeRegistry?.findMessage(r2);
      if (!o2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n2} is not in the type registry`);
      let a2;
      if (r2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) a2 = o2.fromJson(e3.value, t2);
      else {
        const n3 = Object.assign({}, e3);
        delete n3["@type"], a2 = o2.fromJson(n3, t2);
      }
      return this.packFrom(a2), this;
    }
    packFrom(e3) {
      this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
    }
    unpackTo(e3) {
      return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
    }
    unpack(e3) {
      if ("" === this.typeUrl) return;
      const t2 = e3.findMessage(this.typeUrlToName(this.typeUrl));
      return t2 ? t2.fromBinary(this.value) : void 0;
    }
    is(e3) {
      if ("" === this.typeUrl) return false;
      const t2 = this.typeUrlToName(this.typeUrl);
      let n2 = "";
      return n2 = "string" == typeof e3 ? e3 : e3.typeName, t2 === n2;
    }
    typeNameToUrl(e3) {
      return `type.googleapis.com/${e3}`;
    }
    typeUrlToName(e3) {
      if (!e3.length) throw new Error(`invalid type url: ${e3}`);
      const t2 = e3.lastIndexOf("/"), n2 = t2 >= 0 ? e3.substring(t2 + 1) : e3;
      if (!n2.length) throw new Error(`invalid type url: ${e3}`);
      return n2;
    }
    static pack(t2) {
      const n2 = new e2();
      return n2.packFrom(t2), n2;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  gn.runtime = Me, gn.typeName = "google.protobuf.Any", gn.fields = Me.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  let En = gn;
  const yn = class e2 extends g {
    constructor(e3) {
      super(), Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  yn.runtime = Me, yn.typeName = "google.protobuf.Empty", yn.fields = Me.util.newFieldList(() => []);
  const hn = class e2 extends g {
    constructor(e3) {
      super(), this.paths = [], Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return this.paths.map((e4) => {
        if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
        return (function(e5) {
          let t2 = false;
          const n2 = [];
          for (let r2 = 0; r2 < e5.length; r2++) {
            let o2 = e5.charAt(r2);
            switch (o2) {
              case "_":
                t2 = true;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                n2.push(o2), t2 = false;
                break;
              default:
                t2 && (t2 = false, o2 = o2.toUpperCase()), n2.push(o2);
            }
          }
          return n2.join("");
        })(e4);
      }).join(",");
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Me.json.debug(e3));
      if ("" === e3) return this;
      return this.paths = e3.split(",").map(function(e4) {
        if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
        const t3 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
        return "_" === t3[0] ? t3.substring(1) : t3;
      }), this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  hn.runtime = Me, hn.typeName = "google.protobuf.FieldMask", hn.fields = Me.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  var Nn = ((e2) => (e2[e2.NULL_VALUE = 0] = "NULL_VALUE", e2))(Nn || {});
  Me.util.setEnumType(Nn, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
  const _n = class e2 extends g {
    constructor(e3) {
      super(), this.fields = {}, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      const t2 = {};
      for (const [n2, r2] of Object.entries(this.fields)) t2[n2] = r2.toJson(e3);
      return t2;
    }
    fromJson(e3, t2) {
      if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + Me.json.debug(e3));
      for (const [t3, n2] of Object.entries(e3)) this.fields[t3] = wn.fromJson(n2);
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  _n.runtime = Me, _n.typeName = "google.protobuf.Struct", _n.fields = Me.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: wn } }]);
  let In = _n;
  const Sn = class e2 extends g {
    constructor(e3) {
      super(), this.kind = { case: void 0 }, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      switch (this.kind.case) {
        case "nullValue":
          return null;
        case "numberValue":
          if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
          return this.kind.value;
        case "boolValue":
        case "stringValue":
          return this.kind.value;
        case "structValue":
        case "listValue":
          return this.kind.value.toJson({ ...e3, emitDefaultValues: true });
      }
      throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(e3, t2) {
      switch (typeof e3) {
        case "number":
          this.kind = { case: "numberValue", value: e3 };
          break;
        case "string":
          this.kind = { case: "stringValue", value: e3 };
          break;
        case "boolean":
          this.kind = { case: "boolValue", value: e3 };
          break;
        case "object":
          null === e3 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e3) ? this.kind = { case: "listValue", value: bn.fromJson(e3) } : this.kind = { case: "structValue", value: In.fromJson(e3) };
          break;
        default:
          throw new Error("cannot decode google.protobuf.Value from JSON " + Me.json.debug(e3));
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Sn.runtime = Me, Sn.typeName = "google.protobuf.Value", Sn.fields = Me.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: Me.getEnumType(Nn), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: In, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: bn, oneof: "kind" }]);
  let wn = Sn;
  const On = class e2 extends g {
    constructor(e3) {
      super(), this.values = [], Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return this.values.map((e4) => e4.toJson());
    }
    fromJson(e3, t2) {
      if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + Me.json.debug(e3));
      for (let t3 of e3) this.values.push(wn.fromJson(t3));
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  On.runtime = Me, On.typeName = "google.protobuf.ListValue", On.fields = Me.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: wn, repeated: true }]);
  let bn = On;
  const kn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.DOUBLE, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.DOUBLE, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  kn.runtime = Me, kn.typeName = "google.protobuf.DoubleValue", kn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), kn.fieldWrapper = { wrapField: (e2) => new kn({ value: e2 }), unwrapField: (e2) => e2.value };
  const vn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.FLOAT, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.FLOAT, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.FloatValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  vn.runtime = Me, vn.typeName = "google.protobuf.FloatValue", vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), vn.fieldWrapper = { wrapField: (e2) => new vn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Pn = class e2 extends g {
    constructor(e3) {
      super(), this.value = k.zero, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.INT64, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.INT64, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.Int64Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Pn.runtime = Me, Pn.typeName = "google.protobuf.Int64Value", Pn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), Pn.fieldWrapper = { wrapField: (e2) => new Pn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Fn = class e2 extends g {
    constructor(e3) {
      super(), this.value = k.zero, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.UINT64, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.UINT64, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Fn.runtime = Me, Fn.typeName = "google.protobuf.UInt64Value", Fn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), Fn.fieldWrapper = { wrapField: (e2) => new Fn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Dn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.INT32, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.INT32, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.Int32Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Dn.runtime = Me, Dn.typeName = "google.protobuf.Int32Value", Dn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Dn.fieldWrapper = { wrapField: (e2) => new Dn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Rn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.UINT32, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.UINT32, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Rn.runtime = Me, Rn.typeName = "google.protobuf.UInt32Value", Rn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), Rn.fieldWrapper = { wrapField: (e2) => new Rn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Jn = class e2 extends g {
    constructor(e3) {
      super(), this.value = false, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.BOOL, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.BOOL, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.BoolValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Jn.runtime = Me, Jn.typeName = "google.protobuf.BoolValue", Jn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), Jn.fieldWrapper = { wrapField: (e2) => new Jn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Un = class e2 extends g {
    constructor(e3) {
      super(), this.value = "", Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.STRING, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.STRING, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.StringValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Un.runtime = Me, Un.typeName = "google.protobuf.StringValue", Un.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Un.fieldWrapper = { wrapField: (e2) => new Un({ value: e2 }), unwrapField: (e2) => e2.value };
  const An = class e2 extends g {
    constructor(e3) {
      super(), this.value = new Uint8Array(0), Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.BYTES, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.BYTES, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.BytesValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  An.runtime = Me, An.typeName = "google.protobuf.BytesValue", An.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), An.fieldWrapper = { wrapField: (e2) => new An({ value: e2 }), unwrapField: (e2) => e2.value };
  m(Nn);
  const Ln = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ln.runtime = xe, Ln.typeName = "google.protobuf.compiler.Version", Ln.fields = xe.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
  let Bn = Ln;
  const Mn = class e2 extends g {
    constructor(e3) {
      super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Mn.runtime = xe, Mn.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Mn.fields = xe.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: Ve, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: Ve, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Bn, opt: true }]);
  const xn = class e2 extends g {
    constructor(e3) {
      super(), this.file = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  xn.runtime = xe, xn.typeName = "google.protobuf.compiler.CodeGeneratorResponse", xn.fields = xe.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: jn, repeated: true }]);
  var Yn = ((e2) => (e2[e2.NONE = 0] = "NONE", e2[e2.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e2[e2.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e2))(Yn || {});
  xe.util.setEnumType(Yn, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
  const Cn = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Cn.runtime = xe, Cn.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Cn.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: cn, opt: true }]);
  let jn = Cn;
  const Vn = class e2 extends g {
    constructor(e3) {
      super(), this.fileName = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Vn.runtime = Me, Vn.typeName = "google.protobuf.SourceContext", Vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  let Gn = Vn;
  var qn = ((e2) => (e2[e2.PROTO2 = 0] = "PROTO2", e2[e2.PROTO3 = 1] = "PROTO3", e2[e2.EDITIONS = 2] = "EDITIONS", e2))(qn || {});
  Me.util.setEnumType(qn, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
  const $n = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  $n.runtime = Me, $n.typeName = "google.protobuf.Type", $n.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Xn, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: tr, repeated: true }, { no: 5, name: "source_context", kind: "message", T: Gn }, { no: 6, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
  const Wn = class e2 extends g {
    constructor(e3) {
      super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Wn.runtime = Me, Wn.typeName = "google.protobuf.Field", Wn.fields = Me.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: Me.getEnumType(Kn) }, { no: 2, name: "cardinality", kind: "enum", T: Me.getEnumType(Zn) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: tr, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
  let Xn = Wn;
  var Kn = ((e2) => (e2[e2.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e2[e2.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e2[e2.TYPE_FLOAT = 2] = "TYPE_FLOAT", e2[e2.TYPE_INT64 = 3] = "TYPE_INT64", e2[e2.TYPE_UINT64 = 4] = "TYPE_UINT64", e2[e2.TYPE_INT32 = 5] = "TYPE_INT32", e2[e2.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e2[e2.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e2[e2.TYPE_BOOL = 8] = "TYPE_BOOL", e2[e2.TYPE_STRING = 9] = "TYPE_STRING", e2[e2.TYPE_GROUP = 10] = "TYPE_GROUP", e2[e2.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e2[e2.TYPE_BYTES = 12] = "TYPE_BYTES", e2[e2.TYPE_UINT32 = 13] = "TYPE_UINT32", e2[e2.TYPE_ENUM = 14] = "TYPE_ENUM", e2[e2.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e2[e2.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e2[e2.TYPE_SINT32 = 17] = "TYPE_SINT32", e2[e2.TYPE_SINT64 = 18] = "TYPE_SINT64", e2))(Kn || {});
  Me.util.setEnumType(Kn, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
  var Zn = ((e2) => (e2[e2.UNKNOWN = 0] = "UNKNOWN", e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REQUIRED = 2] = "REQUIRED", e2[e2.REPEATED = 3] = "REPEATED", e2))(Zn || {});
  Me.util.setEnumType(Zn, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
  const Hn = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Hn.runtime = Me, Hn.typeName = "google.protobuf.Enum", Hn.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: Qn, repeated: true }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }, { no: 4, name: "source_context", kind: "message", T: Gn }, { no: 5, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
  const zn = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.number = 0, this.options = [], Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  zn.runtime = Me, zn.typeName = "google.protobuf.EnumValue", zn.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }]);
  let Qn = zn;
  const er = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  er.runtime = Me, er.typeName = "google.protobuf.Option", er.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: En }]);
  let tr = er;
  const nr = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = qn.PROTO2, Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  nr.runtime = Me, nr.typeName = "google.protobuf.Api", nr.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: or, repeated: true }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: Gn }, { no: 6, name: "mixins", kind: "message", T: sr, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }]);
  const rr = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = qn.PROTO2, Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  rr.runtime = Me, rr.typeName = "google.protobuf.Method", rr.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: tr, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }]);
  let or = rr;
  const ar = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.root = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  ar.runtime = Me, ar.typeName = "google.protobuf.Mixin", ar.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  let sr = ar;
  const ir = Me.makeMessageType("aiserver.v1.ErrorDetails", () => [{ no: 1, name: "error", kind: "enum", T: Me.getEnumType(lr) }, { no: 2, name: "details", kind: "message", T: ur }, { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: true }]), lr = Me.makeEnum("aiserver.v1.ErrorDetails.Error", [{ no: 0, name: "ERROR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "ERROR_BAD_API_KEY", localName: "BAD_API_KEY" }, { no: 42, name: "ERROR_BAD_USER_API_KEY", localName: "BAD_USER_API_KEY" }, { no: 2, name: "ERROR_NOT_LOGGED_IN", localName: "NOT_LOGGED_IN" }, { no: 3, name: "ERROR_INVALID_AUTH_ID", localName: "INVALID_AUTH_ID" }, { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS", localName: "NOT_HIGH_ENOUGH_PERMISSIONS" }, { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN", localName: "AGENT_REQUIRES_LOGIN" }, { no: 5, name: "ERROR_BAD_MODEL_NAME", localName: "BAD_MODEL_NAME" }, { no: 39, name: "ERROR_NOT_FOUND", localName: "NOT_FOUND" }, { no: 40, name: "ERROR_DEPRECATED", localName: "DEPRECATED" }, { no: 6, name: "ERROR_USER_NOT_FOUND", localName: "USER_NOT_FOUND" }, { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED", localName: "FREE_USER_RATE_LIMIT_EXCEEDED" }, { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED", localName: "PRO_USER_RATE_LIMIT_EXCEEDED" }, { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT", localName: "FREE_USER_USAGE_LIMIT" }, { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT", localName: "PRO_USER_USAGE_LIMIT" }, { no: 41, name: "ERROR_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED" }, { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND", localName: "AUTH_TOKEN_NOT_FOUND" }, { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED", localName: "AUTH_TOKEN_EXPIRED" }, { no: 13, name: "ERROR_OPENAI", localName: "OPENAI" }, { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED", localName: "OPENAI_RATE_LIMIT_EXCEEDED" }, { no: 20, name: "ERROR_MAX_TOKENS", localName: "MAX_TOKENS" }, { no: 23, name: "ERROR_PRO_USER_ONLY", localName: "PRO_USER_ONLY" }, { no: 21, name: "ERROR_USER_ABORTED_REQUEST", localName: "USER_ABORTED_REQUEST" }, { no: 25, name: "ERROR_TIMEOUT", localName: "TIMEOUT" }, { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED", localName: "GENERIC_RATE_LIMIT_EXCEEDED" }, { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT", localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT" }, { no: 29, name: "ERROR_CUSTOM_MESSAGE", localName: "CUSTOM_MESSAGE" }, { no: 30, name: "ERROR_OUTDATED_CLIENT", localName: "OUTDATED_CLIENT" }, { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE", localName: "CLAUDE_IMAGE_TOO_LARGE" }, { no: 33, name: "ERROR_FILE_NOT_FOUND", localName: "FILE_NOT_FOUND" }, { no: 34, name: "ERROR_API_KEY_RATE_LIMIT", localName: "API_KEY_RATE_LIMIT" }, { no: 35, name: "ERROR_DEBOUNCED", localName: "DEBOUNCED" }, { no: 36, name: "ERROR_BAD_REQUEST", localName: "BAD_REQUEST" }, { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" }, { no: 38, name: "ERROR_UNAUTHORIZED", localName: "UNAUTHORIZED" }, { no: 43, name: "ERROR_CONVERSATION_TOO_LONG", localName: "CONVERSATION_TOO_LONG" }, { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED", localName: "USAGE_PRICING_REQUIRED" }, { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE", localName: "USAGE_PRICING_REQUIRED_CHANGEABLE" }, { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS", localName: "GITHUB_NO_USER_CREDENTIALS" }, { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS", localName: "GITHUB_USER_NO_ACCESS" }, { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS", localName: "GITHUB_APP_NO_ACCESS" }, { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS", localName: "GITHUB_MULTIPLE_OWNERS" }, { no: 50, name: "ERROR_RATE_LIMITED", localName: "RATE_LIMITED" }, { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE", localName: "RATE_LIMITED_CHANGEABLE" }, { no: 52, name: "ERROR_CUSTOM", localName: "CUSTOM" }, { no: 53, name: "ERROR_HOOKS_BLOCKED", localName: "HOOKS_BLOCKED" }, { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED", localName: "SUSPICIOUS_USAGE_BLOCKED" }, { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT", localName: "EXTENSION_HOST_TIMEOUT" }, { no: 56, name: "ERROR_NETWORK_ERROR", localName: "NETWORK_ERROR" }, { no: 57, name: "ERROR_PROVIDER_ERROR", localName: "PROVIDER_ERROR" }, { no: 58, name: "ERROR_MODEL_BLOCKED", localName: "MODEL_BLOCKED" }, { no: 59, name: "ERROR_INTERNAL", localName: "INTERNAL" }, { no: 60, name: "ERROR_MAX_MODE_REQUIRED", localName: "MAX_MODE_REQUIRED" }, { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED", localName: "MODEL_NO_LONGER_SUPPORTED" }, { no: 62, name: "ERROR_PRICING_WARNING", localName: "PRICING_WARNING" }, { no: 63, name: "ERROR_SLOW_POOL", localName: "SLOW_POOL" }, { no: 64, name: "ERROR_UNSUPPORTED_REGION", localName: "UNSUPPORTED_REGION" }, { no: 65, name: "ERROR_ACCOUNT_CLOSED", localName: "ACCOUNT_CLOSED" }, { no: 66, name: "ERROR_TENANT_RESTRICTION_VIOLATION", localName: "TENANT_RESTRICTION_VIOLATION" }]), ur = Me.makeMessageType("aiserver.v1.CustomErrorDetails", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "detail", kind: "scalar", T: 9 }, { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: true }, { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: true }, { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: true }, { no: 8, name: "buttons", kind: "message", T: pr, repeated: true }, { no: 7, name: "additional_info", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "plan_choices", kind: "message", T: mr, repeated: true }, { no: 10, name: "analytics_metadata", kind: "message", T: cr, opt: true }]), cr = Me.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", () => [{ no: 1, name: "action_required", kind: "scalar", T: 9, opt: true }]), mr = Me.makeMessageType("aiserver.v1.PlanChoice", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "value", kind: "scalar", T: 9 }]), pr = Me.makeMessageType("aiserver.v1.ErrorButton", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "upgrade", kind: "message", T: Er, oneof: "action" }, { no: 3, name: "switch_model", kind: "message", T: yr, oneof: "action" }, { no: 4, name: "configure_spend_limit", kind: "message", T: Nr, oneof: "action" }, { no: 5, name: "url", kind: "message", T: _r, oneof: "action" }, { no: 6, name: "upgrade_choice", kind: "message", T: gr, oneof: "action" }, { no: 7, name: "dashboard_action", kind: "message", T: Tr, oneof: "action" }, { no: 8, name: "reload_window", kind: "message", T: fr, oneof: "action" }, { no: 9, name: "client_action", kind: "message", T: dr, oneof: "action" }]), dr = Me.makeMessageType("aiserver.v1.ClientAction", () => [{ no: 1, name: "command_id", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), fr = Me.makeMessageType("aiserver.v1.ReloadWindowAction", []), Tr = Me.makeMessageType("aiserver.v1.DashboardAction", () => [{ no: 1, name: "action", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 3, name: "success_message", kind: "scalar", T: 9, opt: true }]), gr = Me.makeMessageType("aiserver.v1.UpgradeChoice", []), Er = Me.makeMessageType("aiserver.v1.UpgradeAction", () => [{ no: 1, name: "membership_to_upgrade_to", kind: "scalar", T: 9 }, { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: true }, { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: true }, { no: 4, name: "dashboard_action", kind: "message", T: Tr, opt: true }]), yr = Me.makeMessageType("aiserver.v1.SwitchModelAction", () => [{ no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: true }, { no: 2, name: "parameters", kind: "message", T: hr, repeated: true }, { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }]), hr = Me.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "SwitchModelAction_ModelParameterValue" }), Nr = Me.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", () => [{ no: 1, name: "confirm_label", kind: "scalar", T: 9 }]), _r = Me.makeMessageType("aiserver.v1.UrlAction", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), Ir = Me.makeMessageType("aiserver.v1.GetCursorServerUrlResponse", () => [{ no: 1, name: "host", kind: "scalar", T: 9 }, { no: 2, name: "port", kind: "scalar", T: 5 }, { no: 3, name: "connection_token", kind: "scalar", T: 9 }, { no: 4, name: "headers", kind: "message", T: Sr, repeated: true }, { no: 5, name: "upgrade_path", kind: "scalar", T: 9 }]), Sr = Me.makeMessageType("aiserver.v1.GetCursorServerUrlResponse.Header", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "GetCursorServerUrlResponse_Header" });
  function wr(e2) {
    return void 0 !== e2.upgradePath && "" !== e2.upgradePath;
  }
  var Or;
  function br(e2) {
    const t2 = Or[e2];
    return "string" != typeof t2 ? e2.toString() : t2[0].toLowerCase() + t2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3.toLowerCase());
  }
  !(function(e2) {
    e2[e2.Canceled = 1] = "Canceled", e2[e2.Unknown = 2] = "Unknown", e2[e2.InvalidArgument = 3] = "InvalidArgument", e2[e2.DeadlineExceeded = 4] = "DeadlineExceeded", e2[e2.NotFound = 5] = "NotFound", e2[e2.AlreadyExists = 6] = "AlreadyExists", e2[e2.PermissionDenied = 7] = "PermissionDenied", e2[e2.ResourceExhausted = 8] = "ResourceExhausted", e2[e2.FailedPrecondition = 9] = "FailedPrecondition", e2[e2.Aborted = 10] = "Aborted", e2[e2.OutOfRange = 11] = "OutOfRange", e2[e2.Unimplemented = 12] = "Unimplemented", e2[e2.Internal = 13] = "Internal", e2[e2.Unavailable = 14] = "Unavailable", e2[e2.DataLoss = 15] = "DataLoss", e2[e2.Unauthenticated = 16] = "Unauthenticated";
  })(Or || (Or = {}));
  class kr extends Error {
    constructor(e2, t2 = Or.Unknown, n2, r2, o2) {
      super((function(e3, t3) {
        return e3.length ? `[${br(t3)}] ${e3}` : `[${br(t3)}]`;
      })(e2, t2)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e2, this.code = t2, this.metadata = new Headers(null != n2 ? n2 : {}), this.details = null != r2 ? r2 : [], this.cause = o2;
    }
    static from(e2, t2 = Or.Unknown) {
      return e2 instanceof kr ? e2 : e2 instanceof Error ? "AbortError" == e2.name ? new kr(e2.message, Or.Canceled) : new kr(e2.message, t2, void 0, void 0, e2) : new kr(String(e2), t2, void 0, void 0, e2);
    }
    static [Symbol.hasInstance](e2) {
      return e2 instanceof Error && (Object.getPrototypeOf(e2) === kr.prototype || "ConnectError" === e2.name && "code" in e2 && "number" == typeof e2.code && "metadata" in e2 && "details" in e2 && Array.isArray(e2.details) && "rawMessage" in e2 && "string" == typeof e2.rawMessage && "cause" in e2);
    }
    findDetails(e2) {
      const t2 = "typeName" in e2 ? { findMessage: (t3) => t3 === e2.typeName ? e2 : void 0 } : e2, n2 = [];
      for (const e3 of this.details) {
        if ("getType" in e3) {
          t2.findMessage(e3.getType().typeName) && n2.push(e3);
          continue;
        }
        const r2 = t2.findMessage(e3.type);
        if (r2) try {
          n2.push(r2.fromBinary(e3.value));
        } catch (e4) {
        }
      }
      return n2;
    }
  }
  const vr = [0, 5e3, 5e3, 1e4, 1e4, 1e4, 3e4, 3e4, 6e4], Pr = 18e4, Fr = 63e4;
  function Dr(e2) {
    return vr[Math.min(e2, vr.length - 1)];
  }
  function Rr(e2, t2 = 0) {
    const n2 = Jr(e2);
    return void 0 !== n2 && t2 < n2;
  }
  function Jr(e2) {
    const t2 = Ur(e2);
    if (void 0 !== t2) return (function(e3) {
      switch (e3) {
        case "NO_POD_INFO_YET":
          return 1e4;
        case "NO_VM_CONNECTION_INFO_YET":
          return 3e4;
        case "EXEC_DAEMON_NOT_READY":
        case "POD_REPLACEMENT_IN_PROGRESS":
        case "WORKER_OFFLINE":
          return Pr;
        case "POD_MIGRATING":
          return Fr;
        default:
          return;
      }
    })(t2);
    const n2 = Br(e2);
    return n2 === Or.DeadlineExceeded || n2 === Or.Unavailable ? Pr : void 0;
  }
  function Ur(e2) {
    const t2 = e2 instanceof kr ? e2.findDetails(ir)[0] : void 0, n2 = t2?.details?.additionalInfo?.cursorServerUrlRetryReason;
    if (void 0 !== n2 && "" !== n2) return n2;
    const r2 = t2?.details?.additionalInfo?.cursorServerUrlReason;
    if (void 0 !== r2 && "" !== r2) return r2;
    const o2 = e2 instanceof Error ? e2.message : void 0, a2 = o2 ? /cursorServerUrlRetryReason=([A-Z_]+)/.exec(o2) : null;
    if (a2?.[1]) return a2[1];
    const s2 = o2 ? /cursorServerUrlReason=([A-Z_]+)/.exec(o2) : null;
    return s2?.[1];
  }
  const Ar = /* @__PURE__ */ new Set(["WORKER_UPDATE_REQUIRED"]);
  async function Lr(e2) {
    await new Promise((t2) => setTimeout(t2, e2));
  }
  function Br(e2) {
    if (e2 instanceof kr) return e2.code;
    if ("object" == typeof e2 && null !== e2 && "code" in e2) {
      const t3 = e2.code;
      if ("number" == typeof t3) return (function(e3) {
        switch (e3) {
          case Or.InvalidArgument:
            return Or.InvalidArgument;
          case Or.DeadlineExceeded:
            return Or.DeadlineExceeded;
          case Or.Unavailable:
            return Or.Unavailable;
          case Or.Internal:
            return Or.Internal;
          case Or.Unknown:
            return Or.Unknown;
          case Or.NotFound:
            return Or.NotFound;
          default:
            return;
        }
      })(t3);
    }
    if (!(e2 instanceof Error)) return;
    const t2 = /^\[([a-z_]+)\](?:\s|$)/.exec(e2.message);
    if (t2) return Mr(t2[1]);
    const n2 = "string" == typeof e2.stack ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(e2.stack) : null;
    return n2 ? Mr(n2[1]) : void 0;
  }
  function Mr(e2) {
    switch (e2) {
      case "invalid_argument":
        return Or.InvalidArgument;
      case "deadline_exceeded":
        return Or.DeadlineExceeded;
      case "unavailable":
        return Or.Unavailable;
      case "internal":
        return Or.Internal;
      case "unknown":
        return Or.Unknown;
      case "not_found":
        return Or.NotFound;
      default:
        return;
    }
  }
  function xr(e2) {
    return e2 instanceof Error && "CursorSocketTransient" === e2.code ? o.RemoteAuthorityResolverError.TemporarilyNotAvailable(e2.message) : e2;
  }
  function Yr(e2) {
    if ((function(e3) {
      return Br(e3) === Or.NotFound;
    })(e2)) return o.RemoteAuthorityResolverError.NotAvailable("This cloud agent's environment is no longer available.");
    const t2 = (function(e3) {
      const t3 = Ur(e3);
      if (void 0 === t3 || !Ar.has(t3)) return;
      const n2 = e3 instanceof kr ? e3.findDetails(ir)[0]?.details?.detail : void 0;
      if (void 0 !== n2 && "" !== n2) return n2;
      const r2 = (e3 instanceof Error ? e3.message : String(e3)).replace(/^\[[a-z_]+\]\s*/, "").replace(/\s*\(cursorServerUrlReason=[A-Z_]+\)\s*$/, "").trim();
      return "" !== r2 ? r2 : "This cloud agent's workspace is unavailable on its self-hosted worker.";
    })(e2);
    return void 0 !== t2 ? o.RemoteAuthorityResolverError.NotAvailable(t2) : e2;
  }
  function Cr(e2) {
    if (!(function(e3) {
      const t3 = Br(e3);
      return t3 === Or.Internal || t3 === Or.Unknown || t3 === Or.DeadlineExceeded || t3 === Or.Unavailable;
    })(e2)) return e2;
    const t2 = e2 instanceof Error ? e2.message : String(e2);
    return o.RemoteAuthorityResolverError.TemporarilyNotAvailable(t2);
  }
  let jr;
  function Vr(...e2) {
    const t2 = e2.map(String).join(" ");
    console.log(`[cursor-resolver]  ${t2}`), jr?.appendLine(`[INFO]  ${t2}`);
  }
  function Gr(...e2) {
    const t2 = e2.map(String).join(" ");
    jr?.appendLine(`[ERROR] ${t2}`);
  }
  class qr {
    constructor(e2, t2) {
      this.connectionTokenProvider = e2, this.staleCursorServerUrlBcIds = /* @__PURE__ */ new Set(), this.alwaysShowPortsView = true, (function(e3) {
        jr = e3;
      })(t2), Vr("RemoteAuthorityResolver constructor");
    }
    createManagedResolvedAuthority(e2, t2, n2) {
      return Object.assign(new o.ManagedResolvedAuthority(e2, t2, n2), { skipCreateInspectTunnel: true, isTrusted: true });
    }
    async showCandidatePort(e2, t2, n2) {
      return !(function(e3) {
        return !!(function(e4) {
          return e4 >= 26e3 && e4 <= 26999;
        })(e3) || e3 >= 5870 && e3 <= 5890 || 2375 === e3 || 5901 === e3 || 50052 === e3;
      })(t2) || (Vr(`Filtering out reserved/internal port ${t2} from candidates`), false);
    }
    async fetchCursorServerUrl({ bcId: e2, commit: t2, initialUseCache: n2, progress: r2 }) {
      return (async function({ getCursorServerUrl: e3, initialUseCache: t3, sleep: n3 = Lr, onRetry: r3 }) {
        let o2 = t3;
        const a2 = Date.now();
        for (let t4 = 0; ; t4++) try {
          return await e3(o2);
        } catch (e4) {
          const s2 = Date.now() - a2;
          if (!Rr(e4, s2)) throw e4;
          const i2 = Jr(e4), l2 = void 0 !== i2 ? i2 - s2 : 0, u2 = Math.min(Dr(t4), Math.max(0, l2));
          r3?.(e4, t4 + 1, u2), u2 > 0 && await n3(u2), o2 = false;
        }
      })({ initialUseCache: n2, getCursorServerUrl: (n3) => Xr("getCursorServerUrl", async () => {
        try {
          return await this.connectionTokenProvider.getOrCreateCursorServerUrl(e2, t2, n3);
        } catch (e3) {
          throw Gr("Error getting cursor server url", e3), e3;
        }
      }), onRetry: (e3, t3, n3) => {
        const o2 = (function(e4) {
          if ("POD_MIGRATING" !== Ur(e4)) return;
          const t4 = e4 instanceof kr ? e4.findDetails(ir)[0]?.details?.detail.trim() : void 0;
          if (t4) return t4;
          const n4 = e4 instanceof kr ? e4.rawMessage : e4 instanceof Error ? e4.message : void 0, r3 = n4?.replace(/\s*(?:\(cursorServerUrl(?:Retry)?Reason=[A-Z_]+\)\s*)+$/, "").trim();
          return r3 || void 0;
        })(e3);
        void 0 !== o2 && r2?.report({ kind: "retrying", phase: "connect", attempt: t3, detail: o2 });
        Vr("Error getting cursor server url,", n3 > 0 ? `retrying in ${n3 / 1e3}s` : "retrying immediately", `attempt=${t3}`, e3);
      } });
    }
    async resolve(e2, t2, n2) {
      return Xr("resolve", async () => {
        Vr("resolve", e2, `resolveAttempt=${t2.resolveAttempt}`), n2?.report({ phase: "init" });
        const r2 = (function(e3, t3) {
          const n3 = e3.indexOf("+"), r3 = e3.substring(n3 + 1).trim();
          if (-1 === n3 || 0 === r3.length) throw new Error("No bcId found in authority");
          if (!r3.startsWith("{")) return { kind: "bcId", bcId: r3 };
          if (!t3.allowInlineJson) throw new Error("Inline remote authority is not supported");
          let o2;
          try {
            o2 = Ir.fromJsonString(r3, { ignoreUnknownFields: true });
          } catch {
            throw new Error("Invalid url found in authority");
          }
          if (0 === o2.host.trim().length || !Number.isInteger(o2.port) || o2.port < 1 || o2.port > 65535) throw new Error("Invalid url found in authority");
          return { kind: "inlineUrl", url: (0, a.toPlainMessage)(o2) };
        })(e2, { allowInlineJson: (s2 = o.env.uriScheme, "cursor-dev" === s2) });
        var s2;
        if ("inlineUrl" === r2.kind) {
          const e3 = r2.url;
          Vr("resolved url (inline)", e3.host, e3.port);
          const t3 = async () => {
            try {
              return await Wr(e3);
            } catch (e4) {
              throw xr(e4);
            }
          }, n3 = o.cursor.createSocketConsumerTunnelFactory({ makeConnection: t3, connectionToken: e3.connectionToken });
          return this.createManagedResolvedAuthority(t3, e3.connectionToken, n3);
        }
        const i2 = r2.bcId;
        n2?.report({ phase: "auth" });
        const l2 = (function() {
          const e3 = o.cursor.productCommit ?? o.cursor.cursorServerCommit;
          if (!e3 || !/^[a-zA-Z0-9\-_.]+$/.test(e3)) throw Gr("Invalid or missing product commit", e3), new Error("Invalid or missing product commit");
          return e3;
        })(), { connectionToken: u2 } = await this.connectionTokenProvider.getOrCreateConnectionToken(i2, l2);
        n2?.report({ phase: "get-url" });
        const c2 = !this.staleCursorServerUrlBcIds.delete(i2);
        let m2;
        try {
          m2 = await this.fetchCursorServerUrl({ bcId: i2, commit: l2, initialUseCache: c2, progress: n2 });
        } catch (e3) {
          throw Cr(Yr(e3));
        }
        Vr("resolved url", m2.host, m2.port, `useCachedUrl=${c2}`);
        const p2 = (d2 = { returnedToken: m2.connectionToken, mintedToken: u2 }).returnedToken || d2.mintedToken;
        var d2;
        const f2 = () => {
          this.staleCursorServerUrlBcIds.has(i2) || (Vr("marking cursor server url suspect, next resolve fetches fresh", i2), this.staleCursorServerUrlBcIds.add(i2));
        }, T2 = (E2 = async () => {
          try {
            return await this.fetchCursorServerUrl({ bcId: i2, commit: l2, initialUseCache: !this.staleCursorServerUrlBcIds.delete(i2), progress: n2 });
          } catch (e3) {
            throw Cr(Yr(e3));
          }
        }, wr(g2 = m2) ? E2 : async () => g2);
        var g2, E2;
        const y2 = async () => {
          n2?.report({ phase: "socket" });
          const e3 = await T2();
          try {
            return await Wr(e3, f2);
          } catch (e4) {
            throw f2(), xr(e4);
          }
        }, h2 = o.cursor.createSocketConsumerTunnelFactory({ makeConnection: y2, connectionToken: p2 });
        return this.createManagedResolvedAuthority(y2, p2, h2);
      });
    }
  }
  const $r = 1e4;
  async function Wr(e2, t2) {
    const n2 = 443 === e2.port || wr(e2), r2 = await o.cursor.createTcpConnection({ host: e2.host, port: e2.port, tls: n2 ? { rejectUnauthorized: true, servername: e2.host } : void 0 });
    Vr("tcp connection established", `${e2.host}:${e2.port}`, n2 ? "(tls)" : "(plain)");
    const a2 = new o.EventEmitter(), s2 = new o.EventEmitter(), i2 = new o.EventEmitter(), l2 = Date.now();
    let u2 = false;
    return r2.onDidReceiveData((e3) => a2.fire(e3)), r2.onDidClose((e3) => {
      const n3 = Date.now() - l2 < $r;
      u2 || void 0 === e3 && !n3 || t2?.(), s2.fire(e3), i2.fire();
    }), { onDidReceiveMessage: a2.event, onDidClose: s2.event, onDidEnd: i2.event, send: (e3) => {
      r2.send(e3);
    }, end: () => {
      u2 = true, r2.close();
    }, connectionOptions: { headers: [`Host: ${e2.host}:${e2.port}`, ...e2.headers.map((e3) => `${e3.key}: ${e3.value}`)], doNotIncludeWsLocalhostPrefix: true, ...wr(e2) ? { path: e2.upgradePath } : {} } };
  }
  async function Xr(e2, t2) {
    const n2 = performance.now();
    try {
      return await t2();
    } finally {
      !(function(e3, t3) {
        try {
          o.cursor.metricsDistribution({ stat: `background-composer.${e3}`, value: t3, tags: {} });
        } catch {
        }
      })(e2, performance.now() - n2);
    }
  }
  function Kr(e2) {
    const t2 = o.window.createOutputChannel("Cursor Resolver");
    e2.subscriptions.push(t2);
    const n2 = "undefined" != typeof process && !!process.versions?.node;
    t2.appendLine(`[cursor-resolver] Running in ${n2 ? "Node.js" : "web-worker"} extension host`);
    const r2 = new qr(o.cursor.connectionTokenProvider, t2);
    e2.subscriptions.push(o.workspace.registerRemoteAuthorityResolver("background-composer", r2));
  }
  function Zr() {
  }
  var Hr = exports;
  for (var zr in r) Hr[zr] = r[zr];
  r.__esModule && Object.defineProperty(Hr, "__esModule", { value: true });
})();
