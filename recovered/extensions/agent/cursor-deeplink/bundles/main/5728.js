// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5728 range:556742..569136
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5728: (e2, t2, A2) => {
    "use strict";
    const { redirectStatusSet: n2, referrerPolicySet: r2, badPortsSet: o2 } = A2(6687), { getGlobalOrigin: s } = A2(9523), { performance: i } = A2(2987), { isBlobLike: a, toUSVString: c, ReadableStreamFrom: l } = A2(9361), u = A2(2613), { isUint8Array: g } = A2(8253);
    let E, h = [];
    try {
      E = A2(6982);
      const e3 = ["sha256", "sha384", "sha512"];
      h = E.getHashes().filter((t3) => e3.includes(t3));
    } catch {
    }
    function d(e3) {
      const t3 = e3.urlList, A3 = t3.length;
      return 0 === A3 ? null : t3[A3 - 1].toString();
    }
    function I(e3) {
      return e3.urlList[e3.urlList.length - 1];
    }
    function B(e3) {
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
    function Q(e3) {
      if (0 === e3.length) return false;
      for (let t3 = 0; t3 < e3.length; ++t3) if (!B(e3.charCodeAt(t3))) return false;
      return true;
    }
    function f(e3) {
      return !(e3.startsWith("	") || e3.startsWith(" ") || e3.endsWith("	") || e3.endsWith(" ")) && !(e3.includes("\0") || e3.includes("\r") || e3.includes("\n"));
    }
    function C(e3, t3) {
      return u(e3 instanceof URL), "file:" === e3.protocol || "about:" === e3.protocol || "blank:" === e3.protocol ? "no-referrer" : (e3.username = "", e3.password = "", e3.hash = "", t3 && (e3.pathname = "", e3.search = ""), e3);
    }
    function p(e3) {
      return e3 instanceof URL && ("about:blank" === e3.href || "about:srcdoc" === e3.href || ("data:" === e3.protocol || ("file:" === e3.protocol || (function(e4) {
        if (null == e4 || "null" === e4) return false;
        const t3 = new URL(e4);
        if ("https:" === t3.protocol || "wss:" === t3.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(t3.hostname) || "localhost" === t3.hostname || t3.hostname.includes("localhost.") || t3.hostname.endsWith(".localhost")) return true;
        return false;
      })(e3.origin))));
    }
    const m = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function y(e3) {
      const t3 = [];
      let A3 = true;
      for (const n3 of e3.split(" ")) {
        A3 = false;
        const e4 = m.exec(n3);
        if (null === e4 || void 0 === e4.groups || void 0 === e4.groups.algo) continue;
        const r3 = e4.groups.algo.toLowerCase();
        h.includes(r3) && t3.push(e4.groups);
      }
      return true === A3 ? "no metadata" : t3;
    }
    function w(e3, t3) {
      if (e3.length !== t3.length) return false;
      for (let A3 = 0; A3 < e3.length; ++A3) if (e3[A3] !== t3[A3]) {
        if ("+" === e3[A3] && "-" === t3[A3] || "/" === e3[A3] && "_" === t3[A3]) continue;
        return false;
      }
      return true;
    }
    function k(e3, t3) {
      return e3.origin === t3.origin && "null" === e3.origin || e3.protocol === t3.protocol && e3.hostname === t3.hostname && e3.port === t3.port;
    }
    const b = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(b, null);
    const N = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let T = globalThis.ReadableStream;
    async function D(e3) {
      const t3 = [];
      let A3 = 0;
      for (; ; ) {
        const { done: n3, value: r3 } = await e3.read();
        if (n3) return Buffer.concat(t3, A3);
        if (!g(r3)) throw new TypeError("Received non-Uint8Array chunk");
        t3.push(r3), A3 += r3.length;
      }
    }
    function S(e3) {
      return "string" == typeof e3 ? e3.startsWith("https:") : "https:" === e3.protocol;
    }
    function R(e3) {
      u("protocol" in e3);
      const t3 = e3.protocol;
      return "http:" === t3 || "https:" === t3;
    }
    const F = Object.hasOwn || ((e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3));
    e2.exports = { isAborted: function(e3) {
      return "aborted" === e3.controller.state;
    }, isCancelled: function(e3) {
      return "aborted" === e3.controller.state || "terminated" === e3.controller.state;
    }, createDeferredPromise: function() {
      let e3, t3;
      return { promise: new Promise((A3, n3) => {
        e3 = A3, t3 = n3;
      }), resolve: e3, reject: t3 };
    }, ReadableStreamFrom: l, toUSVString: c, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e3) {
    }, coarsenedSharedCurrentTime: function(e3) {
      return i.now();
    }, determineRequestsReferrer: function(e3) {
      const t3 = e3.referrerPolicy;
      u(t3);
      let A3 = null;
      if ("client" === e3.referrer) {
        const e4 = s();
        if (!e4 || "null" === e4.origin) return "no-referrer";
        A3 = new URL(e4);
      } else e3.referrer instanceof URL && (A3 = e3.referrer);
      let n3 = C(A3);
      const r3 = C(A3, true);
      n3.toString().length > 4096 && (n3 = r3);
      const o3 = k(e3, n3), i2 = p(n3) && !p(e3.url);
      switch (t3) {
        case "origin":
          return null != r3 ? r3 : C(A3, true);
        case "unsafe-url":
          return n3;
        case "same-origin":
          return o3 ? r3 : "no-referrer";
        case "origin-when-cross-origin":
          return o3 ? n3 : r3;
        case "strict-origin-when-cross-origin": {
          const t4 = I(e3);
          return k(n3, t4) ? n3 : p(n3) && !p(t4) ? "no-referrer" : r3;
        }
        default:
          return i2 ? "no-referrer" : r3;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(e3) {
      return { referrerPolicy: e3.referrerPolicy };
    }, appendFetchMetadata: function(e3) {
      let t3 = null;
      t3 = e3.mode, e3.headersList.set("sec-fetch-mode", t3);
    }, appendRequestOriginHeader: function(e3) {
      let t3 = e3.origin;
      if ("cors" === e3.responseTainting || "websocket" === e3.mode) t3 && e3.headersList.append("origin", t3);
      else if ("GET" !== e3.method && "HEAD" !== e3.method) {
        switch (e3.referrerPolicy) {
          case "no-referrer":
            t3 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            e3.origin && S(e3.origin) && !S(I(e3)) && (t3 = null);
            break;
          case "same-origin":
            k(e3, I(e3)) || (t3 = null);
        }
        t3 && e3.headersList.append("origin", t3);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(e3) {
      return { startTime: e3.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: e3.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(e3, t3) {
      const { headersList: A3 } = t3, n3 = (A3.get("referrer-policy") ?? "").split(",");
      let o3 = "";
      if (n3.length > 0) for (let e4 = n3.length; 0 !== e4; e4--) {
        const t4 = n3[e4 - 1].trim();
        if (r2.has(t4)) {
          o3 = t4;
          break;
        }
      }
      "" !== o3 && (e3.referrerPolicy = o3);
    }, isValidHTTPToken: Q, requestBadPort: function(e3) {
      const t3 = I(e3);
      return R(t3) && o2.has(t3.port) ? "blocked" : "allowed";
    }, requestCurrentURL: I, responseURL: d, responseLocationURL: function(e3, t3) {
      if (!n2.has(e3.status)) return null;
      let A3 = e3.headersList.get("location");
      return null !== A3 && f(A3) && (A3 = new URL(A3, d(e3))), A3 && !A3.hash && (A3.hash = t3), A3;
    }, isBlobLike: a, isURLPotentiallyTrustworthy: p, isValidReasonPhrase: function(e3) {
      for (let t3 = 0; t3 < e3.length; ++t3) {
        const A3 = e3.charCodeAt(t3);
        if (!(9 === A3 || A3 >= 32 && A3 <= 126 || A3 >= 128 && A3 <= 255)) return false;
      }
      return true;
    }, sameOrigin: k, normalizeMethod: function(e3) {
      return b[e3.toLowerCase()] ?? e3;
    }, serializeJavascriptValueToJSONString: function(e3) {
      const t3 = JSON.stringify(e3);
      if (void 0 === t3) throw new TypeError("Value is not JSON serializable");
      return u("string" == typeof t3), t3;
    }, makeIterator: function(e3, t3, A3) {
      const n3 = { index: 0, kind: A3, target: e3 }, r3 = { next() {
        if (Object.getPrototypeOf(this) !== r3) throw new TypeError(`'next' called on an object that does not implement interface ${t3} Iterator.`);
        const { index: e4, kind: A4, target: o3 } = n3, s2 = o3();
        if (e4 >= s2.length) return { value: void 0, done: true };
        const i2 = s2[e4];
        return n3.index = e4 + 1, (function(e5, t4) {
          let A5;
          switch (t4) {
            case "key":
              A5 = e5[0];
              break;
            case "value":
              A5 = e5[1];
              break;
            case "key+value":
              A5 = e5;
          }
          return { value: A5, done: false };
        })(i2, A4);
      }, [Symbol.toStringTag]: `${t3} Iterator` };
      return Object.setPrototypeOf(r3, N), Object.setPrototypeOf({}, r3);
    }, isValidHeaderName: function(e3) {
      return Q(e3);
    }, isValidHeaderValue: f, hasOwn: F, isErrorLike: function(e3) {
      return e3 instanceof Error || "Error" === e3?.constructor?.name || "DOMException" === e3?.constructor?.name;
    }, fullyReadBody: async function(e3, t3, A3) {
      const n3 = t3, r3 = A3;
      let o3;
      try {
        o3 = e3.stream.getReader();
      } catch (e4) {
        return void r3(e4);
      }
      try {
        n3(await D(o3));
      } catch (e4) {
        r3(e4);
      }
    }, bytesMatch: function(e3, t3) {
      if (void 0 === E) return true;
      const A3 = y(t3);
      if ("no metadata" === A3) return true;
      if (0 === A3.length) return true;
      const n3 = (function(e4) {
        let t4 = e4[0].algo;
        if ("5" === t4[3]) return t4;
        for (let A4 = 1; A4 < e4.length; ++A4) {
          const n4 = e4[A4];
          if ("5" === n4.algo[3]) {
            t4 = "sha512";
            break;
          }
          "3" !== t4[3] && ("3" === n4.algo[3] && (t4 = "sha384"));
        }
        return t4;
      })(A3), r3 = (function(e4, t4) {
        if (1 === e4.length) return e4;
        let A4 = 0;
        for (let n4 = 0; n4 < e4.length; ++n4) e4[n4].algo === t4 && (e4[A4++] = e4[n4]);
        return e4.length = A4, e4;
      })(A3, n3);
      for (const t4 of r3) {
        const A4 = t4.algo, n4 = t4.hash;
        let r4 = E.createHash(A4).update(e3).digest("base64");
        if ("=" === r4[r4.length - 1] && (r4 = "=" === r4[r4.length - 2] ? r4.slice(0, -2) : r4.slice(0, -1)), w(r4, n4)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e3) {
      return T || (T = A2(3774).ReadableStream), e3 instanceof T || "ReadableStream" === e3[Symbol.toStringTag] && "function" == typeof e3.tee;
    }, readableStreamClose: function(e3) {
      try {
        e3.close();
      } catch (e4) {
        if (!e4.message.includes("Controller is already closed")) throw e4;
      }
    }, isomorphicEncode: function(e3) {
      for (let t3 = 0; t3 < e3.length; t3++) u(e3.charCodeAt(t3) <= 255);
      return e3;
    }, isomorphicDecode: function(e3) {
      return e3.length < 65535 ? String.fromCharCode(...e3) : e3.reduce((e4, t3) => e4 + String.fromCharCode(t3), "");
    }, urlIsLocal: function(e3) {
      u("protocol" in e3);
      const t3 = e3.protocol;
      return "about:" === t3 || "blob:" === t3 || "data:" === t3;
    }, urlHasHttpsScheme: S, urlIsHttpHttpsScheme: R, readAllBytes: D, normalizeMethodRecord: b, parseMetadata: y };
  }