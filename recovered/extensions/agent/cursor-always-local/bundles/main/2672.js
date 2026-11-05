// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2672 range:737865..743207
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.makeUtilCommon = void 0;
    const n2 = r2(609), s2 = r2(1455), i2 = r2(3408), o2 = r2(2706);
    function a(t3) {
      if (void 0 === t3) return t3;
      if ((0, o2.isMessage)(t3)) return t3.clone();
      if (t3 instanceof Uint8Array) {
        const e3 = new Uint8Array(t3.byteLength);
        return e3.set(t3), e3;
      }
      return t3;
    }
    function u(t3) {
      return t3 instanceof Uint8Array ? t3 : new Uint8Array(t3);
    }
    e2.makeUtilCommon = function() {
      return { setEnumType: n2.setEnumType, initPartial(t3, e3) {
        if (void 0 === t3) return;
        const r3 = e3.getType();
        for (const n3 of r3.fields.byMember()) {
          const r4 = n3.localName, s3 = e3, a2 = t3;
          if (null != a2[r4]) switch (n3.kind) {
            case "oneof":
              const t4 = a2[r4].case;
              if (void 0 === t4) continue;
              const e4 = n3.findField(t4);
              let c = a2[r4].value;
              e4 && "message" == e4.kind && !(0, o2.isMessage)(c, e4.T) ? c = new e4.T(c) : e4 && "scalar" === e4.kind && e4.T === i2.ScalarType.BYTES && (c = u(c)), s3[r4] = { case: t4, value: c };
              break;
            case "scalar":
            case "enum":
              let l = a2[r4];
              n3.T === i2.ScalarType.BYTES && (l = n3.repeated ? l.map(u) : u(l)), s3[r4] = l;
              break;
            case "map":
              switch (n3.V.kind) {
                case "scalar":
                case "enum":
                  if (n3.V.T === i2.ScalarType.BYTES) for (const [t6, e5] of Object.entries(a2[r4])) s3[r4][t6] = u(e5);
                  else Object.assign(s3[r4], a2[r4]);
                  break;
                case "message":
                  const t5 = n3.V.T;
                  for (const e5 of Object.keys(a2[r4])) {
                    let n4 = a2[r4][e5];
                    t5.fieldWrapper || (n4 = new t5(n4)), s3[r4][e5] = n4;
                  }
              }
              break;
            case "message":
              const m = n3.T;
              if (n3.repeated) s3[r4] = a2[r4].map((t5) => (0, o2.isMessage)(t5, m) ? t5 : new m(t5));
              else {
                const t5 = a2[r4];
                m.fieldWrapper ? "google.protobuf.BytesValue" === m.typeName ? s3[r4] = u(t5) : s3[r4] = t5 : s3[r4] = (0, o2.isMessage)(t5, m) ? t5 : new m(t5);
              }
          }
        }
      }, equals: (t3, e3, r3) => e3 === r3 || !(!e3 || !r3) && t3.fields.byMember().every((t4) => {
        const n3 = e3[t4.localName], o3 = r3[t4.localName];
        if (t4.repeated) {
          if (n3.length !== o3.length) return false;
          switch (t4.kind) {
            case "message":
              return n3.every((e4, r4) => t4.T.equals(e4, o3[r4]));
            case "scalar":
              return n3.every((e4, r4) => (0, s2.scalarEquals)(t4.T, e4, o3[r4]));
            case "enum":
              return n3.every((t5, e4) => (0, s2.scalarEquals)(i2.ScalarType.INT32, t5, o3[e4]));
          }
          throw new Error(`repeated cannot contain ${t4.kind}`);
        }
        switch (t4.kind) {
          case "message":
            return t4.T.equals(n3, o3);
          case "enum":
            return (0, s2.scalarEquals)(i2.ScalarType.INT32, n3, o3);
          case "scalar":
            return (0, s2.scalarEquals)(t4.T, n3, o3);
          case "oneof":
            if (n3.case !== o3.case) return false;
            const e4 = t4.findField(n3.case);
            if (void 0 === e4) return true;
            switch (e4.kind) {
              case "message":
                return e4.T.equals(n3.value, o3.value);
              case "enum":
                return (0, s2.scalarEquals)(i2.ScalarType.INT32, n3.value, o3.value);
              case "scalar":
                return (0, s2.scalarEquals)(e4.T, n3.value, o3.value);
            }
            throw new Error(`oneof cannot contain ${e4.kind}`);
          case "map":
            const r4 = Object.keys(n3).concat(Object.keys(o3));
            switch (t4.V.kind) {
              case "message":
                const e5 = t4.V.T;
                return r4.every((t5) => e5.equals(n3[t5], o3[t5]));
              case "enum":
                return r4.every((t5) => (0, s2.scalarEquals)(i2.ScalarType.INT32, n3[t5], o3[t5]));
              case "scalar":
                const a2 = t4.V.T;
                return r4.every((t5) => (0, s2.scalarEquals)(a2, n3[t5], o3[t5]));
            }
        }
      }), clone(t3) {
        const e3 = t3.getType(), r3 = new e3(), n3 = r3;
        for (const r4 of e3.fields.byMember()) {
          const e4 = t3[r4.localName];
          let s3;
          if (r4.repeated) s3 = e4.map(a);
          else if ("map" == r4.kind) {
            s3 = n3[r4.localName];
            for (const [t4, r5] of Object.entries(e4)) s3[t4] = a(r5);
          } else if ("oneof" == r4.kind) {
            s3 = r4.findField(e4.case) ? { case: e4.case, value: a(e4.value) } : { case: void 0 };
          } else s3 = a(e4);
          n3[r4.localName] = s3;
        }
        for (const r4 of e3.runtime.bin.listUnknownFields(t3)) e3.runtime.bin.onUnknownField(n3, r4.no, r4.wireType, r4.data);
        return r3;
      } };
    };
  }