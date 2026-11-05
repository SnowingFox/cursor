// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2672 range:217820..223157
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.makeUtilCommon = void 0;
    const n2 = t2(609), r2 = t2(1455), o2 = t2(3408), s = t2(2706);
    function a(e3) {
      if (void 0 === e3) return e3;
      if ((0, s.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const A3 = new Uint8Array(e3.byteLength);
        return A3.set(e3), A3;
      }
      return e3;
    }
    function i(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    A2.makeUtilCommon = function() {
      return { setEnumType: n2.setEnumType, initPartial(e3, A3) {
        if (void 0 === e3) return;
        const t3 = A3.getType();
        for (const n3 of t3.fields.byMember()) {
          const t4 = n3.localName, r3 = A3, a2 = e3;
          if (null != a2[t4]) switch (n3.kind) {
            case "oneof":
              const e4 = a2[t4].case;
              if (void 0 === e4) continue;
              const A4 = n3.findField(e4);
              let c = a2[t4].value;
              A4 && "message" == A4.kind && !(0, s.isMessage)(c, A4.T) ? c = new A4.T(c) : A4 && "scalar" === A4.kind && A4.T === o2.ScalarType.BYTES && (c = i(c)), r3[t4] = { case: e4, value: c };
              break;
            case "scalar":
            case "enum":
              let l = a2[t4];
              n3.T === o2.ScalarType.BYTES && (l = n3.repeated ? l.map(i) : i(l)), r3[t4] = l;
              break;
            case "map":
              switch (n3.V.kind) {
                case "scalar":
                case "enum":
                  if (n3.V.T === o2.ScalarType.BYTES) for (const [e6, A5] of Object.entries(a2[t4])) r3[t4][e6] = i(A5);
                  else Object.assign(r3[t4], a2[t4]);
                  break;
                case "message":
                  const e5 = n3.V.T;
                  for (const A5 of Object.keys(a2[t4])) {
                    let n4 = a2[t4][A5];
                    e5.fieldWrapper || (n4 = new e5(n4)), r3[t4][A5] = n4;
                  }
              }
              break;
            case "message":
              const g = n3.T;
              if (n3.repeated) r3[t4] = a2[t4].map((e5) => (0, s.isMessage)(e5, g) ? e5 : new g(e5));
              else {
                const e5 = a2[t4];
                g.fieldWrapper ? "google.protobuf.BytesValue" === g.typeName ? r3[t4] = i(e5) : r3[t4] = e5 : r3[t4] = (0, s.isMessage)(e5, g) ? e5 : new g(e5);
              }
          }
        }
      }, equals: (e3, A3, t3) => A3 === t3 || !(!A3 || !t3) && e3.fields.byMember().every((e4) => {
        const n3 = A3[e4.localName], s2 = t3[e4.localName];
        if (e4.repeated) {
          if (n3.length !== s2.length) return false;
          switch (e4.kind) {
            case "message":
              return n3.every((A4, t4) => e4.T.equals(A4, s2[t4]));
            case "scalar":
              return n3.every((A4, t4) => (0, r2.scalarEquals)(e4.T, A4, s2[t4]));
            case "enum":
              return n3.every((e5, A4) => (0, r2.scalarEquals)(o2.ScalarType.INT32, e5, s2[A4]));
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
            const A4 = e4.findField(n3.case);
            if (void 0 === A4) return true;
            switch (A4.kind) {
              case "message":
                return A4.T.equals(n3.value, s2.value);
              case "enum":
                return (0, r2.scalarEquals)(o2.ScalarType.INT32, n3.value, s2.value);
              case "scalar":
                return (0, r2.scalarEquals)(A4.T, n3.value, s2.value);
            }
            throw new Error(`oneof cannot contain ${A4.kind}`);
          case "map":
            const t4 = Object.keys(n3).concat(Object.keys(s2));
            switch (e4.V.kind) {
              case "message":
                const A5 = e4.V.T;
                return t4.every((e5) => A5.equals(n3[e5], s2[e5]));
              case "enum":
                return t4.every((e5) => (0, r2.scalarEquals)(o2.ScalarType.INT32, n3[e5], s2[e5]));
              case "scalar":
                const a2 = e4.V.T;
                return t4.every((e5) => (0, r2.scalarEquals)(a2, n3[e5], s2[e5]));
            }
        }
      }), clone(e3) {
        const A3 = e3.getType(), t3 = new A3(), n3 = t3;
        for (const t4 of A3.fields.byMember()) {
          const A4 = e3[t4.localName];
          let r3;
          if (t4.repeated) r3 = A4.map(a);
          else if ("map" == t4.kind) {
            r3 = n3[t4.localName];
            for (const [e4, t5] of Object.entries(A4)) r3[e4] = a(t5);
          } else if ("oneof" == t4.kind) {
            r3 = t4.findField(A4.case) ? { case: A4.case, value: a(A4.value) } : { case: void 0 };
          } else r3 = a(A4);
          n3[t4.localName] = r3;
        }
        for (const t4 of A3.runtime.bin.listUnknownFields(e3)) A3.runtime.bin.onUnknownField(n3, t4.no, t4.wireType, t4.data);
        return t3;
      } };
    };
  }