// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2672 range:217968..223315
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeUtilCommon = void 0;
    const t2 = a2(609), s2 = a2(1455), o2 = a2(3408), r2 = a2(2706);
    function i2(e3) {
      if (void 0 === e3) return e3;
      if ((0, r2.isMessage)(e3)) return e3.clone();
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
      return { setEnumType: t2.setEnumType, initPartial(e3, n3) {
        if (void 0 === e3) return;
        const a3 = n3.getType();
        for (const t3 of a3.fields.byMember()) {
          const a4 = t3.localName, s3 = n3, i3 = e3;
          if (null != i3[a4]) switch (t3.kind) {
            case "oneof":
              const e4 = i3[a4].case;
              if (void 0 === e4) continue;
              const n4 = t3.findField(e4);
              let l = i3[a4].value;
              n4 && "message" == n4.kind && !(0, r2.isMessage)(l, n4.T) ? l = new n4.T(l) : n4 && "scalar" === n4.kind && n4.T === o2.ScalarType.BYTES && (l = A(l)), s3[a4] = { case: e4, value: l };
              break;
            case "scalar":
            case "enum":
              let c = i3[a4];
              t3.T === o2.ScalarType.BYTES && (c = t3.repeated ? c.map(A) : A(c)), s3[a4] = c;
              break;
            case "map":
              switch (t3.V.kind) {
                case "scalar":
                case "enum":
                  if (t3.V.T === o2.ScalarType.BYTES) for (const [e6, n5] of Object.entries(i3[a4])) s3[a4][e6] = A(n5);
                  else Object.assign(s3[a4], i3[a4]);
                  break;
                case "message":
                  const e5 = t3.V.T;
                  for (const n5 of Object.keys(i3[a4])) {
                    let t4 = i3[a4][n5];
                    e5.fieldWrapper || (t4 = new e5(t4)), s3[a4][n5] = t4;
                  }
              }
              break;
            case "message":
              const m = t3.T;
              if (t3.repeated) s3[a4] = i3[a4].map((e5) => (0, r2.isMessage)(e5, m) ? e5 : new m(e5));
              else {
                const e5 = i3[a4];
                m.fieldWrapper ? "google.protobuf.BytesValue" === m.typeName ? s3[a4] = A(e5) : s3[a4] = e5 : s3[a4] = (0, r2.isMessage)(e5, m) ? e5 : new m(e5);
              }
          }
        }
      }, equals: (e3, n3, a3) => n3 === a3 || !(!n3 || !a3) && e3.fields.byMember().every((e4) => {
        const t3 = n3[e4.localName], r3 = a3[e4.localName];
        if (e4.repeated) {
          if (t3.length !== r3.length) return false;
          switch (e4.kind) {
            case "message":
              return t3.every((n4, a4) => e4.T.equals(n4, r3[a4]));
            case "scalar":
              return t3.every((n4, a4) => (0, s2.scalarEquals)(e4.T, n4, r3[a4]));
            case "enum":
              return t3.every((e5, n4) => (0, s2.scalarEquals)(o2.ScalarType.INT32, e5, r3[n4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(t3, r3);
          case "enum":
            return (0, s2.scalarEquals)(o2.ScalarType.INT32, t3, r3);
          case "scalar":
            return (0, s2.scalarEquals)(e4.T, t3, r3);
          case "oneof":
            if (t3.case !== r3.case) return false;
            const n4 = e4.findField(t3.case);
            if (void 0 === n4) return true;
            switch (n4.kind) {
              case "message":
                return n4.T.equals(t3.value, r3.value);
              case "enum":
                return (0, s2.scalarEquals)(o2.ScalarType.INT32, t3.value, r3.value);
              case "scalar":
                return (0, s2.scalarEquals)(n4.T, t3.value, r3.value);
            }
            throw new Error(`oneof cannot contain ${n4.kind}`);
          case "map":
            const a4 = Object.keys(t3).concat(Object.keys(r3));
            switch (e4.V.kind) {
              case "message":
                const n5 = e4.V.T;
                return a4.every((e5) => n5.equals(t3[e5], r3[e5]));
              case "enum":
                return a4.every((e5) => (0, s2.scalarEquals)(o2.ScalarType.INT32, t3[e5], r3[e5]));
              case "scalar":
                const i3 = e4.V.T;
                return a4.every((e5) => (0, s2.scalarEquals)(i3, t3[e5], r3[e5]));
            }
        }
      }), clone(e3) {
        const n3 = e3.getType(), a3 = new n3(), t3 = a3;
        for (const a4 of n3.fields.byMember()) {
          const n4 = e3[a4.localName];
          let s3;
          if (a4.repeated) s3 = n4.map(i2);
          else if ("map" == a4.kind) {
            s3 = t3[a4.localName];
            for (const [e4, a5] of Object.entries(n4)) s3[e4] = i2(a5);
          } else if ("oneof" == a4.kind) {
            s3 = a4.findField(n4.case) ? { case: n4.case, value: i2(n4.value) } : { case: void 0 };
          } else s3 = i2(n4);
          t3[a4.localName] = s3;
        }
        for (const a4 of n3.runtime.bin.listUnknownFields(e3)) n3.runtime.bin.onUnknownField(t3, a4.no, a4.wireType, a4.data);
        return a3;
      } };
    };
  }