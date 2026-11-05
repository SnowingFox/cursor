// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7141 range:594514..603574
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7141: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.writeMapEntry = t2.makeBinaryFormat = void 0;
    const n2 = r2(8831), o2 = r2(2212), s2 = r2(3836), i2 = r2(3098), a2 = r2(8803), c = r2(3408), u = r2(2706), l = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), d = { readUnknownFields: true, readerFactory: (e3) => new n2.BinaryReader(e3) }, p = { writeUnknownFields: true, writerFactory: () => new n2.BinaryWriter() };
    function f(e3) {
      return e3 ? Object.assign(Object.assign({}, d), e3) : d;
    }
    function h(e3) {
      return e3 ? Object.assign(Object.assign({}, p), e3) : p;
    }
    function m(e3, t3, r3, o3, i3) {
      let { repeated: a3, localName: l2 } = r3;
      switch (r3.oneof && ((e3 = e3[r3.oneof.localName]).case != l2 && delete e3.value, e3.case = l2, l2 = "value"), r3.kind) {
        case "scalar":
        case "enum":
          const d2 = "enum" == r3.kind ? c.ScalarType.INT32 : r3.T;
          let p2 = _;
          if ("scalar" == r3.kind && r3.L > 0 && (p2 = y), a3) {
            let r4 = e3[l2];
            if (o3 == n2.WireType.LengthDelimited && d2 != c.ScalarType.STRING && d2 != c.ScalarType.BYTES) {
              let e4 = t3.uint32() + t3.pos;
              for (; t3.pos < e4; ) r4.push(p2(t3, d2));
            } else r4.push(p2(t3, d2));
          } else e3[l2] = p2(t3, d2);
          break;
        case "message":
          const f2 = r3.T;
          a3 ? e3[l2].push(g(t3, new f2(), i3, r3)) : (0, u.isMessage)(e3[l2]) ? g(t3, e3[l2], i3, r3) : (e3[l2] = g(t3, new f2(), i3, r3), !f2.fieldWrapper || r3.oneof || r3.repeated || (e3[l2] = f2.fieldWrapper.unwrapField(e3[l2])));
          break;
        case "map":
          let [h2, m2] = (function(e4, t4, r4) {
            const n3 = t4.uint32(), o4 = t4.pos + n3;
            let i4, a4;
            for (; t4.pos < o4; ) {
              const [n4] = t4.tag();
              switch (n4) {
                case 1:
                  i4 = _(t4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      a4 = _(t4, e4.V.T);
                      break;
                    case "enum":
                      a4 = t4.int32();
                      break;
                    case "message":
                      a4 = g(t4, new e4.V.T(), r4, void 0);
                  }
              }
            }
            void 0 === i4 && (i4 = (0, s2.scalarZeroValue)(e4.K, c.LongType.BIGINT));
            "string" != typeof i4 && "number" != typeof i4 && (i4 = i4.toString());
            if (void 0 === a4) switch (e4.V.kind) {
              case "scalar":
                a4 = (0, s2.scalarZeroValue)(e4.V.T, c.LongType.BIGINT);
                break;
              case "enum":
                a4 = e4.V.T.values[0].no;
                break;
              case "message":
                a4 = new e4.V.T();
            }
            return [i4, a4];
          })(r3, t3, i3);
          e3[l2][h2] = m2;
      }
    }
    function g(e3, t3, r3, n3) {
      const o3 = t3.getType().runtime.bin, s3 = null == n3 ? void 0 : n3.delimited;
      return o3.readMessage(t3, e3, s3 ? n3.no : e3.uint32(), r3, s3), t3;
    }
    function y(e3, t3) {
      const r3 = _(e3, t3);
      return "bigint" == typeof r3 ? r3.toString() : r3;
    }
    function _(e3, t3) {
      switch (t3) {
        case c.ScalarType.STRING:
          return e3.string();
        case c.ScalarType.BOOL:
          return e3.bool();
        case c.ScalarType.DOUBLE:
          return e3.double();
        case c.ScalarType.FLOAT:
          return e3.float();
        case c.ScalarType.INT32:
          return e3.int32();
        case c.ScalarType.INT64:
          return e3.int64();
        case c.ScalarType.UINT64:
          return e3.uint64();
        case c.ScalarType.FIXED64:
          return e3.fixed64();
        case c.ScalarType.BYTES:
          return e3.bytes();
        case c.ScalarType.FIXED32:
          return e3.fixed32();
        case c.ScalarType.SFIXED32:
          return e3.sfixed32();
        case c.ScalarType.SFIXED64:
          return e3.sfixed64();
        case c.ScalarType.SINT64:
          return e3.sint64();
        case c.ScalarType.UINT32:
          return e3.uint32();
        case c.ScalarType.SINT32:
          return e3.sint32();
      }
    }
    function v(e3, t3, r3, o3) {
      (0, i2.assert)(void 0 !== t3);
      const s3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let a3 = "enum" == e3.kind ? c.ScalarType.INT32 : e3.T;
          if (s3) if ((0, i2.assert)(Array.isArray(t3)), e3.packed) !(function(e4, t4, r4, o4) {
            if (!o4.length) return;
            e4.tag(r4, n2.WireType.LengthDelimited).fork();
            let [, s4] = k(t4);
            for (let t5 = 0; t5 < o4.length; t5++) e4[s4](o4[t5]);
            e4.join();
          })(r3, a3, e3.no, t3);
          else for (const n3 of t3) S(r3, a3, e3.no, n3);
          else S(r3, a3, e3.no, t3);
          break;
        case "message":
          if (s3) {
            (0, i2.assert)(Array.isArray(t3));
            for (const n3 of t3) b(r3, o3, e3, n3);
          } else b(r3, o3, e3, t3);
          break;
        case "map":
          (0, i2.assert)("object" == typeof t3 && null != t3);
          for (const [n3, s4] of Object.entries(t3)) w(r3, o3, e3, n3, s4);
      }
    }
    function w(e3, t3, r3, o3, s3) {
      e3.tag(r3.no, n2.WireType.LengthDelimited), e3.fork();
      let a3 = o3;
      switch (r3.K) {
        case c.ScalarType.INT32:
        case c.ScalarType.FIXED32:
        case c.ScalarType.UINT32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.SINT32:
          a3 = Number.parseInt(o3);
          break;
        case c.ScalarType.BOOL:
          (0, i2.assert)("true" == o3 || "false" == o3), a3 = "true" == o3;
      }
      switch (S(e3, r3.K, 1, a3), r3.V.kind) {
        case "scalar":
          S(e3, r3.V.T, 2, s3);
          break;
        case "enum":
          S(e3, c.ScalarType.INT32, 2, s3);
          break;
        case "message":
          (0, i2.assert)(void 0 !== s3), e3.tag(2, n2.WireType.LengthDelimited).bytes(s3.toBinary(t3));
      }
      e3.join();
    }
    function b(e3, t3, r3, s3) {
      const i3 = (0, o2.wrapField)(r3.T, s3);
      r3.delimited ? e3.tag(r3.no, n2.WireType.StartGroup).raw(i3.toBinary(t3)).tag(r3.no, n2.WireType.EndGroup) : e3.tag(r3.no, n2.WireType.LengthDelimited).bytes(i3.toBinary(t3));
    }
    function S(e3, t3, r3, n3) {
      (0, i2.assert)(void 0 !== n3);
      let [o3, s3] = k(t3);
      e3.tag(r3, o3)[s3](n3);
    }
    function k(e3) {
      let t3 = n2.WireType.Varint;
      switch (e3) {
        case c.ScalarType.BYTES:
        case c.ScalarType.STRING:
          t3 = n2.WireType.LengthDelimited;
          break;
        case c.ScalarType.DOUBLE:
        case c.ScalarType.FIXED64:
        case c.ScalarType.SFIXED64:
          t3 = n2.WireType.Bit64;
          break;
        case c.ScalarType.FIXED32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.FLOAT:
          t3 = n2.WireType.Bit32;
      }
      return [t3, c.ScalarType[e3].toLowerCase()];
    }
    t2.makeBinaryFormat = function() {
      return { makeReadOptions: f, makeWriteOptions: h, listUnknownFields(e3) {
        var t3;
        return null !== (t3 = e3[l]) && void 0 !== t3 ? t3 : [];
      }, discardUnknownFields(e3) {
        delete e3[l];
      }, writeUnknownFields(e3, t3) {
        const r3 = e3[l];
        if (r3) for (const e4 of r3) t3.tag(e4.no, e4.wireType).raw(e4.data);
      }, onUnknownField(e3, t3, r3, n3) {
        const o3 = e3;
        Array.isArray(o3[l]) || (o3[l] = []), o3[l].push({ no: t3, wireType: r3, data: n3 });
      }, readMessage(e3, t3, r3, o3, s3) {
        const i3 = e3.getType(), a3 = s3 ? t3.len : t3.pos + r3;
        let c2, u2;
        for (; t3.pos < a3 && ([c2, u2] = t3.tag(), true !== s3 || u2 != n2.WireType.EndGroup); ) {
          const r4 = i3.fields.find(c2);
          if (!r4) {
            const r5 = t3.skip(u2, c2);
            o3.readUnknownFields && this.onUnknownField(e3, c2, u2, r5);
            continue;
          }
          m(e3, t3, r4, u2, o3);
        }
        if (s3 && (u2 != n2.WireType.EndGroup || c2 !== r3)) throw new Error("invalid end group tag");
      }, readField: m, writeMessage(e3, t3, r3) {
        const n3 = e3.getType();
        for (const o3 of n3.fields.byNumber()) {
          if (!(0, a2.isFieldSet)(o3, e3)) {
            if (o3.req) throw new Error(`cannot encode field ${n3.typeName}.${o3.name} to binary: required field not set`);
            continue;
          }
          v(o3, o3.oneof ? e3[o3.oneof.localName].value : e3[o3.localName], t3, r3);
        }
        return r3.writeUnknownFields && this.writeUnknownFields(e3, t3), t3;
      }, writeField(e3, t3, r3, n3) {
        void 0 !== t3 && v(e3, t3, r3, n3);
      } };
    }, t2.writeMapEntry = w;
  }