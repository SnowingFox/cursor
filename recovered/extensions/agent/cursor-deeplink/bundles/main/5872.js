// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5872 range:585667..586833
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5872: (e2, t2, A2) => {
    const n2 = A2(2613), { ResponseStatusCodeError: r2 } = A2(7902), { toUSVString: o2 } = A2(9361);
    e2.exports = { getResolveErrorBodyCallback: async function({ callback: e3, body: t3, contentType: A3, statusCode: s, statusMessage: i, headers: a }) {
      n2(t3);
      let c = [], l = 0;
      for await (const e4 of t3) if (c.push(e4), l += e4.length, l > 131072) {
        c = null;
        break;
      }
      if (204 !== s && A3 && c) {
        try {
          if (A3.startsWith("application/json")) {
            const t4 = JSON.parse(o2(Buffer.concat(c)));
            return void process.nextTick(e3, new r2(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a, t4));
          }
          if (A3.startsWith("text/")) {
            const t4 = o2(Buffer.concat(c));
            return void process.nextTick(e3, new r2(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a, t4));
          }
        } catch (e4) {
        }
        process.nextTick(e3, new r2(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a));
      } else process.nextTick(e3, new r2(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a));
    } };
  }