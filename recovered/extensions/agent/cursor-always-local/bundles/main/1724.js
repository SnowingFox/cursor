// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1724 range:603686..604862
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1724: (t2, e2, r2) => {
    const n2 = r2(2613), { ResponseStatusCodeError: s2 } = r2(8762), { toUSVString: i2 } = r2(3589);
    t2.exports = { getResolveErrorBodyCallback: async function({ callback: t3, body: e3, contentType: r3, statusCode: o2, statusMessage: a, headers: u }) {
      n2(e3);
      let c = [], l = 0;
      for await (const t4 of e3) if (c.push(t4), l += t4.length, l > 131072) {
        c = null;
        break;
      }
      if (204 !== o2 && r3 && c) {
        try {
          if (r3.startsWith("application/json")) {
            const e4 = JSON.parse(i2(Buffer.concat(c)));
            return void process.nextTick(t3, new s2(`Response status code ${o2}${a ? `: ${a}` : ""}`, o2, u, e4));
          }
          if (r3.startsWith("text/")) {
            const e4 = i2(Buffer.concat(c));
            return void process.nextTick(t3, new s2(`Response status code ${o2}${a ? `: ${a}` : ""}`, o2, u, e4));
          }
        } catch (t4) {
        }
        process.nextTick(t3, new s2(`Response status code ${o2}${a ? `: ${a}` : ""}`, o2, u));
      } else process.nextTick(t3, new s2(`Response status code ${o2}${a ? `: ${a}` : ""}`, o2, u));
    } };
  }