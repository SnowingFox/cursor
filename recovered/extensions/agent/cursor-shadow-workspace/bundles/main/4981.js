// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4981 range:441197..443791
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4981: (e2, A2, t2) => {
    "use strict";
    const { parseSetCookie: n2 } = t2(4250), { stringify: r2 } = t2(6261), { webidl: o2 } = t2(8005), { Headers: s } = t2(2932);
    function a(e3, A3) {
      o2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o2.brandCheck(e3, s, { strict: false }), A3 = o2.converters.Cookie(A3);
      r2(A3) && e3.append("Set-Cookie", r2(A3));
    }
    o2.converters.DeleteCookieAttributes = o2.dictionaryConverter([{ converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }]), o2.converters.Cookie = o2.dictionaryConverter([{ converter: o2.converters.DOMString, key: "name" }, { converter: o2.converters.DOMString, key: "value" }, { converter: o2.nullableConverter((e3) => "number" == typeof e3 ? o2.converters["unsigned long long"](e3) : new Date(e3)), key: "expires", defaultValue: null }, { converter: o2.nullableConverter(o2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "secure", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o2.sequenceConverter(o2.converters.DOMString), key: "unparsed", defaultValue: [] }]), e2.exports = { getCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o2.brandCheck(e3, s, { strict: false });
      const A3 = e3.get("cookie"), t3 = {};
      if (!A3) return t3;
      for (const e4 of A3.split(";")) {
        const [A4, ...n3] = e4.split("=");
        t3[A4.trim()] = n3.join("=");
      }
      return t3;
    }, deleteCookie: function(e3, A3, t3) {
      o2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o2.brandCheck(e3, s, { strict: false }), A3 = o2.converters.DOMString(A3), t3 = o2.converters.DeleteCookieAttributes(t3), a(e3, { name: A3, value: "", expires: /* @__PURE__ */ new Date(0), ...t3 });
    }, getSetCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o2.brandCheck(e3, s, { strict: false });
      const A3 = e3.getSetCookie();
      return A3 ? A3.map((e4) => n2(e4)) : [];
    }, setCookie: a };
  }