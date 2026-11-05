// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8116 range:5102360..5114756
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8116: (t2, e2, r2) => {
    "use strict";
    const { redirectStatusSet: n2, referrerPolicySet: s2, badPortsSet: i2 } = r2(2955), { getGlobalOrigin: o2 } = r2(3967), { performance: a } = r2(2987), { isBlobLike: u, toUSVString: c, ReadableStreamFrom: l } = r2(3589), m = r2(2613), { isUint8Array: d } = r2(8253);
    let f, p = [];
    try {
      f = r2(6982);
      const t3 = ["sha256", "sha384", "sha512"];
      p = f.getHashes().filter((e3) => t3.includes(e3));
    } catch {
    }
    function h(t3) {
      const e3 = t3.urlList, r3 = e3.length;
      return 0 === r3 ? null : e3[r3 - 1].toString();
    }
    function g(t3) {
      return t3.urlList[t3.urlList.length - 1];
    }
    function A(t3) {
      switch (t3) {
        case 34:
        case 40:
        case 41:
        case 44:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 123:
        case 125:
          return false;
        default:
          return t3 >= 33 && t3 <= 126;
      }
    }
    function _(t3) {
      if (0 === t3.length) return false;
      for (let e3 = 0; e3 < t3.length; ++e3) if (!A(t3.charCodeAt(e3))) return false;
      return true;
    }
    function y(t3) {
      return !(t3.startsWith("	") || t3.startsWith(" ") || t3.endsWith("	") || t3.endsWith(" ")) && !(t3.includes("\0") || t3.includes("\r") || t3.includes("\n"));
    }
    function w(t3, e3) {
      return m(t3 instanceof URL), "file:" === t3.protocol || "about:" === t3.protocol || "blank:" === t3.protocol ? "no-referrer" : (t3.username = "", t3.password = "", t3.hash = "", e3 && (t3.pathname = "", t3.search = ""), t3);
    }
    function S(t3) {
      return t3 instanceof URL && ("about:blank" === t3.href || "about:srcdoc" === t3.href || ("data:" === t3.protocol || ("file:" === t3.protocol || (function(t4) {
        if (null == t4 || "null" === t4) return false;
        const e3 = new URL(t4);
        if ("https:" === e3.protocol || "wss:" === e3.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(e3.hostname) || "localhost" === e3.hostname || e3.hostname.includes("localhost.") || e3.hostname.endsWith(".localhost")) return true;
        return false;
      })(t3.origin))));
    }
    const J = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function B(t3) {
      const e3 = [];
      let r3 = true;
      for (const n3 of t3.split(" ")) {
        r3 = false;
        const t4 = J.exec(n3);
        if (null === t4 || void 0 === t4.groups || void 0 === t4.groups.algo) continue;
        const s3 = t4.groups.algo.toLowerCase();
        p.includes(s3) && e3.push(t4.groups);
      }
      return true === r3 ? "no metadata" : e3;
    }
    function E(t3, e3) {
      if (t3.length !== e3.length) return false;
      for (let r3 = 0; r3 < t3.length; ++r3) if (t3[r3] !== e3[r3]) {
        if ("+" === t3[r3] && "-" === e3[r3] || "/" === t3[r3] && "_" === e3[r3]) continue;
        return false;
      }
      return true;
    }
    function I(t3, e3) {
      return t3.origin === e3.origin && "null" === t3.origin || t3.protocol === e3.protocol && t3.hostname === e3.hostname && t3.port === e3.port;
    }
    const C = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(C, null);
    const b = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let k = globalThis.ReadableStream;
    async function v(t3) {
      const e3 = [];
      let r3 = 0;
      for (; ; ) {
        const { done: n3, value: s3 } = await t3.read();
        if (n3) return Buffer.concat(e3, r3);
        if (!d(s3)) throw new TypeError("Received non-Uint8Array chunk");
        e3.push(s3), r3 += s3.length;
      }
    }
    function q(t3) {
      return "string" == typeof t3 ? t3.startsWith("https:") : "https:" === t3.protocol;
    }
    function R(t3) {
      m("protocol" in t3);
      const e3 = t3.protocol;
      return "http:" === e3 || "https:" === e3;
    }
    const P = Object.hasOwn || ((t3, e3) => Object.prototype.hasOwnProperty.call(t3, e3));
    t2.exports = { isAborted: function(t3) {
      return "aborted" === t3.controller.state;
    }, isCancelled: function(t3) {
      return "aborted" === t3.controller.state || "terminated" === t3.controller.state;
    }, createDeferredPromise: function() {
      let t3, e3;
      return { promise: new Promise((r3, n3) => {
        t3 = r3, e3 = n3;
      }), resolve: t3, reject: e3 };
    }, ReadableStreamFrom: l, toUSVString: c, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(t3) {
    }, coarsenedSharedCurrentTime: function(t3) {
      return a.now();
    }, determineRequestsReferrer: function(t3) {
      const e3 = t3.referrerPolicy;
      m(e3);
      let r3 = null;
      if ("client" === t3.referrer) {
        const t4 = o2();
        if (!t4 || "null" === t4.origin) return "no-referrer";
        r3 = new URL(t4);
      } else t3.referrer instanceof URL && (r3 = t3.referrer);
      let n3 = w(r3);
      const s3 = w(r3, true);
      n3.toString().length > 4096 && (n3 = s3);
      const i3 = I(t3, n3), a2 = S(n3) && !S(t3.url);
      switch (e3) {
        case "origin":
          return null != s3 ? s3 : w(r3, true);
        case "unsafe-url":
          return n3;
        case "same-origin":
          return i3 ? s3 : "no-referrer";
        case "origin-when-cross-origin":
          return i3 ? n3 : s3;
        case "strict-origin-when-cross-origin": {
          const e4 = g(t3);
          return I(n3, e4) ? n3 : S(n3) && !S(e4) ? "no-referrer" : s3;
        }
        default:
          return a2 ? "no-referrer" : s3;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(t3) {
      return { referrerPolicy: t3.referrerPolicy };
    }, appendFetchMetadata: function(t3) {
      let e3 = null;
      e3 = t3.mode, t3.headersList.set("sec-fetch-mode", e3);
    }, appendRequestOriginHeader: function(t3) {
      let e3 = t3.origin;
      if ("cors" === t3.responseTainting || "websocket" === t3.mode) e3 && t3.headersList.append("origin", e3);
      else if ("GET" !== t3.method && "HEAD" !== t3.method) {
        switch (t3.referrerPolicy) {
          case "no-referrer":
            e3 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            t3.origin && q(t3.origin) && !q(g(t3)) && (e3 = null);
            break;
          case "same-origin":
            I(t3, g(t3)) || (e3 = null);
        }
        e3 && t3.headersList.append("origin", e3);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(t3) {
      return { startTime: t3.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: t3.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(t3, e3) {
      const { headersList: r3 } = e3, n3 = (r3.get("referrer-policy") ?? "").split(",");
      let i3 = "";
      if (n3.length > 0) for (let t4 = n3.length; 0 !== t4; t4--) {
        const e4 = n3[t4 - 1].trim();
        if (s2.has(e4)) {
          i3 = e4;
          break;
        }
      }
      "" !== i3 && (t3.referrerPolicy = i3);
    }, isValidHTTPToken: _, requestBadPort: function(t3) {
      const e3 = g(t3);
      return R(e3) && i2.has(e3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: g, responseURL: h, responseLocationURL: function(t3, e3) {
      if (!n2.has(t3.status)) return null;
      let r3 = t3.headersList.get("location");
      return null !== r3 && y(r3) && (r3 = new URL(r3, h(t3))), r3 && !r3.hash && (r3.hash = e3), r3;
    }, isBlobLike: u, isURLPotentiallyTrustworthy: S, isValidReasonPhrase: function(t3) {
      for (let e3 = 0; e3 < t3.length; ++e3) {
        const r3 = t3.charCodeAt(e3);
        if (!(9 === r3 || r3 >= 32 && r3 <= 126 || r3 >= 128 && r3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: I, normalizeMethod: function(t3) {
      return C[t3.toLowerCase()] ?? t3;
    }, serializeJavascriptValueToJSONString: function(t3) {
      const e3 = JSON.stringify(t3);
      if (void 0 === e3) throw new TypeError("Value is not JSON serializable");
      return m("string" == typeof e3), e3;
    }, makeIterator: function(t3, e3, r3) {
      const n3 = { index: 0, kind: r3, target: t3 }, s3 = { next() {
        if (Object.getPrototypeOf(this) !== s3) throw new TypeError(`'next' called on an object that does not implement interface ${e3} Iterator.`);
        const { index: t4, kind: r4, target: i3 } = n3, o3 = i3();
        if (t4 >= o3.length) return { value: void 0, done: true };
        const a2 = o3[t4];
        return n3.index = t4 + 1, (function(t5, e4) {
          let r5;
          switch (e4) {
            case "key":
              r5 = t5[0];
              break;
            case "value":
              r5 = t5[1];
              break;
            case "key+value":
              r5 = t5;
          }
          return { value: r5, done: false };
        })(a2, r4);
      }, [Symbol.toStringTag]: `${e3} Iterator` };
      return Object.setPrototypeOf(s3, b), Object.setPrototypeOf({}, s3);
    }, isValidHeaderName: function(t3) {
      return _(t3);
    }, isValidHeaderValue: y, hasOwn: P, isErrorLike: function(t3) {
      return t3 instanceof Error || "Error" === t3?.constructor?.name || "DOMException" === t3?.constructor?.name;
    }, fullyReadBody: async function(t3, e3, r3) {
      const n3 = e3, s3 = r3;
      let i3;
      try {
        i3 = t3.stream.getReader();
      } catch (t4) {
        return void s3(t4);
      }
      try {
        n3(await v(i3));
      } catch (t4) {
        s3(t4);
      }
    }, bytesMatch: function(t3, e3) {
      if (void 0 === f) return true;
      const r3 = B(e3);
      if ("no metadata" === r3) return true;
      if (0 === r3.length) return true;
      const n3 = (function(t4) {
        let e4 = t4[0].algo;
        if ("5" === e4[3]) return e4;
        for (let r4 = 1; r4 < t4.length; ++r4) {
          const n4 = t4[r4];
          if ("5" === n4.algo[3]) {
            e4 = "sha512";
            break;
          }
          "3" !== e4[3] && ("3" === n4.algo[3] && (e4 = "sha384"));
        }
        return e4;
      })(r3), s3 = (function(t4, e4) {
        if (1 === t4.length) return t4;
        let r4 = 0;
        for (let n4 = 0; n4 < t4.length; ++n4) t4[n4].algo === e4 && (t4[r4++] = t4[n4]);
        return t4.length = r4, t4;
      })(r3, n3);
      for (const e4 of s3) {
        const r4 = e4.algo, n4 = e4.hash;
        let s4 = f.createHash(r4).update(t3).digest("base64");
        if ("=" === s4[s4.length - 1] && (s4 = "=" === s4[s4.length - 2] ? s4.slice(0, -2) : s4.slice(0, -1)), E(s4, n4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(t3) {
      return k || (k = r2(3774).ReadableStream), t3 instanceof k || "ReadableStream" === t3[Symbol.toStringTag] && "function" == typeof t3.tee;
    }, readableStreamClose: function(t3) {
      try {
        t3.close();
      } catch (t4) {
        if (!t4.message.includes("Controller is already closed")) throw t4;
      }
    }, isomorphicEncode: function(t3) {
      for (let e3 = 0; e3 < t3.length; e3++) m(t3.charCodeAt(e3) <= 255);
      return t3;
    }, isomorphicDecode: function(t3) {
      return t3.length < 65535 ? String.fromCharCode(...t3) : t3.reduce((t4, e3) => t4 + String.fromCharCode(e3), "");
    }, urlIsLocal: function(t3) {
      m("protocol" in t3);
      const e3 = t3.protocol;
      return "about:" === e3 || "blob:" === e3 || "data:" === e3;
    }, urlHasHttpsScheme: q, urlIsHttpHttpsScheme: R, readAllBytes: v, normalizeMethodRecord: C, parseMetadata: B };
  }