// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1088 range:118701..119828
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1088: (e2, t2, A2) => {
    "use strict";
    A2.r(t2), A2.d(t2, { format: () => u, parse: () => c });
    var n2 = /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/, r2 = 1e3, o2 = 60 * r2, s = 60 * o2, i = 24 * s, a = 365.25 * i;
    function c(e3) {
      var t3, A3 = e3.toLowerCase().match(n2);
      if (null != A3 && (t3 = parseFloat(A3[1]))) return null != A3[3] ? t3 * r2 : null != A3[4] ? t3 * o2 : null != A3[5] ? t3 * s : null != A3[6] ? t3 * i : null != A3[7] ? t3 * i * 7 : null != A3[8] ? t3 * a : t3;
    }
    function l(e3, t3, A3, n3) {
      var r3 = (0 | e3) === e3 ? e3 : ~~(e3 + 0.5);
      return t3 + r3 + (n3 ? " " + A3 + (1 != r3 ? "s" : "") : A3[0]);
    }
    function u(e3, t3) {
      var A3 = e3 < 0 ? "-" : "", n3 = e3 < 0 ? -e3 : e3;
      return n3 < r2 ? e3 + (t3 ? " ms" : "ms") : n3 < o2 ? l(n3 / r2, A3, "second", t3) : n3 < s ? l(n3 / o2, A3, "minute", t3) : n3 < i ? l(n3 / s, A3, "hour", t3) : n3 < a ? l(n3 / i, A3, "day", t3) : l(n3 / a, A3, "year", t3);
    }
  }