// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7141 range:527183..536233
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.writeMapEntry = A2.makeBinaryFormat = void 0;
    const n2 = t2(8831), r2 = t2(2212), o2 = t2(1455), s = t2(3098), a = t2(8803), i = t2(3408), c = t2(2706), l = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), g = { readUnknownFields: true, readerFactory: (e3) => new n2.BinaryReader(e3) }, E = { writeUnknownFields: true, writerFactory: () => new n2.BinaryWriter() };
    function u(e3) {
      return e3 ? Object.assign(Object.assign({}, g), e3) : g;
    }
    function d(e3) {
      return e3 ? Object.assign(Object.assign({}, E), e3) : E;
    }
    function I(e3, A3, t3, r3, s2) {
      let { repeated: a2, localName: l2 } = t3;
      switch (t3.oneof && ((e3 = e3[t3.oneof.localName]).case != l2 && delete e3.value, e3.case = l2, l2 = "value"), t3.kind) {
        case "scalar":
        case "enum":
          const g2 = "enum" == t3.kind ? i.ScalarType.INT32 : t3.T;
          let E2 = m;
          if ("scalar" == t3.kind && t3.L > 0 && (E2 = Q), a2) {
            let t4 = e3[l2];
            if (r3 == n2.WireType.LengthDelimited && g2 != i.ScalarType.STRING && g2 != i.ScalarType.BYTES) {
              let e4 = A3.uint32() + A3.pos;
              for (; A3.pos < e4; ) t4.push(E2(A3, g2));
            } else t4.push(E2(A3, g2));
          } else e3[l2] = E2(A3, g2);
          break;
        case "message":
          const u2 = t3.T;
          a2 ? e3[l2].push(h(A3, new u2(), s2, t3)) : (0, c.isMessage)(e3[l2]) ? h(A3, e3[l2], s2, t3) : (e3[l2] = h(A3, new u2(), s2, t3), !u2.fieldWrapper || t3.oneof || t3.repeated || (e3[l2] = u2.fieldWrapper.unwrapField(e3[l2])));
          break;
        case "map":
          let [d2, I2] = (function(e4, A4, t4) {
            const n3 = A4.uint32(), r4 = A4.pos + n3;
            let s3, a3;
            for (; A4.pos < r4; ) {
              const [n4] = A4.tag();
              switch (n4) {
                case 1:
                  s3 = m(A4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      a3 = m(A4, e4.V.T);
                      break;
                    case "enum":
                      a3 = A4.int32();
                      break;
                    case "message":
                      a3 = h(A4, new e4.V.T(), t4, void 0);
                  }
              }
            }
            void 0 === s3 && (s3 = (0, o2.scalarZeroValue)(e4.K, i.LongType.BIGINT));
            "string" != typeof s3 && "number" != typeof s3 && (s3 = s3.toString());
            if (void 0 === a3) switch (e4.V.kind) {
              case "scalar":
                a3 = (0, o2.scalarZeroValue)(e4.V.T, i.LongType.BIGINT);
                break;
              case "enum":
                a3 = e4.V.T.values[0].no;
                break;
              case "message":
                a3 = new e4.V.T();
            }
            return [s3, a3];
          })(t3, A3, s2);
          e3[l2][d2] = I2;
      }
    }
    function h(e3, A3, t3, n3) {
      const r3 = A3.getType().runtime.bin, o3 = null == n3 ? void 0 : n3.delimited;
      return r3.readMessage(A3, e3, o3 ? n3.no : e3.uint32(), t3, o3), A3;
    }
    function Q(e3, A3) {
      const t3 = m(e3, A3);
      return "bigint" == typeof t3 ? t3.toString() : t3;
    }
    function m(e3, A3) {
      switch (A3) {
        case i.ScalarType.STRING:
          return e3.string();
        case i.ScalarType.BOOL:
          return e3.bool();
        case i.ScalarType.DOUBLE:
          return e3.double();
        case i.ScalarType.FLOAT:
          return e3.float();
        case i.ScalarType.INT32:
          return e3.int32();
        case i.ScalarType.INT64:
          return e3.int64();
        case i.ScalarType.UINT64:
          return e3.uint64();
        case i.ScalarType.FIXED64:
          return e3.fixed64();
        case i.ScalarType.BYTES:
          return e3.bytes();
        case i.ScalarType.FIXED32:
          return e3.fixed32();
        case i.ScalarType.SFIXED32:
          return e3.sfixed32();
        case i.ScalarType.SFIXED64:
          return e3.sfixed64();
        case i.ScalarType.SINT64:
          return e3.sint64();
        case i.ScalarType.UINT32:
          return e3.uint32();
        case i.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function C(e3, A3, t3, r3) {
      (0, s.assert)(void 0 !== A3);
      const o3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let a2 = "enum" == e3.kind ? i.ScalarType.INT32 : e3.T;
          if (o3) if ((0, s.assert)(Array.isArray(A3)), e3.packed) !(function(e4, A4, t4, r4) {
            if (!r4.length) return;
            e4.tag(t4, n2.WireType.LengthDelimited).fork();
            let [, o4] = y(A4);
            for (let A5 = 0; A5 < r4.length; A5++) e4[o4](r4[A5]);
            e4.join();
          })(t3, a2, e3.no, A3);
          else for (const n3 of A3) f(t3, a2, e3.no, n3);
          else f(t3, a2, e3.no, A3);
          break;
        case "message":
          if (o3) {
            (0, s.assert)(Array.isArray(A3));
            for (const n3 of A3) p(t3, r3, e3, n3);
          } else p(t3, r3, e3, A3);
          break;
        case "map":
          (0, s.assert)("object" == typeof A3 && null != A3);
          for (const [n3, o4] of Object.entries(A3)) B(t3, r3, e3, n3, o4);
      }
    }
    function B(e3, A3, t3, r3, o3) {
      e3.tag(t3.no, n2.WireType.LengthDelimited), e3.fork();
      let a2 = r3;
      switch (t3.K) {
        case i.ScalarType.INT32:
        case i.ScalarType.FIXED32:
        case i.ScalarType.UINT32:
        case i.ScalarType.SFIXED32:
        case i.ScalarType.SINT32:
          a2 = Number.parseInt(r3);
          break;
        case i.ScalarType.BOOL:
          (0, s.assert)("true" == r3 || "false" == r3), a2 = "true" == r3;
      }
      switch (f(e3, t3.K, 1, a2), t3.V.kind) {
        case "scalar":
          f(e3, t3.V.T, 2, o3);
          break;
        case "enum":
          f(e3, i.ScalarType.INT32, 2, o3);
          break;
        case "message":
          (0, s.assert)(void 0 !== o3), e3.tag(2, n2.WireType.LengthDelimited).bytes(o3.toBinary(A3));
      }
      e3.join();
    }
    function p(e3, A3, t3, o3) {
      const s2 = (0, r2.wrapField)(t3.T, o3);
      t3.delimited ? e3.tag(t3.no, n2.WireType.StartGroup).raw(s2.toBinary(A3)).tag(t3.no, n2.WireType.EndGroup) : e3.tag(t3.no, n2.WireType.LengthDelimited).bytes(s2.toBinary(A3));
    }
    function f(e3, A3, t3, n3) {
      (0, s.assert)(void 0 !== n3);
      let [r3, o3] = y(A3);
      e3.tag(t3, r3)[o3](n3);
    }
    function y(e3) {
      let A3 = n2.WireType.Varint;
      switch (e3) {
        case i.ScalarType.BYTES:
        case i.ScalarType.STRING:
          A3 = n2.WireType.LengthDelimited;
          break;
        case i.ScalarType.DOUBLE:
        case i.ScalarType.FIXED64:
        case i.ScalarType.SFIXED64:
          A3 = n2.WireType.Bit64;
          break;
        case i.ScalarType.FIXED32:
        case i.ScalarType.SFIXED32:
        case i.ScalarType.FLOAT:
          A3 = n2.WireType.Bit32;
      }
      return [A3, i.ScalarType[e3].toLowerCase()];
    }
    A2.makeBinaryFormat = function() {
      return { makeReadOptions: u, makeWriteOptions: d, listUnknownFields(e3) {
        var A3;
        return null !== (A3 = e3[l]) && void 0 !== A3 ? A3 : [];
      }, discardUnknownFields(e3) {
        delete e3[l];
      }, writeUnknownFields(e3, A3) {
        const t3 = e3[l];
        if (t3) for (const e4 of t3) A3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, A3, t3, n3) {
        const r3 = e3;
        Array.isArray(r3[l]) || (r3[l] = []), r3[l].push({ no: A3, wireType: t3, data: n3 });
      }, readMessage(e3, A3, t3, r3, o3) {
        const s2 = e3.getType(), a2 = o3 ? A3.len : A3.pos + t3;
        let i2, c2;
        for (; A3.pos < a2 && ([i2, c2] = A3.tag(), true !== o3 || c2 != n2.WireType.EndGroup); ) {
          const t4 = s2.fields.find(i2);
          if (!t4) {
            const t5 = A3.skip(c2, i2);
            r3.readUnknownFields && this.onUnknownField(e3, i2, c2, t5);
            continue;
          }
          I(e3, A3, t4, c2, r3);
        }
        if (o3 && (c2 != n2.WireType.EndGroup || i2 !== t3)) throw new Error("invalid end group tag");
      }, readField: I, writeMessage(e3, A3, t3) {
        const n3 = e3.getType();
        for (const r3 of n3.fields.byNumber()) {
          if (!(0, a.isFieldSet)(r3, e3)) {
            if (r3.req) throw new Error(`cannot encode field ${n3.typeName}.${r3.name} to binary: required field not set`);
            continue;
          }
          C(r3, r3.oneof ? e3[r3.oneof.localName].value : e3[r3.localName], A3, t3);
        }
        return t3.writeUnknownFields && this.writeUnknownFields(e3, A3), A3;
      }, writeField(e3, A3, t3, n3) {
        void 0 !== A3 && C(e3, A3, t3, n3);
      } };
    }, A2.writeMapEntry = B;
  }