// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5728 range:455248..467642
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5728: (e2, A2, t2) => {
    "use strict";
    const { redirectStatusSet: n2, referrerPolicySet: r2, badPortsSet: o2 } = t2(6687), { getGlobalOrigin: s } = t2(9523), { performance: a } = t2(2987), { isBlobLike: i, toUSVString: c, ReadableStreamFrom: l } = t2(9361), g = t2(2613), { isUint8Array: E } = t2(8253);
    let u, d = [];
    try {
      u = t2(6982);
      const e3 = ["sha256", "sha384", "sha512"];
      d = u.getHashes().filter((A3) => e3.includes(A3));
    } catch {
    }
    function I(e3) {
      const A3 = e3.urlList, t3 = A3.length;
      return 0 === t3 ? null : A3[t3 - 1].toString();
    }
    function h(e3) {
      return e3.urlList[e3.urlList.length - 1];
    }
    function Q(e3) {
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
    function m(e3) {
      if (0 === e3.length) return false;
      for (let A3 = 0; A3 < e3.length; ++A3) if (!Q(e3.charCodeAt(A3))) return false;
      return true;
    }
    function C(e3) {
      return !(e3.startsWith("	") || e3.startsWith(" ") || e3.endsWith("	") || e3.endsWith(" ")) && !(e3.includes("\0") || e3.includes("\r") || e3.includes("\n"));
    }
    function B(e3, A3) {
      return g(e3 instanceof URL), "file:" === e3.protocol || "about:" === e3.protocol || "blank:" === e3.protocol ? "no-referrer" : (e3.username = "", e3.password = "", e3.hash = "", A3 && (e3.pathname = "", e3.search = ""), e3);
    }
    function p(e3) {
      return e3 instanceof URL && ("about:blank" === e3.href || "about:srcdoc" === e3.href || ("data:" === e3.protocol || ("file:" === e3.protocol || (function(e4) {
        if (null == e4 || "null" === e4) return false;
        const A3 = new URL(e4);
        if ("https:" === A3.protocol || "wss:" === A3.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(A3.hostname) || "localhost" === A3.hostname || A3.hostname.includes("localhost.") || A3.hostname.endsWith(".localhost")) return true;
        return false;
      })(e3.origin))));
    }
    const f = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function y(e3) {
      const A3 = [];
      let t3 = true;
      for (const n3 of e3.split(" ")) {
        t3 = false;
        const e4 = f.exec(n3);
        if (null === e4 || void 0 === e4.groups || void 0 === e4.groups.algo) continue;
        const r3 = e4.groups.algo.toLowerCase();
        d.includes(r3) && A3.push(e4.groups);
      }
      return true === t3 ? "no metadata" : A3;
    }
    function T(e3, A3) {
      if (e3.length !== A3.length) return false;
      for (let t3 = 0; t3 < e3.length; ++t3) if (e3[t3] !== A3[t3]) {
        if ("+" === e3[t3] && "-" === A3[t3] || "/" === e3[t3] && "_" === A3[t3]) continue;
        return false;
      }
      return true;
    }
    function k(e3, A3) {
      return e3.origin === A3.origin && "null" === e3.origin || e3.protocol === A3.protocol && e3.hostname === A3.hostname && e3.port === A3.port;
    }
    const w = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(w, null);
    const N = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let D = globalThis.ReadableStream;
    async function R(e3) {
      const A3 = [];
      let t3 = 0;
      for (; ; ) {
        const { done: n3, value: r3 } = await e3.read();
        if (n3) return Buffer.concat(A3, t3);
        if (!E(r3)) throw new TypeError("Received non-Uint8Array chunk");
        A3.push(r3), t3 += r3.length;
      }
    }
    function S(e3) {
      return "string" == typeof e3 ? e3.startsWith("https:") : "https:" === e3.protocol;
    }
    function b(e3) {
      g("protocol" in e3);
      const A3 = e3.protocol;
      return "http:" === A3 || "https:" === A3;
    }
    const F = Object.hasOwn || ((e3, A3) => Object.prototype.hasOwnProperty.call(e3, A3));
    e2.exports = { isAborted: function(e3) {
      return "aborted" === e3.controller.state;
    }, isCancelled: function(e3) {
      return "aborted" === e3.controller.state || "terminated" === e3.controller.state;
    }, createDeferredPromise: function() {
      let e3, A3;
      return { promise: new Promise((t3, n3) => {
        e3 = t3, A3 = n3;
      }), resolve: e3, reject: A3 };
    }, ReadableStreamFrom: l, toUSVString: c, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e3) {
    }, coarsenedSharedCurrentTime: function(e3) {
      return a.now();
    }, determineRequestsReferrer: function(e3) {
      const A3 = e3.referrerPolicy;
      g(A3);
      let t3 = null;
      if ("client" === e3.referrer) {
        const e4 = s();
        if (!e4 || "null" === e4.origin) return "no-referrer";
        t3 = new URL(e4);
      } else e3.referrer instanceof URL && (t3 = e3.referrer);
      let n3 = B(t3);
      const r3 = B(t3, true);
      n3.toString().length > 4096 && (n3 = r3);
      const o3 = k(e3, n3), a2 = p(n3) && !p(e3.url);
      switch (A3) {
        case "origin":
          return null != r3 ? r3 : B(t3, true);
        case "unsafe-url":
          return n3;
        case "same-origin":
          return o3 ? r3 : "no-referrer";
        case "origin-when-cross-origin":
          return o3 ? n3 : r3;
        case "strict-origin-when-cross-origin": {
          const A4 = h(e3);
          return k(n3, A4) ? n3 : p(n3) && !p(A4) ? "no-referrer" : r3;
        }
        default:
          return a2 ? "no-referrer" : r3;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(e3) {
      return { referrerPolicy: e3.referrerPolicy };
    }, appendFetchMetadata: function(e3) {
      let A3 = null;
      A3 = e3.mode, e3.headersList.set("sec-fetch-mode", A3);
    }, appendRequestOriginHeader: function(e3) {
      let A3 = e3.origin;
      if ("cors" === e3.responseTainting || "websocket" === e3.mode) A3 && e3.headersList.append("origin", A3);
      else if ("GET" !== e3.method && "HEAD" !== e3.method) {
        switch (e3.referrerPolicy) {
          case "no-referrer":
            A3 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            e3.origin && S(e3.origin) && !S(h(e3)) && (A3 = null);
            break;
          case "same-origin":
            k(e3, h(e3)) || (A3 = null);
        }
        A3 && e3.headersList.append("origin", A3);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(e3) {
      return { startTime: e3.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: e3.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(e3, A3) {
      const { headersList: t3 } = A3, n3 = (t3.get("referrer-policy") ?? "").split(",");
      let o3 = "";
      if (n3.length > 0) for (let e4 = n3.length; 0 !== e4; e4--) {
        const A4 = n3[e4 - 1].trim();
        if (r2.has(A4)) {
          o3 = A4;
          break;
        }
      }
      "" !== o3 && (e3.referrerPolicy = o3);
    }, isValidHTTPToken: m, requestBadPort: function(e3) {
      const A3 = h(e3);
      return b(A3) && o2.has(A3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: h, responseURL: I, responseLocationURL: function(e3, A3) {
      if (!n2.has(e3.status)) return null;
      let t3 = e3.headersList.get("location");
      return null !== t3 && C(t3) && (t3 = new URL(t3, I(e3))), t3 && !t3.hash && (t3.hash = A3), t3;
    }, isBlobLike: i, isURLPotentiallyTrustworthy: p, isValidReasonPhrase: function(e3) {
      for (let A3 = 0; A3 < e3.length; ++A3) {
        const t3 = e3.charCodeAt(A3);
        if (!(9 === t3 || t3 >= 32 && t3 <= 126 || t3 >= 128 && t3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: k, normalizeMethod: function(e3) {
      return w[e3.toLowerCase()] ?? e3;
    }, serializeJavascriptValueToJSONString: function(e3) {
      const A3 = JSON.stringify(e3);
      if (void 0 === A3) throw new TypeError("Value is not JSON serializable");
      return g("string" == typeof A3), A3;
    }, makeIterator: function(e3, A3, t3) {
      const n3 = { index: 0, kind: t3, target: e3 }, r3 = { next() {
        if (Object.getPrototypeOf(this) !== r3) throw new TypeError(`'next' called on an object that does not implement interface ${A3} Iterator.`);
        const { index: e4, kind: t4, target: o3 } = n3, s2 = o3();
        if (e4 >= s2.length) return { value: void 0, done: true };
        const a2 = s2[e4];
        return n3.index = e4 + 1, (function(e5, A4) {
          let t5;
          switch (A4) {
            case "key":
              t5 = e5[0];
              break;
            case "value":
              t5 = e5[1];
              break;
            case "key+value":
              t5 = e5;
          }
          return { value: t5, done: false };
        })(a2, t4);
      }, [Symbol.toStringTag]: `${A3} Iterator` };
      return Object.setPrototypeOf(r3, N), Object.setPrototypeOf({}, r3);
    }, isValidHeaderName: function(e3) {
      return m(e3);
    }, isValidHeaderValue: C, hasOwn: F, isErrorLike: function(e3) {
      return e3 instanceof Error || "Error" === e3?.constructor?.name || "DOMException" === e3?.constructor?.name;
    }, fullyReadBody: async function(e3, A3, t3) {
      const n3 = A3, r3 = t3;
      let o3;
      try {
        o3 = e3.stream.getReader();
      } catch (e4) {
        return void r3(e4);
      }
      try {
        n3(await R(o3));
      } catch (e4) {
        r3(e4);
      }
    }, bytesMatch: function(e3, A3) {
      if (void 0 === u) return true;
      const t3 = y(A3);
      if ("no metadata" === t3) return true;
      if (0 === t3.length) return true;
      const n3 = (function(e4) {
        let A4 = e4[0].algo;
        if ("5" === A4[3]) return A4;
        for (let t4 = 1; t4 < e4.length; ++t4) {
          const n4 = e4[t4];
          if ("5" === n4.algo[3]) {
            A4 = "sha512";
            break;
          }
          "3" !== A4[3] && ("3" === n4.algo[3] && (A4 = "sha384"));
        }
        return A4;
      })(t3), r3 = (function(e4, A4) {
        if (1 === e4.length) return e4;
        let t4 = 0;
        for (let n4 = 0; n4 < e4.length; ++n4) e4[n4].algo === A4 && (e4[t4++] = e4[n4]);
        return e4.length = t4, e4;
      })(t3, n3);
      for (const A4 of r3) {
        const t4 = A4.algo, n4 = A4.hash;
        let r4 = u.createHash(t4).update(e3).digest("base64");
        if ("=" === r4[r4.length - 1] && (r4 = "=" === r4[r4.length - 2] ? r4.slice(0, -2) : r4.slice(0, -1)), T(r4, n4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e3) {
      return D || (D = t2(3774).ReadableStream), e3 instanceof D || "ReadableStream" === e3[Symbol.toStringTag] && "function" == typeof e3.tee;
    }, readableStreamClose: function(e3) {
      try {
        e3.close();
      } catch (e4) {
        if (!e4.message.includes("Controller is already closed")) throw e4;
      }
    }, isomorphicEncode: function(e3) {
      for (let A3 = 0; A3 < e3.length; A3++) g(e3.charCodeAt(A3) <= 255);
      return e3;
    }, isomorphicDecode: function(e3) {
      return e3.length < 65535 ? String.fromCharCode(...e3) : e3.reduce((e4, A3) => e4 + String.fromCharCode(A3), "");
    }, urlIsLocal: function(e3) {
      g("protocol" in e3);
      const A3 = e3.protocol;
      return "about:" === A3 || "blob:" === A3 || "data:" === A3;
    }, urlHasHttpsScheme: S, urlIsHttpHttpsScheme: b, readAllBytes: R, normalizeMethodRecord: w, parseMetadata: y };
  }