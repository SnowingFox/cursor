// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2955 range:904139..906599
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2955: (t2, e2, r2) => {
    "use strict";
    const { MessageChannel: n2, receiveMessageOnPort: s2 } = r2(8167), i2 = ["GET", "HEAD", "POST"], o2 = new Set(i2), a = [301, 302, 303, 307, 308], u = new Set(a), c = ["1", "7", "9", "11", "13", "15", "17", "19", "20", "21", "22", "23", "25", "37", "42", "43", "53", "69", "77", "79", "87", "95", "101", "102", "103", "104", "109", "110", "111", "113", "115", "117", "119", "123", "135", "137", "139", "143", "161", "179", "389", "427", "465", "512", "513", "514", "515", "526", "530", "531", "532", "540", "548", "554", "556", "563", "587", "601", "636", "989", "990", "993", "995", "1719", "1720", "1723", "2049", "3659", "4045", "5060", "5061", "6000", "6566", "6665", "6666", "6667", "6668", "6669", "6697", "10080"], l = new Set(c), m = ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"], d = new Set(m), f = ["GET", "HEAD", "OPTIONS", "TRACE"], p = new Set(f), h = ["CONNECT", "TRACE", "TRACK"], g = new Set(h), A = ["audio", "audioworklet", "font", "image", "manifest", "paintworklet", "script", "style", "track", "video", "xslt", ""], _ = new Set(A), y = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (t3) {
        return Object.getPrototypeOf(t3).constructor;
      }
    })();
    let w;
    const S = globalThis.structuredClone ?? function(t3, e3 = void 0) {
      if (0 === arguments.length) throw new TypeError("missing argument");
      return w || (w = new n2()), w.port1.unref(), w.port2.unref(), w.port1.postMessage(t3, e3?.transfer), s2(w.port2).message;
    };
    t2.exports = { DOMException: y, structuredClone: S, subresource: A, forbiddenMethods: h, requestBodyHeader: ["content-encoding", "content-language", "content-location", "content-type", "content-length"], referrerPolicy: m, requestRedirect: ["follow", "manual", "error"], requestMode: ["navigate", "same-origin", "no-cors", "cors"], requestCredentials: ["omit", "same-origin", "include"], requestCache: ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"], redirectStatus: a, corsSafeListedMethods: i2, nullBodyStatus: [101, 204, 205, 304], safeMethods: f, badPorts: c, requestDuplex: ["half"], subresourceSet: _, badPortsSet: l, redirectStatusSet: u, corsSafeListedMethodsSet: o2, safeMethodsSet: p, forbiddenMethodsSet: g, referrerPolicySet: d };
  }