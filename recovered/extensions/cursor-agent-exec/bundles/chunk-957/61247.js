// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 61247 range:1747..2928
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61247: (e, r, t) => {
  t.d(r, { p: () => p });
  var s = t(16928), n = t(65835), o = t(21945);
  const i = (e2) => Object.entries(e2).filter(([e3]) => {
    const r2 = e3.indexOf(o.Q);
    return -1 !== r2 && Object.values(n.I).includes(e3.substring(0, r2));
  }).reduce((e3, [r2, t2]) => {
    const s2 = r2.indexOf(o.Q);
    return e3[r2.substring(0, s2) === n.I.PROFILE ? r2.substring(s2 + 1) : r2] = t2, e3;
  }, { ...e2.default && { default: e2.default } });
  var c = t(95519), a = t(44988);
  const d = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, s.join)((0, a.R)(), ".aws", "credentials");
  var l = t(74285), f = t(85004);
  const u = () => ({}), p = async (e2 = {}) => {
    const { filepath: r2 = d(), configFilepath: t2 = (0, c.g)() } = e2, n2 = (0, a.R)();
    let o2 = r2;
    r2.startsWith("~/") && (o2 = (0, s.join)(n2, r2.slice(2)));
    let p2 = t2;
    t2.startsWith("~/") && (p2 = (0, s.join)(n2, t2.slice(2)));
    const g = await Promise.all([(0, f.TA)(p2, { ignoreCache: e2.ignoreCache }).then(l.A).then(i).catch(u), (0, f.TA)(o2, { ignoreCache: e2.ignoreCache }).then(l.A).catch(u)]);
    return { configFile: g[0], credentialsFile: g[1] };
  };
}