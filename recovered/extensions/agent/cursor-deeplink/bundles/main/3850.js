// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3850 range:470750..471730
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3850: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276), r2 = A2(9845).Buffer, o2 = A2(3975);
    function s(e3) {
      o2.call(this, e3), this.enc = "pem";
    }
    n2(s, o2), e2.exports = s, s.prototype.decode = function(e3, t3) {
      const A3 = e3.toString().split(/[\r\n]+/g), n3 = t3.label.toUpperCase(), s2 = /^-----(BEGIN|END) ([^-]+)-----$/;
      let i = -1, a = -1;
      for (let e4 = 0; e4 < A3.length; e4++) {
        const t4 = A3[e4].match(s2);
        if (null !== t4 && t4[2] === n3) {
          if (-1 !== i) {
            if ("END" !== t4[1]) break;
            a = e4;
            break;
          }
          if ("BEGIN" !== t4[1]) break;
          i = e4;
        }
      }
      if (-1 === i || -1 === a) throw new Error("PEM section not found for: " + n3);
      const c = A3.slice(i + 1, a).join("");
      c.replace(/[^a-z0-9+/=]+/gi, "");
      const l = r2.from(c, "base64");
      return o2.prototype.decode.call(this, l, t3);
    };
  }