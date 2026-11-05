// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2672 range:493031..498378
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeUtilCommon = void 0;
    const t2 = n2(609), s2 = n2(1455), o2 = n2(3408), r2 = n2(2706);
    function i2(e3) {
      if (void 0 === e3) return e3;
      if ((0, r2.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const a3 = new Uint8Array(e3.byteLength);
        return a3.set(e3), a3;
      }
      return e3;
    }
    function l(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    a2.makeUtilCommon = function() {
      return { setEnumType: t2.setEnumType, initPartial(e3, a3) {
        if (void 0 === e3) return;
        const n3 = a3.getType();
        for (const t3 of n3.fields.byMember()) {
          const n4 = t3.localName, s3 = a3, i3 = e3;
          if (null != i3[n4]) switch (t3.kind) {
            case "oneof":
              const e4 = i3[n4].case;
              if (void 0 === e4) continue;
              const a4 = t3.findField(e4);
              let d = i3[n4].value;
              a4 && "message" == a4.kind && !(0, r2.isMessage)(d, a4.T) ? d = new a4.T(d) : a4 && "scalar" === a4.kind && a4.T === o2.ScalarType.BYTES && (d = l(d)), s3[n4] = { case: e4, value: d };
              break;
            case "scalar":
            case "enum":
              let m = i3[n4];
              t3.T === o2.ScalarType.BYTES && (m = t3.repeated ? m.map(l) : l(m)), s3[n4] = m;
              break;
            case "map":
              switch (t3.V.kind) {
                case "scalar":
                case "enum":
                  if (t3.V.T === o2.ScalarType.BYTES) for (const [e6, a5] of Object.entries(i3[n4])) s3[n4][e6] = l(a5);
                  else Object.assign(s3[n4], i3[n4]);
                  break;
                case "message":
                  const e5 = t3.V.T;
                  for (const a5 of Object.keys(i3[n4])) {
                    let t4 = i3[n4][a5];
                    e5.fieldWrapper || (t4 = new e5(t4)), s3[n4][a5] = t4;
                  }
              }
              break;
            case "message":
              const c = t3.T;
              if (t3.repeated) s3[n4] = i3[n4].map((e5) => (0, r2.isMessage)(e5, c) ? e5 : new c(e5));
              else {
                const e5 = i3[n4];
                c.fieldWrapper ? "google.protobuf.BytesValue" === c.typeName ? s3[n4] = l(e5) : s3[n4] = e5 : s3[n4] = (0, r2.isMessage)(e5, c) ? e5 : new c(e5);
              }
          }
        }
      }, equals: (e3, a3, n3) => a3 === n3 || !(!a3 || !n3) && e3.fields.byMember().every((e4) => {
        const t3 = a3[e4.localName], r3 = n3[e4.localName];
        if (e4.repeated) {
          if (t3.length !== r3.length) return false;
          switch (e4.kind) {
            case "message":
              return t3.every((a4, n4) => e4.T.equals(a4, r3[n4]));
            case "scalar":
              return t3.every((a4, n4) => (0, s2.scalarEquals)(e4.T, a4, r3[n4]));
            case "enum":
              return t3.every((e5, a4) => (0, s2.scalarEquals)(o2.ScalarType.INT32, e5, r3[a4]));
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
            const a4 = e4.findField(t3.case);
            if (void 0 === a4) return true;
            switch (a4.kind) {
              case "message":
                return a4.T.equals(t3.value, r3.value);
              case "enum":
                return (0, s2.scalarEquals)(o2.ScalarType.INT32, t3.value, r3.value);
              case "scalar":
                return (0, s2.scalarEquals)(a4.T, t3.value, r3.value);
            }
            throw new Error(`oneof cannot contain ${a4.kind}`);
          case "map":
            const n4 = Object.keys(t3).concat(Object.keys(r3));
            switch (e4.V.kind) {
              case "message":
                const a5 = e4.V.T;
                return n4.every((e5) => a5.equals(t3[e5], r3[e5]));
              case "enum":
                return n4.every((e5) => (0, s2.scalarEquals)(o2.ScalarType.INT32, t3[e5], r3[e5]));
              case "scalar":
                const i3 = e4.V.T;
                return n4.every((e5) => (0, s2.scalarEquals)(i3, t3[e5], r3[e5]));
            }
        }
      }), clone(e3) {
        const a3 = e3.getType(), n3 = new a3(), t3 = n3;
        for (const n4 of a3.fields.byMember()) {
          const a4 = e3[n4.localName];
          let s3;
          if (n4.repeated) s3 = a4.map(i2);
          else if ("map" == n4.kind) {
            s3 = t3[n4.localName];
            for (const [e4, n5] of Object.entries(a4)) s3[e4] = i2(n5);
          } else if ("oneof" == n4.kind) {
            s3 = n4.findField(a4.case) ? { case: a4.case, value: i2(a4.value) } : { case: void 0 };
          } else s3 = i2(a4);
          t3[n4.localName] = s3;
        }
        for (const n4 of a3.runtime.bin.listUnknownFields(e3)) a3.runtime.bin.onUnknownField(t3, n4.no, n4.wireType, n4.data);
        return n3;
      } };
    };
  }