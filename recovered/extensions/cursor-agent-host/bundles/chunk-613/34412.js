// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 34412 range:201435..204005
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34412: (A, e, t) => {
  "use strict";
  const { parseSetCookie: r } = t(85055), { stringify: s } = t(41230), { webidl: o } = t(43290), { Headers: n } = t(48969);
  function i(A2, e2) {
    o.argumentLengthCheck(arguments, 2, "setCookie"), o.brandCheck(A2, n, { strict: false }), e2 = o.converters.Cookie(e2);
    const t2 = s(e2);
    t2 && A2.append("Set-Cookie", t2);
  }
  o.converters.DeleteCookieAttributes = o.dictionaryConverter([{ converter: o.nullableConverter(o.converters.DOMString), key: "path", defaultValue: () => null }, { converter: o.nullableConverter(o.converters.DOMString), key: "domain", defaultValue: () => null }]), o.converters.Cookie = o.dictionaryConverter([{ converter: o.converters.DOMString, key: "name" }, { converter: o.converters.DOMString, key: "value" }, { converter: o.nullableConverter((A2) => "number" == typeof A2 ? o.converters["unsigned long long"](A2) : new Date(A2)), key: "expires", defaultValue: () => null }, { converter: o.nullableConverter(o.converters["long long"]), key: "maxAge", defaultValue: () => null }, { converter: o.nullableConverter(o.converters.DOMString), key: "domain", defaultValue: () => null }, { converter: o.nullableConverter(o.converters.DOMString), key: "path", defaultValue: () => null }, { converter: o.nullableConverter(o.converters.boolean), key: "secure", defaultValue: () => null }, { converter: o.nullableConverter(o.converters.boolean), key: "httpOnly", defaultValue: () => null }, { converter: o.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] }, { converter: o.sequenceConverter(o.converters.DOMString), key: "unparsed", defaultValue: () => new Array(0) }]), A.exports = { getCookies: function(A2) {
    o.argumentLengthCheck(arguments, 1, "getCookies"), o.brandCheck(A2, n, { strict: false });
    const e2 = A2.get("cookie"), t2 = {};
    if (!e2) return t2;
    for (const A3 of e2.split(";")) {
      const [e3, ...r2] = A3.split("=");
      t2[e3.trim()] = r2.join("=");
    }
    return t2;
  }, deleteCookie: function(A2, e2, t2) {
    o.brandCheck(A2, n, { strict: false });
    const r2 = "deleteCookie";
    o.argumentLengthCheck(arguments, 2, r2), e2 = o.converters.DOMString(e2, r2, "name"), t2 = o.converters.DeleteCookieAttributes(t2), i(A2, { name: e2, value: "", expires: /* @__PURE__ */ new Date(0), ...t2 });
  }, getSetCookies: function(A2) {
    o.argumentLengthCheck(arguments, 1, "getSetCookies"), o.brandCheck(A2, n, { strict: false });
    const e2 = A2.getSetCookie();
    return e2 ? e2.map((A3) => r(A3)) : [];
  }, setCookie: i };
}