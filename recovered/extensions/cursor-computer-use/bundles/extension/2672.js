// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2672 range:222011..227348
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2672: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeUtilCommon = void 0;
    const a2 = t2(609), s2 = t2(1455), o2 = t2(3408), r = t2(2706);
    function i(e3) {
      if (void 0 === e3) return e3;
      if ((0, r.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const n3 = new Uint8Array(e3.byteLength);
        return n3.set(e3), n3;
      }
      return e3;
    }
    function A(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    n2.makeUtilCommon = function() {
      return { setEnumType: a2.setEnumType, initPartial(e3, n3) {
        if (void 0 === e3) return;
        const t3 = n3.getType();
        for (const a3 of t3.fields.byMember()) {
          const t4 = a3.localName, s3 = n3, i2 = e3;
          if (null != i2[t4]) switch (a3.kind) {
            case "oneof":
              const e4 = i2[t4].case;
              if (void 0 === e4) continue;
              const n4 = a3.findField(e4);
              let c = i2[t4].value;
              n4 && "message" == n4.kind && !(0, r.isMessage)(c, n4.T) ? c = new n4.T(c) : n4 && "scalar" === n4.kind && n4.T === o2.ScalarType.BYTES && (c = A(c)), s3[t4] = { case: e4, value: c };
              break;
            case "scalar":
            case "enum":
              let l = i2[t4];
              a3.T === o2.ScalarType.BYTES && (l = a3.repeated ? l.map(A) : A(l)), s3[t4] = l;
              break;
            case "map":
              switch (a3.V.kind) {
                case "scalar":
                case "enum":
                  if (a3.V.T === o2.ScalarType.BYTES) for (const [e6, n5] of Object.entries(i2[t4])) s3[t4][e6] = A(n5);
                  else Object.assign(s3[t4], i2[t4]);
                  break;
                case "message":
                  const e5 = a3.V.T;
                  for (const n5 of Object.keys(i2[t4])) {
                    let a4 = i2[t4][n5];
                    e5.fieldWrapper || (a4 = new e5(a4)), s3[t4][n5] = a4;
                  }
              }
              break;
            case "message":
              const d = a3.T;
              if (a3.repeated) s3[t4] = i2[t4].map((e5) => (0, r.isMessage)(e5, d) ? e5 : new d(e5));
              else {
                const e5 = i2[t4];
                d.fieldWrapper ? "google.protobuf.BytesValue" === d.typeName ? s3[t4] = A(e5) : s3[t4] = e5 : s3[t4] = (0, r.isMessage)(e5, d) ? e5 : new d(e5);
              }
          }
        }
      }, equals: (e3, n3, t3) => n3 === t3 || !(!n3 || !t3) && e3.fields.byMember().every((e4) => {
        const a3 = n3[e4.localName], r2 = t3[e4.localName];
        if (e4.repeated) {
          if (a3.length !== r2.length) return false;
          switch (e4.kind) {
            case "message":
              return a3.every((n4, t4) => e4.T.equals(n4, r2[t4]));
            case "scalar":
              return a3.every((n4, t4) => (0, s2.scalarEquals)(e4.T, n4, r2[t4]));
            case "enum":
              return a3.every((e5, n4) => (0, s2.scalarEquals)(o2.ScalarType.INT32, e5, r2[n4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(a3, r2);
          case "enum":
            return (0, s2.scalarEquals)(o2.ScalarType.INT32, a3, r2);
          case "scalar":
            return (0, s2.scalarEquals)(e4.T, a3, r2);
          case "oneof":
            if (a3.case !== r2.case) return false;
            const n4 = e4.findField(a3.case);
            if (void 0 === n4) return true;
            switch (n4.kind) {
              case "message":
                return n4.T.equals(a3.value, r2.value);
              case "enum":
                return (0, s2.scalarEquals)(o2.ScalarType.INT32, a3.value, r2.value);
              case "scalar":
                return (0, s2.scalarEquals)(n4.T, a3.value, r2.value);
            }
            throw new Error(`oneof cannot contain ${n4.kind}`);
          case "map":
            const t4 = Object.keys(a3).concat(Object.keys(r2));
            switch (e4.V.kind) {
              case "message":
                const n5 = e4.V.T;
                return t4.every((e5) => n5.equals(a3[e5], r2[e5]));
              case "enum":
                return t4.every((e5) => (0, s2.scalarEquals)(o2.ScalarType.INT32, a3[e5], r2[e5]));
              case "scalar":
                const i2 = e4.V.T;
                return t4.every((e5) => (0, s2.scalarEquals)(i2, a3[e5], r2[e5]));
            }
        }
      }), clone(e3) {
        const n3 = e3.getType(), t3 = new n3(), a3 = t3;
        for (const t4 of n3.fields.byMember()) {
          const n4 = e3[t4.localName];
          let s3;
          if (t4.repeated) s3 = n4.map(i);
          else if ("map" == t4.kind) {
            s3 = a3[t4.localName];
            for (const [e4, t5] of Object.entries(n4)) s3[e4] = i(t5);
          } else if ("oneof" == t4.kind) {
            s3 = t4.findField(n4.case) ? { case: n4.case, value: i(n4.value) } : { case: void 0 };
          } else s3 = i(n4);
          a3[t4.localName] = s3;
        }
        for (const t4 of n3.runtime.bin.listUnknownFields(e3)) n3.runtime.bin.onUnknownField(a3, t4.no, t4.wireType, t4.data);
        return t3;
      } };
    };
  }