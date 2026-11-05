// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9726 range:6196379..6199133
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9726: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Bm: () => m, Nn: () => u, O1: () => c, gO: () => l });
    var n2 = r2(6038), s2 = r2(8032), i2 = r2(328), o2 = r2(6928), a = function(t3, e3) {
      var r3 = {};
      for (var n3 in t3) Object.prototype.hasOwnProperty.call(t3, n3) && e3.indexOf(n3) < 0 && (r3[n3] = t3[n3]);
      if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
        var s3 = 0;
        for (n3 = Object.getOwnPropertySymbols(t3); s3 < n3.length; s3++) e3.indexOf(n3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, n3[s3]) && (r3[n3[s3]] = t3[n3[s3]]);
      }
      return r3;
    };
    function u(t3, e3, r3) {
      var s3;
      if (e3 && new Headers(e3).forEach((t4, e4) => r3.metadata.append(e4, t4)), "object" != typeof t3 || null == t3 || Array.isArray(t3)) throw r3;
      let a2 = r3.code;
      "code" in t3 && "string" == typeof t3.code && (a2 = null !== (s3 = (0, o2.X)(t3.code)) && void 0 !== s3 ? s3 : a2);
      const u2 = t3.message;
      if (null != u2 && "string" != typeof u2) throw r3;
      const c2 = new i2.T(null != u2 ? u2 : "", a2, e3);
      if ("details" in t3 && Array.isArray(t3.details)) for (const e4 of t3.details) {
        if (null === e4 || "object" != typeof e4 || Array.isArray(e4) || "string" != typeof e4.type || "string" != typeof e4.value) throw r3;
        try {
          c2.details.push({ type: e4.type, value: n2.protoBase64.dec(e4.value), debug: e4.debug });
        } catch (t4) {
          throw r3;
        }
      }
      return c2;
    }
    function c(t3, e3, r3) {
      let n3;
      try {
        n3 = JSON.parse(new TextDecoder().decode(t3));
      } catch (t4) {
        throw r3;
      }
      return u(n3, e3, r3);
    }
    function l(t3, e3) {
      const r3 = { code: (0, o2.s)(t3.code) };
      return t3.rawMessage.length > 0 && (r3.message = t3.rawMessage), t3.details.length > 0 && (r3.details = t3.details.map((t4) => {
        if ("getType" in t4) {
          const r4 = { type: t4.getType().typeName, value: t4.toBinary() };
          try {
            r4.debug = t4.toJson(e3);
          } catch (t5) {
          }
          return r4;
        }
        return t4;
      }).map((t4) => {
        var { value: e4 } = t4, r4 = a(t4, ["value"]);
        return Object.assign(Object.assign({}, r4), { value: n2.protoBase64.enc(e4).replace(/=+$/, "") });
      })), r3;
    }
    function m(t3, e3) {
      const r3 = new TextEncoder();
      try {
        const n3 = l(t3, e3), s3 = JSON.stringify(n3);
        return r3.encode(s3);
      } catch (t4) {
        const e4 = t4 instanceof Error ? t4.message : String(t4);
        throw new i2.T(`failed to serialize Connect Error: ${e4}`, s2.C.Internal);
      }
    }
  }