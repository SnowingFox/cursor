// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5872 range:477995..479161
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5872: (e2, A2, t2) => {
    const n2 = t2(2613), { ResponseStatusCodeError: r2 } = t2(7902), { toUSVString: o2 } = t2(9361);
    e2.exports = { getResolveErrorBodyCallback: async function({ callback: e3, body: A3, contentType: t3, statusCode: s, statusMessage: a, headers: i }) {
      n2(A3);
      let c = [], l = 0;
      for await (const e4 of A3) if (c.push(e4), l += e4.length, l > 131072) {
        c = null;
        break;
      }
      if (204 !== s && t3 && c) {
        try {
          if (t3.startsWith("application/json")) {
            const A4 = JSON.parse(o2(Buffer.concat(c)));
            return void process.nextTick(e3, new r2(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i, A4));
          }
          if (t3.startsWith("text/")) {
            const A4 = o2(Buffer.concat(c));
            return void process.nextTick(e3, new r2(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i, A4));
          }
        } catch (e4) {
        }
        process.nextTick(e3, new r2(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i));
      } else process.nextTick(e3, new r2(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i));
    } };
  }