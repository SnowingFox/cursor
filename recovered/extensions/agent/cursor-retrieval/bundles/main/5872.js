// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5872 range:784874..786059
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5872: (e2, a2, n2) => {
    const t2 = n2(2613), { ResponseStatusCodeError: s2 } = n2(7902), { toUSVString: o2 } = n2(9361);
    e2.exports = { getResolveErrorBodyCallback: async function({ callback: e3, body: a3, contentType: n3, statusCode: r2, statusMessage: i2, headers: l }) {
      t2(a3);
      let d = [], m = 0;
      for await (const e4 of a3) if (d.push(e4), m += e4.length, m > 131072) {
        d = null;
        break;
      }
      if (204 !== r2 && n3 && d) {
        try {
          if (n3.startsWith("application/json")) {
            const a4 = JSON.parse(o2(Buffer.concat(d)));
            return void process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, l, a4));
          }
          if (n3.startsWith("text/")) {
            const a4 = o2(Buffer.concat(d));
            return void process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, l, a4));
          }
        } catch (e4) {
        }
        process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, l));
      } else process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, l));
    } };
  }