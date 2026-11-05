// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4981 range:544840..547434
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4981: (e2, t2, A2) => {
    "use strict";
    const { parseSetCookie: n2 } = A2(4250), { stringify: r2 } = A2(6261), { webidl: o2 } = A2(8005), { Headers: s } = A2(2932);
    function i(e3, t3) {
      o2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o2.brandCheck(e3, s, { strict: false }), t3 = o2.converters.Cookie(t3);
      r2(t3) && e3.append("Set-Cookie", r2(t3));
    }
    o2.converters.DeleteCookieAttributes = o2.dictionaryConverter([{ converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }]), o2.converters.Cookie = o2.dictionaryConverter([{ converter: o2.converters.DOMString, key: "name" }, { converter: o2.converters.DOMString, key: "value" }, { converter: o2.nullableConverter((e3) => "number" == typeof e3 ? o2.converters["unsigned long long"](e3) : new Date(e3)), key: "expires", defaultValue: null }, { converter: o2.nullableConverter(o2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "secure", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o2.sequenceConverter(o2.converters.DOMString), key: "unparsed", defaultValue: [] }]), e2.exports = { getCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o2.brandCheck(e3, s, { strict: false });
      const t3 = e3.get("cookie"), A3 = {};
      if (!t3) return A3;
      for (const e4 of t3.split(";")) {
        const [t4, ...n3] = e4.split("=");
        A3[t4.trim()] = n3.join("=");
      }
      return A3;
    }, deleteCookie: function(e3, t3, A3) {
      o2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o2.brandCheck(e3, s, { strict: false }), t3 = o2.converters.DOMString(t3), A3 = o2.converters.DeleteCookieAttributes(A3), i(e3, { name: t3, value: "", expires: /* @__PURE__ */ new Date(0), ...A3 });
    }, getSetCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o2.brandCheck(e3, s, { strict: false });
      const t3 = e3.getSetCookie();
      return t3 ? t3.map((e4) => n2(e4)) : [];
    }, setCookie: i };
  }