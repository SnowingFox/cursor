// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5728 range:486574..498968
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5728: (e2, n2, t2) => {
    "use strict";
    const { redirectStatusSet: a2, referrerPolicySet: s2, badPortsSet: o2 } = t2(6687), { getGlobalOrigin: r } = t2(9523), { performance: i } = t2(2987), { isBlobLike: A, toUSVString: c, ReadableStreamFrom: l } = t2(9361), d = t2(2613), { isUint8Array: m } = t2(8253);
    let u, g = [];
    try {
      u = t2(6982);
      const e3 = ["sha256", "sha384", "sha512"];
      g = u.getHashes().filter((n3) => e3.includes(n3));
    } catch {
    }
    function p(e3) {
      const n3 = e3.urlList, t3 = n3.length;
      return 0 === t3 ? null : n3[t3 - 1].toString();
    }
    function E(e3) {
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
    function T(e3) {
      if (0 === e3.length) return false;
      for (let n3 = 0; n3 < e3.length; ++n3) if (!h(e3.charCodeAt(n3))) return false;
      return true;
    }
    function k(e3) {
      return !(e3.startsWith("	") || e3.startsWith(" ") || e3.endsWith("	") || e3.endsWith(" ")) && !(e3.includes("\0") || e3.includes("\r") || e3.includes("\n"));
    }
    function f(e3, n3) {
      return d(e3 instanceof URL), "file:" === e3.protocol || "about:" === e3.protocol || "blank:" === e3.protocol ? "no-referrer" : (e3.username = "", e3.password = "", e3.hash = "", n3 && (e3.pathname = "", e3.search = ""), e3);
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
    const I = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function C(e3) {
      const n3 = [];
      let t3 = true;
      for (const a3 of e3.split(" ")) {
        t3 = false;
        const e4 = I.exec(a3);
        if (null === e4 || void 0 === e4.groups || void 0 === e4.groups.algo) continue;
        const s3 = e4.groups.algo.toLowerCase();
        g.includes(s3) && n3.push(e4.groups);
      }
      return true === t3 ? "no metadata" : n3;
    }
    function y(e3, n3) {
      if (e3.length !== n3.length) return false;
      for (let t3 = 0; t3 < e3.length; ++t3) if (e3[t3] !== n3[t3]) {
        if ("+" === e3[t3] && "-" === n3[t3] || "/" === e3[t3] && "_" === n3[t3]) continue;
        return false;
      }
      return true;
    }
    function B(e3, n3) {
      return e3.origin === n3.origin && "null" === e3.origin || e3.protocol === n3.protocol && e3.hostname === n3.hostname && e3.port === n3.port;
    }
    const Q = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(Q, null);
    const v = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let R = globalThis.ReadableStream;
    async function N(e3) {
      const n3 = [];
      let t3 = 0;
      for (; ; ) {
        const { done: a3, value: s3 } = await e3.read();
        if (a3) return Buffer.concat(n3, t3);
        if (!m(s3)) throw new TypeError("Received non-Uint8Array chunk");
        n3.push(s3), t3 += s3.length;
      }
    }
    function S(e3) {
      return "string" == typeof e3 ? e3.startsWith("https:") : "https:" === e3.protocol;
    }
    function w(e3) {
      d("protocol" in e3);
      const n3 = e3.protocol;
      return "http:" === n3 || "https:" === n3;
    }
    const b = Object.hasOwn || ((e3, n3) => Object.prototype.hasOwnProperty.call(e3, n3));
    e2.exports = { isAborted: function(e3) {
      return "aborted" === e3.controller.state;
    }, isCancelled: function(e3) {
      return "aborted" === e3.controller.state || "terminated" === e3.controller.state;
    }, createDeferredPromise: function() {
      let e3, n3;
      return { promise: new Promise((t3, a3) => {
        e3 = t3, n3 = a3;
      }), resolve: e3, reject: n3 };
    }, ReadableStreamFrom: l, toUSVString: c, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e3) {
    }, coarsenedSharedCurrentTime: function(e3) {
      return i.now();
    }, determineRequestsReferrer: function(e3) {
      const n3 = e3.referrerPolicy;
      d(n3);
      let t3 = null;
      if ("client" === e3.referrer) {
        const e4 = r();
        if (!e4 || "null" === e4.origin) return "no-referrer";
        t3 = new URL(e4);
      } else e3.referrer instanceof URL && (t3 = e3.referrer);
      let a3 = f(t3);
      const s3 = f(t3, true);
      a3.toString().length > 4096 && (a3 = s3);
      const o3 = B(e3, a3), i2 = _(a3) && !_(e3.url);
      switch (n3) {
        case "origin":
          return null != s3 ? s3 : f(t3, true);
        case "unsafe-url":
          return a3;
        case "same-origin":
          return o3 ? s3 : "no-referrer";
        case "origin-when-cross-origin":
          return o3 ? a3 : s3;
        case "strict-origin-when-cross-origin": {
          const n4 = E(e3);
          return B(a3, n4) ? a3 : _(a3) && !_(n4) ? "no-referrer" : s3;
        }
        default:
          return i2 ? "no-referrer" : s3;
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
            e3.origin && S(e3.origin) && !S(E(e3)) && (n3 = null);
            break;
          case "same-origin":
            B(e3, E(e3)) || (n3 = null);
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
      const { headersList: t3 } = n3, a3 = (t3.get("referrer-policy") ?? "").split(",");
      let o3 = "";
      if (a3.length > 0) for (let e4 = a3.length; 0 !== e4; e4--) {
        const n4 = a3[e4 - 1].trim();
        if (s2.has(n4)) {
          o3 = n4;
          break;
        }
      }
      "" !== o3 && (e3.referrerPolicy = o3);
    }, isValidHTTPToken: T, requestBadPort: function(e3) {
      const n3 = E(e3);
      return w(n3) && o2.has(n3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: E, responseURL: p, responseLocationURL: function(e3, n3) {
      if (!a2.has(e3.status)) return null;
      let t3 = e3.headersList.get("location");
      return null !== t3 && k(t3) && (t3 = new URL(t3, p(e3))), t3 && !t3.hash && (t3.hash = n3), t3;
    }, isBlobLike: A, isURLPotentiallyTrustworthy: _, isValidReasonPhrase: function(e3) {
      for (let n3 = 0; n3 < e3.length; ++n3) {
        const t3 = e3.charCodeAt(n3);
        if (!(9 === t3 || t3 >= 32 && t3 <= 126 || t3 >= 128 && t3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: B, normalizeMethod: function(e3) {
      return Q[e3.toLowerCase()] ?? e3;
    }, serializeJavascriptValueToJSONString: function(e3) {
      const n3 = JSON.stringify(e3);
      if (void 0 === n3) throw new TypeError("Value is not JSON serializable");
      return d("string" == typeof n3), n3;
    }, makeIterator: function(e3, n3, t3) {
      const a3 = { index: 0, kind: t3, target: e3 }, s3 = { next() {
        if (Object.getPrototypeOf(this) !== s3) throw new TypeError(`'next' called on an object that does not implement interface ${n3} Iterator.`);
        const { index: e4, kind: t4, target: o3 } = a3, r2 = o3();
        if (e4 >= r2.length) return { value: void 0, done: true };
        const i2 = r2[e4];
        return a3.index = e4 + 1, (function(e5, n4) {
          let t5;
          switch (n4) {
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
        })(i2, t4);
      }, [Symbol.toStringTag]: `${n3} Iterator` };
      return Object.setPrototypeOf(s3, v), Object.setPrototypeOf({}, s3);
    }, isValidHeaderName: function(e3) {
      return T(e3);
    }, isValidHeaderValue: k, hasOwn: b, isErrorLike: function(e3) {
      return e3 instanceof Error || "Error" === e3?.constructor?.name || "DOMException" === e3?.constructor?.name;
    }, fullyReadBody: async function(e3, n3, t3) {
      const a3 = n3, s3 = t3;
      let o3;
      try {
        o3 = e3.stream.getReader();
      } catch (e4) {
        return void s3(e4);
      }
      try {
        a3(await N(o3));
      } catch (e4) {
        s3(e4);
      }
    }, bytesMatch: function(e3, n3) {
      if (void 0 === u) return true;
      const t3 = C(n3);
      if ("no metadata" === t3) return true;
      if (0 === t3.length) return true;
      const a3 = (function(e4) {
        let n4 = e4[0].algo;
        if ("5" === n4[3]) return n4;
        for (let t4 = 1; t4 < e4.length; ++t4) {
          const a4 = e4[t4];
          if ("5" === a4.algo[3]) {
            n4 = "sha512";
            break;
          }
          "3" !== n4[3] && ("3" === a4.algo[3] && (n4 = "sha384"));
        }
        return n4;
      })(t3), s3 = (function(e4, n4) {
        if (1 === e4.length) return e4;
        let t4 = 0;
        for (let a4 = 0; a4 < e4.length; ++a4) e4[a4].algo === n4 && (e4[t4++] = e4[a4]);
        return e4.length = t4, e4;
      })(t3, a3);
      for (const n4 of s3) {
        const t4 = n4.algo, a4 = n4.hash;
        let s4 = u.createHash(t4).update(e3).digest("base64");
        if ("=" === s4[s4.length - 1] && (s4 = "=" === s4[s4.length - 2] ? s4.slice(0, -2) : s4.slice(0, -1)), y(s4, a4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e3) {
      return R || (R = t2(3774).ReadableStream), e3 instanceof R || "ReadableStream" === e3[Symbol.toStringTag] && "function" == typeof e3.tee;
    }, readableStreamClose: function(e3) {
      try {
        e3.close();
      } catch (e4) {
        if (!e4.message.includes("Controller is already closed")) throw e4;
      }
    }, isomorphicEncode: function(e3) {
      for (let n3 = 0; n3 < e3.length; n3++) d(e3.charCodeAt(n3) <= 255);
      return e3;
    }, isomorphicDecode: function(e3) {
      return e3.length < 65535 ? String.fromCharCode(...e3) : e3.reduce((e4, n3) => e4 + String.fromCharCode(n3), "");
    }, urlIsLocal: function(e3) {
      d("protocol" in e3);
      const n3 = e3.protocol;
      return "about:" === n3 || "blob:" === n3 || "data:" === n3;
    }, urlHasHttpsScheme: S, urlIsHttpHttpsScheme: w, readAllBytes: N, normalizeMethodRecord: Q, parseMetadata: C };
  }