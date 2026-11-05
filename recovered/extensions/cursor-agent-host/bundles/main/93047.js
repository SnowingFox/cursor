// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 93047 range:14426222..14428074
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93047: function(e) {
    "use strict";
    const t = new TextDecoder("utf-8"), r = /* @__PURE__ */ new Map([["utf-8", t], ["utf8", t]]);
    const n = { utf8: (e2, t2) => 0 === e2.length ? "" : ("string" == typeof e2 && (e2 = Buffer.from(e2, t2)), e2.utf8Slice(0, e2.length)), latin1: (e2, t2) => 0 === e2.length ? "" : "string" == typeof e2 ? e2 : e2.latin1Slice(0, e2.length), utf16le: (e2, t2) => 0 === e2.length ? "" : ("string" == typeof e2 && (e2 = Buffer.from(e2, t2)), e2.ucs2Slice(0, e2.length)), base64: (e2, t2) => 0 === e2.length ? "" : ("string" == typeof e2 && (e2 = Buffer.from(e2, t2)), e2.base64Slice(0, e2.length)), other: (e2, t2) => {
      if (0 === e2.length) return "";
      if ("string" == typeof e2 && (e2 = Buffer.from(e2, t2)), r.has(this.toString())) try {
        return r.get(this).decode(e2);
      } catch {
      }
      return "string" == typeof e2 ? e2 : e2.toString();
    } };
    e.exports = function(e2, t2, r2) {
      return e2 ? (function(e3) {
        let t3;
        for (; ; ) switch (e3) {
          case "utf-8":
          case "utf8":
            return n.utf8;
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
            return n.latin1;
          case "utf16le":
          case "utf-16le":
          case "ucs2":
          case "ucs-2":
            return n.utf16le;
          case "base64":
            return n.base64;
          default:
            if (void 0 === t3) {
              t3 = true, e3 = e3.toLowerCase();
              continue;
            }
            return n.other.bind(e3);
        }
      })(r2)(e2, t2) : e2;
    };
  }