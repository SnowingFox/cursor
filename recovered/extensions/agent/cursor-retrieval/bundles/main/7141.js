// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7141 range:848834..857894
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.writeMapEntry = a2.makeBinaryFormat = void 0;
    const t2 = n2(8831), s2 = n2(2212), o2 = n2(1455), r2 = n2(3098), i2 = n2(8803), l = n2(3408), d = n2(2706), m = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), c = { readUnknownFields: true, readerFactory: (e3) => new t2.BinaryReader(e3) }, p = { writeUnknownFields: true, writerFactory: () => new t2.BinaryWriter() };
    function A(e3) {
      return e3 ? Object.assign(Object.assign({}, c), e3) : c;
    }
    function u(e3) {
      return e3 ? Object.assign(Object.assign({}, p), e3) : p;
    }
    function g(e3, a3, n3, s3, r3) {
      let { repeated: i3, localName: m2 } = n3;
      switch (n3.oneof && ((e3 = e3[n3.oneof.localName]).case != m2 && delete e3.value, e3.case = m2, m2 = "value"), n3.kind) {
        case "scalar":
        case "enum":
          const c2 = "enum" == n3.kind ? l.ScalarType.INT32 : n3.T;
          let p2 = k;
          if ("scalar" == n3.kind && n3.L > 0 && (p2 = h), i3) {
            let n4 = e3[m2];
            if (s3 == t2.WireType.LengthDelimited && c2 != l.ScalarType.STRING && c2 != l.ScalarType.BYTES) {
              let e4 = a3.uint32() + a3.pos;
              for (; a3.pos < e4; ) n4.push(p2(a3, c2));
            } else n4.push(p2(a3, c2));
          } else e3[m2] = p2(a3, c2);
          break;
        case "message":
          const A2 = n3.T;
          i3 ? e3[m2].push(T(a3, new A2(), r3, n3)) : (0, d.isMessage)(e3[m2]) ? T(a3, e3[m2], r3, n3) : (e3[m2] = T(a3, new A2(), r3, n3), !A2.fieldWrapper || n3.oneof || n3.repeated || (e3[m2] = A2.fieldWrapper.unwrapField(e3[m2])));
          break;
        case "map":
          let [u2, g2] = (function(e4, a4, n4) {
            const t3 = a4.uint32(), s4 = a4.pos + t3;
            let r4, i4;
            for (; a4.pos < s4; ) {
              const [t4] = a4.tag();
              switch (t4) {
                case 1:
                  r4 = k(a4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i4 = k(a4, e4.V.T);
                      break;
                    case "enum":
                      i4 = a4.int32();
                      break;
                    case "message":
                      i4 = T(a4, new e4.V.T(), n4, void 0);
                  }
              }
            }
            void 0 === r4 && (r4 = (0, o2.scalarZeroValue)(e4.K, l.LongType.BIGINT));
            "string" != typeof r4 && "number" != typeof r4 && (r4 = r4.toString());
            if (void 0 === i4) switch (e4.V.kind) {
              case "scalar":
                i4 = (0, o2.scalarZeroValue)(e4.V.T, l.LongType.BIGINT);
                break;
              case "enum":
                i4 = e4.V.T.values[0].no;
                break;
              case "message":
                i4 = new e4.V.T();
            }
            return [r4, i4];
          })(n3, a3, r3);
          e3[m2][u2] = g2;
      }
    }
    function T(e3, a3, n3, t3) {
      const s3 = a3.getType().runtime.bin, o3 = null == t3 ? void 0 : t3.delimited;
      return s3.readMessage(a3, e3, o3 ? t3.no : e3.uint32(), n3, o3), a3;
    }
    function h(e3, a3) {
      const n3 = k(e3, a3);
      return "bigint" == typeof n3 ? n3.toString() : n3;
    }
    function k(e3, a3) {
      switch (a3) {
        case l.ScalarType.STRING:
          return e3.string();
        case l.ScalarType.BOOL:
          return e3.bool();
        case l.ScalarType.DOUBLE:
          return e3.double();
        case l.ScalarType.FLOAT:
          return e3.float();
        case l.ScalarType.INT32:
          return e3.int32();
        case l.ScalarType.INT64:
          return e3.int64();
        case l.ScalarType.UINT64:
          return e3.uint64();
        case l.ScalarType.FIXED64:
          return e3.fixed64();
        case l.ScalarType.BYTES:
          return e3.bytes();
        case l.ScalarType.FIXED32:
          return e3.fixed32();
        case l.ScalarType.SFIXED32:
          return e3.sfixed32();
        case l.ScalarType.SFIXED64:
          return e3.sfixed64();
        case l.ScalarType.SINT64:
          return e3.sint64();
        case l.ScalarType.UINT32:
          return e3.uint32();
        case l.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function _(e3, a3, n3, s3) {
      (0, r2.assert)(void 0 !== a3);
      const o3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i3 = "enum" == e3.kind ? l.ScalarType.INT32 : e3.T;
          if (o3) if ((0, r2.assert)(Array.isArray(a3)), e3.packed) !(function(e4, a4, n4, s4) {
            if (!s4.length) return;
            e4.tag(n4, t2.WireType.LengthDelimited).fork();
            let [, o4] = I(a4);
            for (let a5 = 0; a5 < s4.length; a5++) e4[o4](s4[a5]);
            e4.join();
          })(n3, i3, e3.no, a3);
          else for (const t3 of a3) C(n3, i3, e3.no, t3);
          else C(n3, i3, e3.no, a3);
          break;
        case "message":
          if (o3) {
            (0, r2.assert)(Array.isArray(a3));
            for (const t3 of a3) f(n3, s3, e3, t3);
          } else f(n3, s3, e3, a3);
          break;
        case "map":
          (0, r2.assert)("object" == typeof a3 && null != a3);
          for (const [t3, o4] of Object.entries(a3)) E(n3, s3, e3, t3, o4);
      }
    }
    function E(e3, a3, n3, s3, o3) {
      e3.tag(n3.no, t2.WireType.LengthDelimited), e3.fork();
      let i3 = s3;
      switch (n3.K) {
        case l.ScalarType.INT32:
        case l.ScalarType.FIXED32:
        case l.ScalarType.UINT32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.SINT32:
          i3 = Number.parseInt(s3);
          break;
        case l.ScalarType.BOOL:
          (0, r2.assert)("true" == s3 || "false" == s3), i3 = "true" == s3;
      }
      switch (C(e3, n3.K, 1, i3), n3.V.kind) {
        case "scalar":
          C(e3, n3.V.T, 2, o3);
          break;
        case "enum":
          C(e3, l.ScalarType.INT32, 2, o3);
          break;
        case "message":
          (0, r2.assert)(void 0 !== o3), e3.tag(2, t2.WireType.LengthDelimited).bytes(o3.toBinary(a3));
      }
      e3.join();
    }
    function f(e3, a3, n3, o3) {
      const r3 = (0, s2.wrapField)(n3.T, o3);
      n3.delimited ? e3.tag(n3.no, t2.WireType.StartGroup).raw(r3.toBinary(a3)).tag(n3.no, t2.WireType.EndGroup) : e3.tag(n3.no, t2.WireType.LengthDelimited).bytes(r3.toBinary(a3));
    }
    function C(e3, a3, n3, t3) {
      (0, r2.assert)(void 0 !== t3);
      let [s3, o3] = I(a3);
      e3.tag(n3, s3)[o3](t3);
    }
    function I(e3) {
      let a3 = t2.WireType.Varint;
      switch (e3) {
        case l.ScalarType.BYTES:
        case l.ScalarType.STRING:
          a3 = t2.WireType.LengthDelimited;
          break;
        case l.ScalarType.DOUBLE:
        case l.ScalarType.FIXED64:
        case l.ScalarType.SFIXED64:
          a3 = t2.WireType.Bit64;
          break;
        case l.ScalarType.FIXED32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.FLOAT:
          a3 = t2.WireType.Bit32;
      }
      return [a3, l.ScalarType[e3].toLowerCase()];
    }
    a2.makeBinaryFormat = function() {
      return { makeReadOptions: A, makeWriteOptions: u, listUnknownFields(e3) {
        var a3;
        return null !== (a3 = e3[m]) && void 0 !== a3 ? a3 : [];
      }, discardUnknownFields(e3) {
        delete e3[m];
      }, writeUnknownFields(e3, a3) {
        const n3 = e3[m];
        if (n3) for (const e4 of n3) a3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, a3, n3, t3) {
        const s3 = e3;
        Array.isArray(s3[m]) || (s3[m] = []), s3[m].push({ no: a3, wireType: n3, data: t3 });
      }, readMessage(e3, a3, n3, s3, o3) {
        const r3 = e3.getType(), i3 = o3 ? a3.len : a3.pos + n3;
        let l2, d2;
        for (; a3.pos < i3 && ([l2, d2] = a3.tag(), true !== o3 || d2 != t2.WireType.EndGroup); ) {
          const n4 = r3.fields.find(l2);
          if (!n4) {
            const n5 = a3.skip(d2, l2);
            s3.readUnknownFields && this.onUnknownField(e3, l2, d2, n5);
            continue;
          }
          g(e3, a3, n4, d2, s3);
        }
        if (o3 && (d2 != t2.WireType.EndGroup || l2 !== n3)) throw new Error("invalid end group tag");
      }, readField: g, writeMessage(e3, a3, n3) {
        const t3 = e3.getType();
        for (const s3 of t3.fields.byNumber()) {
          if (!(0, i2.isFieldSet)(s3, e3)) {
            if (s3.req) throw new Error(`cannot encode field ${t3.typeName}.${s3.name} to binary: required field not set`);
            continue;
          }
          _(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], a3, n3);
        }
        return n3.writeUnknownFields && this.writeUnknownFields(e3, a3), a3;
      }, writeField(e3, a3, n3, t3) {
        void 0 !== a3 && _(e3, a3, n3, t3);
      } };
    }, a2.writeMapEntry = E;
  }