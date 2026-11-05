// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 141 range:46250..55373
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
141: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.writeMapEntry = a2.makeBinaryFormat = void 0;
    const o2 = n2(831), s2 = n2(212), t2 = n2(455), r2 = n2(98), i2 = n2(803), m2 = n2(408), l2 = n2(706), d2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), c2 = { readUnknownFields: true, readerFactory: (e3) => new o2.BinaryReader(e3) }, T2 = { writeUnknownFields: true, writerFactory: () => new o2.BinaryWriter() };
    function _2(e3) {
      return e3 ? Object.assign(Object.assign({}, c2), e3) : c2;
    }
    function p2(e3) {
      return e3 ? Object.assign(Object.assign({}, T2), e3) : T2;
    }
    function u2(e3, a3, n3, s3, r3) {
      let { repeated: i3, localName: d3 } = n3;
      switch (n3.oneof && ((e3 = e3[n3.oneof.localName]).case != d3 && delete e3.value, e3.case = d3, d3 = "value"), n3.kind) {
        case "scalar":
        case "enum":
          const c3 = "enum" == n3.kind ? m2.ScalarType.INT32 : n3.T;
          let T3 = E2;
          if ("scalar" == n3.kind && n3.L > 0 && (T3 = g2), i3) {
            let n4 = e3[d3];
            if (s3 == o2.WireType.LengthDelimited && c3 != m2.ScalarType.STRING && c3 != m2.ScalarType.BYTES) {
              let e4 = a3.uint32() + a3.pos;
              for (; a3.pos < e4; ) n4.push(T3(a3, c3));
            } else n4.push(T3(a3, c3));
          } else e3[d3] = T3(a3, c3);
          break;
        case "message":
          const _3 = n3.T;
          i3 ? e3[d3].push(k2(a3, new _3(), r3, n3)) : (0, l2.isMessage)(e3[d3]) ? k2(a3, e3[d3], r3, n3) : (e3[d3] = k2(a3, new _3(), r3, n3), !_3.fieldWrapper || n3.oneof || n3.repeated || (e3[d3] = _3.fieldWrapper.unwrapField(e3[d3])));
          break;
        case "map":
          let [p3, u3] = (function(e4, a4, n4) {
            const o3 = a4.uint32(), s4 = a4.pos + o3;
            let r4, i4;
            for (; a4.pos < s4; ) {
              const [o4] = a4.tag();
              switch (o4) {
                case 1:
                  r4 = E2(a4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i4 = E2(a4, e4.V.T);
                      break;
                    case "enum":
                      i4 = a4.int32();
                      break;
                    case "message":
                      i4 = k2(a4, new e4.V.T(), n4, void 0);
                  }
              }
            }
            void 0 === r4 && (r4 = (0, t2.scalarZeroValue)(e4.K, m2.LongType.BIGINT));
            "string" != typeof r4 && "number" != typeof r4 && (r4 = r4.toString());
            if (void 0 === i4) switch (e4.V.kind) {
              case "scalar":
                i4 = (0, t2.scalarZeroValue)(e4.V.T, m2.LongType.BIGINT);
                break;
              case "enum":
                i4 = e4.V.T.values[0].no;
                break;
              case "message":
                i4 = new e4.V.T();
            }
            return [r4, i4];
          })(n3, a3, r3);
          e3[d3][p3] = u3;
      }
    }
    function k2(e3, a3, n3, o3) {
      const s3 = a3.getType().runtime.bin, t3 = null == o3 ? void 0 : o3.delimited;
      return s3.readMessage(a3, e3, t3 ? o3.no : e3.uint32(), n3, t3), a3;
    }
    function g2(e3, a3) {
      const n3 = E2(e3, a3);
      return "bigint" == typeof n3 ? n3.toString() : n3;
    }
    function E2(e3, a3) {
      switch (a3) {
        case m2.ScalarType.STRING:
          return e3.string();
        case m2.ScalarType.BOOL:
          return e3.bool();
        case m2.ScalarType.DOUBLE:
          return e3.double();
        case m2.ScalarType.FLOAT:
          return e3.float();
        case m2.ScalarType.INT32:
          return e3.int32();
        case m2.ScalarType.INT64:
          return e3.int64();
        case m2.ScalarType.UINT64:
          return e3.uint64();
        case m2.ScalarType.FIXED64:
          return e3.fixed64();
        case m2.ScalarType.BYTES:
          return e3.bytes();
        case m2.ScalarType.FIXED32:
          return e3.fixed32();
        case m2.ScalarType.SFIXED32:
          return e3.sfixed32();
        case m2.ScalarType.SFIXED64:
          return e3.sfixed64();
        case m2.ScalarType.SINT64:
          return e3.sint64();
        case m2.ScalarType.UINT32:
          return e3.uint32();
        case m2.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function f2(e3, a3, n3, s3) {
      (0, r2.assert)(void 0 !== a3);
      const t3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i3 = "enum" == e3.kind ? m2.ScalarType.INT32 : e3.T;
          if (t3) if ((0, r2.assert)(Array.isArray(a3)), e3.packed) !(function(e4, a4, n4, s4) {
            if (!s4.length) return;
            e4.tag(n4, o2.WireType.LengthDelimited).fork();
            let [, t4] = S2(a4);
            for (let a5 = 0; a5 < s4.length; a5++) e4[t4](s4[a5]);
            e4.join();
          })(n3, i3, e3.no, a3);
          else for (const o3 of a3) y2(n3, i3, e3.no, o3);
          else y2(n3, i3, e3.no, a3);
          break;
        case "message":
          if (t3) {
            (0, r2.assert)(Array.isArray(a3));
            for (const o3 of a3) v2(n3, s3, e3, o3);
          } else v2(n3, s3, e3, a3);
          break;
        case "map":
          (0, r2.assert)("object" == typeof a3 && null != a3);
          for (const [o3, t4] of Object.entries(a3)) N2(n3, s3, e3, o3, t4);
      }
    }
    function N2(e3, a3, n3, s3, t3) {
      e3.tag(n3.no, o2.WireType.LengthDelimited), e3.fork();
      let i3 = s3;
      switch (n3.K) {
        case m2.ScalarType.INT32:
        case m2.ScalarType.FIXED32:
        case m2.ScalarType.UINT32:
        case m2.ScalarType.SFIXED32:
        case m2.ScalarType.SINT32:
          i3 = Number.parseInt(s3);
          break;
        case m2.ScalarType.BOOL:
          (0, r2.assert)("true" == s3 || "false" == s3), i3 = "true" == s3;
      }
      switch (y2(e3, n3.K, 1, i3), n3.V.kind) {
        case "scalar":
          y2(e3, n3.V.T, 2, t3);
          break;
        case "enum":
          y2(e3, m2.ScalarType.INT32, 2, t3);
          break;
        case "message":
          (0, r2.assert)(void 0 !== t3), e3.tag(2, o2.WireType.LengthDelimited).bytes(t3.toBinary(a3));
      }
      e3.join();
    }
    function v2(e3, a3, n3, t3) {
      const r3 = (0, s2.wrapField)(n3.T, t3);
      n3.delimited ? e3.tag(n3.no, o2.WireType.StartGroup).raw(r3.toBinary(a3)).tag(n3.no, o2.WireType.EndGroup) : e3.tag(n3.no, o2.WireType.LengthDelimited).bytes(r3.toBinary(a3));
    }
    function y2(e3, a3, n3, o3) {
      (0, r2.assert)(void 0 !== o3);
      let [s3, t3] = S2(a3);
      e3.tag(n3, s3)[t3](o3);
    }
    function S2(e3) {
      let a3 = o2.WireType.Varint;
      switch (e3) {
        case m2.ScalarType.BYTES:
        case m2.ScalarType.STRING:
          a3 = o2.WireType.LengthDelimited;
          break;
        case m2.ScalarType.DOUBLE:
        case m2.ScalarType.FIXED64:
        case m2.ScalarType.SFIXED64:
          a3 = o2.WireType.Bit64;
          break;
        case m2.ScalarType.FIXED32:
        case m2.ScalarType.SFIXED32:
        case m2.ScalarType.FLOAT:
          a3 = o2.WireType.Bit32;
      }
      return [a3, m2.ScalarType[e3].toLowerCase()];
    }
    a2.makeBinaryFormat = function() {
      return { makeReadOptions: _2, makeWriteOptions: p2, listUnknownFields(e3) {
        var a3;
        return null !== (a3 = e3[d2]) && void 0 !== a3 ? a3 : [];
      }, discardUnknownFields(e3) {
        delete e3[d2];
      }, writeUnknownFields(e3, a3) {
        const n3 = e3[d2];
        if (n3) for (const e4 of n3) a3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, a3, n3, o3) {
        const s3 = e3;
        Array.isArray(s3[d2]) || (s3[d2] = []), s3[d2].push({ no: a3, wireType: n3, data: o3 });
      }, readMessage(e3, a3, n3, s3, t3) {
        const r3 = e3.getType(), i3 = t3 ? a3.len : a3.pos + n3;
        let m3, l3;
        for (; a3.pos < i3 && ([m3, l3] = a3.tag(), true !== t3 || l3 != o2.WireType.EndGroup); ) {
          const n4 = r3.fields.find(m3);
          if (!n4) {
            const n5 = a3.skip(l3, m3);
            s3.readUnknownFields && this.onUnknownField(e3, m3, l3, n5);
            continue;
          }
          u2(e3, a3, n4, l3, s3);
        }
        if (t3 && (l3 != o2.WireType.EndGroup || m3 !== n3)) throw new Error("invalid end group tag");
      }, readField: u2, writeMessage(e3, a3, n3) {
        const o3 = e3.getType();
        for (const s3 of o3.fields.byNumber()) {
          if (!(0, i2.isFieldSet)(s3, e3)) {
            if (s3.req) throw new Error(`cannot encode field ${o3.typeName}.${s3.name} to binary: required field not set`);
            continue;
          }
          f2(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], a3, n3);
        }
        return n3.writeUnknownFields && this.writeUnknownFields(e3, a3), a3;
      }, writeField(e3, a3, n3, o3) {
        void 0 !== a3 && f2(e3, a3, n3, o3);
      } };
    }, a2.writeMapEntry = N2;
  }