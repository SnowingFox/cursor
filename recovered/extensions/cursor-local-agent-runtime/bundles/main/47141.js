// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 47141 range:1390185..1399206
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47141: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.writeMapEntry = t.makeBinaryFormat = void 0;
    const n = r(18831), o = r(42212), s = r(31455), i = r(43098), a = r(88803), l = r(3408), c = r(62706), u = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), d = { readUnknownFields: true, readerFactory: (e2) => new n.BinaryReader(e2) }, p = { writeUnknownFields: true, writerFactory: () => new n.BinaryWriter() };
    function h(e2) {
      return e2 ? Object.assign(Object.assign({}, d), e2) : d;
    }
    function m(e2) {
      return e2 ? Object.assign(Object.assign({}, p), e2) : p;
    }
    function f(e2, t2, r2, o2, i2) {
      let { repeated: a2, localName: u2 } = r2;
      switch (r2.oneof && ((e2 = e2[r2.oneof.localName]).case != u2 && delete e2.value, e2.case = u2, u2 = "value"), r2.kind) {
        case "scalar":
        case "enum":
          const d2 = "enum" == r2.kind ? l.ScalarType.INT32 : r2.T;
          let p2 = v;
          if ("scalar" == r2.kind && r2.L > 0 && (p2 = y), a2) {
            let r3 = e2[u2];
            if (o2 == n.WireType.LengthDelimited && d2 != l.ScalarType.STRING && d2 != l.ScalarType.BYTES) {
              let e3 = t2.uint32() + t2.pos;
              for (; t2.pos < e3; ) r3.push(p2(t2, d2));
            } else r3.push(p2(t2, d2));
          } else e2[u2] = p2(t2, d2);
          break;
        case "message":
          const h2 = r2.T;
          a2 ? e2[u2].push(g(t2, new h2(), i2, r2)) : (0, c.isMessage)(e2[u2]) ? g(t2, e2[u2], i2, r2) : (e2[u2] = g(t2, new h2(), i2, r2), !h2.fieldWrapper || r2.oneof || r2.repeated || (e2[u2] = h2.fieldWrapper.unwrapField(e2[u2])));
          break;
        case "map":
          let [m2, f2] = (function(e3, t3, r3) {
            const n2 = t3.uint32(), o3 = t3.pos + n2;
            let i3, a3;
            for (; t3.pos < o3; ) {
              const [n3] = t3.tag();
              switch (n3) {
                case 1:
                  i3 = v(t3, e3.K);
                  break;
                case 2:
                  switch (e3.V.kind) {
                    case "scalar":
                      a3 = v(t3, e3.V.T);
                      break;
                    case "enum":
                      a3 = t3.int32();
                      break;
                    case "message":
                      a3 = g(t3, new e3.V.T(), r3, void 0);
                  }
              }
            }
            void 0 === i3 && (i3 = (0, s.scalarZeroValue)(e3.K, l.LongType.BIGINT));
            "string" != typeof i3 && "number" != typeof i3 && (i3 = i3.toString());
            if (void 0 === a3) switch (e3.V.kind) {
              case "scalar":
                a3 = (0, s.scalarZeroValue)(e3.V.T, l.LongType.BIGINT);
                break;
              case "enum":
                a3 = e3.V.T.values[0].no;
                break;
              case "message":
                a3 = new e3.V.T();
            }
            return [i3, a3];
          })(r2, t2, i2);
          e2[u2][m2] = f2;
      }
    }
    function g(e2, t2, r2, n2) {
      const o2 = t2.getType().runtime.bin, s2 = null == n2 ? void 0 : n2.delimited;
      return o2.readMessage(t2, e2, s2 ? n2.no : e2.uint32(), r2, s2), t2;
    }
    function y(e2, t2) {
      const r2 = v(e2, t2);
      return "bigint" == typeof r2 ? r2.toString() : r2;
    }
    function v(e2, t2) {
      switch (t2) {
        case l.ScalarType.STRING:
          return e2.string();
        case l.ScalarType.BOOL:
          return e2.bool();
        case l.ScalarType.DOUBLE:
          return e2.double();
        case l.ScalarType.FLOAT:
          return e2.float();
        case l.ScalarType.INT32:
          return e2.int32();
        case l.ScalarType.INT64:
          return e2.int64();
        case l.ScalarType.UINT64:
          return e2.uint64();
        case l.ScalarType.FIXED64:
          return e2.fixed64();
        case l.ScalarType.BYTES:
          return e2.bytes();
        case l.ScalarType.FIXED32:
          return e2.fixed32();
        case l.ScalarType.SFIXED32:
          return e2.sfixed32();
        case l.ScalarType.SFIXED64:
          return e2.sfixed64();
        case l.ScalarType.SINT64:
          return e2.sint64();
        case l.ScalarType.UINT32:
          return e2.uint32();
        case l.ScalarType.SINT32:
          return e2.sint32();
      }
    }
    function w(e2, t2, r2, o2) {
      (0, i.assert)(void 0 !== t2);
      const s2 = e2.repeated;
      switch (e2.kind) {
        case "scalar":
        case "enum":
          let a2 = "enum" == e2.kind ? l.ScalarType.INT32 : e2.T;
          if (s2) if ((0, i.assert)(Array.isArray(t2)), e2.packed) !(function(e3, t3, r3, o3) {
            if (!o3.length) return;
            e3.tag(r3, n.WireType.LengthDelimited).fork();
            let [, s3] = x(t3);
            for (let t4 = 0; t4 < o3.length; t4++) e3[s3](o3[t4]);
            e3.join();
          })(r2, a2, e2.no, t2);
          else for (const n2 of t2) S(r2, a2, e2.no, n2);
          else S(r2, a2, e2.no, t2);
          break;
        case "message":
          if (s2) {
            (0, i.assert)(Array.isArray(t2));
            for (const n2 of t2) _(r2, o2, e2, n2);
          } else _(r2, o2, e2, t2);
          break;
        case "map":
          (0, i.assert)("object" == typeof t2 && null != t2);
          for (const [n2, s3] of Object.entries(t2)) b(r2, o2, e2, n2, s3);
      }
    }
    function b(e2, t2, r2, o2, s2) {
      e2.tag(r2.no, n.WireType.LengthDelimited), e2.fork();
      let a2 = o2;
      switch (r2.K) {
        case l.ScalarType.INT32:
        case l.ScalarType.FIXED32:
        case l.ScalarType.UINT32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.SINT32:
          a2 = Number.parseInt(o2);
          break;
        case l.ScalarType.BOOL:
          (0, i.assert)("true" == o2 || "false" == o2), a2 = "true" == o2;
      }
      switch (S(e2, r2.K, 1, a2), r2.V.kind) {
        case "scalar":
          S(e2, r2.V.T, 2, s2);
          break;
        case "enum":
          S(e2, l.ScalarType.INT32, 2, s2);
          break;
        case "message":
          (0, i.assert)(void 0 !== s2), e2.tag(2, n.WireType.LengthDelimited).bytes(s2.toBinary(t2));
      }
      e2.join();
    }
    function _(e2, t2, r2, s2) {
      const i2 = (0, o.wrapField)(r2.T, s2);
      r2.delimited ? e2.tag(r2.no, n.WireType.StartGroup).raw(i2.toBinary(t2)).tag(r2.no, n.WireType.EndGroup) : e2.tag(r2.no, n.WireType.LengthDelimited).bytes(i2.toBinary(t2));
    }
    function S(e2, t2, r2, n2) {
      (0, i.assert)(void 0 !== n2);
      let [o2, s2] = x(t2);
      e2.tag(r2, o2)[s2](n2);
    }
    function x(e2) {
      let t2 = n.WireType.Varint;
      switch (e2) {
        case l.ScalarType.BYTES:
        case l.ScalarType.STRING:
          t2 = n.WireType.LengthDelimited;
          break;
        case l.ScalarType.DOUBLE:
        case l.ScalarType.FIXED64:
        case l.ScalarType.SFIXED64:
          t2 = n.WireType.Bit64;
          break;
        case l.ScalarType.FIXED32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.FLOAT:
          t2 = n.WireType.Bit32;
      }
      return [t2, l.ScalarType[e2].toLowerCase()];
    }
    t.makeBinaryFormat = function() {
      return { makeReadOptions: h, makeWriteOptions: m, listUnknownFields(e2) {
        var t2;
        return null !== (t2 = e2[u]) && void 0 !== t2 ? t2 : [];
      }, discardUnknownFields(e2) {
        delete e2[u];
      }, writeUnknownFields(e2, t2) {
        const r2 = e2[u];
        if (r2) for (const e3 of r2) t2.tag(e3.no, e3.wireType).raw(e3.data);
      }, onUnknownField(e2, t2, r2, n2) {
        const o2 = e2;
        Array.isArray(o2[u]) || (o2[u] = []), o2[u].push({ no: t2, wireType: r2, data: n2 });
      }, readMessage(e2, t2, r2, o2, s2) {
        const i2 = e2.getType(), a2 = s2 ? t2.len : t2.pos + r2;
        let l2, c2;
        for (; t2.pos < a2 && ([l2, c2] = t2.tag(), true !== s2 || c2 != n.WireType.EndGroup); ) {
          const r3 = i2.fields.find(l2);
          if (!r3) {
            const r4 = t2.skip(c2, l2);
            o2.readUnknownFields && this.onUnknownField(e2, l2, c2, r4);
            continue;
          }
          f(e2, t2, r3, c2, o2);
        }
        if (s2 && (c2 != n.WireType.EndGroup || l2 !== r2)) throw new Error("invalid end group tag");
      }, readField: f, writeMessage(e2, t2, r2) {
        const n2 = e2.getType();
        for (const o2 of n2.fields.byNumber()) {
          if (!(0, a.isFieldSet)(o2, e2)) {
            if (o2.req) throw new Error(`cannot encode field ${n2.typeName}.${o2.name} to binary: required field not set`);
            continue;
          }
          w(o2, o2.oneof ? e2[o2.oneof.localName].value : e2[o2.localName], t2, r2);
        }
        return r2.writeUnknownFields && this.writeUnknownFields(e2, t2), t2;
      }, writeField(e2, t2, r2, n2) {
        void 0 !== t2 && w(e2, t2, r2, n2);
      } };
    }, t.writeMapEntry = b;
  }