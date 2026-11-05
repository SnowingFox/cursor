// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 56508 range:10081..11685
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56508: (e, t, n) => {
  n.d(t, { Z: () => d });
  var r = n(4644), o = n(34661), a = n(63725);
  function s(e2) {
    try {
      const t2 = new Set(Array.from(e2.match(/([A-Z_]){3,}/g) ?? []));
      return t2.delete("CONFIG"), t2.delete("CONFIG_PREFIX_SEPARATOR"), t2.delete("ENV"), [...t2].join(", ");
    } catch (t2) {
      return e2;
    }
  }
  var i = n(76964), c = n(61247);
  const l = (e2) => {
    return "function" == typeof e2 ? async () => await e2() : (t2 = e2, () => Promise.resolve(t2));
    var t2;
  }, d = ({ environmentVariableSelector: e2, configFileSelector: t2, default: n2 }, d2 = {}) => {
    const { signingName: u, logger: f } = d2, p = { signingName: u, logger: f };
    return (0, r.B)((0, o.c)((g = e2, h = p, async () => {
      try {
        const e3 = g(process.env, h);
        if (void 0 === e3) throw new Error();
        return e3;
      } catch (e3) {
        throw new a.C(e3.message || `Not found in ENV: ${s(g.toString())}`, { logger: h?.logger });
      }
    }), ((e3, { preferredFile: t3 = "config", ...n3 } = {}) => async () => {
      const r2 = (0, i.Bz)(n3), { configFile: o2, credentialsFile: l2 } = await (0, c.p)(n3), d3 = l2[r2] || {}, u2 = o2[r2] || {}, f2 = "config" === t3 ? { ...d3, ...u2 } : { ...u2, ...d3 };
      try {
        const n4 = e3(f2, "config" === t3 ? o2 : l2);
        if (void 0 === n4) throw new Error();
        return n4;
      } catch (t4) {
        throw new a.C(t4.message || `Not found in config files w/ profile [${r2}]: ${s(e3.toString())}`, { logger: n3.logger });
      }
    })(t2, d2), l(n2)));
    var g, h;
  };
}