// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6687 range:500789..503252
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6687: (e2, n2, a2) => {
    "use strict";
    const { MessageChannel: t2, receiveMessageOnPort: s2 } = a2(8167), o2 = ["GET", "HEAD", "POST"], r2 = new Set(o2), i2 = [301, 302, 303, 307, 308], A = new Set(i2), l = ["1", "7", "9", "11", "13", "15", "17", "19", "20", "21", "22", "23", "25", "37", "42", "43", "53", "69", "77", "79", "87", "95", "101", "102", "103", "104", "109", "110", "111", "113", "115", "117", "119", "123", "135", "137", "139", "143", "161", "179", "389", "427", "465", "512", "513", "514", "515", "526", "530", "531", "532", "540", "548", "554", "556", "563", "587", "601", "636", "989", "990", "993", "995", "1719", "1720", "1723", "2049", "3659", "4045", "5060", "5061", "6000", "6566", "6665", "6666", "6667", "6668", "6669", "6697", "10080"], c = new Set(l), m = ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"], d = new Set(m), g = ["GET", "HEAD", "OPTIONS", "TRACE"], u = new Set(g), E = ["CONNECT", "TRACE", "TRACK"], p = new Set(E), T = ["audio", "audioworklet", "font", "image", "manifest", "paintworklet", "script", "style", "track", "video", "xslt", ""], k = new Set(T), I = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (e3) {
        return Object.getPrototypeOf(e3).constructor;
      }
    })();
    let h;
    const _ = globalThis.structuredClone ?? function(e3, n3 = void 0) {
      if (0 === arguments.length) throw new TypeError("missing argument");
      return h || (h = new t2()), h.port1.unref(), h.port2.unref(), h.port1.postMessage(e3, n3?.transfer), s2(h.port2).message;
    };
    e2.exports = { DOMException: I, structuredClone: _, subresource: T, forbiddenMethods: E, requestBodyHeader: ["content-encoding", "content-language", "content-location", "content-type", "content-length"], referrerPolicy: m, requestRedirect: ["follow", "manual", "error"], requestMode: ["navigate", "same-origin", "no-cors", "cors"], requestCredentials: ["omit", "same-origin", "include"], requestCache: ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"], redirectStatus: i2, corsSafeListedMethods: o2, nullBodyStatus: [101, 204, 205, 304], safeMethods: g, badPorts: l, requestDuplex: ["half"], subresourceSet: k, badPortsSet: c, redirectStatusSet: A, corsSafeListedMethodsSet: r2, safeMethodsSet: u, forbiddenMethodsSet: p, referrerPolicySet: d };
  }