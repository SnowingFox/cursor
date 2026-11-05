// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 9726 range:3606204..3608942
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9726: (e, t, r) => {
    "use strict";
    r.d(t, { Bm: () => d, Nn: () => c, O1: () => l, gO: () => u });
    var n = r(36038), s = r(8032), o = r(40328), i = r(86928), a = function(e2, t2) {
      var r2 = {};
      for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && t2.indexOf(n2) < 0 && (r2[n2] = e2[n2]);
      if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
        var s2 = 0;
        for (n2 = Object.getOwnPropertySymbols(e2); s2 < n2.length; s2++) t2.indexOf(n2[s2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n2[s2]) && (r2[n2[s2]] = e2[n2[s2]]);
      }
      return r2;
    };
    function c(e2, t2, r2) {
      var s2;
      if (t2 && new Headers(t2).forEach((e3, t3) => r2.metadata.append(t3, e3)), "object" != typeof e2 || null == e2 || Array.isArray(e2)) throw r2;
      let a2 = r2.code;
      "code" in e2 && "string" == typeof e2.code && (a2 = null !== (s2 = (0, i.X)(e2.code)) && void 0 !== s2 ? s2 : a2);
      const c2 = e2.message;
      if (null != c2 && "string" != typeof c2) throw r2;
      const l2 = new o.T(null != c2 ? c2 : "", a2, t2);
      if ("details" in e2 && Array.isArray(e2.details)) for (const t3 of e2.details) {
        if (null === t3 || "object" != typeof t3 || Array.isArray(t3) || "string" != typeof t3.type || "string" != typeof t3.value) throw r2;
        try {
          l2.details.push({ type: t3.type, value: n.protoBase64.dec(t3.value), debug: t3.debug });
        } catch (e3) {
          throw r2;
        }
      }
      return l2;
    }
    function l(e2, t2, r2) {
      let n2;
      try {
        n2 = JSON.parse(new TextDecoder().decode(e2));
      } catch (e3) {
        throw r2;
      }
      return c(n2, t2, r2);
    }
    function u(e2, t2) {
      const r2 = { code: (0, i.s)(e2.code) };
      return e2.rawMessage.length > 0 && (r2.message = e2.rawMessage), e2.details.length > 0 && (r2.details = e2.details.map((e3) => {
        if ("getType" in e3) {
          const r3 = { type: e3.getType().typeName, value: e3.toBinary() };
          try {
            r3.debug = e3.toJson(t2);
          } catch (e4) {
          }
          return r3;
        }
        return e3;
      }).map((e3) => {
        var { value: t3 } = e3, r3 = a(e3, ["value"]);
        return Object.assign(Object.assign({}, r3), { value: n.protoBase64.enc(t3).replace(/=+$/, "") });
      })), r2;
    }
    function d(e2, t2) {
      const r2 = new TextEncoder();
      try {
        const n2 = u(e2, t2), s2 = JSON.stringify(n2);
        return r2.encode(s2);
      } catch (e3) {
        const t3 = e3 instanceof Error ? e3.message : String(e3);
        throw new o.T(`failed to serialize Connect Error: ${t3}`, s.C.Internal);
      }
    }
  }