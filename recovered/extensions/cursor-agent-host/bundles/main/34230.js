// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34230 range:6620524..6620921
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