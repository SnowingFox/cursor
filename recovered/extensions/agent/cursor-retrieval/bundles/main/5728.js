// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5728 range:762106..774504
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5728: (e2, a2, n2) => {
    "use strict";
    const { redirectStatusSet: t2, referrerPolicySet: s2, badPortsSet: o2 } = n2(6687), { getGlobalOrigin: r2 } = n2(9523), { performance: i2 } = n2(2987), { isBlobLike: l, toUSVString: d, ReadableStreamFrom: m } = n2(9361), c = n2(2613), { isUint8Array: p } = n2(8253);
    let A, u = [];
    try {
      A = n2(6982);
      const e3 = ["sha256", "sha384", "sha512"];
      u = A.getHashes().filter((a3) => e3.includes(a3));
    } catch {
    }
    function g(e3) {
      const a3 = e3.urlList, n3 = a3.length;
      return 0 === n3 ? null : a3[n3 - 1].toString();
    }
    function T(e3) {
      return e3.urlList[e3.urlList.length - 1];
    }
    function h(e3) {
      switch (e3) {
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
          return e3 >= 33 && e3 <= 126;
      }
    }
    function k(e3) {
      if (0 === e3.length) return false;
      for (let a3 = 0; a3 < e3.length; ++a3) if (!h(e3.charCodeAt(a3))) return false;
      return true;
    }
    function _(e3) {
      return !(e3.startsWith("	") || e3.startsWith(" ") || e3.endsWith("	") || e3.endsWith(" ")) && !(e3.includes("\0") || e3.includes("\r") || e3.includes("\n"));
    }
    function E(e3, a3) {
      return c(e3 instanceof URL), "file:" === e3.protocol || "about:" === e3.protocol || "blank:" === e3.protocol ? "no-referrer" : (e3.username = "", e3.password = "", e3.hash = "", a3 && (e3.pathname = "", e3.search = ""), e3);
    }
    function f(e3) {
      return e3 instanceof URL && ("about:blank" === e3.href || "about:srcdoc" === e3.href || ("data:" === e3.protocol || ("file:" === e3.protocol || (function(e4) {
        if (null == e4 || "null" === e4) return false;
        const a3 = new URL(e4);
        if ("https:" === a3.protocol || "wss:" === a3.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(a3.hostname) || "localhost" === a3.hostname || a3.hostname.includes("localhost.") || a3.hostname.endsWith(".localhost")) return true;
        return false;
      })(e3.origin))));
    }
    const C = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function I(e3) {
      const a3 = [];
      let n3 = true;
      for (const t3 of e3.split(" ")) {
        n3 = false;
        const e4 = C.exec(t3);
        if (null === e4 || void 0 === e4.groups || void 0 === e4.groups.algo) continue;
        const s3 = e4.groups.algo.toLowerCase();
        u.includes(s3) && a3.push(e4.groups);
      }
      return true === n3 ? "no metadata" : a3;
    }
    function v(e3, a3) {
      if (e3.length !== a3.length) return false;
      for (let n3 = 0; n3 < e3.length; ++n3) if (e3[n3] !== a3[n3]) {
        if ("+" === e3[n3] && "-" === a3[n3] || "/" === e3[n3] && "_" === a3[n3]) continue;
        return false;
      }
      return true;
    }
    function y(e3, a3) {
      return e3.origin === a3.origin && "null" === e3.origin || e3.protocol === a3.protocol && e3.hostname === a3.hostname && e3.port === a3.port;
    }
    const S = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(S, null);
    const R = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let N = globalThis.ReadableStream;
    async function B(e3) {
      const a3 = [];
      let n3 = 0;
      for (; ; ) {
        const { done: t3, value: s3 } = await e3.read();
        if (t3) return Buffer.concat(a3, n3);
        if (!p(s3)) throw new TypeError("Received non-Uint8Array chunk");
        a3.push(s3), n3 += s3.length;
      }
    }
    function w(e3) {
      return "string" == typeof e3 ? e3.startsWith("https:") : "https:" === e3.protocol;
    }
    function b(e3) {
      c("protocol" in e3);
      const a3 = e3.protocol;
      return "http:" === a3 || "https:" === a3;
    }
    const Q = Object.hasOwn || ((e3, a3) => Object.prototype.hasOwnProperty.call(e3, a3));
    e2.exports = { isAborted: function(e3) {
      return "aborted" === e3.controller.state;
    }, isCancelled: function(e3) {
      return "aborted" === e3.controller.state || "terminated" === e3.controller.state;
    }, createDeferredPromise: function() {
      let e3, a3;
      return { promise: new Promise((n3, t3) => {
        e3 = n3, a3 = t3;
      }), resolve: e3, reject: a3 };
    }, ReadableStreamFrom: m, toUSVString: d, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e3) {
    }, coarsenedSharedCurrentTime: function(e3) {
      return i2.now();
    }, determineRequestsReferrer: function(e3) {
      const a3 = e3.referrerPolicy;
      c(a3);
      let n3 = null;
      if ("client" === e3.referrer) {
        const e4 = r2();
        if (!e4 || "null" === e4.origin) return "no-referrer";
        n3 = new URL(e4);
      } else e3.referrer instanceof URL && (n3 = e3.referrer);
      let t3 = E(n3);
      const s3 = E(n3, true);
      t3.toString().length > 4096 && (t3 = s3);
      const o3 = y(e3, t3), i3 = f(t3) && !f(e3.url);
      switch (a3) {
        case "origin":
          return null != s3 ? s3 : E(n3, true);
        case "unsafe-url":
          return t3;
        case "same-origin":
          return o3 ? s3 : "no-referrer";
        case "origin-when-cross-origin":
          return o3 ? t3 : s3;
        case "strict-origin-when-cross-origin": {
          const a4 = T(e3);
          return y(t3, a4) ? t3 : f(t3) && !f(a4) ? "no-referrer" : s3;
        }
        default:
          return i3 ? "no-referrer" : s3;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(e3) {
      return { referrerPolicy: e3.referrerPolicy };
    }, appendFetchMetadata: function(e3) {
      let a3 = null;
      a3 = e3.mode, e3.headersList.set("sec-fetch-mode", a3);
    }, appendRequestOriginHeader: function(e3) {
      let a3 = e3.origin;
      if ("cors" === e3.responseTainting || "websocket" === e3.mode) a3 && e3.headersList.append("origin", a3);
      else if ("GET" !== e3.method && "HEAD" !== e3.method) {
        switch (e3.referrerPolicy) {
          case "no-referrer":
            a3 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            e3.origin && w(e3.origin) && !w(T(e3)) && (a3 = null);
            break;
          case "same-origin":
            y(e3, T(e3)) || (a3 = null);
        }
        a3 && e3.headersList.append("origin", a3);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(e3) {
      return { startTime: e3.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: e3.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(e3, a3) {
      const { headersList: n3 } = a3, t3 = (n3.get("referrer-policy") ?? "").split(",");
      let o3 = "";
      if (t3.length > 0) for (let e4 = t3.length; 0 !== e4; e4--) {
        const a4 = t3[e4 - 1].trim();
        if (s2.has(a4)) {
          o3 = a4;
          break;
        }
      }
      "" !== o3 && (e3.referrerPolicy = o3);
    }, isValidHTTPToken: k, requestBadPort: function(e3) {
      const a3 = T(e3);
      return b(a3) && o2.has(a3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: T, responseURL: g, responseLocationURL: function(e3, a3) {
      if (!t2.has(e3.status)) return null;
      let n3 = e3.headersList.get("location");
      return null !== n3 && _(n3) && (n3 = new URL(n3, g(e3))), n3 && !n3.hash && (n3.hash = a3), n3;
    }, isBlobLike: l, isURLPotentiallyTrustworthy: f, isValidReasonPhrase: function(e3) {
      for (let a3 = 0; a3 < e3.length; ++a3) {
        const n3 = e3.charCodeAt(a3);
        if (!(9 === n3 || n3 >= 32 && n3 <= 126 || n3 >= 128 && n3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: y, normalizeMethod: function(e3) {
      return S[e3.toLowerCase()] ?? e3;
    }, serializeJavascriptValueToJSONString: function(e3) {
      const a3 = JSON.stringify(e3);
      if (void 0 === a3) throw new TypeError("Value is not JSON serializable");
      return c("string" == typeof a3), a3;
    }, makeIterator: function(e3, a3, n3) {
      const t3 = { index: 0, kind: n3, target: e3 }, s3 = { next() {
        if (Object.getPrototypeOf(this) !== s3) throw new TypeError(`'next' called on an object that does not implement interface ${a3} Iterator.`);
        const { index: e4, kind: n4, target: o3 } = t3, r3 = o3();
        if (e4 >= r3.length) return { value: void 0, done: true };
        const i3 = r3[e4];
        return t3.index = e4 + 1, (function(e5, a4) {
          let n5;
          switch (a4) {
            case "key":
              n5 = e5[0];
              break;
            case "value":
              n5 = e5[1];
              break;
            case "key+value":
              n5 = e5;
          }
          return { value: n5, done: false };
        })(i3, n4);
      }, [Symbol.toStringTag]: `${a3} Iterator` };
      return Object.setPrototypeOf(s3, R), Object.setPrototypeOf({}, s3);
    }, isValidHeaderName: function(e3) {
      return k(e3);
    }, isValidHeaderValue: _, hasOwn: Q, isErrorLike: function(e3) {
      return e3 instanceof Error || "Error" === e3?.constructor?.name || "DOMException" === e3?.constructor?.name;
    }, fullyReadBody: async function(e3, a3, n3) {
      const t3 = a3, s3 = n3;
      let o3;
      try {
        o3 = e3.stream.getReader();
      } catch (e4) {
        return void s3(e4);
      }
      try {
        t3(await B(o3));
      } catch (e4) {
        s3(e4);
      }
    }, bytesMatch: function(e3, a3) {
      if (void 0 === A) return true;
      const n3 = I(a3);
      if ("no metadata" === n3) return true;
      if (0 === n3.length) return true;
      const t3 = (function(e4) {
        let a4 = e4[0].algo;
        if ("5" === a4[3]) return a4;
        for (let n4 = 1; n4 < e4.length; ++n4) {
          const t4 = e4[n4];
          if ("5" === t4.algo[3]) {
            a4 = "sha512";
            break;
          }
          "3" !== a4[3] && ("3" === t4.algo[3] && (a4 = "sha384"));
        }
        return a4;
      })(n3), s3 = (function(e4, a4) {
        if (1 === e4.length) return e4;
        let n4 = 0;
        for (let t4 = 0; t4 < e4.length; ++t4) e4[t4].algo === a4 && (e4[n4++] = e4[t4]);
        return e4.length = n4, e4;
      })(n3, t3);
      for (const a4 of s3) {
        const n4 = a4.algo, t4 = a4.hash;
        let s4 = A.createHash(n4).update(e3).digest("base64");
        if ("=" === s4[s4.length - 1] && (s4 = "=" === s4[s4.length - 2] ? s4.slice(0, -2) : s4.slice(0, -1)), v(s4, t4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e3) {
      return N || (N = n2(3774).ReadableStream), e3 instanceof N || "ReadableStream" === e3[Symbol.toStringTag] && "function" == typeof e3.tee;
    }, readableStreamClose: function(e3) {
      try {
        e3.close();
      } catch (e4) {
        if (!e4.message.includes("Controller is already closed")) throw e4;
      }
    }, isomorphicEncode: function(e3) {
      for (let a3 = 0; a3 < e3.length; a3++) c(e3.charCodeAt(a3) <= 255);
      return e3;
    }, isomorphicDecode: function(e3) {
      return e3.length < 65535 ? String.fromCharCode(...e3) : e3.reduce((e4, a3) => e4 + String.fromCharCode(a3), "");
    }, urlIsLocal: function(e3) {
      c("protocol" in e3);
      const a3 = e3.protocol;
      return "about:" === a3 || "blob:" === a3 || "data:" === a3;
    }, urlHasHttpsScheme: w, urlIsHttpHttpsScheme: b, readAllBytes: B, normalizeMethodRecord: S, parseMetadata: I };
  }