// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 491 range:18519..20383
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
491: function(e2) {
    "use strict";
    const t2 = new TextDecoder("utf-8"), A2 = /* @__PURE__ */ new Map([["utf-8", t2], ["utf8", t2]]);
    const n2 = { utf8: (e3, t3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, t3)), e3.utf8Slice(0, e3.length)), latin1: (e3, t3) => 0 === e3.length ? "" : "string" == typeof e3 ? e3 : e3.latin1Slice(0, e3.length), utf16le: (e3, t3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, t3)), e3.ucs2Slice(0, e3.length)), base64: (e3, t3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, t3)), e3.base64Slice(0, e3.length)), other: (e3, t3) => {
      if (0 === e3.length) return "";
      if ("string" == typeof e3 && (e3 = Buffer.from(e3, t3)), A2.has(this.toString())) try {
        return A2.get(this).decode(e3);
      } catch {
      }
      return "string" == typeof e3 ? e3 : e3.toString();
    } };
    e2.exports = function(e3, t3, A3) {
      return e3 ? (function(e4) {
        let t4;
        for (; ; ) switch (e4) {
          case "utf-8":
          case "utf8":
            return n2.utf8;
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
            return n2.latin1;
          case "utf16le":
          case "utf-16le":
          case "ucs2":
          case "ucs-2":
            return n2.utf16le;
          case "base64":
            return n2.base64;
          default:
            if (void 0 === t4) {
              t4 = true, e4 = e4.toLowerCase();
              continue;
            }
            return n2.other.bind(e4);
        }
      })(A3)(e3, t3) : e3;
    };
  }