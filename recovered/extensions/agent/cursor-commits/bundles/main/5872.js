// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5872 range:478479..479664
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5872: (e2, n2, a2) => {
    const t2 = a2(2613), { ResponseStatusCodeError: s2 } = a2(7902), { toUSVString: o2 } = a2(9361);
    e2.exports = { getResolveErrorBodyCallback: async function({ callback: e3, body: n3, contentType: a3, statusCode: r2, statusMessage: i2, headers: A }) {
      t2(n3);
      let l = [], c = 0;
      for await (const e4 of n3) if (l.push(e4), c += e4.length, c > 131072) {
        l = null;
        break;
      }
      if (204 !== r2 && a3 && l) {
        try {
          if (a3.startsWith("application/json")) {
            const n4 = JSON.parse(o2(Buffer.concat(l)));
            return void process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, A, n4));
          }
          if (a3.startsWith("text/")) {
            const n4 = o2(Buffer.concat(l));
            return void process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, A, n4));
          }
        } catch (e4) {
        }
        process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, A));
      } else process.nextTick(e3, new s2(`Response status code ${r2}${i2 ? `: ${i2}` : ""}`, r2, A));
    } };
  }