// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 61247 range:1479..2660
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61247: (e, s, o) => {
  o.d(s, { p: () => p });
  var t = o(16928), n = o(65835), i = o(21945);
  const r = (e2) => Object.entries(e2).filter(([e3]) => {
    const s2 = e3.indexOf(i.Q);
    return -1 !== s2 && Object.values(n.I).includes(e3.substring(0, s2));
  }).reduce((e3, [s2, o2]) => {
    const t2 = s2.indexOf(i.Q);
    return e3[s2.substring(0, t2) === n.I.PROFILE ? s2.substring(t2 + 1) : s2] = o2, e3;
  }, { ...e2.default && { default: e2.default } });
  var a = o(95519), c = o(44988);
  const l = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, t.join)((0, c.R)(), ".aws", "credentials");
  var g = o(74285), f = o(85004);
  const d = () => ({}), p = async (e2 = {}) => {
    const { filepath: s2 = l(), configFilepath: o2 = (0, a.g)() } = e2, n2 = (0, c.R)();
    let i2 = s2;
    s2.startsWith("~/") && (i2 = (0, t.join)(n2, s2.slice(2)));
    let p2 = o2;
    o2.startsWith("~/") && (p2 = (0, t.join)(n2, o2.slice(2)));
    const u = await Promise.all([(0, f.TA)(p2, { ignoreCache: e2.ignoreCache }).then(g.A).then(r).catch(d), (0, f.TA)(i2, { ignoreCache: e2.ignoreCache }).then(g.A).catch(d)]);
    return { configFile: u[0], credentialsFile: u[1] };
  };
}