// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4981 range:472523..475117
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4981: (e2, n2, t2) => {
    "use strict";
    const { parseSetCookie: a2 } = t2(4250), { stringify: s2 } = t2(6261), { webidl: o2 } = t2(8005), { Headers: r } = t2(2932);
    function i(e3, n3) {
      o2.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o2.brandCheck(e3, r, { strict: false }), n3 = o2.converters.Cookie(n3);
      s2(n3) && e3.append("Set-Cookie", s2(n3));
    }
    o2.converters.DeleteCookieAttributes = o2.dictionaryConverter([{ converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }]), o2.converters.Cookie = o2.dictionaryConverter([{ converter: o2.converters.DOMString, key: "name" }, { converter: o2.converters.DOMString, key: "value" }, { converter: o2.nullableConverter((e3) => "number" == typeof e3 ? o2.converters["unsigned long long"](e3) : new Date(e3)), key: "expires", defaultValue: null }, { converter: o2.nullableConverter(o2.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "domain", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.DOMString), key: "path", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "secure", defaultValue: null }, { converter: o2.nullableConverter(o2.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o2.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o2.sequenceConverter(o2.converters.DOMString), key: "unparsed", defaultValue: [] }]), e2.exports = { getCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o2.brandCheck(e3, r, { strict: false });
      const n3 = e3.get("cookie"), t3 = {};
      if (!n3) return t3;
      for (const e4 of n3.split(";")) {
        const [n4, ...a3] = e4.split("=");
        t3[n4.trim()] = a3.join("=");
      }
      return t3;
    }, deleteCookie: function(e3, n3, t3) {
      o2.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o2.brandCheck(e3, r, { strict: false }), n3 = o2.converters.DOMString(n3), t3 = o2.converters.DeleteCookieAttributes(t3), i(e3, { name: n3, value: "", expires: /* @__PURE__ */ new Date(0), ...t3 });
    }, getSetCookies: function(e3) {
      o2.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o2.brandCheck(e3, r, { strict: false });
      const n3 = e3.getSetCookie();
      return n3 ? n3.map((e4) => a2(e4)) : [];
    }, setCookie: i };
  }