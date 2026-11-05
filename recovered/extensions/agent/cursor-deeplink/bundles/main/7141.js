// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7141 range:638705..647755
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.writeMapEntry = t2.makeBinaryFormat = void 0;
    const n2 = A2(8831), r2 = A2(2212), o2 = A2(1455), s = A2(3098), i = A2(8803), a = A2(3408), c = A2(2706), l = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), u = { readUnknownFields: true, readerFactory: (e3) => new n2.BinaryReader(e3) }, g = { writeUnknownFields: true, writerFactory: () => new n2.BinaryWriter() };
    function E(e3) {
      return e3 ? Object.assign(Object.assign({}, u), e3) : u;
    }
    function h(e3) {
      return e3 ? Object.assign(Object.assign({}, g), e3) : g;
    }
    function d(e3, t3, A3, r3, s2) {
      let { repeated: i2, localName: l2 } = A3;
      switch (A3.oneof && ((e3 = e3[A3.oneof.localName]).case != l2 && delete e3.value, e3.case = l2, l2 = "value"), A3.kind) {
        case "scalar":
        case "enum":
          const u2 = "enum" == A3.kind ? a.ScalarType.INT32 : A3.T;
          let g2 = Q;
          if ("scalar" == A3.kind && A3.L > 0 && (g2 = B), i2) {
            let A4 = e3[l2];
            if (r3 == n2.WireType.LengthDelimited && u2 != a.ScalarType.STRING && u2 != a.ScalarType.BYTES) {
              let e4 = t3.uint32() + t3.pos;
              for (; t3.pos < e4; ) A4.push(g2(t3, u2));
            } else A4.push(g2(t3, u2));
          } else e3[l2] = g2(t3, u2);
          break;
        case "message":
          const E2 = A3.T;
          i2 ? e3[l2].push(I(t3, new E2(), s2, A3)) : (0, c.isMessage)(e3[l2]) ? I(t3, e3[l2], s2, A3) : (e3[l2] = I(t3, new E2(), s2, A3), !E2.fieldWrapper || A3.oneof || A3.repeated || (e3[l2] = E2.fieldWrapper.unwrapField(e3[l2])));
          break;
        case "map":
          let [h2, d2] = (function(e4, t4, A4) {
            const n3 = t4.uint32(), r4 = t4.pos + n3;
            let s3, i3;
            for (; t4.pos < r4; ) {
              const [n4] = t4.tag();
              switch (n4) {
                case 1:
                  s3 = Q(t4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i3 = Q(t4, e4.V.T);
                      break;
                    case "enum":
                      i3 = t4.int32();
                      break;
                    case "message":
                      i3 = I(t4, new e4.V.T(), A4, void 0);
                  }
              }
            }
            void 0 === s3 && (s3 = (0, o2.scalarZeroValue)(e4.K, a.LongType.BIGINT));
            "string" != typeof s3 && "number" != typeof s3 && (s3 = s3.toString());
            if (void 0 === i3) switch (e4.V.kind) {
              case "scalar":
                i3 = (0, o2.scalarZeroValue)(e4.V.T, a.LongType.BIGINT);
                break;
              case "enum":
                i3 = e4.V.T.values[0].no;
                break;
              case "message":
                i3 = new e4.V.T();
            }
            return [s3, i3];
          })(A3, t3, s2);
          e3[l2][h2] = d2;
      }
    }
    function I(e3, t3, A3, n3) {
      const r3 = t3.getType().runtime.bin, o3 = null == n3 ? void 0 : n3.delimited;
      return r3.readMessage(t3, e3, o3 ? n3.no : e3.uint32(), A3, o3), t3;
    }
    function B(e3, t3) {
      const A3 = Q(e3, t3);
      return "bigint" == typeof A3 ? A3.toString() : A3;
    }
    function Q(e3, t3) {
      switch (t3) {
        case a.ScalarType.STRING:
          return e3.string();
        case a.ScalarType.BOOL:
          return e3.bool();
        case a.ScalarType.DOUBLE:
          return e3.double();
        case a.ScalarType.FLOAT:
          return e3.float();
        case a.ScalarType.INT32:
          return e3.int32();
        case a.ScalarType.INT64:
          return e3.int64();
        case a.ScalarType.UINT64:
          return e3.uint64();
        case a.ScalarType.FIXED64:
          return e3.fixed64();
        case a.ScalarType.BYTES:
          return e3.bytes();
        case a.ScalarType.FIXED32:
          return e3.fixed32();
        case a.ScalarType.SFIXED32:
          return e3.sfixed32();
        case a.ScalarType.SFIXED64:
          return e3.sfixed64();
        case a.ScalarType.SINT64:
          return e3.sint64();
        case a.ScalarType.UINT32:
          return e3.uint32();
        case a.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function f(e3, t3, A3, r3) {
      (0, s.assert)(void 0 !== t3);
      const o3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i2 = "enum" == e3.kind ? a.ScalarType.INT32 : e3.T;
          if (o3) if ((0, s.assert)(Array.isArray(t3)), e3.packed) !(function(e4, t4, A4, r4) {
            if (!r4.length) return;
            e4.tag(A4, n2.WireType.LengthDelimited).fork();
            let [, o4] = y(t4);
            for (let t5 = 0; t5 < r4.length; t5++) e4[o4](r4[t5]);
            e4.join();
          })(A3, i2, e3.no, t3);
          else for (const n3 of t3) m(A3, i2, e3.no, n3);
          else m(A3, i2, e3.no, t3);
          break;
        case "message":
          if (o3) {
            (0, s.assert)(Array.isArray(t3));
            for (const n3 of t3) p(A3, r3, e3, n3);
          } else p(A3, r3, e3, t3);
          break;
        case "map":
          (0, s.assert)("object" == typeof t3 && null != t3);
          for (const [n3, o4] of Object.entries(t3)) C(A3, r3, e3, n3, o4);
      }
    }
    function C(e3, t3, A3, r3, o3) {
      e3.tag(A3.no, n2.WireType.LengthDelimited), e3.fork();
      let i2 = r3;
      switch (A3.K) {
        case a.ScalarType.INT32:
        case a.ScalarType.FIXED32:
        case a.ScalarType.UINT32:
        case a.ScalarType.SFIXED32:
        case a.ScalarType.SINT32:
          i2 = Number.parseInt(r3);
          break;
        case a.ScalarType.BOOL:
          (0, s.assert)("true" == r3 || "false" == r3), i2 = "true" == r3;
      }
      switch (m(e3, A3.K, 1, i2), A3.V.kind) {
        case "scalar":
          m(e3, A3.V.T, 2, o3);
          break;
        case "enum":
          m(e3, a.ScalarType.INT32, 2, o3);
          break;
        case "message":
          (0, s.assert)(void 0 !== o3), e3.tag(2, n2.WireType.LengthDelimited).bytes(o3.toBinary(t3));
      }
      e3.join();
    }
    function p(e3, t3, A3, o3) {
      const s2 = (0, r2.wrapField)(A3.T, o3);
      A3.delimited ? e3.tag(A3.no, n2.WireType.StartGroup).raw(s2.toBinary(t3)).tag(A3.no, n2.WireType.EndGroup) : e3.tag(A3.no, n2.WireType.LengthDelimited).bytes(s2.toBinary(t3));
    }
    function m(e3, t3, A3, n3) {
      (0, s.assert)(void 0 !== n3);
      let [r3, o3] = y(t3);
      e3.tag(A3, r3)[o3](n3);
    }
    function y(e3) {
      let t3 = n2.WireType.Varint;
      switch (e3) {
        case a.ScalarType.BYTES:
        case a.ScalarType.STRING:
          t3 = n2.WireType.LengthDelimited;
          break;
        case a.ScalarType.DOUBLE:
        case a.ScalarType.FIXED64:
        case a.ScalarType.SFIXED64:
          t3 = n2.WireType.Bit64;
          break;
        case a.ScalarType.FIXED32:
        case a.ScalarType.SFIXED32:
        case a.ScalarType.FLOAT:
          t3 = n2.WireType.Bit32;
      }
      return [t3, a.ScalarType[e3].toLowerCase()];
    }
    t2.makeBinaryFormat = function() {
      return { makeReadOptions: E, makeWriteOptions: h, listUnknownFields(e3) {
        var t3;
        return null !== (t3 = e3[l]) && void 0 !== t3 ? t3 : [];
      }, discardUnknownFields(e3) {
        delete e3[l];
      }, writeUnknownFields(e3, t3) {
        const A3 = e3[l];
        if (A3) for (const e4 of A3) t3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, t3, A3, n3) {
        const r3 = e3;
        Array.isArray(r3[l]) || (r3[l] = []), r3[l].push({ no: t3, wireType: A3, data: n3 });
      }, readMessage(e3, t3, A3, r3, o3) {
        const s2 = e3.getType(), i2 = o3 ? t3.len : t3.pos + A3;
        let a2, c2;
        for (; t3.pos < i2 && ([a2, c2] = t3.tag(), true !== o3 || c2 != n2.WireType.EndGroup); ) {
          const A4 = s2.fields.find(a2);
          if (!A4) {
            const A5 = t3.skip(c2, a2);
            r3.readUnknownFields && this.onUnknownField(e3, a2, c2, A5);
            continue;
          }
          d(e3, t3, A4, c2, r3);
        }
        if (o3 && (c2 != n2.WireType.EndGroup || a2 !== A3)) throw new Error("invalid end group tag");
      }, readField: d, writeMessage(e3, t3, A3) {
        const n3 = e3.getType();
        for (const r3 of n3.fields.byNumber()) {
          if (!(0, i.isFieldSet)(r3, e3)) {
            if (r3.req) throw new Error(`cannot encode field ${n3.typeName}.${r3.name} to binary: required field not set`);
            continue;
          }
          f(r3, r3.oneof ? e3[r3.oneof.localName].value : e3[r3.localName], t3, A3);
        }
        return A3.writeUnknownFields && this.writeUnknownFields(e3, t3), t3;
      }, writeField(e3, t3, A3, n3) {
        void 0 !== t3 && f(e3, t3, A3, n3);
      } };
    }, t2.writeMapEntry = C;
  }