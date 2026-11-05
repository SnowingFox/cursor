// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 62672 range:1942584..1947895
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62672: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeUtilCommon = void 0;
    const n = r(609), o = r(31455), s = r(3408), i = r(62706);
    function a(e2) {
      if (void 0 === e2) return e2;
      if ((0, i.isMessage)(e2)) return e2.clone();
      if (e2 instanceof Uint8Array) {
        const t2 = new Uint8Array(e2.byteLength);
        return t2.set(e2), t2;
      }
      return e2;
    }
    function l(e2) {
      return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
    }
    t.makeUtilCommon = function() {
      return { setEnumType: n.setEnumType, initPartial(e2, t2) {
        if (void 0 === e2) return;
        const r2 = t2.getType();
        for (const n2 of r2.fields.byMember()) {
          const r3 = n2.localName, o2 = t2, a2 = e2;
          if (null != a2[r3]) switch (n2.kind) {
            case "oneof":
              const e3 = a2[r3].case;
              if (void 0 === e3) continue;
              const t3 = n2.findField(e3);
              let c = a2[r3].value;
              t3 && "message" == t3.kind && !(0, i.isMessage)(c, t3.T) ? c = new t3.T(c) : t3 && "scalar" === t3.kind && t3.T === s.ScalarType.BYTES && (c = l(c)), o2[r3] = { case: e3, value: c };
              break;
            case "scalar":
            case "enum":
              let u = a2[r3];
              n2.T === s.ScalarType.BYTES && (u = n2.repeated ? u.map(l) : l(u)), o2[r3] = u;
              break;
            case "map":
              switch (n2.V.kind) {
                case "scalar":
                case "enum":
                  if (n2.V.T === s.ScalarType.BYTES) for (const [e5, t4] of Object.entries(a2[r3])) o2[r3][e5] = l(t4);
                  else Object.assign(o2[r3], a2[r3]);
                  break;
                case "message":
                  const e4 = n2.V.T;
                  for (const t4 of Object.keys(a2[r3])) {
                    let n3 = a2[r3][t4];
                    e4.fieldWrapper || (n3 = new e4(n3)), o2[r3][t4] = n3;
                  }
              }
              break;
            case "message":
              const d = n2.T;
              if (n2.repeated) o2[r3] = a2[r3].map((e4) => (0, i.isMessage)(e4, d) ? e4 : new d(e4));
              else {
                const e4 = a2[r3];
                d.fieldWrapper ? "google.protobuf.BytesValue" === d.typeName ? o2[r3] = l(e4) : o2[r3] = e4 : o2[r3] = (0, i.isMessage)(e4, d) ? e4 : new d(e4);
              }
          }
        }
      }, equals: (e2, t2, r2) => t2 === r2 || !(!t2 || !r2) && e2.fields.byMember().every((e3) => {
        const n2 = t2[e3.localName], i2 = r2[e3.localName];
        if (e3.repeated) {
          if (n2.length !== i2.length) return false;
          switch (e3.kind) {
            case "message":
              return n2.every((t3, r3) => e3.T.equals(t3, i2[r3]));
            case "scalar":
              return n2.every((t3, r3) => (0, o.scalarEquals)(e3.T, t3, i2[r3]));
            case "enum":
              return n2.every((e4, t3) => (0, o.scalarEquals)(s.ScalarType.INT32, e4, i2[t3]));
          }
          throw new Error(`repeated cannot contain ${e3.kind}`);
        }
        switch (e3.kind) {
          case "message":
            return e3.T.equals(n2, i2);
          case "enum":
            return (0, o.scalarEquals)(s.ScalarType.INT32, n2, i2);
          case "scalar":
            return (0, o.scalarEquals)(e3.T, n2, i2);
          case "oneof":
            if (n2.case !== i2.case) return false;
            const t3 = e3.findField(n2.case);
            if (void 0 === t3) return true;
            switch (t3.kind) {
              case "message":
                return t3.T.equals(n2.value, i2.value);
              case "enum":
                return (0, o.scalarEquals)(s.ScalarType.INT32, n2.value, i2.value);
              case "scalar":
                return (0, o.scalarEquals)(t3.T, n2.value, i2.value);
            }
            throw new Error(`oneof cannot contain ${t3.kind}`);
          case "map":
            const r3 = Object.keys(n2).concat(Object.keys(i2));
            switch (e3.V.kind) {
              case "message":
                const t4 = e3.V.T;
                return r3.every((e4) => t4.equals(n2[e4], i2[e4]));
              case "enum":
                return r3.every((e4) => (0, o.scalarEquals)(s.ScalarType.INT32, n2[e4], i2[e4]));
              case "scalar":
                const a2 = e3.V.T;
                return r3.every((e4) => (0, o.scalarEquals)(a2, n2[e4], i2[e4]));
            }
        }
      }), clone(e2) {
        const t2 = e2.getType(), r2 = new t2(), n2 = r2;
        for (const r3 of t2.fields.byMember()) {
          const t3 = e2[r3.localName];
          let o2;
          if (r3.repeated) o2 = t3.map(a);
          else if ("map" == r3.kind) {
            o2 = n2[r3.localName];
            for (const [e3, r4] of Object.entries(t3)) o2[e3] = a(r4);
          } else if ("oneof" == r3.kind) {
            o2 = r3.findField(t3.case) ? { case: t3.case, value: a(t3.value) } : { case: void 0 };
          } else o2 = a(t3);
          n2[r3.localName] = o2;
        }
        for (const r3 of t2.runtime.bin.listUnknownFields(e2)) t2.runtime.bin.onUnknownField(n2, r3.no, r3.wireType, r3.data);
        return r2;
      } };
    };
  }