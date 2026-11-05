// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 61247 range:11687..12868
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61247: (e, t, n) => {
  n.d(t, { p: () => p });
  var r = n(16928), o = n(65835), a = n(21945);
  const s = (e2) => Object.entries(e2).filter(([e3]) => {
    const t2 = e3.indexOf(a.Q);
    return -1 !== t2 && Object.values(o.I).includes(e3.substring(0, t2));
  }).reduce((e3, [t2, n2]) => {
    const r2 = t2.indexOf(a.Q);
    return e3[t2.substring(0, r2) === o.I.PROFILE ? t2.substring(r2 + 1) : t2] = n2, e3;
  }, { ...e2.default && { default: e2.default } });
  var i = n(95519), c = n(44988);
  const l = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, r.join)((0, c.R)(), ".aws", "credentials");
  var d = n(74285), u = n(85004);
  const f = () => ({}), p = async (e2 = {}) => {
    const { filepath: t2 = l(), configFilepath: n2 = (0, i.g)() } = e2, o2 = (0, c.R)();
    let a2 = t2;
    t2.startsWith("~/") && (a2 = (0, r.join)(o2, t2.slice(2)));
    let p2 = n2;
    n2.startsWith("~/") && (p2 = (0, r.join)(o2, n2.slice(2)));
    const g = await Promise.all([(0, u.TA)(p2, { ignoreCache: e2.ignoreCache }).then(d.A).then(s).catch(f), (0, u.TA)(a2, { ignoreCache: e2.ignoreCache }).then(d.A).catch(f)]);
    return { configFile: g[0], credentialsFile: g[1] };
  };
}