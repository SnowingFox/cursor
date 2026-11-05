// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2672 range:99901..105570
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2672: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.makeUtilCommon = void 0;
    const s10 = n10(609), o10 = n10(1455), r10 = n10(3408), t10 = n10(2706);
    function i10(e11) {
      if (void 0 === e11) return e11;
      if ((0, t10.isMessage)(e11)) return e11.clone();
      if (e11 instanceof Uint8Array) {
        const a11 = new Uint8Array(e11.byteLength);
        return a11.set(e11), a11;
      }
      return e11;
    }
    function m10(e11) {
      return e11 instanceof Uint8Array ? e11 : new Uint8Array(e11);
    }
    a10.makeUtilCommon = function() {
      return { setEnumType: s10.setEnumType, initPartial(e11, a11) {
        if (void 0 === e11) return;
        const n11 = a11.getType();
        for (const s11 of n11.fields.byMember()) {
          const n12 = s11.localName, o11 = a11, i11 = e11;
          if (null != i11[n12]) switch (s11.kind) {
            case "oneof":
              const e12 = i11[n12].case;
              if (void 0 === e12) continue;
              const a12 = s11.findField(e12);
              let l10 = i11[n12].value;
              a12 && "message" == a12.kind && !(0, t10.isMessage)(l10, a12.T) ? l10 = new a12.T(l10) : a12 && "scalar" === a12.kind && a12.T === r10.ScalarType.BYTES && (l10 = m10(l10)), o11[n12] = { case: e12, value: l10 };
              break;
            case "scalar":
            case "enum":
              let d10 = i11[n12];
              s11.T === r10.ScalarType.BYTES && (d10 = s11.repeated ? d10.map(m10) : m10(d10)), o11[n12] = d10;
              break;
            case "map":
              switch (s11.V.kind) {
                case "scalar":
                case "enum":
                  if (s11.V.T === r10.ScalarType.BYTES) for (const [e14, a13] of Object.entries(i11[n12])) o11[n12][e14] = m10(a13);
                  else Object.assign(o11[n12], i11[n12]);
                  break;
                case "message":
                  const e13 = s11.V.T;
                  for (const a13 of Object.keys(i11[n12])) {
                    let s12 = i11[n12][a13];
                    e13.fieldWrapper || (s12 = new e13(s12)), o11[n12][a13] = s12;
                  }
              }
              break;
            case "message":
              const c10 = s11.T;
              if (s11.repeated) o11[n12] = i11[n12].map((e13) => (0, t10.isMessage)(e13, c10) ? e13 : new c10(e13));
              else {
                const e13 = i11[n12];
                c10.fieldWrapper ? "google.protobuf.BytesValue" === c10.typeName ? o11[n12] = m10(e13) : o11[n12] = e13 : o11[n12] = (0, t10.isMessage)(e13, c10) ? e13 : new c10(e13);
              }
          }
        }
      }, equals: (e11, a11, n11) => a11 === n11 || !(!a11 || !n11) && e11.fields.byMember().every((e12) => {
        const s11 = a11[e12.localName], t11 = n11[e12.localName];
        if (e12.repeated) {
          if (s11.length !== t11.length) return false;
          switch (e12.kind) {
            case "message":
              return s11.every((a12, n12) => e12.T.equals(a12, t11[n12]));
            case "scalar":
              return s11.every((a12, n12) => (0, o10.scalarEquals)(e12.T, a12, t11[n12]));
            case "enum":
              return s11.every((e13, a12) => (0, o10.scalarEquals)(r10.ScalarType.INT32, e13, t11[a12]));
          }
          throw new Error(`repeated cannot contain ${e12.kind}`);
        }
        switch (e12.kind) {
          case "message":
            return e12.T.equals(s11, t11);
          case "enum":
            return (0, o10.scalarEquals)(r10.ScalarType.INT32, s11, t11);
          case "scalar":
            return (0, o10.scalarEquals)(e12.T, s11, t11);
          case "oneof":
            if (s11.case !== t11.case) return false;
            const a12 = e12.findField(s11.case);
            if (void 0 === a12) return true;
            switch (a12.kind) {
              case "message":
                return a12.T.equals(s11.value, t11.value);
              case "enum":
                return (0, o10.scalarEquals)(r10.ScalarType.INT32, s11.value, t11.value);
              case "scalar":
                return (0, o10.scalarEquals)(a12.T, s11.value, t11.value);
            }
            throw new Error(`oneof cannot contain ${a12.kind}`);
          case "map":
            const n12 = Object.keys(s11).concat(Object.keys(t11));
            switch (e12.V.kind) {
              case "message":
                const a13 = e12.V.T;
                return n12.every((e13) => a13.equals(s11[e13], t11[e13]));
              case "enum":
                return n12.every((e13) => (0, o10.scalarEquals)(r10.ScalarType.INT32, s11[e13], t11[e13]));
              case "scalar":
                const i11 = e12.V.T;
                return n12.every((e13) => (0, o10.scalarEquals)(i11, s11[e13], t11[e13]));
            }
        }
      }), clone(e11) {
        const a11 = e11.getType(), n11 = new a11(), s11 = n11;
        for (const n12 of a11.fields.byMember()) {
          const a12 = e11[n12.localName];
          let o11;
          if (n12.repeated) o11 = a12.map(i10);
          else if ("map" == n12.kind) {
            o11 = s11[n12.localName];
            for (const [e12, n13] of Object.entries(a12)) o11[e12] = i10(n13);
          } else if ("oneof" == n12.kind) {
            o11 = n12.findField(a12.case) ? { case: a12.case, value: i10(a12.value) } : { case: void 0 };
          } else o11 = i10(a12);
          s11[n12.localName] = o11;
        }
        for (const n12 of a11.runtime.bin.listUnknownFields(e11)) a11.runtime.bin.onUnknownField(s11, n12.no, n12.wireType, n12.data);
        return n11;
      } };
    };
  }