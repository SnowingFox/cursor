// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6687 range:611670..614128
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6687: (e2, t2, A2) => {
    "use strict";
    const { MessageChannel: n2, receiveMessageOnPort: r2 } = A2(8167), o2 = ["GET", "HEAD", "POST"], s = new Set(o2), i = [301, 302, 303, 307, 308], a = new Set(i), c = ["1", "7", "9", "11", "13", "15", "17", "19", "20", "21", "22", "23", "25", "37", "42", "43", "53", "69", "77", "79", "87", "95", "101", "102", "103", "104", "109", "110", "111", "113", "115", "117", "119", "123", "135", "137", "139", "143", "161", "179", "389", "427", "465", "512", "513", "514", "515", "526", "530", "531", "532", "540", "548", "554", "556", "563", "587", "601", "636", "989", "990", "993", "995", "1719", "1720", "1723", "2049", "3659", "4045", "5060", "5061", "6000", "6566", "6665", "6666", "6667", "6668", "6669", "6697", "10080"], l = new Set(c), u = ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"], g = new Set(u), E = ["GET", "HEAD", "OPTIONS", "TRACE"], h = new Set(E), d = ["CONNECT", "TRACE", "TRACK"], I = new Set(d), B = ["audio", "audioworklet", "font", "image", "manifest", "paintworklet", "script", "style", "track", "video", "xslt", ""], Q = new Set(B), f = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (e3) {
        return Object.getPrototypeOf(e3).constructor;
      }
    })();
    let C;
    const p = globalThis.structuredClone ?? function(e3, t3 = void 0) {
      if (0 === arguments.length) throw new TypeError("missing argument");
      return C || (C = new n2()), C.port1.unref(), C.port2.unref(), C.port1.postMessage(e3, t3?.transfer), r2(C.port2).message;
    };
    e2.exports = { DOMException: f, structuredClone: p, subresource: B, forbiddenMethods: d, requestBodyHeader: ["content-encoding", "content-language", "content-location", "content-type", "content-length"], referrerPolicy: u, requestRedirect: ["follow", "manual", "error"], requestMode: ["navigate", "same-origin", "no-cors", "cors"], requestCredentials: ["omit", "same-origin", "include"], requestCache: ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"], redirectStatus: i, corsSafeListedMethods: o2, nullBodyStatus: [101, 204, 205, 304], safeMethods: E, badPorts: c, requestDuplex: ["half"], subresourceSet: Q, badPortsSet: l, redirectStatusSet: a, corsSafeListedMethodsSet: s, safeMethodsSet: h, forbiddenMethodsSet: I, referrerPolicySet: g };
  }