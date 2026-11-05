// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6687 range:531474..533932
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6687: (e2, n2, t2) => {
    "use strict";
    const { MessageChannel: a2, receiveMessageOnPort: s2 } = t2(8167), o2 = ["GET", "HEAD", "POST"], r = new Set(o2), i = [301, 302, 303, 307, 308], A = new Set(i), c = ["1", "7", "9", "11", "13", "15", "17", "19", "20", "21", "22", "23", "25", "37", "42", "43", "53", "69", "77", "79", "87", "95", "101", "102", "103", "104", "109", "110", "111", "113", "115", "117", "119", "123", "135", "137", "139", "143", "161", "179", "389", "427", "465", "512", "513", "514", "515", "526", "530", "531", "532", "540", "548", "554", "556", "563", "587", "601", "636", "989", "990", "993", "995", "1719", "1720", "1723", "2049", "3659", "4045", "5060", "5061", "6000", "6566", "6665", "6666", "6667", "6668", "6669", "6697", "10080"], l = new Set(c), d = ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"], m = new Set(d), u = ["GET", "HEAD", "OPTIONS", "TRACE"], g = new Set(u), p = ["CONNECT", "TRACE", "TRACK"], E = new Set(p), h = ["audio", "audioworklet", "font", "image", "manifest", "paintworklet", "script", "style", "track", "video", "xslt", ""], T = new Set(h), k = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (e3) {
        return Object.getPrototypeOf(e3).constructor;
      }
    })();
    let f;
    const _ = globalThis.structuredClone ?? function(e3, n3 = void 0) {
      if (0 === arguments.length) throw new TypeError("missing argument");
      return f || (f = new a2()), f.port1.unref(), f.port2.unref(), f.port1.postMessage(e3, n3?.transfer), s2(f.port2).message;
    };
    e2.exports = { DOMException: k, structuredClone: _, subresource: h, forbiddenMethods: p, requestBodyHeader: ["content-encoding", "content-language", "content-location", "content-type", "content-length"], referrerPolicy: d, requestRedirect: ["follow", "manual", "error"], requestMode: ["navigate", "same-origin", "no-cors", "cors"], requestCredentials: ["omit", "same-origin", "include"], requestCache: ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"], redirectStatus: i, corsSafeListedMethods: o2, nullBodyStatus: [101, 204, 205, 304], safeMethods: u, badPorts: c, requestDuplex: ["half"], subresourceSet: T, badPortsSet: l, redirectStatusSet: A, corsSafeListedMethodsSet: r, safeMethodsSet: g, forbiddenMethodsSet: E, referrerPolicySet: m };
  }