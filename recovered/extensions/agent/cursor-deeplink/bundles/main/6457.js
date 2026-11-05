// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6457 range:601441..602239
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6457: (e2, t2) => {
    "use strict";
    function A2(e3) {
      const t3 = {};
      return Object.keys(e3).forEach(function(A3) {
        (0 | A3) == A3 && (A3 |= 0);
        const n2 = e3[A3];
        t3[n2] = A3;
      }), t3;
    }
    t2.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" }, t2.tagClassByName = A2(t2.tagClass), t2.tag = { 0: "end", 1: "bool", 2: "int", 3: "bitstr", 4: "octstr", 5: "null_", 6: "objid", 7: "objDesc", 8: "external", 9: "real", 10: "enum", 11: "embed", 12: "utf8str", 13: "relativeOid", 16: "seq", 17: "set", 18: "numstr", 19: "printstr", 20: "t61str", 21: "videostr", 22: "ia5str", 23: "utctime", 24: "gentime", 25: "graphstr", 26: "iso646str", 27: "genstr", 28: "unistr", 29: "charstr", 30: "bmpstr" }, t2.tagByName = A2(t2.tag);
  }