// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4981 range:441607..444209
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4981: (e2, n2, a2) => {
    "use strict";
    const { parseSetCookie: t2 } = a2(4250), { stringify: s2 } = a2(6261), { webidl: o2 } = a2(8005), { Headers: r2 } = a2(2932);
    function i2(e3, n3) {
      o2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o2.brandCheck(e3, r2, { strict: false }), n3 = o2.converters.Cookie(n3);
      s2(n3) && e3.append("Set-Cookie", s2(n3));
    }
    o2.converters.DeleteCookieAttributes = o2.dictionaryConverter([{ converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }]), o2.converters.Cookie = o2.dictionaryConverter([{ converter: o2.converters.DOMString, key: "name" }, { converter: o2.converters.DOMString, key: "value" }, { converter: o2.nullableConverter((e3) => "number" == typeof e3 ? o2.converters["unsigned long long"](e3) : new Date(e3)), key: "expires", defaultValue: null }, { converter: o2.nullableConverter(o2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "secure", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o2.sequenceConverter(o2.converters.DOMString), key: "unparsed", defaultValue: [] }]), e2.exports = { getCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o2.brandCheck(e3, r2, { strict: false });
      const n3 = e3.get("cookie"), a3 = {};
      if (!n3) return a3;
      for (const e4 of n3.split(";")) {
        const [n4, ...t3] = e4.split("=");
        a3[n4.trim()] = t3.join("=");
      }
      return a3;
    }, deleteCookie: function(e3, n3, a3) {
      o2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o2.brandCheck(e3, r2, { strict: false }), n3 = o2.converters.DOMString(n3), a3 = o2.converters.DeleteCookieAttributes(a3), i2(e3, { name: n3, value: "", expires: /* @__PURE__ */ new Date(0), ...a3 });
    }, getSetCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o2.brandCheck(e3, r2, { strict: false });
      const n3 = e3.getSetCookie();
      return n3 ? n3.map((e4) => t2(e4)) : [];
    }, setCookie: i2 };
  }