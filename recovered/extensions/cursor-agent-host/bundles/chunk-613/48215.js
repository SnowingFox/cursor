// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 48215 range:248918..265858
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48215: (A, e, t) => {
  "use strict";
  const { Transform: r } = t(57075), s = t(38522), { redirectStatusSet: o, referrerPolicySet: n, badPortsSet: i } = t(99354), { getGlobalOrigin: a } = t(12808), { collectASequenceOfCodePoints: Q, collectAnHTTPQuotedString: g, removeChars: E, parseMIMEType: B } = t(52603), { performance: c } = t(643), { isBlobLike: I, ReadableStreamFrom: C, isValidHTTPToken: h, normalizedMethodRecordsBase: l } = t(55201), u = t(56970), { isUint8Array: d } = t(73429), { webidl: f } = t(43290);
  let w, y = [];
  try {
    w = t(77598);
    const A2 = ["sha256", "sha384", "sha512"];
    y = w.getHashes().filter((e2) => A2.includes(e2));
  } catch {
  }
  function D(A2) {
    const e2 = A2.urlList, t2 = e2.length;
    return 0 === t2 ? null : e2[t2 - 1].toString();
  }
  function p(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (t2 > 126 || t2 < 32) return false;
    }
    return true;
  }
  function k(A2) {
    return A2.urlList[A2.urlList.length - 1];
  }
  const R = h;
  function F(A2) {
    return false === ("	" === A2[0] || " " === A2[0] || "	" === A2[A2.length - 1] || " " === A2[A2.length - 1] || A2.includes("\n") || A2.includes("\r") || A2.includes("\0"));
  }
  function m(A2, e2) {
    return A2;
  }
  function b() {
    return { referrerPolicy: "strict-origin-when-cross-origin" };
  }
  function N(A2, e2) {
    return u(A2 instanceof URL), "file:" === (A2 = new URL(A2)).protocol || "about:" === A2.protocol || "blank:" === A2.protocol ? "no-referrer" : (A2.username = "", A2.password = "", A2.hash = "", e2 && (A2.pathname = "", A2.search = ""), A2);
  }
  function S(A2) {
    return A2 instanceof URL && ("about:blank" === A2.href || "about:srcdoc" === A2.href || ("data:" === A2.protocol || ("file:" === A2.protocol || (function(A3) {
      if (null == A3 || "null" === A3) return false;
      const e2 = new URL(A3);
      if ("https:" === e2.protocol || "wss:" === e2.protocol) return true;
      if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(e2.hostname) || "localhost" === e2.hostname || e2.hostname.includes("localhost.") || e2.hostname.endsWith(".localhost")) return true;
      return false;
    })(A2.origin))));
  }
  const M = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
  function U(A2) {
    const e2 = [];
    let t2 = true;
    for (const r2 of A2.split(" ")) {
      t2 = false;
      const A3 = M.exec(r2);
      if (null === A3 || void 0 === A3.groups || void 0 === A3.groups.algo) continue;
      const s2 = A3.groups.algo.toLowerCase();
      y.includes(s2) && e2.push(A3.groups);
    }
    return true === t2 ? "no metadata" : e2;
  }
  function L(A2, e2) {
    if (A2.length !== e2.length) return false;
    for (let t2 = 0; t2 < A2.length; ++t2) if (A2[t2] !== e2[t2]) {
      if ("+" === A2[t2] && "-" === e2[t2] || "/" === A2[t2] && "_" === e2[t2]) continue;
      return false;
    }
    return true;
  }
  function T(A2, e2) {
    return A2.origin === e2.origin && "null" === A2.origin || A2.protocol === e2.protocol && A2.hostname === e2.hostname && A2.port === e2.port;
  }
  const Y = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function G(A2, e2, t2 = 0, r2 = 1) {
    class s2 {
      #U;
      #L;
      #T;
      constructor(A3, e3) {
        this.#U = A3, this.#L = e3, this.#T = 0;
      }
      next() {
        if ("object" != typeof this || null === this || !(#U in this)) throw new TypeError(`'next' called on an object that does not implement interface ${A2} Iterator.`);
        const s3 = this.#T, o2 = this.#U[e2];
        if (s3 >= o2.length) return { value: void 0, done: true };
        const { [t2]: n2, [r2]: i2 } = o2[s3];
        let a2;
        switch (this.#T = s3 + 1, this.#L) {
          case "key":
            a2 = n2;
            break;
          case "value":
            a2 = i2;
            break;
          case "key+value":
            a2 = [n2, i2];
        }
        return { value: a2, done: false };
      }
    }
    return delete s2.prototype.constructor, Object.setPrototypeOf(s2.prototype, Y), Object.defineProperties(s2.prototype, { [Symbol.toStringTag]: { writable: false, enumerable: false, configurable: true, value: `${A2} Iterator` }, next: { writable: true, enumerable: true, configurable: true } }), function(A3, e3) {
      return new s2(A3, e3);
    };
  }
  const J = /[^\x00-\xFF]/;
  function v(A2) {
    return u(!J.test(A2)), A2;
  }
  async function H(A2) {
    const e2 = [];
    let t2 = 0;
    for (; ; ) {
      const { done: r2, value: s2 } = await A2.read();
      if (r2) return Buffer.concat(e2, t2);
      if (!d(s2)) throw new TypeError("Received non-Uint8Array chunk");
      e2.push(s2), t2 += s2.length;
    }
  }
  function V(A2) {
    return "string" == typeof A2 && ":" === A2[5] && "h" === A2[0] && "t" === A2[1] && "t" === A2[2] && "p" === A2[3] && "s" === A2[4] || "https:" === A2.protocol;
  }
  function x(A2) {
    u("protocol" in A2);
    const e2 = A2.protocol;
    return "http:" === e2 || "https:" === e2;
  }
  class W extends r {
    #Y;
    constructor(A2) {
      super(), this.#Y = A2;
    }
    _transform(A2, e2, t2) {
      if (!this._inflateStream) {
        if (0 === A2.length) return void t2();
        this._inflateStream = 8 == (15 & A2[0]) ? s.createInflate(this.#Y) : s.createInflateRaw(this.#Y), this._inflateStream.on("data", this.push.bind(this)), this._inflateStream.on("end", () => this.push(null)), this._inflateStream.on("error", (A3) => this.destroy(A3));
      }
      this._inflateStream.write(A2, e2, t2);
    }
    _final(A2) {
      this._inflateStream && (this._inflateStream.end(), this._inflateStream = null), A2();
    }
  }
  function O(A2, e2) {
    const t2 = e2.get(A2, true);
    return null === t2 ? null : (function(A3) {
      const e3 = A3, t3 = { position: 0 }, r2 = [];
      let s2 = "";
      for (; t3.position < e3.length; ) {
        if (s2 += Q((A4) => '"' !== A4 && "," !== A4, e3, t3), t3.position < e3.length) if (34 === e3.charCodeAt(t3.position)) {
          if (s2 += g(e3, t3), t3.position < e3.length) continue;
        } else u(44 === e3.charCodeAt(t3.position)), t3.position++;
        s2 = E(s2, true, true, (A4) => 9 === A4 || 32 === A4), r2.push(s2), s2 = "";
      }
      return r2;
    })(t2);
  }
  const P = new TextDecoder();
  class q {
    get baseUrl() {
      return a();
    }
    get origin() {
      return this.baseUrl?.origin;
    }
    policyContainer = { referrerPolicy: "strict-origin-when-cross-origin" };
  }
  const Z = new class {
    settingsObject = new q();
  }();
  A.exports = { isAborted: function(A2) {
    return "aborted" === A2.controller.state;
  }, isCancelled: function(A2) {
    return "aborted" === A2.controller.state || "terminated" === A2.controller.state;
  }, isValidEncodedURL: p, createDeferredPromise: function() {
    let A2, e2;
    return { promise: new Promise((t2, r2) => {
      A2 = t2, e2 = r2;
    }), resolve: A2, reject: e2 };
  }, ReadableStreamFrom: C, tryUpgradeRequestToAPotentiallyTrustworthyURL: function(A2) {
  }, clampAndCoarsenConnectionTimingInfo: function(A2, e2, t2) {
    return !A2?.startTime || A2.startTime < e2 ? { domainLookupStartTime: e2, domainLookupEndTime: e2, connectionStartTime: e2, connectionEndTime: e2, secureConnectionStartTime: e2, ALPNNegotiatedProtocol: A2?.ALPNNegotiatedProtocol } : { domainLookupStartTime: m(A2.domainLookupStartTime), domainLookupEndTime: m(A2.domainLookupEndTime), connectionStartTime: m(A2.connectionStartTime), connectionEndTime: m(A2.connectionEndTime), secureConnectionStartTime: m(A2.secureConnectionStartTime), ALPNNegotiatedProtocol: A2.ALPNNegotiatedProtocol };
  }, coarsenedSharedCurrentTime: function(A2) {
    return m(c.now());
  }, determineRequestsReferrer: function(A2) {
    const e2 = A2.referrerPolicy;
    u(e2);
    let t2 = null;
    if ("client" === A2.referrer) {
      const A3 = a();
      if (!A3 || "null" === A3.origin) return "no-referrer";
      t2 = new URL(A3);
    } else A2.referrer instanceof URL && (t2 = A2.referrer);
    let r2 = N(t2);
    const s2 = N(t2, true);
    r2.toString().length > 4096 && (r2 = s2);
    const o2 = T(A2, r2), n2 = S(r2) && !S(A2.url);
    switch (e2) {
      case "origin":
        return null != s2 ? s2 : N(t2, true);
      case "unsafe-url":
        return r2;
      case "same-origin":
        return o2 ? s2 : "no-referrer";
      case "origin-when-cross-origin":
        return o2 ? r2 : s2;
      case "strict-origin-when-cross-origin": {
        const e3 = k(A2);
        return T(r2, e3) ? r2 : S(r2) && !S(e3) ? "no-referrer" : s2;
      }
      default:
        return n2 ? "no-referrer" : s2;
    }
  }, makePolicyContainer: b, clonePolicyContainer: function(A2) {
    return { referrerPolicy: A2.referrerPolicy };
  }, appendFetchMetadata: function(A2) {
    let e2 = null;
    e2 = A2.mode, A2.headersList.set("sec-fetch-mode", e2, true);
  }, appendRequestOriginHeader: function(A2) {
    let e2 = A2.origin;
    if ("client" !== e2 && void 0 !== e2) {
      if ("cors" === A2.responseTainting || "websocket" === A2.mode) A2.headersList.append("origin", e2, true);
      else if ("GET" !== A2.method && "HEAD" !== A2.method) {
        switch (A2.referrerPolicy) {
          case "no-referrer":
            e2 = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            A2.origin && V(A2.origin) && !V(k(A2)) && (e2 = null);
            break;
          case "same-origin":
            T(A2, k(A2)) || (e2 = null);
        }
        A2.headersList.append("origin", e2, true);
      }
    }
  }, TAOCheck: function() {
    return "success";
  }, corsCheck: function() {
    return "success";
  }, crossOriginResourcePolicyCheck: function() {
    return "allowed";
  }, createOpaqueTimingInfo: function(A2) {
    return { startTime: A2.startTime ?? 0, redirectStartTime: 0, redirectEndTime: 0, postRedirectStartTime: A2.startTime ?? 0, finalServiceWorkerStartTime: 0, finalNetworkResponseStartTime: 0, finalNetworkRequestStartTime: 0, endTime: 0, encodedBodySize: 0, decodedBodySize: 0, finalConnectionTimingInfo: null };
  }, setRequestReferrerPolicyOnRedirect: function(A2, e2) {
    const { headersList: t2 } = e2, r2 = (t2.get("referrer-policy", true) ?? "").split(",");
    let s2 = "";
    if (r2.length > 0) for (let A3 = r2.length; 0 !== A3; A3--) {
      const e3 = r2[A3 - 1].trim();
      if (n.has(e3)) {
        s2 = e3;
        break;
      }
    }
    "" !== s2 && (A2.referrerPolicy = s2);
  }, isValidHTTPToken: h, requestBadPort: function(A2) {
    const e2 = k(A2);
    return x(e2) && i.has(e2.port) ? "blocked" : "allowed";
  }, requestCurrentURL: k, responseURL: D, responseLocationURL: function(A2, e2) {
    if (!o.has(A2.status)) return null;
    let t2 = A2.headersList.get("location", true);
    var r2;
    return null !== t2 && F(t2) && (p(t2) || (r2 = t2, t2 = Buffer.from(r2, "binary").toString("utf8")), t2 = new URL(t2, D(A2))), t2 && !t2.hash && (t2.hash = e2), t2;
  }, isBlobLike: I, isURLPotentiallyTrustworthy: S, isValidReasonPhrase: function(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (!(9 === t2 || t2 >= 32 && t2 <= 126 || t2 >= 128 && t2 <= 255)) return false;
    }
    return true;
  }, sameOrigin: T, normalizeMethod: function(A2) {
    return l[A2.toLowerCase()] ?? A2;
  }, serializeJavascriptValueToJSONString: function(A2) {
    const e2 = JSON.stringify(A2);
    if (void 0 === e2) throw new TypeError("Value is not JSON serializable");
    return u("string" == typeof e2), e2;
  }, iteratorMixin: function(A2, e2, t2, r2 = 0, s2 = 1) {
    const o2 = G(A2, t2, r2, s2), n2 = { keys: { writable: true, enumerable: true, configurable: true, value: function() {
      return f.brandCheck(this, e2), o2(this, "key");
    } }, values: { writable: true, enumerable: true, configurable: true, value: function() {
      return f.brandCheck(this, e2), o2(this, "value");
    } }, entries: { writable: true, enumerable: true, configurable: true, value: function() {
      return f.brandCheck(this, e2), o2(this, "key+value");
    } }, forEach: { writable: true, enumerable: true, configurable: true, value: function(t3, r3 = globalThis) {
      if (f.brandCheck(this, e2), f.argumentLengthCheck(arguments, 1, `${A2}.forEach`), "function" != typeof t3) throw new TypeError(`Failed to execute 'forEach' on '${A2}': parameter 1 is not of type 'Function'.`);
      for (const { 0: A3, 1: e3 } of o2(this, "key+value")) t3.call(r3, e3, A3, this);
    } } };
    return Object.defineProperties(e2.prototype, { ...n2, [Symbol.iterator]: { writable: true, enumerable: false, configurable: true, value: n2.entries.value } });
  }, createIterator: G, isValidHeaderName: R, isValidHeaderValue: F, isErrorLike: function(A2) {
    return A2 instanceof Error || "Error" === A2?.constructor?.name || "DOMException" === A2?.constructor?.name;
  }, fullyReadBody: async function(A2, e2, t2) {
    const r2 = e2, s2 = t2;
    let o2;
    try {
      o2 = A2.stream.getReader();
    } catch (A3) {
      return void s2(A3);
    }
    try {
      r2(await H(o2));
    } catch (A3) {
      s2(A3);
    }
  }, bytesMatch: function(A2, e2) {
    if (void 0 === w) return true;
    const t2 = U(e2);
    if ("no metadata" === t2) return true;
    if (0 === t2.length) return true;
    const r2 = (function(A3) {
      let e3 = A3[0].algo;
      if ("5" === e3[3]) return e3;
      for (let t3 = 1; t3 < A3.length; ++t3) {
        const r3 = A3[t3];
        if ("5" === r3.algo[3]) {
          e3 = "sha512";
          break;
        }
        "3" !== e3[3] && ("3" === r3.algo[3] && (e3 = "sha384"));
      }
      return e3;
    })(t2), s2 = (function(A3, e3) {
      if (1 === A3.length) return A3;
      let t3 = 0;
      for (let r3 = 0; r3 < A3.length; ++r3) A3[r3].algo === e3 && (A3[t3++] = A3[r3]);
      return A3.length = t3, A3;
    })(t2, r2);
    for (const e3 of s2) {
      const t3 = e3.algo, r3 = e3.hash;
      let s3 = w.createHash(t3).update(A2).digest("base64");
      if ("=" === s3[s3.length - 1] && (s3 = "=" === s3[s3.length - 2] ? s3.slice(0, -2) : s3.slice(0, -1)), L(s3, r3)) return true;
    }
    return false;
  }, isReadableStreamLike: function(A2) {
    return A2 instanceof ReadableStream || "ReadableStream" === A2[Symbol.toStringTag] && "function" == typeof A2.tee;
  }, readableStreamClose: function(A2) {
    try {
      A2.close(), A2.byobRequest?.respond(0);
    } catch (A3) {
      if (!A3.message.includes("Controller is already closed") && !A3.message.includes("ReadableStream is already closed")) throw A3;
    }
  }, isomorphicEncode: v, urlIsLocal: function(A2) {
    u("protocol" in A2);
    const e2 = A2.protocol;
    return "about:" === e2 || "blob:" === e2 || "data:" === e2;
  }, urlHasHttpsScheme: V, urlIsHttpHttpsScheme: x, readAllBytes: H, simpleRangeHeaderValue: function(A2, e2) {
    const t2 = A2;
    if (!t2.startsWith("bytes")) return "failure";
    const r2 = { position: 5 };
    if (e2 && Q((A3) => "	" === A3 || " " === A3, t2, r2), 61 !== t2.charCodeAt(r2.position)) return "failure";
    r2.position++, e2 && Q((A3) => "	" === A3 || " " === A3, t2, r2);
    const s2 = Q((A3) => {
      const e3 = A3.charCodeAt(0);
      return e3 >= 48 && e3 <= 57;
    }, t2, r2), o2 = s2.length ? Number(s2) : null;
    if (e2 && Q((A3) => "	" === A3 || " " === A3, t2, r2), 45 !== t2.charCodeAt(r2.position)) return "failure";
    r2.position++, e2 && Q((A3) => "	" === A3 || " " === A3, t2, r2);
    const n2 = Q((A3) => {
      const e3 = A3.charCodeAt(0);
      return e3 >= 48 && e3 <= 57;
    }, t2, r2), i2 = n2.length ? Number(n2) : null;
    return r2.position < t2.length || null === i2 && null === o2 || o2 > i2 ? "failure" : { rangeStartValue: o2, rangeEndValue: i2 };
  }, buildContentRange: function(A2, e2, t2) {
    let r2 = "bytes ";
    return r2 += v(`${A2}`), r2 += "-", r2 += v(`${e2}`), r2 += "/", r2 += v(`${t2}`), r2;
  }, parseMetadata: U, createInflate: function(A2) {
    return new W(A2);
  }, extractMimeType: function(A2) {
    let e2 = null, t2 = null, r2 = null;
    const s2 = O("content-type", A2);
    if (null === s2) return "failure";
    for (const A3 of s2) {
      const s3 = B(A3);
      "failure" !== s3 && "*/*" !== s3.essence && (r2 = s3, r2.essence !== t2 ? (e2 = null, r2.parameters.has("charset") && (e2 = r2.parameters.get("charset")), t2 = r2.essence) : r2.parameters.has("charset") || null === e2 || r2.parameters.set("charset", e2));
    }
    return r2 ?? "failure";
  }, getDecodeSplit: O, utf8DecodeBytes: function(A2) {
    return 0 === A2.length ? "" : (239 === A2[0] && 187 === A2[1] && 191 === A2[2] && (A2 = A2.subarray(3)), P.decode(A2));
  }, environmentSettingsObject: Z };
}