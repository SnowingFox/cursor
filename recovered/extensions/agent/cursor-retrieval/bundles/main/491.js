// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 491 range:15645..17509
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
491: function(e2) {
    "use strict";
    const a2 = new TextDecoder("utf-8"), n2 = /* @__PURE__ */ new Map([["utf-8", a2], ["utf8", a2]]);
    const t2 = { utf8: (e3, a3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, a3)), e3.utf8Slice(0, e3.length)), latin1: (e3, a3) => 0 === e3.length ? "" : "string" == typeof e3 ? e3 : e3.latin1Slice(0, e3.length), utf16le: (e3, a3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, a3)), e3.ucs2Slice(0, e3.length)), base64: (e3, a3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, a3)), e3.base64Slice(0, e3.length)), other: (e3, a3) => {
      if (0 === e3.length) return "";
      if ("string" == typeof e3 && (e3 = Buffer.from(e3, a3)), n2.has(this.toString())) try {
        return n2.get(this).decode(e3);
      } catch {
      }
      return "string" == typeof e3 ? e3 : e3.toString();
    } };
    e2.exports = function(e3, a3, n3) {
      return e3 ? (function(e4) {
        let a4;
        for (; ; ) switch (e4) {
          case "utf-8":
          case "utf8":
            return t2.utf8;
          case "latin1":
          case "ascii":
          case "us-ascii":
          case "iso-8859-1":
          case "iso8859-1":
          case "iso88591":
          case "iso_8859-1":
          case "windows-1252":
          case "iso_8859-1:1987":
          case "cp1252":
          case "x-cp1252":
            return t2.latin1;
          case "utf16le":
          case "utf-16le":
          case "ucs2":
          case "ucs-2":
            return t2.utf16le;
          case "base64":
            return t2.base64;
          default:
            if (void 0 === a4) {
              a4 = true, e4 = e4.toLowerCase();
              continue;
            }
            return t2.other.bind(e4);
        }
      })(n3)(e3, a3) : e3;
    };
  }