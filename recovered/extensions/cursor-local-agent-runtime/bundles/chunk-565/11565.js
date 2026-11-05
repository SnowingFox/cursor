// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/565.js sha256:c62971c39bd925303caf17f7b3263764fb6c1252344bf17acf8b1361988d73ad
// module: 11565 range:73..444
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11565: (t, e, s) => {
  s.d(e, { default: () => f });
  var r = s(63652);
  async function f(t2) {
    const e2 = Buffer.isBuffer(t2.bytes) ? t2.bytes : Buffer.from(t2.bytes), s2 = new r.Cm({ data: e2 });
    try {
      const t3 = await s2.getText();
      return { text: "string" == typeof t3.text ? t3.text : "" };
    } finally {
      await s2.destroy();
    }
  }
}