// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/891.js sha256:a9b28a653e0c9a848b5a9ecea390f2667111709ef94d64381394a9ca46de63e8
// module: 61247 range:1424..2605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61247: (t, e, s) => {
  s.d(e, { p: () => p });
  var o = s(16928), r = s(65835), n = s(21945);
  const i = (t2) => Object.entries(t2).filter(([t3]) => {
    const e2 = t3.indexOf(n.Q);
    return -1 !== e2 && Object.values(r.I).includes(t3.substring(0, e2));
  }).reduce((t3, [e2, s2]) => {
    const o2 = e2.indexOf(n.Q);
    return t3[e2.substring(0, o2) === r.I.PROFILE ? e2.substring(o2 + 1) : e2] = s2, t3;
  }, { ...t2.default && { default: t2.default } });
  var c = s(95519), a = s(44988);
  const h = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, o.join)((0, a.R)(), ".aws", "credentials");
  var l = s(74285), d = s(85004);
  const u = () => ({}), p = async (t2 = {}) => {
    const { filepath: e2 = h(), configFilepath: s2 = (0, c.g)() } = t2, r2 = (0, a.R)();
    let n2 = e2;
    e2.startsWith("~/") && (n2 = (0, o.join)(r2, e2.slice(2)));
    let p2 = s2;
    s2.startsWith("~/") && (p2 = (0, o.join)(r2, s2.slice(2)));
    const f = await Promise.all([(0, d.TA)(p2, { ignoreCache: t2.ignoreCache }).then(l.A).then(i).catch(u), (0, d.TA)(n2, { ignoreCache: t2.ignoreCache }).then(l.A).catch(u)]);
    return { configFile: f[0], credentialsFile: f[1] };
  };
}