// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8962 range:813700..814204
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8962: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276), r2 = A2(5775);
    function o2(e3) {
      r2.call(this, e3), this.enc = "pem";
    }
    n2(o2, r2), e2.exports = o2, o2.prototype.encode = function(e3, t3) {
      const A3 = r2.prototype.encode.call(this, e3).toString("base64"), n3 = ["-----BEGIN " + t3.label + "-----"];
      for (let e4 = 0; e4 < A3.length; e4 += 64) n3.push(A3.slice(e4, e4 + 64));
      return n3.push("-----END " + t3.label + "-----"), n3.join("\n");
    };
  }