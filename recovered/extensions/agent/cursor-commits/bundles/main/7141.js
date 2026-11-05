// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7141 range:527873..536933
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.writeMapEntry = n2.makeBinaryFormat = void 0;
    const t2 = a2(8831), s2 = a2(2212), o2 = a2(1455), r2 = a2(3098), i2 = a2(8803), A = a2(3408), l = a2(2706), c = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), m = { readUnknownFields: true, readerFactory: (e3) => new t2.BinaryReader(e3) }, d = { writeUnknownFields: true, writerFactory: () => new t2.BinaryWriter() };
    function g(e3) {
      return e3 ? Object.assign(Object.assign({}, m), e3) : m;
    }
    function u(e3) {
      return e3 ? Object.assign(Object.assign({}, d), e3) : d;
    }
    function E(e3, n3, a3, s3, r3) {
      let { repeated: i3, localName: c2 } = a3;
      switch (a3.oneof && ((e3 = e3[a3.oneof.localName]).case != c2 && delete e3.value, e3.case = c2, c2 = "value"), a3.kind) {
        case "scalar":
        case "enum":
          const m2 = "enum" == a3.kind ? A.ScalarType.INT32 : a3.T;
          let d2 = k;
          if ("scalar" == a3.kind && a3.L > 0 && (d2 = T), i3) {
            let a4 = e3[c2];
            if (s3 == t2.WireType.LengthDelimited && m2 != A.ScalarType.STRING && m2 != A.ScalarType.BYTES) {
              let e4 = n3.uint32() + n3.pos;
              for (; n3.pos < e4; ) a4.push(d2(n3, m2));
            } else a4.push(d2(n3, m2));
          } else e3[c2] = d2(n3, m2);
          break;
        case "message":
          const g2 = a3.T;
          i3 ? e3[c2].push(p(n3, new g2(), r3, a3)) : (0, l.isMessage)(e3[c2]) ? p(n3, e3[c2], r3, a3) : (e3[c2] = p(n3, new g2(), r3, a3), !g2.fieldWrapper || a3.oneof || a3.repeated || (e3[c2] = g2.fieldWrapper.unwrapField(e3[c2])));
          break;
        case "map":
          let [u2, E2] = (function(e4, n4, a4) {
            const t3 = n4.uint32(), s4 = n4.pos + t3;
            let r4, i4;
            for (; n4.pos < s4; ) {
              const [t4] = n4.tag();
              switch (t4) {
                case 1:
                  r4 = k(n4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      i4 = k(n4, e4.V.T);
                      break;
                    case "enum":
                      i4 = n4.int32();
                      break;
                    case "message":
                      i4 = p(n4, new e4.V.T(), a4, void 0);
                  }
              }
            }
            void 0 === r4 && (r4 = (0, o2.scalarZeroValue)(e4.K, A.LongType.BIGINT));
            "string" != typeof r4 && "number" != typeof r4 && (r4 = r4.toString());
            if (void 0 === i4) switch (e4.V.kind) {
              case "scalar":
                i4 = (0, o2.scalarZeroValue)(e4.V.T, A.LongType.BIGINT);
                break;
              case "enum":
                i4 = e4.V.T.values[0].no;
                break;
              case "message":
                i4 = new e4.V.T();
            }
            return [r4, i4];
          })(a3, n3, r3);
          e3[c2][u2] = E2;
      }
    }
    function p(e3, n3, a3, t3) {
      const s3 = n3.getType().runtime.bin, o3 = null == t3 ? void 0 : t3.delimited;
      return s3.readMessage(n3, e3, o3 ? t3.no : e3.uint32(), a3, o3), n3;
    }
    function T(e3, n3) {
      const a3 = k(e3, n3);
      return "bigint" == typeof a3 ? a3.toString() : a3;
    }
    function k(e3, n3) {
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
    function I(e3, n3, a3, s3) {
      (0, r2.assert)(void 0 !== n3);
      const o3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let i3 = "enum" == e3.kind ? A.ScalarType.INT32 : e3.T;
          if (o3) if ((0, r2.assert)(Array.isArray(n3)), e3.packed) !(function(e4, n4, a4, s4) {
            if (!s4.length) return;
            e4.tag(a4, t2.WireType.LengthDelimited).fork();
            let [, o4] = f(n4);
            for (let n5 = 0; n5 < s4.length; n5++) e4[o4](s4[n5]);
            e4.join();
          })(a3, i3, e3.no, n3);
          else for (const t3 of n3) C(a3, i3, e3.no, t3);
          else C(a3, i3, e3.no, n3);
          break;
        case "message":
          if (o3) {
            (0, r2.assert)(Array.isArray(n3));
            for (const t3 of n3) _(a3, s3, e3, t3);
          } else _(a3, s3, e3, n3);
          break;
        case "map":
          (0, r2.assert)("object" == typeof n3 && null != n3);
          for (const [t3, o4] of Object.entries(n3)) h(a3, s3, e3, t3, o4);
      }
    }
    function h(e3, n3, a3, s3, o3) {
      e3.tag(a3.no, t2.WireType.LengthDelimited), e3.fork();
      let i3 = s3;
      switch (a3.K) {
        case A.ScalarType.INT32:
        case A.ScalarType.FIXED32:
        case A.ScalarType.UINT32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.SINT32:
          i3 = Number.parseInt(s3);
          break;
        case A.ScalarType.BOOL:
          (0, r2.assert)("true" == s3 || "false" == s3), i3 = "true" == s3;
      }
      switch (C(e3, a3.K, 1, i3), a3.V.kind) {
        case "scalar":
          C(e3, a3.V.T, 2, o3);
          break;
        case "enum":
          C(e3, A.ScalarType.INT32, 2, o3);
          break;
        case "message":
          (0, r2.assert)(void 0 !== o3), e3.tag(2, t2.WireType.LengthDelimited).bytes(o3.toBinary(n3));
      }
      e3.join();
    }
    function _(e3, n3, a3, o3) {
      const r3 = (0, s2.wrapField)(a3.T, o3);
      a3.delimited ? e3.tag(a3.no, t2.WireType.StartGroup).raw(r3.toBinary(n3)).tag(a3.no, t2.WireType.EndGroup) : e3.tag(a3.no, t2.WireType.LengthDelimited).bytes(r3.toBinary(n3));
    }
    function C(e3, n3, a3, t3) {
      (0, r2.assert)(void 0 !== t3);
      let [s3, o3] = f(n3);
      e3.tag(a3, s3)[o3](t3);
    }
    function f(e3) {
      let n3 = t2.WireType.Varint;
      switch (e3) {
        case A.ScalarType.BYTES:
        case A.ScalarType.STRING:
          n3 = t2.WireType.LengthDelimited;
          break;
        case A.ScalarType.DOUBLE:
        case A.ScalarType.FIXED64:
        case A.ScalarType.SFIXED64:
          n3 = t2.WireType.Bit64;
          break;
        case A.ScalarType.FIXED32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.FLOAT:
          n3 = t2.WireType.Bit32;
      }
      return [n3, A.ScalarType[e3].toLowerCase()];
    }
    n2.makeBinaryFormat = function() {
      return { makeReadOptions: g, makeWriteOptions: u, listUnknownFields(e3) {
        var n3;
        return null !== (n3 = e3[c]) && void 0 !== n3 ? n3 : [];
      }, discardUnknownFields(e3) {
        delete e3[c];
      }, writeUnknownFields(e3, n3) {
        const a3 = e3[c];
        if (a3) for (const e4 of a3) n3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, n3, a3, t3) {
        const s3 = e3;
        Array.isArray(s3[c]) || (s3[c] = []), s3[c].push({ no: n3, wireType: a3, data: t3 });
      }, readMessage(e3, n3, a3, s3, o3) {
        const r3 = e3.getType(), i3 = o3 ? n3.len : n3.pos + a3;
        let A2, l2;
        for (; n3.pos < i3 && ([A2, l2] = n3.tag(), true !== o3 || l2 != t2.WireType.EndGroup); ) {
          const a4 = r3.fields.find(A2);
          if (!a4) {
            const a5 = n3.skip(l2, A2);
            s3.readUnknownFields && this.onUnknownField(e3, A2, l2, a5);
            continue;
          }
          E(e3, n3, a4, l2, s3);
        }
        if (o3 && (l2 != t2.WireType.EndGroup || A2 !== a3)) throw new Error("invalid end group tag");
      }, readField: E, writeMessage(e3, n3, a3) {
        const t3 = e3.getType();
        for (const s3 of t3.fields.byNumber()) {
          if (!(0, i2.isFieldSet)(s3, e3)) {
            if (s3.req) throw new Error(`cannot encode field ${t3.typeName}.${s3.name} to binary: required field not set`);
            continue;
          }
          I(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], n3, a3);
        }
        return a3.writeUnknownFields && this.writeUnknownFields(e3, n3), n3;
      }, writeField(e3, n3, a3, t3) {
        void 0 !== n3 && I(e3, n3, a3, t3);
      } };
    }, n2.writeMapEntry = h;
  }