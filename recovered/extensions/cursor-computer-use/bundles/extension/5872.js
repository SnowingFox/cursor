// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5872 range:509321..510487
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5872: (e2, n2, t2) => {
    const a2 = t2(2613), { ResponseStatusCodeError: s2 } = t2(7902), { toUSVString: o2 } = t2(9361);
    e2.exports = { getResolveErrorBodyCallback: async function({ callback: e3, body: n3, contentType: t3, statusCode: r, statusMessage: i, headers: A }) {
      a2(n3);
      let c = [], l = 0;
      for await (const e4 of n3) if (c.push(e4), l += e4.length, l > 131072) {
        c = null;
        break;
      }
      if (204 !== r && t3 && c) {
        try {
          if (t3.startsWith("application/json")) {
            const n4 = JSON.parse(o2(Buffer.concat(c)));
            return void process.nextTick(e3, new s2(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n4));
          }
          if (t3.startsWith("text/")) {
            const n4 = o2(Buffer.concat(c));
            return void process.nextTick(e3, new s2(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n4));
          }
        } catch (e4) {
        }
        process.nextTick(e3, new s2(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
      } else process.nextTick(e3, new s2(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
    } };
  }