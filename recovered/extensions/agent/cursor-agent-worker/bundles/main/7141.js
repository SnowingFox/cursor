// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7141 range:206101..215799
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.writeMapEntry = a10.makeBinaryFormat = void 0;
    const s10 = n10(8831), o10 = n10(2212), r10 = n10(1455), t10 = n10(3098), i10 = n10(8803), m10 = n10(3408), l10 = n10(2706), d10 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), c10 = { readUnknownFields: true, readerFactory: (e11) => new s10.BinaryReader(e11) }, T10 = { writeUnknownFields: true, writerFactory: () => new s10.BinaryWriter() };
    function p10(e11) {
      return e11 ? Object.assign(Object.assign({}, c10), e11) : c10;
    }
    function _10(e11) {
      return e11 ? Object.assign(Object.assign({}, T10), e11) : T10;
    }
    function k10(e11, a11, n11, o11, t11) {
      let { repeated: i11, localName: d11 } = n11;
      switch (n11.oneof && ((e11 = e11[n11.oneof.localName]).case != d11 && delete e11.value, e11.case = d11, d11 = "value"), n11.kind) {
        case "scalar":
        case "enum":
          const c11 = "enum" == n11.kind ? m10.ScalarType.INT32 : n11.T;
          let T11 = E10;
          if ("scalar" == n11.kind && n11.L > 0 && (T11 = g10), i11) {
            let n12 = e11[d11];
            if (o11 == s10.WireType.LengthDelimited && c11 != m10.ScalarType.STRING && c11 != m10.ScalarType.BYTES) {
              let e12 = a11.uint32() + a11.pos;
              for (; a11.pos < e12; ) n12.push(T11(a11, c11));
            } else n12.push(T11(a11, c11));
          } else e11[d11] = T11(a11, c11);
          break;
        case "message":
          const p11 = n11.T;
          i11 ? e11[d11].push(u10(a11, new p11(), t11, n11)) : (0, l10.isMessage)(e11[d11]) ? u10(a11, e11[d11], t11, n11) : (e11[d11] = u10(a11, new p11(), t11, n11), !p11.fieldWrapper || n11.oneof || n11.repeated || (e11[d11] = p11.fieldWrapper.unwrapField(e11[d11])));
          break;
        case "map":
          let [_11, k11] = (function(e12, a12, n12) {
            const s11 = a12.uint32(), o12 = a12.pos + s11;
            let t12, i12;
            for (; a12.pos < o12; ) {
              const [s12] = a12.tag();
              switch (s12) {
                case 1:
                  t12 = E10(a12, e12.K);
                  break;
                case 2:
                  switch (e12.V.kind) {
                    case "scalar":
                      i12 = E10(a12, e12.V.T);
                      break;
                    case "enum":
                      i12 = a12.int32();
                      break;
                    case "message":
                      i12 = u10(a12, new e12.V.T(), n12, void 0);
                  }
              }
            }
            void 0 === t12 && (t12 = (0, r10.scalarZeroValue)(e12.K, m10.LongType.BIGINT));
            "string" != typeof t12 && "number" != typeof t12 && (t12 = t12.toString());
            if (void 0 === i12) switch (e12.V.kind) {
              case "scalar":
                i12 = (0, r10.scalarZeroValue)(e12.V.T, m10.LongType.BIGINT);
                break;
              case "enum":
                i12 = e12.V.T.values[0].no;
                break;
              case "message":
                i12 = new e12.V.T();
            }
            return [t12, i12];
          })(n11, a11, t11);
          e11[d11][_11] = k11;
      }
    }
    function u10(e11, a11, n11, s11) {
      const o11 = a11.getType().runtime.bin, r11 = null == s11 ? void 0 : s11.delimited;
      return o11.readMessage(a11, e11, r11 ? s11.no : e11.uint32(), n11, r11), a11;
    }
    function g10(e11, a11) {
      const n11 = E10(e11, a11);
      return "bigint" == typeof n11 ? n11.toString() : n11;
    }
    function E10(e11, a11) {
      switch (a11) {
        case m10.ScalarType.STRING:
          return e11.string();
        case m10.ScalarType.BOOL:
          return e11.bool();
        case m10.ScalarType.DOUBLE:
          return e11.double();
        case m10.ScalarType.FLOAT:
          return e11.float();
        case m10.ScalarType.INT32:
          return e11.int32();
        case m10.ScalarType.INT64:
          return e11.int64();
        case m10.ScalarType.UINT64:
          return e11.uint64();
        case m10.ScalarType.FIXED64:
          return e11.fixed64();
        case m10.ScalarType.BYTES:
          return e11.bytes();
        case m10.ScalarType.FIXED32:
          return e11.fixed32();
        case m10.ScalarType.SFIXED32:
          return e11.sfixed32();
        case m10.ScalarType.SFIXED64:
          return e11.sfixed64();
        case m10.ScalarType.SINT64:
          return e11.sint64();
        case m10.ScalarType.UINT32:
          return e11.uint32();
        case m10.ScalarType.SINT32:
          return e11.sint32();
      }
    }
    function v10(e11, a11, n11, o11) {
      (0, t10.assert)(void 0 !== a11);
      const r11 = e11.repeated;
      switch (e11.kind) {
        case "scalar":
        case "enum":
          let i11 = "enum" == e11.kind ? m10.ScalarType.INT32 : e11.T;
          if (r11) if ((0, t10.assert)(Array.isArray(a11)), e11.packed) !(function(e12, a12, n12, o12) {
            if (!o12.length) return;
            e12.tag(n12, s10.WireType.LengthDelimited).fork();
            let [, r12] = I10(a12);
            for (let a13 = 0; a13 < o12.length; a13++) e12[r12](o12[a13]);
            e12.join();
          })(n11, i11, e11.no, a11);
          else for (const s11 of a11) R10(n11, i11, e11.no, s11);
          else R10(n11, i11, e11.no, a11);
          break;
        case "message":
          if (r11) {
            (0, t10.assert)(Array.isArray(a11));
            for (const s11 of a11) S10(n11, o11, e11, s11);
          } else S10(n11, o11, e11, a11);
          break;
        case "map":
          (0, t10.assert)("object" == typeof a11 && null != a11);
          for (const [s11, r12] of Object.entries(a11)) y10(n11, o11, e11, s11, r12);
      }
    }
    function y10(e11, a11, n11, o11, r11) {
      e11.tag(n11.no, s10.WireType.LengthDelimited), e11.fork();
      let i11 = o11;
      switch (n11.K) {
        case m10.ScalarType.INT32:
        case m10.ScalarType.FIXED32:
        case m10.ScalarType.UINT32:
        case m10.ScalarType.SFIXED32:
        case m10.ScalarType.SINT32:
          i11 = Number.parseInt(o11);
          break;
        case m10.ScalarType.BOOL:
          (0, t10.assert)("true" == o11 || "false" == o11), i11 = "true" == o11;
      }
      switch (R10(e11, n11.K, 1, i11), n11.V.kind) {
        case "scalar":
          R10(e11, n11.V.T, 2, r11);
          break;
        case "enum":
          R10(e11, m10.ScalarType.INT32, 2, r11);
          break;
        case "message":
          (0, t10.assert)(void 0 !== r11), e11.tag(2, s10.WireType.LengthDelimited).bytes(r11.toBinary(a11));
      }
      e11.join();
    }
    function S10(e11, a11, n11, r11) {
      const t11 = (0, o10.wrapField)(n11.T, r11);
      n11.delimited ? e11.tag(n11.no, s10.WireType.StartGroup).raw(t11.toBinary(a11)).tag(n11.no, s10.WireType.EndGroup) : e11.tag(n11.no, s10.WireType.LengthDelimited).bytes(t11.toBinary(a11));
    }
    function R10(e11, a11, n11, s11) {
      (0, t10.assert)(void 0 !== s11);
      let [o11, r11] = I10(a11);
      e11.tag(n11, o11)[r11](s11);
    }
    function I10(e11) {
      let a11 = s10.WireType.Varint;
      switch (e11) {
        case m10.ScalarType.BYTES:
        case m10.ScalarType.STRING:
          a11 = s10.WireType.LengthDelimited;
          break;
        case m10.ScalarType.DOUBLE:
        case m10.ScalarType.FIXED64:
        case m10.ScalarType.SFIXED64:
          a11 = s10.WireType.Bit64;
          break;
        case m10.ScalarType.FIXED32:
        case m10.ScalarType.SFIXED32:
        case m10.ScalarType.FLOAT:
          a11 = s10.WireType.Bit32;
      }
      return [a11, m10.ScalarType[e11].toLowerCase()];
    }
    a10.makeBinaryFormat = function() {
      return { makeReadOptions: p10, makeWriteOptions: _10, listUnknownFields(e11) {
        var a11;
        return null !== (a11 = e11[d10]) && void 0 !== a11 ? a11 : [];
      }, discardUnknownFields(e11) {
        delete e11[d10];
      }, writeUnknownFields(e11, a11) {
        const n11 = e11[d10];
        if (n11) for (const e12 of n11) a11.tag(e12.no, e12.wireType).raw(e12.data);
      }, onUnknownField(e11, a11, n11, s11) {
        const o11 = e11;
        Array.isArray(o11[d10]) || (o11[d10] = []), o11[d10].push({ no: a11, wireType: n11, data: s11 });
      }, readMessage(e11, a11, n11, o11, r11) {
        const t11 = e11.getType(), i11 = r11 ? a11.len : a11.pos + n11;
        let m11, l11;
        for (; a11.pos < i11 && ([m11, l11] = a11.tag(), true !== r11 || l11 != s10.WireType.EndGroup); ) {
          const n12 = t11.fields.find(m11);
          if (!n12) {
            const n13 = a11.skip(l11, m11);
            o11.readUnknownFields && this.onUnknownField(e11, m11, l11, n13);
            continue;
          }
          k10(e11, a11, n12, l11, o11);
        }
        if (r11 && (l11 != s10.WireType.EndGroup || m11 !== n11)) throw new Error("invalid end group tag");
      }, readField: k10, writeMessage(e11, a11, n11) {
        const s11 = e11.getType();
        for (const o11 of s11.fields.byNumber()) {
          if (!(0, i10.isFieldSet)(o11, e11)) {
            if (o11.req) throw new Error(`cannot encode field ${s11.typeName}.${o11.name} to binary: required field not set`);
            continue;
          }
          v10(o11, o11.oneof ? e11[o11.oneof.localName].value : e11[o11.localName], a11, n11);
        }
        return n11.writeUnknownFields && this.writeUnknownFields(e11, a11), a11;
      }, writeField(e11, a11, n11, s11) {
        void 0 !== a11 && v10(e11, a11, n11, s11);
      } };
    }, a10.writeMapEntry = y10;
  }