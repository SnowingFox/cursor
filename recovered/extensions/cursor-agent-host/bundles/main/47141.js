// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47141 range:7942107..7951128
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47141: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.writeMapEntry = t.makeBinaryFormat = void 0;
    const n = r(18831), s = r(42212), o = r(31455), i = r(43098), a = r(88803), c = r(3408), l = r(62706), u = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), d = { readUnknownFields: true, readerFactory: (e2) => new n.BinaryReader(e2) }, p = { writeUnknownFields: true, writerFactory: () => new n.BinaryWriter() };
    function m(e2) {
      return e2 ? Object.assign(Object.assign({}, d), e2) : d;
    }
    function h(e2) {
      return e2 ? Object.assign(Object.assign({}, p), e2) : p;
    }
    function f(e2, t2, r2, s2, i2) {
      let { repeated: a2, localName: u2 } = r2;
      switch (r2.oneof && ((e2 = e2[r2.oneof.localName]).case != u2 && delete e2.value, e2.case = u2, u2 = "value"), r2.kind) {
        case "scalar":
        case "enum":
          const d2 = "enum" == r2.kind ? c.ScalarType.INT32 : r2.T;
          let p2 = w;
          if ("scalar" == r2.kind && r2.L > 0 && (p2 = y), a2) {
            let r3 = e2[u2];
            if (s2 == n.WireType.LengthDelimited && d2 != c.ScalarType.STRING && d2 != c.ScalarType.BYTES) {
              let e3 = t2.uint32() + t2.pos;
              for (; t2.pos < e3; ) r3.push(p2(t2, d2));
            } else r3.push(p2(t2, d2));
          } else e2[u2] = p2(t2, d2);
          break;
        case "message":
          const m2 = r2.T;
          a2 ? e2[u2].push(g(t2, new m2(), i2, r2)) : (0, l.isMessage)(e2[u2]) ? g(t2, e2[u2], i2, r2) : (e2[u2] = g(t2, new m2(), i2, r2), !m2.fieldWrapper || r2.oneof || r2.repeated || (e2[u2] = m2.fieldWrapper.unwrapField(e2[u2])));
          break;
        case "map":
          let [h2, f2] = (function(e3, t3, r3) {
            const n2 = t3.uint32(), s3 = t3.pos + n2;
            let i3, a3;
            for (; t3.pos < s3; ) {
              const [n3] = t3.tag();
              switch (n3) {
                case 1:
                  i3 = w(t3, e3.K);
                  break;
                case 2:
                  switch (e3.V.kind) {
                    case "scalar":
                      a3 = w(t3, e3.V.T);
                      break;
                    case "enum":
                      a3 = t3.int32();
                      break;
                    case "message":
                      a3 = g(t3, new e3.V.T(), r3, void 0);
                  }
              }
            }
            void 0 === i3 && (i3 = (0, o.scalarZeroValue)(e3.K, c.LongType.BIGINT));
            "string" != typeof i3 && "number" != typeof i3 && (i3 = i3.toString());
            if (void 0 === a3) switch (e3.V.kind) {
              case "scalar":
                a3 = (0, o.scalarZeroValue)(e3.V.T, c.LongType.BIGINT);
                break;
              case "enum":
                a3 = e3.V.T.values[0].no;
                break;
              case "message":
                a3 = new e3.V.T();
            }
            return [i3, a3];
          })(r2, t2, i2);
          e2[u2][h2] = f2;
      }
    }
    function g(e2, t2, r2, n2) {
      const s2 = t2.getType().runtime.bin, o2 = null == n2 ? void 0 : n2.delimited;
      return s2.readMessage(t2, e2, o2 ? n2.no : e2.uint32(), r2, o2), t2;
    }
    function y(e2, t2) {
      const r2 = w(e2, t2);
      return "bigint" == typeof r2 ? r2.toString() : r2;
    }
    function w(e2, t2) {
      switch (t2) {
        case c.ScalarType.STRING:
          return e2.string();
        case c.ScalarType.BOOL:
          return e2.bool();
        case c.ScalarType.DOUBLE:
          return e2.double();
        case c.ScalarType.FLOAT:
          return e2.float();
        case c.ScalarType.INT32:
          return e2.int32();
        case c.ScalarType.INT64:
          return e2.int64();
        case c.ScalarType.UINT64:
          return e2.uint64();
        case c.ScalarType.FIXED64:
          return e2.fixed64();
        case c.ScalarType.BYTES:
          return e2.bytes();
        case c.ScalarType.FIXED32:
          return e2.fixed32();
        case c.ScalarType.SFIXED32:
          return e2.sfixed32();
        case c.ScalarType.SFIXED64:
          return e2.sfixed64();
        case c.ScalarType.SINT64:
          return e2.sint64();
        case c.ScalarType.UINT32:
          return e2.uint32();
        case c.ScalarType.SINT32:
          return e2.sint32();
      }
    }
    function v(e2, t2, r2, s2) {
      (0, i.assert)(void 0 !== t2);
      const o2 = e2.repeated;
      switch (e2.kind) {
        case "scalar":
        case "enum":
          let a2 = "enum" == e2.kind ? c.ScalarType.INT32 : e2.T;
          if (o2) if ((0, i.assert)(Array.isArray(t2)), e2.packed) !(function(e3, t3, r3, s3) {
            if (!s3.length) return;
            e3.tag(r3, n.WireType.LengthDelimited).fork();
            let [, o3] = b(t3);
            for (let t4 = 0; t4 < s3.length; t4++) e3[o3](s3[t4]);
            e3.join();
          })(r2, a2, e2.no, t2);
          else for (const n2 of t2) S(r2, a2, e2.no, n2);
          else S(r2, a2, e2.no, t2);
          break;
        case "message":
          if (o2) {
            (0, i.assert)(Array.isArray(t2));
            for (const n2 of t2) A(r2, s2, e2, n2);
          } else A(r2, s2, e2, t2);
          break;
        case "map":
          (0, i.assert)("object" == typeof t2 && null != t2);
          for (const [n2, o3] of Object.entries(t2)) _(r2, s2, e2, n2, o3);
      }
    }
    function _(e2, t2, r2, s2, o2) {
      e2.tag(r2.no, n.WireType.LengthDelimited), e2.fork();
      let a2 = s2;
      switch (r2.K) {
        case c.ScalarType.INT32:
        case c.ScalarType.FIXED32:
        case c.ScalarType.UINT32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.SINT32:
          a2 = Number.parseInt(s2);
          break;
        case c.ScalarType.BOOL:
          (0, i.assert)("true" == s2 || "false" == s2), a2 = "true" == s2;
      }
      switch (S(e2, r2.K, 1, a2), r2.V.kind) {
        case "scalar":
          S(e2, r2.V.T, 2, o2);
          break;
        case "enum":
          S(e2, c.ScalarType.INT32, 2, o2);
          break;
        case "message":
          (0, i.assert)(void 0 !== o2), e2.tag(2, n.WireType.LengthDelimited).bytes(o2.toBinary(t2));
      }
      e2.join();
    }
    function A(e2, t2, r2, o2) {
      const i2 = (0, s.wrapField)(r2.T, o2);
      r2.delimited ? e2.tag(r2.no, n.WireType.StartGroup).raw(i2.toBinary(t2)).tag(r2.no, n.WireType.EndGroup) : e2.tag(r2.no, n.WireType.LengthDelimited).bytes(i2.toBinary(t2));
    }
    function S(e2, t2, r2, n2) {
      (0, i.assert)(void 0 !== n2);
      let [s2, o2] = b(t2);
      e2.tag(r2, s2)[o2](n2);
    }
    function b(e2) {
      let t2 = n.WireType.Varint;
      switch (e2) {
        case c.ScalarType.BYTES:
        case c.ScalarType.STRING:
          t2 = n.WireType.LengthDelimited;
          break;
        case c.ScalarType.DOUBLE:
        case c.ScalarType.FIXED64:
        case c.ScalarType.SFIXED64:
          t2 = n.WireType.Bit64;
          break;
        case c.ScalarType.FIXED32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.FLOAT:
          t2 = n.WireType.Bit32;
      }
      return [t2, c.ScalarType[e2].toLowerCase()];
    }
    t.makeBinaryFormat = function() {
      return { makeReadOptions: m, makeWriteOptions: h, listUnknownFields(e2) {
        var t2;
        return null !== (t2 = e2[u]) && void 0 !== t2 ? t2 : [];
      }, discardUnknownFields(e2) {
        delete e2[u];
      }, writeUnknownFields(e2, t2) {
        const r2 = e2[u];
        if (r2) for (const e3 of r2) t2.tag(e3.no, e3.wireType).raw(e3.data);
      }, onUnknownField(e2, t2, r2, n2) {
        const s2 = e2;
        Array.isArray(s2[u]) || (s2[u] = []), s2[u].push({ no: t2, wireType: r2, data: n2 });
      }, readMessage(e2, t2, r2, s2, o2) {
        const i2 = e2.getType(), a2 = o2 ? t2.len : t2.pos + r2;
        let c2, l2;
        for (; t2.pos < a2 && ([c2, l2] = t2.tag(), true !== o2 || l2 != n.WireType.EndGroup); ) {
          const r3 = i2.fields.find(c2);
          if (!r3) {
            const r4 = t2.skip(l2, c2);
            s2.readUnknownFields && this.onUnknownField(e2, c2, l2, r4);
            continue;
          }
          f(e2, t2, r3, l2, s2);
        }
        if (o2 && (l2 != n.WireType.EndGroup || c2 !== r2)) throw new Error("invalid end group tag");
      }, readField: f, writeMessage(e2, t2, r2) {
        const n2 = e2.getType();
        for (const s2 of n2.fields.byNumber()) {
          if (!(0, a.isFieldSet)(s2, e2)) {
            if (s2.req) throw new Error(`cannot encode field ${n2.typeName}.${s2.name} to binary: required field not set`);
            continue;
          }
          v(s2, s2.oneof ? e2[s2.oneof.localName].value : e2[s2.localName], t2, r2);
        }
        return r2.writeUnknownFields && this.writeUnknownFields(e2, t2), t2;
      }, writeField(e2, t2, r2, n2) {
        void 0 !== t2 && v(e2, t2, r2, n2);
      } };
    }, t.writeMapEntry = _;
  }