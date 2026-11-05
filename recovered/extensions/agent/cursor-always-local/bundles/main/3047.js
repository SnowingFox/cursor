// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3047 range:907046..908911
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3047: function(t2) {
    "use strict";
    const e2 = new TextDecoder("utf-8"), r2 = /* @__PURE__ */ new Map([["utf-8", e2], ["utf8", e2]]);
    const n2 = { utf8: (t3, e3) => 0 === t3.length ? "" : ("string" == typeof t3 && (t3 = Buffer.from(t3, e3)), t3.utf8Slice(0, t3.length)), latin1: (t3, e3) => 0 === t3.length ? "" : "string" == typeof t3 ? t3 : t3.latin1Slice(0, t3.length), utf16le: (t3, e3) => 0 === t3.length ? "" : ("string" == typeof t3 && (t3 = Buffer.from(t3, e3)), t3.ucs2Slice(0, t3.length)), base64: (t3, e3) => 0 === t3.length ? "" : ("string" == typeof t3 && (t3 = Buffer.from(t3, e3)), t3.base64Slice(0, t3.length)), other: (t3, e3) => {
      if (0 === t3.length) return "";
      if ("string" == typeof t3 && (t3 = Buffer.from(t3, e3)), r2.has(this.toString())) try {
        return r2.get(this).decode(t3);
      } catch {
      }
      return "string" == typeof t3 ? t3 : t3.toString();
    } };
    t2.exports = function(t3, e3, r3) {
      return t3 ? (function(t4) {
        let e4;
        for (; ; ) switch (t4) {
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
            if (void 0 === e4) {
              e4 = true, t4 = t4.toLowerCase();
              continue;
            }
            return n2.other.bind(t4);
        }
      })(r3)(t3, e3) : t3;
    };
  }