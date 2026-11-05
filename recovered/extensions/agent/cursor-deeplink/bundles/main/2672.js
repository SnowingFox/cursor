// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2672 range:244144..249481
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeUtilCommon = void 0;
    const n2 = A2(609), r2 = A2(1455), o2 = A2(3408), s = A2(2706);
    function i(e3) {
      if (void 0 === e3) return e3;
      if ((0, s.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    function a(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    t2.makeUtilCommon = function() {
      return { setEnumType: n2.setEnumType, initPartial(e3, t3) {
        if (void 0 === e3) return;
        const A3 = t3.getType();
        for (const n3 of A3.fields.byMember()) {
          const A4 = n3.localName, r3 = t3, i2 = e3;
          if (null != i2[A4]) switch (n3.kind) {
            case "oneof":
              const e4 = i2[A4].case;
              if (void 0 === e4) continue;
              const t4 = n3.findField(e4);
              let c = i2[A4].value;
              t4 && "message" == t4.kind && !(0, s.isMessage)(c, t4.T) ? c = new t4.T(c) : t4 && "scalar" === t4.kind && t4.T === o2.ScalarType.BYTES && (c = a(c)), r3[A4] = { case: e4, value: c };
              break;
            case "scalar":
            case "enum":
              let l = i2[A4];
              n3.T === o2.ScalarType.BYTES && (l = n3.repeated ? l.map(a) : a(l)), r3[A4] = l;
              break;
            case "map":
              switch (n3.V.kind) {
                case "scalar":
                case "enum":
                  if (n3.V.T === o2.ScalarType.BYTES) for (const [e6, t5] of Object.entries(i2[A4])) r3[A4][e6] = a(t5);
                  else Object.assign(r3[A4], i2[A4]);
                  break;
                case "message":
                  const e5 = n3.V.T;
                  for (const t5 of Object.keys(i2[A4])) {
                    let n4 = i2[A4][t5];
                    e5.fieldWrapper || (n4 = new e5(n4)), r3[A4][t5] = n4;
                  }
              }
              break;
            case "message":
              const u = n3.T;
              if (n3.repeated) r3[A4] = i2[A4].map((e5) => (0, s.isMessage)(e5, u) ? e5 : new u(e5));
              else {
                const e5 = i2[A4];
                u.fieldWrapper ? "google.protobuf.BytesValue" === u.typeName ? r3[A4] = a(e5) : r3[A4] = e5 : r3[A4] = (0, s.isMessage)(e5, u) ? e5 : new u(e5);
              }
          }
        }
      }, equals: (e3, t3, A3) => t3 === A3 || !(!t3 || !A3) && e3.fields.byMember().every((e4) => {
        const n3 = t3[e4.localName], s2 = A3[e4.localName];
        if (e4.repeated) {
          if (n3.length !== s2.length) return false;
          switch (e4.kind) {
            case "message":
              return n3.every((t4, A4) => e4.T.equals(t4, s2[A4]));
            case "scalar":
              return n3.every((t4, A4) => (0, r2.scalarEquals)(e4.T, t4, s2[A4]));
            case "enum":
              return n3.every((e5, t4) => (0, r2.scalarEquals)(o2.ScalarType.INT32, e5, s2[t4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(n3, s2);
          case "enum":
            return (0, r2.scalarEquals)(o2.ScalarType.INT32, n3, s2);
          case "scalar":
            return (0, r2.scalarEquals)(e4.T, n3, s2);
          case "oneof":
            if (n3.case !== s2.case) return false;
            const t4 = e4.findField(n3.case);
            if (void 0 === t4) return true;
            switch (t4.kind) {
              case "message":
                return t4.T.equals(n3.value, s2.value);
              case "enum":
                return (0, r2.scalarEquals)(o2.ScalarType.INT32, n3.value, s2.value);
              case "scalar":
                return (0, r2.scalarEquals)(t4.T, n3.value, s2.value);
            }
            throw new Error(`oneof cannot contain ${t4.kind}`);
          case "map":
            const A4 = Object.keys(n3).concat(Object.keys(s2));
            switch (e4.V.kind) {
              case "message":
                const t5 = e4.V.T;
                return A4.every((e5) => t5.equals(n3[e5], s2[e5]));
              case "enum":
                return A4.every((e5) => (0, r2.scalarEquals)(o2.ScalarType.INT32, n3[e5], s2[e5]));
              case "scalar":
                const i2 = e4.V.T;
                return A4.every((e5) => (0, r2.scalarEquals)(i2, n3[e5], s2[e5]));
            }
        }
      }), clone(e3) {
        const t3 = e3.getType(), A3 = new t3(), n3 = A3;
        for (const A4 of t3.fields.byMember()) {
          const t4 = e3[A4.localName];
          let r3;
          if (A4.repeated) r3 = t4.map(i);
          else if ("map" == A4.kind) {
            r3 = n3[A4.localName];
            for (const [e4, A5] of Object.entries(t4)) r3[e4] = i(A5);
          } else if ("oneof" == A4.kind) {
            r3 = A4.findField(t4.case) ? { case: t4.case, value: i(t4.value) } : { case: void 0 };
          } else r3 = i(t4);
          n3[A4.localName] = r3;
        }
        for (const A4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(n3, A4.no, A4.wireType, A4.data);
        return A3;
      } };
    };
  }