// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5905 range:1342287..1344886
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5905: (t2, e2, r2) => {
    "use strict";
    const { parseSetCookie: n2 } = r2(8614), { stringify: s2 } = r2(6233), { webidl: i2 } = r2(8193), { Headers: o2 } = r2(2848);
    function a(t3, e3) {
      i2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), i2.brandCheck(t3, o2, { strict: false }), e3 = i2.converters.Cookie(e3);
      s2(e3) && t3.append("Set-Cookie", s2(e3));
    }
    i2.converters.DeleteCookieAttributes = i2.dictionaryConverter([{ converter: i2.nullableConverter(i2.converters.DOMString), key: "path", defaultValue: null }, { converter: i2.nullableConverter(i2.converters.DOMString), key: "domain", defaultValue: null }]), i2.converters.Cookie = i2.dictionaryConverter([{ converter: i2.converters.DOMString, key: "name" }, { converter: i2.converters.DOMString, key: "value" }, { converter: i2.nullableConverter((t3) => "number" == typeof t3 ? i2.converters["unsigned long long"](t3) : new Date(t3)), key: "expires", defaultValue: null }, { converter: i2.nullableConverter(i2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: i2.nullableConverter(i2.converters.DOMString), key: "domain", defaultValue: null }, { converter: i2.nullableConverter(i2.converters.DOMString), key: "path", defaultValue: null }, { converter: i2.nullableConverter(i2.converters.boolean), key: "secure", defaultValue: null }, { converter: i2.nullableConverter(i2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: i2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: i2.sequenceConverter(i2.converters.DOMString), key: "unparsed", defaultValue: [] }]), t2.exports = { getCookies: function(t3) {
      i2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), i2.brandCheck(t3, o2, { strict: false });
      const e3 = t3.get("cookie"), r3 = {};
      if (!e3) return r3;
      for (const t4 of e3.split(";")) {
        const [e4, ...n3] = t4.split("=");
        r3[e4.trim()] = n3.join("=");
      }
      return r3;
    }, deleteCookie: function(t3, e3, r3) {
      i2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), i2.brandCheck(t3, o2, { strict: false }), e3 = i2.converters.DOMString(e3), r3 = i2.converters.DeleteCookieAttributes(r3), a(t3, { name: e3, value: "", expires: /* @__PURE__ */ new Date(0), ...r3 });
    }, getSetCookies: function(t3) {
      i2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), i2.brandCheck(t3, o2, { strict: false });
      const e3 = t3.getSetCookie();
      return e3 ? e3.map((t4) => n2(t4)) : [];
    }, setCookie: a };
  }