// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/198.js sha256:4b6f4cfb39692a9202b5f51c935f2244226e902a83a7f8b9d177196a6ef4a291
// module: 61247 range:17379..18560
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61247: (e, t, r) => {
  r.d(t, { p: () => u });
  var n = r(16928), o = r(65835), s = r(21945);
  const i = (e2) => Object.entries(e2).filter(([e3]) => {
    const t2 = e3.indexOf(s.Q);
    return -1 !== t2 && Object.values(o.I).includes(e3.substring(0, t2));
  }).reduce((e3, [t2, r2]) => {
    const n2 = t2.indexOf(s.Q);
    return e3[t2.substring(0, n2) === o.I.PROFILE ? t2.substring(n2 + 1) : t2] = r2, e3;
  }, { ...e2.default && { default: e2.default } });
  var a = r(95519), c = r(44988);
  const l = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, n.join)((0, c.R)(), ".aws", "credentials");
  var d = r(74285), g = r(85004);
  const f = () => ({}), u = async (e2 = {}) => {
    const { filepath: t2 = l(), configFilepath: r2 = (0, a.g)() } = e2, o2 = (0, c.R)();
    let s2 = t2;
    t2.startsWith("~/") && (s2 = (0, n.join)(o2, t2.slice(2)));
    let u2 = r2;
    r2.startsWith("~/") && (u2 = (0, n.join)(o2, r2.slice(2)));
    const p = await Promise.all([(0, g.TA)(u2, { ignoreCache: e2.ignoreCache }).then(d.A).then(i).catch(f), (0, g.TA)(s2, { ignoreCache: e2.ignoreCache }).then(d.A).catch(f)]);
    return { configFile: p[0], credentialsFile: p[1] };
  };
}