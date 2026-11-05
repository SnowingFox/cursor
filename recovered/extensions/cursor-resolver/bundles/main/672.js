// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 672 range:173543..178893
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
672: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeUtilCommon = void 0;
    const r2 = n2(609), o2 = n2(455), a2 = n2(408), s2 = n2(706);
    function i2(e3) {
      if (void 0 === e3) return e3;
      if ((0, s2.isMessage)(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    function l2(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    t2.makeUtilCommon = function() {
      return { setEnumType: r2.setEnumType, initPartial(e3, t3) {
        if (void 0 === e3) return;
        const n3 = t3.getType();
        for (const r3 of n3.fields.byMember()) {
          const n4 = r3.localName, o3 = t3, i3 = e3;
          if (null != i3[n4]) switch (r3.kind) {
            case "oneof":
              const e4 = i3[n4].case;
              if (void 0 === e4) continue;
              const t4 = r3.findField(e4);
              let u2 = i3[n4].value;
              t4 && "message" == t4.kind && !(0, s2.isMessage)(u2, t4.T) ? u2 = new t4.T(u2) : t4 && "scalar" === t4.kind && t4.T === a2.ScalarType.BYTES && (u2 = l2(u2)), o3[n4] = { case: e4, value: u2 };
              break;
            case "scalar":
            case "enum":
              let c2 = i3[n4];
              r3.T === a2.ScalarType.BYTES && (c2 = r3.repeated ? c2.map(l2) : l2(c2)), o3[n4] = c2;
              break;
            case "map":
              switch (r3.V.kind) {
                case "scalar":
                case "enum":
                  if (r3.V.T === a2.ScalarType.BYTES) for (const [e6, t5] of Object.entries(i3[n4])) o3[n4][e6] = l2(t5);
                  else Object.assign(o3[n4], i3[n4]);
                  break;
                case "message":
                  const e5 = r3.V.T;
                  for (const t5 of Object.keys(i3[n4])) {
                    let r4 = i3[n4][t5];
                    e5.fieldWrapper || (r4 = new e5(r4)), o3[n4][t5] = r4;
                  }
              }
              break;
            case "message":
              const m2 = r3.T;
              if (r3.repeated) o3[n4] = i3[n4].map((e5) => (0, s2.isMessage)(e5, m2) ? e5 : new m2(e5));
              else {
                const e5 = i3[n4];
                m2.fieldWrapper ? "google.protobuf.BytesValue" === m2.typeName ? o3[n4] = l2(e5) : o3[n4] = e5 : o3[n4] = (0, s2.isMessage)(e5, m2) ? e5 : new m2(e5);
              }
          }
        }
      }, equals: (e3, t3, n3) => t3 === n3 || !(!t3 || !n3) && e3.fields.byMember().every((e4) => {
        const r3 = t3[e4.localName], s3 = n3[e4.localName];
        if (e4.repeated) {
          if (r3.length !== s3.length) return false;
          switch (e4.kind) {
            case "message":
              return r3.every((t4, n4) => e4.T.equals(t4, s3[n4]));
            case "scalar":
              return r3.every((t4, n4) => (0, o2.scalarEquals)(e4.T, t4, s3[n4]));
            case "enum":
              return r3.every((e5, t4) => (0, o2.scalarEquals)(a2.ScalarType.INT32, e5, s3[t4]));
          }
          throw new Error(`repeated cannot contain ${e4.kind}`);
        }
        switch (e4.kind) {
          case "message":
            return e4.T.equals(r3, s3);
          case "enum":
            return (0, o2.scalarEquals)(a2.ScalarType.INT32, r3, s3);
          case "scalar":
            return (0, o2.scalarEquals)(e4.T, r3, s3);
          case "oneof":
            if (r3.case !== s3.case) return false;
            const t4 = e4.findField(r3.case);
            if (void 0 === t4) return true;
            switch (t4.kind) {
              case "message":
                return t4.T.equals(r3.value, s3.value);
              case "enum":
                return (0, o2.scalarEquals)(a2.ScalarType.INT32, r3.value, s3.value);
              case "scalar":
                return (0, o2.scalarEquals)(t4.T, r3.value, s3.value);
            }
            throw new Error(`oneof cannot contain ${t4.kind}`);
          case "map":
            const n4 = Object.keys(r3).concat(Object.keys(s3));
            switch (e4.V.kind) {
              case "message":
                const t5 = e4.V.T;
                return n4.every((e5) => t5.equals(r3[e5], s3[e5]));
              case "enum":
                return n4.every((e5) => (0, o2.scalarEquals)(a2.ScalarType.INT32, r3[e5], s3[e5]));
              case "scalar":
                const i3 = e4.V.T;
                return n4.every((e5) => (0, o2.scalarEquals)(i3, r3[e5], s3[e5]));
            }
        }
      }), clone(e3) {
        const t3 = e3.getType(), n3 = new t3(), r3 = n3;
        for (const n4 of t3.fields.byMember()) {
          const t4 = e3[n4.localName];
          let o3;
          if (n4.repeated) o3 = t4.map(i2);
          else if ("map" == n4.kind) {
            o3 = r3[n4.localName];
            for (const [e4, n5] of Object.entries(t4)) o3[e4] = i2(n5);
          } else if ("oneof" == n4.kind) {
            o3 = n4.findField(t4.case) ? { case: t4.case, value: i2(t4.value) } : { case: void 0 };
          } else o3 = i2(t4);
          r3[n4.localName] = o3;
        }
        for (const n4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(r3, n4.no, n4.wireType, n4.data);
        return n3;
      } };
    };
  }