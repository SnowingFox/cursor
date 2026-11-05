// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7141 range:558509..567559
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7141: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.writeMapEntry = n2.makeBinaryFormat = void 0;
    const a2 = t2(8831), s2 = t2(2212), o2 = t2(1455), r = t2(3098), i = t2(8803), A = t2(3408), c = t2(2706), l = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), d = { readUnknownFields: true, readerFactory: (e3) => new a2.BinaryReader(e3) }, m = { writeUnknownFields: true, writerFactory: () => new a2.BinaryWriter() };
    function u(e3) {
      return e3 ? Object.assign(Object.assign({}, d), e3) : d;
    }
    function g(e3) {
      return e3 ? Object.assign(Object.assign({}, m), e3) : m;
    }
    function p(e3, n3, t3, s3, r2) {
      let { repeated: i2, localName: l2 } = t3;
      switch (t3.oneof && ((e3 = e3[t3.oneof.localName]).case != l2 && delete e3.value, e3.case = l2, l2 = "value"), t3.kind) {
        case "scalar":
        case "enum":
          const d2 = "enum" == t3.kind ? A.ScalarType.INT32 : t3.T;
          let m2 = T;
          if ("scalar" == t3.kind && t3.L > 0 && (m2 = h), i2) {
            let t4 = e3[l2];
            if (s3 == a2.WireType.LengthDelimited && d2 != A.ScalarType.STRING && d2 != A.ScalarType.BYTES) {
              let e4 = n3.uint32() + n3.pos;
              for (; n3.pos < e4; ) t4.push(m2(n3, d2));
            } else t4.push(m2(n3, d2));
          } else e3[l2] = m2(n3, d2);
          break;
        case "message":
          const u2 = t3.T;
          i2 ? e3[l2].push(E(n3, new u2(), r2, t3)) : (0, c.isMessage)(e3[l2]) ? E(n3, e3[l2], r2, t3) : (e3[l2] = E(n3, new u2(), r2, t3), !u2.fieldWrapper || t3.oneof || t3.repeated || (e3[l2] = u2.fieldWrapper.unwrapField(e3[l2])));
          break;
        case "map":
          let [g2, p2] = (function(e4, n4, t4) {
            const a3 = n4.uint32(), s4 = n4.pos + a3;
            let r3, i3;
            for (; n4.pos < s4; ) {
              const [a4] = n4.tag();
              switch (a4) {
                case 1:
                  r3 = T(n4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i3 = T(n4, e4.V.T);
                      break;
                    case "enum":
                      i3 = n4.int32();
                      break;
                    case "message":
                      i3 = E(n4, new e4.V.T(), t4, void 0);
                  }
              }
            }
            void 0 === r3 && (r3 = (0, o2.scalarZeroValue)(e4.K, A.LongType.BIGINT));
            "string" != typeof r3 && "number" != typeof r3 && (r3 = r3.toString());
            if (void 0 === i3) switch (e4.V.kind) {
              case "scalar":
                i3 = (0, o2.scalarZeroValue)(e4.V.T, A.LongType.BIGINT);
                break;
              case "enum":
                i3 = e4.V.T.values[0].no;
                break;
              case "message":
                i3 = new e4.V.T();
            }
            return [r3, i3];
          })(t3, n3, r2);
          e3[l2][g2] = p2;
      }
    }
    function E(e3, n3, t3, a3) {
      const s3 = n3.getType().runtime.bin, o3 = null == a3 ? void 0 : a3.delimited;
      return s3.readMessage(n3, e3, o3 ? a3.no : e3.uint32(), t3, o3), n3;
    }
    function h(e3, n3) {
      const t3 = T(e3, n3);
      return "bigint" == typeof t3 ? t3.toString() : t3;
    }
    function T(e3, n3) {
      switch (n3) {
        case A.ScalarType.STRING:
          return e3.string();
        case A.ScalarType.BOOL:
          return e3.bool();
        case A.ScalarType.DOUBLE:
          return e3.double();
        case A.ScalarType.FLOAT:
          return e3.float();
        case A.ScalarType.INT32:
          return e3.int32();
        case A.ScalarType.INT64:
          return e3.int64();
        case A.ScalarType.UINT64:
          return e3.uint64();
        case A.ScalarType.FIXED64:
          return e3.fixed64();
        case A.ScalarType.BYTES:
          return e3.bytes();
        case A.ScalarType.FIXED32:
          return e3.fixed32();
        case A.ScalarType.SFIXED32:
          return e3.sfixed32();
        case A.ScalarType.SFIXED64:
          return e3.sfixed64();
        case A.ScalarType.SINT64:
          return e3.sint64();
        case A.ScalarType.UINT32:
          return e3.uint32();
        case A.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function k(e3, n3, t3, s3) {
      (0, r.assert)(void 0 !== n3);
      const o3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i2 = "enum" == e3.kind ? A.ScalarType.INT32 : e3.T;
          if (o3) if ((0, r.assert)(Array.isArray(n3)), e3.packed) !(function(e4, n4, t4, s4) {
            if (!s4.length) return;
            e4.tag(t4, a2.WireType.LengthDelimited).fork();
            let [, o4] = C(n4);
            for (let n5 = 0; n5 < s4.length; n5++) e4[o4](s4[n5]);
            e4.join();
          })(t3, i2, e3.no, n3);
          else for (const a3 of n3) I(t3, i2, e3.no, a3);
          else I(t3, i2, e3.no, n3);
          break;
        case "message":
          if (o3) {
            (0, r.assert)(Array.isArray(n3));
            for (const a3 of n3) _(t3, s3, e3, a3);
          } else _(t3, s3, e3, n3);
          break;
        case "map":
          (0, r.assert)("object" == typeof n3 && null != n3);
          for (const [a3, o4] of Object.entries(n3)) f(t3, s3, e3, a3, o4);
      }
    }
    function f(e3, n3, t3, s3, o3) {
      e3.tag(t3.no, a2.WireType.LengthDelimited), e3.fork();
      let i2 = s3;
      switch (t3.K) {
        case A.ScalarType.INT32:
        case A.ScalarType.FIXED32:
        case A.ScalarType.UINT32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.SINT32:
          i2 = Number.parseInt(s3);
          break;
        case A.ScalarType.BOOL:
          (0, r.assert)("true" == s3 || "false" == s3), i2 = "true" == s3;
      }
      switch (I(e3, t3.K, 1, i2), t3.V.kind) {
        case "scalar":
          I(e3, t3.V.T, 2, o3);
          break;
        case "enum":
          I(e3, A.ScalarType.INT32, 2, o3);
          break;
        case "message":
          (0, r.assert)(void 0 !== o3), e3.tag(2, a2.WireType.LengthDelimited).bytes(o3.toBinary(n3));
      }
      e3.join();
    }
    function _(e3, n3, t3, o3) {
      const r2 = (0, s2.wrapField)(t3.T, o3);
      t3.delimited ? e3.tag(t3.no, a2.WireType.StartGroup).raw(r2.toBinary(n3)).tag(t3.no, a2.WireType.EndGroup) : e3.tag(t3.no, a2.WireType.LengthDelimited).bytes(r2.toBinary(n3));
    }
    function I(e3, n3, t3, a3) {
      (0, r.assert)(void 0 !== a3);
      let [s3, o3] = C(n3);
      e3.tag(t3, s3)[o3](a3);
    }
    function C(e3) {
      let n3 = a2.WireType.Varint;
      switch (e3) {
        case A.ScalarType.BYTES:
        case A.ScalarType.STRING:
          n3 = a2.WireType.LengthDelimited;
          break;
        case A.ScalarType.DOUBLE:
        case A.ScalarType.FIXED64:
        case A.ScalarType.SFIXED64:
          n3 = a2.WireType.Bit64;
          break;
        case A.ScalarType.FIXED32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.FLOAT:
          n3 = a2.WireType.Bit32;
      }
      return [n3, A.ScalarType[e3].toLowerCase()];
    }
    n2.makeBinaryFormat = function() {
      return { makeReadOptions: u, makeWriteOptions: g, listUnknownFields(e3) {
        var n3;
        return null !== (n3 = e3[l]) && void 0 !== n3 ? n3 : [];
      }, discardUnknownFields(e3) {
        delete e3[l];
      }, writeUnknownFields(e3, n3) {
        const t3 = e3[l];
        if (t3) for (const e4 of t3) n3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, n3, t3, a3) {
        const s3 = e3;
        Array.isArray(s3[l]) || (s3[l] = []), s3[l].push({ no: n3, wireType: t3, data: a3 });
      }, readMessage(e3, n3, t3, s3, o3) {
        const r2 = e3.getType(), i2 = o3 ? n3.len : n3.pos + t3;
        let A2, c2;
        for (; n3.pos < i2 && ([A2, c2] = n3.tag(), true !== o3 || c2 != a2.WireType.EndGroup); ) {
          const t4 = r2.fields.find(A2);
          if (!t4) {
            const t5 = n3.skip(c2, A2);
            s3.readUnknownFields && this.onUnknownField(e3, A2, c2, t5);
            continue;
          }
          p(e3, n3, t4, c2, s3);
        }
        if (o3 && (c2 != a2.WireType.EndGroup || A2 !== t3)) throw new Error("invalid end group tag");
      }, readField: p, writeMessage(e3, n3, t3) {
        const a3 = e3.getType();
        for (const s3 of a3.fields.byNumber()) {
          if (!(0, i.isFieldSet)(s3, e3)) {
            if (s3.req) throw new Error(`cannot encode field ${a3.typeName}.${s3.name} to binary: required field not set`);
            continue;
          }
          k(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], n3, t3);
        }
        return t3.writeUnknownFields && this.writeUnknownFields(e3, n3), n3;
      }, writeField(e3, n3, t3, a3) {
        void 0 !== n3 && k(e3, n3, t3, a3);
      } };
    }, n2.writeMapEntry = f;
  }