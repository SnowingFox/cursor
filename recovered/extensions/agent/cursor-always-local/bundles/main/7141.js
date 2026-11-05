// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7141 range:4194089..4203147
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7141: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.writeMapEntry = e2.makeBinaryFormat = void 0;
    const n2 = r2(8831), s2 = r2(2212), i2 = r2(1455), o2 = r2(3098), a = r2(8803), u = r2(3408), c = r2(2706), l = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), m = { readUnknownFields: true, readerFactory: (t3) => new n2.BinaryReader(t3) }, d = { writeUnknownFields: true, writerFactory: () => new n2.BinaryWriter() };
    function f(t3) {
      return t3 ? Object.assign(Object.assign({}, m), t3) : m;
    }
    function p(t3) {
      return t3 ? Object.assign(Object.assign({}, d), t3) : d;
    }
    function h(t3, e3, r3, s3, o3) {
      let { repeated: a2, localName: l2 } = r3;
      switch (r3.oneof && ((t3 = t3[r3.oneof.localName]).case != l2 && delete t3.value, t3.case = l2, l2 = "value"), r3.kind) {
        case "scalar":
        case "enum":
          const m2 = "enum" == r3.kind ? u.ScalarType.INT32 : r3.T;
          let d2 = _;
          if ("scalar" == r3.kind && r3.L > 0 && (d2 = A), a2) {
            let r4 = t3[l2];
            if (s3 == n2.WireType.LengthDelimited && m2 != u.ScalarType.STRING && m2 != u.ScalarType.BYTES) {
              let t4 = e3.uint32() + e3.pos;
              for (; e3.pos < t4; ) r4.push(d2(e3, m2));
            } else r4.push(d2(e3, m2));
          } else t3[l2] = d2(e3, m2);
          break;
        case "message":
          const f2 = r3.T;
          a2 ? t3[l2].push(g(e3, new f2(), o3, r3)) : (0, c.isMessage)(t3[l2]) ? g(e3, t3[l2], o3, r3) : (t3[l2] = g(e3, new f2(), o3, r3), !f2.fieldWrapper || r3.oneof || r3.repeated || (t3[l2] = f2.fieldWrapper.unwrapField(t3[l2])));
          break;
        case "map":
          let [p2, h2] = (function(t4, e4, r4) {
            const n3 = e4.uint32(), s4 = e4.pos + n3;
            let o4, a3;
            for (; e4.pos < s4; ) {
              const [n4] = e4.tag();
              switch (n4) {
                case 1:
                  o4 = _(e4, t4.K);
                  break;
                case 2:
                  switch (t4.V.kind) {
                    case "scalar":
                      a3 = _(e4, t4.V.T);
                      break;
                    case "enum":
                      a3 = e4.int32();
                      break;
                    case "message":
                      a3 = g(e4, new t4.V.T(), r4, void 0);
                  }
              }
            }
            void 0 === o4 && (o4 = (0, i2.scalarZeroValue)(t4.K, u.LongType.BIGINT));
            "string" != typeof o4 && "number" != typeof o4 && (o4 = o4.toString());
            if (void 0 === a3) switch (t4.V.kind) {
              case "scalar":
                a3 = (0, i2.scalarZeroValue)(t4.V.T, u.LongType.BIGINT);
                break;
              case "enum":
                a3 = t4.V.T.values[0].no;
                break;
              case "message":
                a3 = new t4.V.T();
            }
            return [o4, a3];
          })(r3, e3, o3);
          t3[l2][p2] = h2;
      }
    }
    function g(t3, e3, r3, n3) {
      const s3 = e3.getType().runtime.bin, i3 = null == n3 ? void 0 : n3.delimited;
      return s3.readMessage(e3, t3, i3 ? n3.no : t3.uint32(), r3, i3), e3;
    }
    function A(t3, e3) {
      const r3 = _(t3, e3);
      return "bigint" == typeof r3 ? r3.toString() : r3;
    }
    function _(t3, e3) {
      switch (e3) {
        case u.ScalarType.STRING:
          return t3.string();
        case u.ScalarType.BOOL:
          return t3.bool();
        case u.ScalarType.DOUBLE:
          return t3.double();
        case u.ScalarType.FLOAT:
          return t3.float();
        case u.ScalarType.INT32:
          return t3.int32();
        case u.ScalarType.INT64:
          return t3.int64();
        case u.ScalarType.UINT64:
          return t3.uint64();
        case u.ScalarType.FIXED64:
          return t3.fixed64();
        case u.ScalarType.BYTES:
          return t3.bytes();
        case u.ScalarType.FIXED32:
          return t3.fixed32();
        case u.ScalarType.SFIXED32:
          return t3.sfixed32();
        case u.ScalarType.SFIXED64:
          return t3.sfixed64();
        case u.ScalarType.SINT64:
          return t3.sint64();
        case u.ScalarType.UINT32:
          return t3.uint32();
        case u.ScalarType.SINT32:
          return t3.sint32();
      }
    }
    function y(t3, e3, r3, s3) {
      (0, o2.assert)(void 0 !== e3);
      const i3 = t3.repeated;
      switch (t3.kind) {
        case "scalar":
        case "enum":
          let a2 = "enum" == t3.kind ? u.ScalarType.INT32 : t3.T;
          if (i3) if ((0, o2.assert)(Array.isArray(e3)), t3.packed) !(function(t4, e4, r4, s4) {
            if (!s4.length) return;
            t4.tag(r4, n2.WireType.LengthDelimited).fork();
            let [, i4] = B(e4);
            for (let e5 = 0; e5 < s4.length; e5++) t4[i4](s4[e5]);
            t4.join();
          })(r3, a2, t3.no, e3);
          else for (const n3 of e3) J(r3, a2, t3.no, n3);
          else J(r3, a2, t3.no, e3);
          break;
        case "message":
          if (i3) {
            (0, o2.assert)(Array.isArray(e3));
            for (const n3 of e3) S(r3, s3, t3, n3);
          } else S(r3, s3, t3, e3);
          break;
        case "map":
          (0, o2.assert)("object" == typeof e3 && null != e3);
          for (const [n3, i4] of Object.entries(e3)) w(r3, s3, t3, n3, i4);
      }
    }
    function w(t3, e3, r3, s3, i3) {
      t3.tag(r3.no, n2.WireType.LengthDelimited), t3.fork();
      let a2 = s3;
      switch (r3.K) {
        case u.ScalarType.INT32:
        case u.ScalarType.FIXED32:
        case u.ScalarType.UINT32:
        case u.ScalarType.SFIXED32:
        case u.ScalarType.SINT32:
          a2 = Number.parseInt(s3);
          break;
        case u.ScalarType.BOOL:
          (0, o2.assert)("true" == s3 || "false" == s3), a2 = "true" == s3;
      }
      switch (J(t3, r3.K, 1, a2), r3.V.kind) {
        case "scalar":
          J(t3, r3.V.T, 2, i3);
          break;
        case "enum":
          J(t3, u.ScalarType.INT32, 2, i3);
          break;
        case "message":
          (0, o2.assert)(void 0 !== i3), t3.tag(2, n2.WireType.LengthDelimited).bytes(i3.toBinary(e3));
      }
      t3.join();
    }
    function S(t3, e3, r3, i3) {
      const o3 = (0, s2.wrapField)(r3.T, i3);
      r3.delimited ? t3.tag(r3.no, n2.WireType.StartGroup).raw(o3.toBinary(e3)).tag(r3.no, n2.WireType.EndGroup) : t3.tag(r3.no, n2.WireType.LengthDelimited).bytes(o3.toBinary(e3));
    }
    function J(t3, e3, r3, n3) {
      (0, o2.assert)(void 0 !== n3);
      let [s3, i3] = B(e3);
      t3.tag(r3, s3)[i3](n3);
    }
    function B(t3) {
      let e3 = n2.WireType.Varint;
      switch (t3) {
        case u.ScalarType.BYTES:
        case u.ScalarType.STRING:
          e3 = n2.WireType.LengthDelimited;
          break;
        case u.ScalarType.DOUBLE:
        case u.ScalarType.FIXED64:
        case u.ScalarType.SFIXED64:
          e3 = n2.WireType.Bit64;
          break;
        case u.ScalarType.FIXED32:
        case u.ScalarType.SFIXED32:
        case u.ScalarType.FLOAT:
          e3 = n2.WireType.Bit32;
      }
      return [e3, u.ScalarType[t3].toLowerCase()];
    }
    e2.makeBinaryFormat = function() {
      return { makeReadOptions: f, makeWriteOptions: p, listUnknownFields(t3) {
        var e3;
        return null !== (e3 = t3[l]) && void 0 !== e3 ? e3 : [];
      }, discardUnknownFields(t3) {
        delete t3[l];
      }, writeUnknownFields(t3, e3) {
        const r3 = t3[l];
        if (r3) for (const t4 of r3) e3.tag(t4.no, t4.wireType).raw(t4.data);
      }, onUnknownField(t3, e3, r3, n3) {
        const s3 = t3;
        Array.isArray(s3[l]) || (s3[l] = []), s3[l].push({ no: e3, wireType: r3, data: n3 });
      }, readMessage(t3, e3, r3, s3, i3) {
        const o3 = t3.getType(), a2 = i3 ? e3.len : e3.pos + r3;
        let u2, c2;
        for (; e3.pos < a2 && ([u2, c2] = e3.tag(), true !== i3 || c2 != n2.WireType.EndGroup); ) {
          const r4 = o3.fields.find(u2);
          if (!r4) {
            const r5 = e3.skip(c2, u2);
            s3.readUnknownFields && this.onUnknownField(t3, u2, c2, r5);
            continue;
          }
          h(t3, e3, r4, c2, s3);
        }
        if (i3 && (c2 != n2.WireType.EndGroup || u2 !== r3)) throw new Error("invalid end group tag");
      }, readField: h, writeMessage(t3, e3, r3) {
        const n3 = t3.getType();
        for (const s3 of n3.fields.byNumber()) {
          if (!(0, a.isFieldSet)(s3, t3)) {
            if (s3.req) throw new Error(`cannot encode field ${n3.typeName}.${s3.name} to binary: required field not set`);
            continue;
          }
          y(s3, s3.oneof ? t3[s3.oneof.localName].value : t3[s3.localName], e3, r3);
        }
        return r3.writeUnknownFields && this.writeUnknownFields(t3, e3), e3;
      }, writeField(t3, e3, r3, n3) {
        void 0 !== e3 && y(t3, e3, r3, n3);
      } };
    }, e2.writeMapEntry = w;
  }