// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34230 range:2926543..2926940
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34230: (e) => {
    e.exports = { nanoid: (e2 = 21) => {
      let t = "", r = 0 | e2;
      for (; r-- > 0; ) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
      return t;
    }, customAlphabet: (e2, t = 21) => (r = t) => {
      let n = "", s = 0 | r;
      for (; s-- > 0; ) n += e2[Math.random() * e2.length | 0];
      return n;
    } };
  }