// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 40878 range:7616054..7618265
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
40878: (e, t, r) => {
    "use strict";
    r.d(t, { B_: () => i, Ef: () => c, Qg: () => a, _I: () => l });
    var n = r(40328), s = r(8032), o = r(10278);
    function i(e2) {
      var t2;
      const r2 = Object.assign({}, e2);
      return null !== (t2 = r2.ignoreUnknownFields) && void 0 !== t2 || (r2.ignoreUnknownFields = true), r2;
    }
    function a(e2, t2, r2, n2) {
      const s2 = l(u(e2.I, t2), n2), o2 = l(d(e2.I, r2), n2), i2 = l(u(e2.O, t2), n2), a2 = l(d(e2.O, r2), n2);
      return { getI: (e3) => e3 ? s2 : o2, getO: (e3) => e3 ? i2 : a2 };
    }
    function c(e2, t2, r2, n2) {
      const s2 = t2 ? u(e2.I, n2) : d(e2.I, r2);
      return { parse: (t2 ? u(e2.O, n2) : d(e2.O, r2)).parse, serialize: s2.serialize };
    }
    function l(e2, t2) {
      return { serialize(r2) {
        const n2 = e2.serialize(r2);
        return (0, o.Tw)(t2.writeMaxBytes, n2.byteLength), n2;
      }, parse: (r2) => ((0, o.kk)(t2.readMaxBytes, r2.byteLength, true), e2.parse(r2)) };
    }
    function u(e2, t2) {
      return { parse(r2) {
        try {
          return e2.fromBinary(r2, t2);
        } catch (e3) {
          const t3 = e3 instanceof Error ? e3.message : String(e3);
          throw new n.T(`parse binary: ${t3}`, s.C.Internal);
        }
      }, serialize(e3) {
        try {
          return e3.toBinary(t2);
        } catch (e4) {
          const t3 = e4 instanceof Error ? e4.message : String(e4);
          throw new n.T(`serialize binary: ${t3}`, s.C.Internal);
        }
      } };
    }
    function d(e2, t2) {
      var r2, o2;
      const a2 = null !== (r2 = null == t2 ? void 0 : t2.textEncoder) && void 0 !== r2 ? r2 : new TextEncoder(), c2 = null !== (o2 = null == t2 ? void 0 : t2.textDecoder) && void 0 !== o2 ? o2 : new TextDecoder(), l2 = i(t2);
      return { parse(t3) {
        try {
          const r3 = c2.decode(t3);
          return e2.fromJsonString(r3, l2);
        } catch (e3) {
          throw n.T.from(e3, s.C.InvalidArgument);
        }
      }, serialize(e3) {
        try {
          const t3 = e3.toJsonString(l2);
          return a2.encode(t3);
        } catch (e4) {
          throw n.T.from(e4, s.C.Internal);
        }
      } };
    }
  }