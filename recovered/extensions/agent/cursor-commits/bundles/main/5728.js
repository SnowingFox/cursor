// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5728 range:455711..468109
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5728: (e2, n2, a2) => {
    "use strict";
    const { redirectStatusSet: t2, referrerPolicySet: s2, badPortsSet: o2 } = a2(6687), { getGlobalOrigin: r2 } = a2(9523), { performance: i2 } = a2(2987), { isBlobLike: A, toUSVString: l, ReadableStreamFrom: c } = a2(9361), m = a2(2613), { isUint8Array: d } = a2(8253);
    let g, u = [];
    try {
      g = a2(6982);
      const e3 = ["sha256", "sha384", "sha512"];
      u = g.getHashes().filter((n3) => e3.includes(n3));
    } catch {
    }
    function E(e3) {
      const n3 = e3.urlList, a3 = n3.length;
      return 0 === a3 ? null : n3[a3 - 1].toString();
    }
    function p(e3) {
      return e3.urlList[e3.urlList.length - 1];
    }
    function T(e3) {
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
      for (let n3 = 0; n3 < e3.length; ++n3) if (!T(e3.charCodeAt(n3))) return false;
      return true;
    }
    function I(e3) {
      return !(e3.startsWith("	") || e3.startsWith(" ") || e3.endsWith("	") || e3.endsWith(" ")) && !(e3.includes("\0") || e3.includes("\r") || e3.includes("\n"));
    }
    function h(e3, n3) {
      return m(e3 instanceof URL), "file:" === e3.protocol || "about:" === e3.protocol || "blank:" === e3.protocol ? "no-referrer" : (e3.username = "", e3.password = "", e3.hash = "", n3 && (e3.pathname = "", e3.search = ""), e3);
    }
    function _(e3) {
      return e3 instanceof URL && ("about:blank" === e3.href || "about:srcdoc" === e3.href || ("data:" === e3.protocol || ("file:" === e3.protocol || (function(e4) {
        if (null == e4 || "null" === e4) return false;
        const n3 = new URL(e4);
        if ("https:" === n3.protocol || "wss:" === n3.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(n3.hostname) || "localhost" === n3.hostname || n3.hostname.includes("localhost.") || n3.hostname.endsWith(".localhost")) return true;
        return false;
      })(e3.origin))));
    }
    const C = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function f(e3) {
      const n3 = [];
      let a3 = true;
      for (const t3 of e3.split(" ")) {
        a3 = false;
        const e4 = C.exec(t3);
        if (null === e4 || void 0 === e4.groups || void 0 === e4.groups.algo) continue;
        const s3 = e4.groups.algo.toLowerCase();
        u.includes(s3) && n3.push(e4.groups);
      }
      return true === a3 ? "no metadata" : n3;
    }
    function B(e3, n3) {
      if (e3.length !== n3.length) return false;
      for (let a3 = 0; a3 < e3.length; ++a3) if (e3[a3] !== n3[a3]) {
        if ("+" === e3[a3] && "-" === n3[a3] || "/" === e3[a3] && "_" === n3[a3]) continue;
        return false;
      }
      return true;
    }
    function Q(e3, n3) {
      return e3.origin === n3.origin && "null" === e3.origin || e3.protocol === n3.protocol && e3.hostname === n3.hostname && e3.port === n3.port;
    }
    const y = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(y, null);
    const R = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let N = globalThis.ReadableStream;
    async function v(e3) {
      const n3 = [];
      let a3 = 0;
      for (; ; ) {
        const { done: t3, value: s3 } = await e3.read();
        if (t3) return Buffer.concat(n3, a3);
        if (!d(s3)) throw new TypeError("Received non-Uint8Array chunk");
        n3.push(s3), a3 += s3.length;
      }
    }
    function S(e3) {
      return "string" == typeof e3 ? e3.startsWith("https:") : "https:" === e3.protocol;
    }
    function D(e3) {
      m("protocol" in e3);
      const n3 = e3.protocol;
      return "http:" === n3 || "https:" === n3;
    }
    const w = Object.hasOwn || ((e3, n3) => Object.prototype.hasOwnProperty.call(e3, n3));
    e2.exports = { isAborted: function(e3) {
      return "aborted" === e3.controller.state;
    }, isCancelled: function(e3) {
      return "aborted" === e3.controller.state || "terminated" === e3.controller.state;
    }, createDeferredPromise: function() {
      let e3, n3;
      return { promise: new Promise((a3, t3) => {
        e3 = a3, n3 = t3;
      }), resolve: e3, reject: n3 };
    }, ReadableStreamFrom: c, toUSVString: l, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e3) {
    }, coarsenedSharedCurrentTime: function(e3) {
      return i2.now();
    }, determineRequestsReferrer: function(e3) {
      const n3 = e3.referrerPolicy;
      m(n3);
      let a3 = null;
      if ("client" === e3.referrer) {
        const e4 = r2();
        if (!e4 || "null" === e4.origin) return "no-referrer";
        a3 = new URL(e4);
      } else e3.referrer instanceof URL && (a3 = e3.referrer);
      let t3 = h(a3);
      const s3 = h(a3, true);
      t3.toString().length > 4096 && (t3 = s3);
      const o3 = Q(e3, t3), i3 = _(t3) && !_(e3.url);
      switch (n3) {
        case "origin":
          return null != s3 ? s3 : h(a3, true);
        case "unsafe-url":
          return t3;
        case "same-origin":
          return o3 ? s3 : "no-referrer";
        case "origin-when-cross-origin":
          return o3 ? t3 : s3;
        case "strict-origin-when-cross-origin": {
          const n4 = p(e3);
          return Q(t3, n4) ? t3 : _(t3) && !_(n4) ? "no-referrer" : s3;
        }
        default:
          return i3 ? "no-referrer" : s3;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(e3) {
      return { referrerPolicy: e3.referrerPolicy };
    }, appendFetchMetadata: function(e3) {
      let n3 = null;
      n3 = e3.mode, e3.headersList.set("sec-fetch-mode", n3);
    }, appendRequestOriginHeader: function(e3) {
      let n3 = e3.origin;
      if ("cors" === e3.responseTainting || "websocket" === e3.mode) n3 && e3.headersList.append("origin", n3);
      else if ("GET" !== e3.method && "HEAD" !== e3.method) {
        switch (e3.referrerPolicy) {
          case "no-referrer":
            n3 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            e3.origin && S(e3.origin) && !S(p(e3)) && (n3 = null);
            break;
          case "same-origin":
            Q(e3, p(e3)) || (n3 = null);
        }
        n3 && e3.headersList.append("origin", n3);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(e3) {
      return { startTime: e3.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: e3.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(e3, n3) {
      const { headersList: a3 } = n3, t3 = (a3.get("referrer-policy") ?? "").split(",");
      let o3 = "";
      if (t3.length > 0) for (let e4 = t3.length; 0 !== e4; e4--) {
        const n4 = t3[e4 - 1].trim();
        if (s2.has(n4)) {
          o3 = n4;
          break;
        }
      }
      "" !== o3 && (e3.referrerPolicy = o3);
    }, isValidHTTPToken: k, requestBadPort: function(e3) {
      const n3 = p(e3);
      return D(n3) && o2.has(n3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: p, responseURL: E, responseLocationURL: function(e3, n3) {
      if (!t2.has(e3.status)) return null;
      let a3 = e3.headersList.get("location");
      return null !== a3 && I(a3) && (a3 = new URL(a3, E(e3))), a3 && !a3.hash && (a3.hash = n3), a3;
    }, isBlobLike: A, isURLPotentiallyTrustworthy: _, isValidReasonPhrase: function(e3) {
      for (let n3 = 0; n3 < e3.length; ++n3) {
        const a3 = e3.charCodeAt(n3);
        if (!(9 === a3 || a3 >= 32 && a3 <= 126 || a3 >= 128 && a3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: Q, normalizeMethod: function(e3) {
      return y[e3.toLowerCase()] ?? e3;
    }, serializeJavascriptValueToJSONString: function(e3) {
      const n3 = JSON.stringify(e3);
      if (void 0 === n3) throw new TypeError("Value is not JSON serializable");
      return m("string" == typeof n3), n3;
    }, makeIterator: function(e3, n3, a3) {
      const t3 = { index: 0, kind: a3, target: e3 }, s3 = { next() {
        if (Object.getPrototypeOf(this) !== s3) throw new TypeError(`'next' called on an object that does not implement interface ${n3} Iterator.`);
        const { index: e4, kind: a4, target: o3 } = t3, r3 = o3();
        if (e4 >= r3.length) return { value: void 0, done: true };
        const i3 = r3[e4];
        return t3.index = e4 + 1, (function(e5, n4) {
          let a5;
          switch (n4) {
            case "key":
              a5 = e5[0];
              break;
            case "value":
              a5 = e5[1];
              break;
            case "key+value":
              a5 = e5;
          }
          return { value: a5, done: false };
        })(i3, a4);
      }, [Symbol.toStringTag]: `${n3} Iterator` };
      return Object.setPrototypeOf(s3, R), Object.setPrototypeOf({}, s3);
    }, isValidHeaderName: function(e3) {
      return k(e3);
    }, isValidHeaderValue: I, hasOwn: w, isErrorLike: function(e3) {
      return e3 instanceof Error || "Error" === e3?.constructor?.name || "DOMException" === e3?.constructor?.name;
    }, fullyReadBody: async function(e3, n3, a3) {
      const t3 = n3, s3 = a3;
      let o3;
      try {
        o3 = e3.stream.getReader();
      } catch (e4) {
        return void s3(e4);
      }
      try {
        t3(await v(o3));
      } catch (e4) {
        s3(e4);
      }
    }, bytesMatch: function(e3, n3) {
      if (void 0 === g) return true;
      const a3 = f(n3);
      if ("no metadata" === a3) return true;
      if (0 === a3.length) return true;
      const t3 = (function(e4) {
        let n4 = e4[0].algo;
        if ("5" === n4[3]) return n4;
        for (let a4 = 1; a4 < e4.length; ++a4) {
          const t4 = e4[a4];
          if ("5" === t4.algo[3]) {
            n4 = "sha512";
            break;
          }
          "3" !== n4[3] && ("3" === t4.algo[3] && (n4 = "sha384"));
        }
        return n4;
      })(a3), s3 = (function(e4, n4) {
        if (1 === e4.length) return e4;
        let a4 = 0;
        for (let t4 = 0; t4 < e4.length; ++t4) e4[t4].algo === n4 && (e4[a4++] = e4[t4]);
        return e4.length = a4, e4;
      })(a3, t3);
      for (const n4 of s3) {
        const a4 = n4.algo, t4 = n4.hash;
        let s4 = g.createHash(a4).update(e3).digest("base64");
        if ("=" === s4[s4.length - 1] && (s4 = "=" === s4[s4.length - 2] ? s4.slice(0, -2) : s4.slice(0, -1)), B(s4, t4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e3) {
      return N || (N = a2(3774).ReadableStream), e3 instanceof N || "ReadableStream" === e3[Symbol.toStringTag] && "function" == typeof e3.tee;
    }, readableStreamClose: function(e3) {
      try {
        e3.close();
      } catch (e4) {
        if (!e4.message.includes("Controller is already closed")) throw e4;
      }
    }, isomorphicEncode: function(e3) {
      for (let n3 = 0; n3 < e3.length; n3++) m(e3.charCodeAt(n3) <= 255);
      return e3;
    }, isomorphicDecode: function(e3) {
      return e3.length < 65535 ? String.fromCharCode(...e3) : e3.reduce((e4, n3) => e4 + String.fromCharCode(n3), "");
    }, urlIsLocal: function(e3) {
      m("protocol" in e3);
      const n3 = e3.protocol;
      return "about:" === n3 || "blob:" === n3 || "data:" === n3;
    }, urlHasHttpsScheme: S, urlIsHttpHttpsScheme: D, readAllBytes: v, normalizeMethodRecord: y, parseMetadata: f };
  }