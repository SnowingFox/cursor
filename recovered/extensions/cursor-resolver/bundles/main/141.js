// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 141 range:46250..55373
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
141: (e2, t2, n2) => {
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
  }