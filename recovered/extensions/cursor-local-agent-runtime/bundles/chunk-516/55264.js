// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 55264 range:9384..10079
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55264: (e, t, n) => {
  n.r(t), n.d(t, { parseUrl: () => r });
  const r = (e2) => {
    if ("string" == typeof e2) return r(new URL(e2));
    const { hostname: t2, pathname: n2, port: o, protocol: a, search: s } = e2;
    let i;
    return s && (i = (function(e3) {
      const t3 = {};
      if (e3 = e3.replace(/^\?/, "")) for (const n3 of e3.split("&")) {
        let [e4, r2 = null] = n3.split("=");
        e4 = decodeURIComponent(e4), r2 && (r2 = decodeURIComponent(r2)), e4 in t3 ? Array.isArray(t3[e4]) ? t3[e4].push(r2) : t3[e4] = [t3[e4], r2] : t3[e4] = r2;
      }
      return t3;
    })(s)), { hostname: t2, port: o ? parseInt(o) : void 0, protocol: a, path: n2, query: i };
  };
}