// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 491 range:14765..16629
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
491: function(e2) {
    "use strict";
    const n2 = new TextDecoder("utf-8"), a2 = /* @__PURE__ */ new Map([["utf-8", n2], ["utf8", n2]]);
    const t2 = { utf8: (e3, n3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, n3)), e3.utf8Slice(0, e3.length)), latin1: (e3, n3) => 0 === e3.length ? "" : "string" == typeof e3 ? e3 : e3.latin1Slice(0, e3.length), utf16le: (e3, n3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, n3)), e3.ucs2Slice(0, e3.length)), base64: (e3, n3) => 0 === e3.length ? "" : ("string" == typeof e3 && (e3 = Buffer.from(e3, n3)), e3.base64Slice(0, e3.length)), other: (e3, n3) => {
      if (0 === e3.length) return "";
      if ("string" == typeof e3 && (e3 = Buffer.from(e3, n3)), a2.has(this.toString())) try {
        return a2.get(this).decode(e3);
      } catch {
      }
      return "string" == typeof e3 ? e3 : e3.toString();
    } };
    e2.exports = function(e3, n3, a3) {
      return e3 ? (function(e4) {
        let n4;
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
            if (void 0 === n4) {
              n4 = true, e4 = e4.toLowerCase();
              continue;
            }
            return t2.other.bind(e4);
        }
      })(a3)(e3, n3) : e3;
    };
  }