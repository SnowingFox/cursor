// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95905 range:14592744..14595293
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95905: (e, t, r) => {
    "use strict";
    const { parseSetCookie: n } = r(58614), { stringify: s } = r(56233), { webidl: o } = r(18193), { Headers: i } = r(72848);
    function a(e2, t2) {
      o.argumentLengthCheck(arguments, 2, { header: "setCookie" }), o.brandCheck(e2, i, { strict: false }), t2 = o.converters.Cookie(t2);
      s(t2) && e2.append("Set-Cookie", s(t2));
    }
    o.converters.DeleteCookieAttributes = o.dictionaryConverter([{ converter: o.nullableConverter(o.converters.DOMString), key: "path", defaultValue: null }, { converter: o.nullableConverter(o.converters.DOMString), key: "domain", defaultValue: null }]), o.converters.Cookie = o.dictionaryConverter([{ converter: o.converters.DOMString, key: "name" }, { converter: o.converters.DOMString, key: "value" }, { converter: o.nullableConverter((e2) => "number" == typeof e2 ? o.converters["unsigned long long"](e2) : new Date(e2)), key: "expires", defaultValue: null }, { converter: o.nullableConverter(o.converters["long long"]), key: "maxAge", defaultValue: null }, { converter: o.nullableConverter(o.converters.DOMString), key: "domain", defaultValue: null }, { converter: o.nullableConverter(o.converters.DOMString), key: "path", defaultValue: null }, { converter: o.nullableConverter(o.converters.boolean), key: "secure", defaultValue: null }, { converter: o.nullableConverter(o.converters.boolean), key: "httpOnly", defaultValue: null }, { converter: o.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o.sequenceConverter(o.converters.DOMString), key: "unparsed", defaultValue: [] }]), e.exports = { getCookies: function(e2) {
      o.argumentLengthCheck(arguments, 1, { header: "getCookies" }), o.brandCheck(e2, i, { strict: false });
      const t2 = e2.get("cookie"), r2 = {};
      if (!t2) return r2;
      for (const e3 of t2.split(";")) {
        const [t3, ...n2] = e3.split("=");
        r2[t3.trim()] = n2.join("=");
      }
      return r2;
    }, deleteCookie: function(e2, t2, r2) {
      o.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), o.brandCheck(e2, i, { strict: false }), t2 = o.converters.DOMString(t2), r2 = o.converters.DeleteCookieAttributes(r2), a(e2, { name: t2, value: "", expires: /* @__PURE__ */ new Date(0), ...r2 });
    }, getSetCookies: function(e2) {
      o.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), o.brandCheck(e2, i, { strict: false });
      const t2 = e2.getSetCookie();
      return t2 ? t2.map((e3) => n(e3)) : [];
    }, setCookie: a };
  }