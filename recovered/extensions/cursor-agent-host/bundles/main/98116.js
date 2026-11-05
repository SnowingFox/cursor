// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98116 range:15060719..15073104
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98116: (e, t, r) => {
    "use strict";
    const { redirectStatusSet: n, referrerPolicySet: s, badPortsSet: o } = r(22955), { getGlobalOrigin: i } = r(13967), { performance: a } = r(82987), { isBlobLike: c, toUSVString: l, ReadableStreamFrom: u } = r(83589), d = r(42613), { isUint8Array: p } = r(98253);
    let m, h = [];
    try {
      m = r(76982);
      const e2 = ["sha256", "sha384", "sha512"];
      h = m.getHashes().filter((t2) => e2.includes(t2));
    } catch {
    }
    function f(e2) {
      const t2 = e2.urlList, r2 = t2.length;
      return 0 === r2 ? null : t2[r2 - 1].toString();
    }
    function g(e2) {
      return e2.urlList[e2.urlList.length - 1];
    }
    function y(e2) {
      switch (e2) {
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
          return e2 >= 33 && e2 <= 126;
      }
    }
    function w(e2) {
      if (0 === e2.length) return false;
      for (let t2 = 0; t2 < e2.length; ++t2) if (!y(e2.charCodeAt(t2))) return false;
      return true;
    }
    function v(e2) {
      return !(e2.startsWith("	") || e2.startsWith(" ") || e2.endsWith("	") || e2.endsWith(" ")) && !(e2.includes("\0") || e2.includes("\r") || e2.includes("\n"));
    }
    function _(e2, t2) {
      return d(e2 instanceof URL), "file:" === e2.protocol || "about:" === e2.protocol || "blank:" === e2.protocol ? "no-referrer" : (e2.username = "", e2.password = "", e2.hash = "", t2 && (e2.pathname = "", e2.search = ""), e2);
    }
    function A(e2) {
      return e2 instanceof URL && ("about:blank" === e2.href || "about:srcdoc" === e2.href || ("data:" === e2.protocol || ("file:" === e2.protocol || (function(e3) {
        if (null == e3 || "null" === e3) return false;
        const t2 = new URL(e3);
        if ("https:" === t2.protocol || "wss:" === t2.protocol) return true;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(t2.hostname) || "localhost" === t2.hostname || t2.hostname.includes("localhost.") || t2.hostname.endsWith(".localhost")) return true;
        return false;
      })(e2.origin))));
    }
    const S = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
    function b(e2) {
      const t2 = [];
      let r2 = true;
      for (const n2 of e2.split(" ")) {
        r2 = false;
        const e3 = S.exec(n2);
        if (null === e3 || void 0 === e3.groups || void 0 === e3.groups.algo) continue;
        const s2 = e3.groups.algo.toLowerCase();
        h.includes(s2) && t2.push(e3.groups);
      }
      return true === r2 ? "no metadata" : t2;
    }
    function E(e2, t2) {
      if (e2.length !== t2.length) return false;
      for (let r2 = 0; r2 < e2.length; ++r2) if (e2[r2] !== t2[r2]) {
        if ("+" === e2[r2] && "-" === t2[r2] || "/" === e2[r2] && "_" === t2[r2]) continue;
        return false;
      }
      return true;
    }
    function I(e2, t2) {
      return e2.origin === t2.origin && "null" === e2.origin || e2.protocol === t2.protocol && e2.hostname === t2.hostname && e2.port === t2.port;
    }
    const C = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" };
    Object.setPrototypeOf(C, null);
    const k = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    let x = globalThis.ReadableStream;
    async function T(e2) {
      const t2 = [];
      let r2 = 0;
      for (; ; ) {
        const { done: n2, value: s2 } = await e2.read();
        if (n2) return Buffer.concat(t2, r2);
        if (!p(s2)) throw new TypeError("Received non-Uint8Array chunk");
        t2.push(s2), r2 += s2.length;
      }
    }
    function R(e2) {
      return "string" == typeof e2 ? e2.startsWith("https:") : "https:" === e2.protocol;
    }
    function B(e2) {
      d("protocol" in e2);
      const t2 = e2.protocol;
      return "http:" === t2 || "https:" === t2;
    }
    const P = Object.hasOwn || ((e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2));
    e.exports = { isAborted: function(e2) {
      return "aborted" === e2.controller.state;
    }, isCancelled: function(e2) {
      return "aborted" === e2.controller.state || "terminated" === e2.controller.state;
    }, createDeferredPromise: function() {
      let e2, t2;
      return { promise: new Promise((r2, n2) => {
        e2 = r2, t2 = n2;
      }), resolve: e2, reject: t2 };
    }, ReadableStreamFrom: u, toUSVString: l, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e2) {
    }, coarsenedSharedCurrentTime: function(e2) {
      return a.now();
    }, determineRequestsReferrer: function(e2) {
      const t2 = e2.referrerPolicy;
      d(t2);
      let r2 = null;
      if ("client" === e2.referrer) {
        const e3 = i();
        if (!e3 || "null" === e3.origin) return "no-referrer";
        r2 = new URL(e3);
      } else e2.referrer instanceof URL && (r2 = e2.referrer);
      let n2 = _(r2);
      const s2 = _(r2, true);
      n2.toString().length > 4096 && (n2 = s2);
      const o2 = I(e2, n2), a2 = A(n2) && !A(e2.url);
      switch (t2) {
        case "origin":
          return null != s2 ? s2 : _(r2, true);
        case "unsafe-url":
          return n2;
        case "same-origin":
          return o2 ? s2 : "no-referrer";
        case "origin-when-cross-origin":
          return o2 ? n2 : s2;
        case "strict-origin-when-cross-origin": {
          const t3 = g(e2);
          return I(n2, t3) ? n2 : A(n2) && !A(t3) ? "no-referrer" : s2;
        }
        default:
          return a2 ? "no-referrer" : s2;
      }
    }, makePolicyContainer: function() {
      return { referrerPolicy: "strict-origin-when-cross-origin" };
    }, clonePolicyContainer: function(e2) {
      return { referrerPolicy: e2.referrerPolicy };
    }, appendFetchMetadata: function(e2) {
      let t2 = null;
      t2 = e2.mode, e2.headersList.set("sec-fetch-mode", t2);
    }, appendRequestOriginHeader: function(e2) {
      let t2 = e2.origin;
      if ("cors" === e2.responseTainting || "websocket" === e2.mode) t2 && e2.headersList.append("origin", t2);
      else if ("GET" !== e2.method && "HEAD" !== e2.method) {
        switch (e2.referrerPolicy) {
          case "no-referrer":
            t2 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            e2.origin && R(e2.origin) && !R(g(e2)) && (t2 = null);
            break;
          case "same-origin":
            I(e2, g(e2)) || (t2 = null);
        }
        t2 && e2.headersList.append("origin", t2);
      }
    }, TAOCheck: function() {
      return "success";
    }, corsCheck: function() {
      return "success";
    }, crossOriginResourcePolicyCheck: function() {
      return "allowed";
    }, createOpaqueTimingInfo: function(e2) {
      return { startTime: e2.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: e2.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
    }, setRequestReferrerPolicyOnRedirect: function(e2, t2) {
      const { headersList: r2 } = t2, n2 = (r2.get("referrer-policy") ?? "").split(",");
      let o2 = "";
      if (n2.length > 0) for (let e3 = n2.length; 0 !== e3; e3--) {
        const t3 = n2[e3 - 1].trim();
        if (s.has(t3)) {
          o2 = t3;
          break;
        }
      }
      "" !== o2 && (e2.referrerPolicy = o2);
    }, isValidHTTPToken: w, requestBadPort: function(e2) {
      const t2 = g(e2);
      return B(t2) && o.has(t2.port) ? "blocked" : "allowed";
    }, requestCurrentURL: g, responseURL: f, responseLocationURL: function(e2, t2) {
      if (!n.has(e2.status)) return null;
      let r2 = e2.headersList.get("location");
      return null !== r2 && v(r2) && (r2 = new URL(r2, f(e2))), r2 && !r2.hash && (r2.hash = t2), r2;
    }, isBlobLike: c, isURLPotentiallyTrustworthy: A, isValidReasonPhrase: function(e2) {
      for (let t2 = 0; t2 < e2.length; ++t2) {
        const r2 = e2.charCodeAt(t2);
        if (!(9 === r2 || r2 >= 32 && r2 <= 126 || r2 >= 128 && r2 <= 255)) return false;
      }
      return true;
    }, sameOrigin: I, normalizeMethod: function(e2) {
      return C[e2.toLowerCase()] ?? e2;
    }, serializeJavascriptValueToJSONString: function(e2) {
      const t2 = JSON.stringify(e2);
      if (void 0 === t2) throw new TypeError("Value is not JSON serializable");
      return d("string" == typeof t2), t2;
    }, makeIterator: function(e2, t2, r2) {
      const n2 = { index: 0, kind: r2, target: e2 }, s2 = { next() {
        if (Object.getPrototypeOf(this) !== s2) throw new TypeError(`'next' called on an object that does not implement interface ${t2} Iterator.`);
        const { index: e3, kind: r3, target: o2 } = n2, i2 = o2();
        if (e3 >= i2.length) return { value: void 0, done: true };
        const a2 = i2[e3];
        return n2.index = e3 + 1, (function(e4, t3) {
          let r4;
          switch (t3) {
            case "key":
              r4 = e4[0];
              break;
            case "value":
              r4 = e4[1];
              break;
            case "key+value":
              r4 = e4;
          }
          return { value: r4, done: false };
        })(a2, r3);
      }, [Symbol.toStringTag]: `${t2} Iterator` };
      return Object.setPrototypeOf(s2, k), Object.setPrototypeOf({}, s2);
    }, isValidHeaderName: function(e2) {
      return w(e2);
    }, isValidHeaderValue: v, hasOwn: P, isErrorLike: function(e2) {
      return e2 instanceof Error || "Error" === e2?.constructor?.name || "DOMException" === e2?.constructor?.name;
    }, fullyReadBody: async function(e2, t2, r2) {
      const n2 = t2, s2 = r2;
      let o2;
      try {
        o2 = e2.stream.getReader();
      } catch (e3) {
        return void s2(e3);
      }
      try {
        n2(await T(o2));
      } catch (e3) {
        s2(e3);
      }
    }, bytesMatch: function(e2, t2) {
      if (void 0 === m) return true;
      const r2 = b(t2);
      if ("no metadata" === r2) return true;
      if (0 === r2.length) return true;
      const n2 = (function(e3) {
        let t3 = e3[0].algo;
        if ("5" === t3[3]) return t3;
        for (let r3 = 1; r3 < e3.length; ++r3) {
          const n3 = e3[r3];
          if ("5" === n3.algo[3]) {
            t3 = "sha512";
            break;
          }
          "3" !== t3[3] && ("3" === n3.algo[3] && (t3 = "sha384"));
        }
        return t3;
      })(r2), s2 = (function(e3, t3) {
        if (1 === e3.length) return e3;
        let r3 = 0;
        for (let n3 = 0; n3 < e3.length; ++n3) e3[n3].algo === t3 && (e3[r3++] = e3[n3]);
        return e3.length = r3, e3;
      })(r2, n2);
      for (const t3 of s2) {
        const r3 = t3.algo, n3 = t3.hash;
        let s3 = m.createHash(r3).update(e2).digest("base64");
        if ("=" === s3[s3.length - 1] && (s3 = "=" === s3[s3.length - 2] ? s3.slice(0, -2) : s3.slice(0, -1)), E(s3, n3)) return true;
      }
      return false;
    }, isReadableStreamLike: function(e2) {
      return x || (x = r(63774).ReadableStream), e2 instanceof x || "ReadableStream" === e2[Symbol.toStringTag] && "function" == typeof e2.tee;
    }, readableStreamClose: function(e2) {
      try {
        e2.close();
      } catch (e3) {
        if (!e3.message.includes("Controller is already closed")) throw e3;
      }
    }, isomorphicEncode: function(e2) {
      for (let t2 = 0; t2 < e2.length; t2++) d(e2.charCodeAt(t2) <= 255);
      return e2;
    }, isomorphicDecode: function(e2) {
      return e2.length < 65535 ? String.fromCharCode(...e2) : e2.reduce((e3, t2) => e3 + String.fromCharCode(t2), "");
    }, urlIsLocal: function(e2) {
      d("protocol" in e2);
      const t2 = e2.protocol;
      return "about:" === t2 || "blob:" === t2 || "data:" === t2;
    }, urlHasHttpsScheme: R, urlIsHttpHttpsScheme: B, readAllBytes: T, normalizeMethodRecord: C, parseMetadata: b };
  }