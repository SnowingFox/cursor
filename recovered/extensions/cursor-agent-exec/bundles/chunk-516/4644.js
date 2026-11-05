// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 4644 range:83..596
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4644: (e, t, n) => {
  n.d(t, { B: () => r });
  const r = (e2, t2, n2) => {
    let r2, o, a, s = false;
    const i = async () => {
      o || (o = e2());
      try {
        r2 = await o, a = true, s = false;
      } finally {
        o = void 0;
      }
      return r2;
    };
    return void 0 === t2 ? async (e3) => (a && !e3?.forceRefresh || (r2 = await i()), r2) : async (e3) => (a && !e3?.forceRefresh || (r2 = await i()), s ? r2 : n2 && !n2(r2) ? (s = true, r2) : t2(r2) ? (await i(), r2) : r2);
  };
}