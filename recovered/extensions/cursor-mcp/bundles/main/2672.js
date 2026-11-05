// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2672 range:214444..219791
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2672: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeUtilCommon = void 0;
    const n2 = r2(609), o2 = r2(3836), s2 = r2(3408), i2 = r2(2706);
    function a2(e3) {
      if (void 0 === e3) return e3;
      if ((0, i2.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    function c(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    t2.makeUtilCommon = function() {
      return { setEnumType: n2.setEnumType, initPartial(e3, t3) {
        if (void 0 === e3) return;
        const r3 = t3.getType();
        for (const n3 of r3.fields.byMember()) {
          const r4 = n3.localName, o3 = t3, a3 = e3;
          if (null != a3[r4]) switch (n3.kind) {
            case "oneof":
              const e4 = a3[r4].case;
              if (void 0 === e4) continue;
              const t4 = n3.findField(e4);
              let u = a3[r4].value;
              t4 && "message" == t4.kind && !(0, i2.isMessage)(u, t4.T) ? u = new t4.T(u) : t4 && "scalar" === t4.kind && t4.T === s2.ScalarType.BYTES && (u = c(u)), o3[r4] = { case: e4, value: u };
              break;
            case "scalar":
            case "enum":
              let l = a3[r4];
              n3.T === s2.ScalarType.BYTES && (l = n3.repeated ? l.map(c) : c(l)), o3[r4] = l;
              break;
            case "map":
              switch (n3.V.kind) {
                case "scalar":
                case "enum":
                  if (n3.V.T === s2.ScalarType.BYTES) for (const [e6, t5] of Object.entries(a3[r4])) o3[r4][e6] = c(t5);
                  else Object.assign(o3[r4], a3[r4]);
                  break;
                case "message":
                  const e5 = n3.V.T;
                  for (const t5 of Object.keys(a3[r4])) {
                    let n4 = a3[r4][t5];
                    e5.fieldWrapper || (n4 = new e5(n4)), o3[r4][t5] = n4;
                  }
              }
              break;
            case "message":
              const d = n3.T;
              if (n3.repeated) o3[r4] = a3[r4].map((e5) => (0, i2.isMessage)(e5, d) ? e5 : new d(e5));
              else {
                const e5 = a3[r4];
                d.fieldWrapper ? "google.protobuf.BytesValue" === d.typeName ? o3[r4] = c(e5) : o3[r4] = e5 : o3[r4] = (0, i2.isMessage)(e5, d) ? e5 : new d(e5);
              }
          }
        }
      }, equals: (e3, t3, r3) => t3 === r3 || !(!t3 || !r3) && e3.fields.byMember().every((e4) => {
        const n3 = t3[e4.localName], i3 = r3[e4.localName];
        if (e4.repeated) {
          if (n3.length !== i3.length) return false;
          switch (e4.kind) {
            case "message":
              return n3.every((t4, r4) => e4.T.equals(t4, i3[r4]));
            case "scalar":
              return n3.every((t4, r4) => (0, o2.scalarEquals)(e4.T, t4, i3[r4]));
            case "enum":
              return n3.every((e5, t4) => (0, o2.scalarEquals)(s2.ScalarType.INT32, e5, i3[t4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(n3, i3);
          case "enum":
            return (0, o2.scalarEquals)(s2.ScalarType.INT32, n3, i3);
          case "scalar":
            return (0, o2.scalarEquals)(e4.T, n3, i3);
          case "oneof":
            if (n3.case !== i3.case) return false;
            const t4 = e4.findField(n3.case);
            if (void 0 === t4) return true;
            switch (t4.kind) {
              case "message":
                return t4.T.equals(n3.value, i3.value);
              case "enum":
                return (0, o2.scalarEquals)(s2.ScalarType.INT32, n3.value, i3.value);
              case "scalar":
                return (0, o2.scalarEquals)(t4.T, n3.value, i3.value);
            }
            throw new Error(`oneof cannot contain ${t4.kind}`);
          case "map":
            const r4 = Object.keys(n3).concat(Object.keys(i3));
            switch (e4.V.kind) {
              case "message":
                const t5 = e4.V.T;
                return r4.every((e5) => t5.equals(n3[e5], i3[e5]));
              case "enum":
                return r4.every((e5) => (0, o2.scalarEquals)(s2.ScalarType.INT32, n3[e5], i3[e5]));
              case "scalar":
                const a3 = e4.V.T;
                return r4.every((e5) => (0, o2.scalarEquals)(a3, n3[e5], i3[e5]));
            }
        }
      }), clone(e3) {
        const t3 = e3.getType(), r3 = new t3(), n3 = r3;
        for (const r4 of t3.fields.byMember()) {
          const t4 = e3[r4.localName];
          let o3;
          if (r4.repeated) o3 = t4.map(a2);
          else if ("map" == r4.kind) {
            o3 = n3[r4.localName];
            for (const [e4, r5] of Object.entries(t4)) o3[e4] = a2(r5);
          } else if ("oneof" == r4.kind) {
            o3 = r4.findField(t4.case) ? { case: t4.case, value: a2(t4.value) } : { case: void 0 };
          } else o3 = a2(t4);
          n3[r4.localName] = o3;
        }
        for (const r4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(n3, r4.no, r4.wireType, r4.data);
        return r3;
      } };
    };
  }