// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9795 range:1061513..1062562
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9795: (e2, a2, n2) => {
    let t2 = n2(6982), { urlAlphabet: s2 } = n2(29);
    let o2, r2, i2 = (e3) => {
      if (e3 < 0 || e3 > 1024) throw new RangeError("Wrong ID size");
      !o2 || o2.length < e3 ? (o2 = Buffer.allocUnsafe(128 * e3), t2.randomFillSync(o2), r2 = 0) : r2 + e3 > o2.length && (t2.randomFillSync(o2), r2 = 0), r2 += e3;
    }, l = (e3) => (i2(e3 |= 0), o2.subarray(r2 - e3, r2)), d = (e3, a3, n3) => {
      let t3 = (2 << 31 - Math.clz32(e3.length - 1 | 1)) - 1, s3 = Math.ceil(1.6 * t3 * a3 / e3.length);
      return (o3 = a3) => {
        if (o3 <= 0) return "";
        let r3 = "";
        for (; ; ) {
          let a4 = n3(s3), i3 = s3;
          for (; i3--; ) if (r3 += e3[a4[i3] & t3] || "", r3.length === o3) return r3;
        }
      };
    };
    e2.exports = { nanoid: (e3 = 21) => {
      i2(e3 |= 0);
      let a3 = "";
      for (let n3 = r2 - e3; n3 < r2; n3++) a3 += s2[63 & o2[n3]];
      return a3;
    }, customAlphabet: (e3, a3 = 21) => d(e3, a3, l), customRandom: d, urlAlphabet: s2, random: l };
  }