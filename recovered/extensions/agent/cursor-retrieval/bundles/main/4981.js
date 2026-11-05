// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4981 range:748002..750604
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4981: (e2, a2, n2) => {
    "use strict";
    const { parseSetCookie: t2 } = n2(4250), { stringify: s2 } = n2(6261), { webidl: o2 } = n2(8005), { Headers: r2 } = n2(2932);
    function i2(e3, a3) {
      o2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o2.brandCheck(e3, r2, { strict: false }), a3 = o2.converters.Cookie(a3);
      s2(a3) && e3.append("Set-Cookie", s2(a3));
    }
    o2.converters.DeleteCookieAttributes = o2.dictionaryConverter([{ converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }]), o2.converters.Cookie = o2.dictionaryConverter([{ converter: o2.converters.DOMString, key: "name" }, { converter: o2.converters.DOMString, key: "value" }, { converter: o2.nullableConverter((e3) => "number" == typeof e3 ? o2.converters["unsigned long long"](e3) : new Date(e3)), key: "expires", defaultValue: null }, { converter: o2.nullableConverter(o2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "secure", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o2.sequenceConverter(o2.converters.DOMString), key: "unparsed", defaultValue: [] }]), e2.exports = { getCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o2.brandCheck(e3, r2, { strict: false });
      const a3 = e3.get("cookie"), n3 = {};
      if (!a3) return n3;
      for (const e4 of a3.split(";")) {
        const [a4, ...t3] = e4.split("=");
        n3[a4.trim()] = t3.join("=");
      }
      return n3;
    }, deleteCookie: function(e3, a3, n3) {
      o2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o2.brandCheck(e3, r2, { strict: false }), a3 = o2.converters.DOMString(a3), n3 = o2.converters.DeleteCookieAttributes(n3), i2(e3, { name: a3, value: "", expires: /* @__PURE__ */ new Date(0), ...n3 });
    }, getSetCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o2.brandCheck(e3, r2, { strict: false });
      const a3 = e3.getSetCookie();
      return a3 ? a3.map((e4) => t2(e4)) : [];
    }, setCookie: i2 };
  }