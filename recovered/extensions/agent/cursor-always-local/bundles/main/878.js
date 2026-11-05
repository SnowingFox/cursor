// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 878 range:362393..364622
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
878: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { B_: () => o2, Ef: () => u, Qg: () => a, _I: () => c });
    var n2 = r2(328), s2 = r2(8032), i2 = r2(278);
    function o2(t3) {
      var e3;
      const r3 = Object.assign({}, t3);
      return null !== (e3 = r3.ignoreUnknownFields) && void 0 !== e3 || (r3.ignoreUnknownFields = true), r3;
    }
    function a(t3, e3, r3, n3) {
      const s3 = c(l(t3.I, e3), n3), i3 = c(m(t3.I, r3), n3), o3 = c(l(t3.O, e3), n3), a2 = c(m(t3.O, r3), n3);
      return { getI: (t4) => t4 ? s3 : i3, getO: (t4) => t4 ? o3 : a2 };
    }
    function u(t3, e3, r3, n3) {
      const s3 = e3 ? l(t3.I, n3) : m(t3.I, r3);
      return { parse: (e3 ? l(t3.O, n3) : m(t3.O, r3)).parse, serialize: s3.serialize };
    }
    function c(t3, e3) {
      return { serialize(r3) {
        const n3 = t3.serialize(r3);
        return (0, i2.Tw)(e3.writeMaxBytes, n3.byteLength), n3;
      }, parse: (r3) => ((0, i2.kk)(e3.readMaxBytes, r3.byteLength, true), t3.parse(r3)) };
    }
    function l(t3, e3) {
      return { parse(r3) {
        try {
          return t3.fromBinary(r3, e3);
        } catch (t4) {
          const e4 = t4 instanceof Error ? t4.message : String(t4);
          throw new n2.T(`parse binary: ${e4}`, s2.C.Internal);
        }
      }, serialize(t4) {
        try {
          return t4.toBinary(e3);
        } catch (t5) {
          const e4 = t5 instanceof Error ? t5.message : String(t5);
          throw new n2.T(`serialize binary: ${e4}`, s2.C.Internal);
        }
      } };
    }
    function m(t3, e3) {
      var r3, i3;
      const a2 = null !== (r3 = null == e3 ? void 0 : e3.textEncoder) && void 0 !== r3 ? r3 : new TextEncoder(), u2 = null !== (i3 = null == e3 ? void 0 : e3.textDecoder) && void 0 !== i3 ? i3 : new TextDecoder(), c2 = o2(e3);
      return { parse(e4) {
        try {
          const r4 = u2.decode(e4);
          return t3.fromJsonString(r4, c2);
        } catch (t4) {
          throw n2.T.from(t4, s2.C.InvalidArgument);
        }
      }, serialize(t4) {
        try {
          const e4 = t4.toJsonString(c2);
          return a2.encode(e4);
        } catch (t5) {
          throw n2.T.from(t5, s2.C.Internal);
        }
      } };
    }
  }