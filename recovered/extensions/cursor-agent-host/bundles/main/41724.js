// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41724 range:7665000..7666153
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41724: (e, t, r) => {
    const n = r(42613), { ResponseStatusCodeError: s } = r(48762), { toUSVString: o } = r(83589);
    e.exports = { getResolveErrorBodyCallback: async function({ callback: e2, body: t2, contentType: r2, statusCode: i, statusMessage: a, headers: c }) {
      n(t2);
      let l = [], u = 0;
      for await (const e3 of t2) if (l.push(e3), u += e3.length, u > 131072) {
        l = null;
        break;
      }
      if (204 !== i && r2 && l) {
        try {
          if (r2.startsWith("application/json")) {
            const t3 = JSON.parse(o(Buffer.concat(l)));
            return void process.nextTick(e2, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c, t3));
          }
          if (r2.startsWith("text/")) {
            const t3 = o(Buffer.concat(l));
            return void process.nextTick(e2, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c, t3));
          }
        } catch (e3) {
        }
        process.nextTick(e2, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c));
      } else process.nextTick(e2, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c));
    } };
  }