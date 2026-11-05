// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34230 range:1039848..1040245
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34230: (e) => {
    e.exports = { nanoid: (e2 = 21) => {
      let t = "", r = 0 | e2;
      for (; r-- > 0; ) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
      return t;
    }, customAlphabet: (e2, t = 21) => (r = t) => {
      let n = "", o = 0 | r;
      for (; o-- > 0; ) n += e2[Math.random() * e2.length | 0];
      return n;
    } };
  }