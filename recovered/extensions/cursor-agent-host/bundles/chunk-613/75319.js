// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 75319 range:398145..421849
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75319: (A, e, t) => {
  "use strict";
  const { makeNetworkError: r, makeAppropriateNetworkError: s, filterResponse: o, makeResponse: n, fromInnerResponse: i } = t(54768), { HeadersList: a } = t(48969), { Request: Q, cloneRequest: g } = t(78078), E = t(38522), { bytesMatch: B, makePolicyContainer: c, clonePolicyContainer: I, requestBadPort: C, TAOCheck: h, appendRequestOriginHeader: l, responseLocationURL: u, requestCurrentURL: d, setRequestReferrerPolicyOnRedirect: f, tryUpgradeRequestToAPotentiallyTrustworthyURL: w, createOpaqueTimingInfo: y, appendFetchMetadata: D, corsCheck: p, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: R, coarsenedSharedCurrentTime: F, createDeferredPromise: m, isBlobLike: b, sameOrigin: N, isCancelled: S, isAborted: M, isErrorLike: U, fullyReadBody: L, readableStreamClose: T, isomorphicEncode: Y, urlIsLocal: G, urlIsHttpHttpsScheme: J, urlHasHttpsScheme: v, clampAndCoarsenConnectionTimingInfo: H, simpleRangeHeaderValue: V, buildContentRange: x, createInflate: W, extractMimeType: O } = t(48215), { kState: P, kDispatcher: q } = t(15978), Z = t(56970), { safelyExtractBody: z, extractBody: K } = t(33095), { redirectStatusSet: X, nullBodyStatus: _, safeMethodsSet: j, requestBodyHeader: $, subresourceSet: AA } = t(99354), eA = t(78474), { Readable: tA, pipeline: rA, finished: sA } = t(57075), { addAbortListener: oA, isErrored: nA, isReadable: iA, bufferToLowerCasedHeaderName: aA } = t(55201), { dataURLProcessor: QA, serializeAMimeType: gA, minimizeSupportedMimeType: EA } = t(52603), { getGlobalDispatcher: BA } = t(37922), { webidl: cA } = t(43290), { STATUS_CODES: IA } = t(37067), CA = ["GET", "HEAD"], hA = "undefined" != typeof __UNDICI_IS_NODE__ || "undefined" != typeof esbuildDetection ? "node" : "undici";
  let lA;
  class uA extends eA {
    constructor(A2) {
      super(), this.dispatcher = A2, this.connection = null, this.dump = false, this.state = "ongoing";
    }
    terminate(A2) {
      "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(A2), this.emit("terminated", A2));
    }
    abort(A2) {
      "ongoing" === this.state && (this.state = "aborted", A2 || (A2 = new DOMException("The operation was aborted.", "AbortError")), this.serializedAbortReason = A2, this.connection?.destroy(A2), this.emit("terminated", A2));
    }
  }
  function dA(A2) {
    fA(A2, "fetch");
  }
  function fA(A2, e2 = "other") {
    if ("error" === A2.type && A2.aborted) return;
    if (!A2.urlList?.length) return;
    const t2 = A2.urlList[0];
    let r2 = A2.timingInfo, s2 = A2.cacheState;
    J(t2) && null !== r2 && (A2.timingAllowPassed || (r2 = y({ startTime: r2.startTime }), s2 = ""), r2.endTime = F(), A2.timingInfo = r2, wA(r2, t2.href, e2, globalThis, s2));
  }
  const wA = performance.markResourceTiming;
  function yA(A2, e2, t2, r2) {
    if (A2 && A2.reject(r2), null != e2.body && iA(e2.body?.stream) && e2.body.stream.cancel(r2).catch((A3) => {
      if ("ERR_INVALID_STATE" !== A3.code) throw A3;
    }), null == t2) return;
    const s2 = t2[P];
    null != s2.body && iA(s2.body?.stream) && s2.body.stream.cancel(r2).catch((A3) => {
      if ("ERR_INVALID_STATE" !== A3.code) throw A3;
    });
  }
  function DA({ request: A2, processRequestBodyChunkLength: e2, processRequestEndOfBody: t2, processResponse: r2, processResponseEndOfBody: s2, processResponseConsumeBody: o2, useParallelQueue: n2 = false, dispatcher: i2 = BA() }) {
    Z(i2);
    let a2 = null, Q2 = false;
    null != A2.client && (a2 = A2.client.globalObject, Q2 = A2.client.crossOriginIsolatedCapability);
    const g2 = F(Q2), E2 = y({ startTime: g2 }), B2 = { controller: new uA(i2), request: A2, timingInfo: E2, processRequestBodyChunkLength: e2, processRequestEndOfBody: t2, processResponse: r2, processResponseConsumeBody: o2, processResponseEndOfBody: s2, taskDestination: a2, crossOriginIsolatedCapability: Q2 };
    if (Z(!A2.body || A2.body.stream), "client" === A2.window && (A2.window = "Window" === A2.client?.globalObject?.constructor?.name ? A2.client : "no-window"), "client" === A2.origin && (A2.origin = A2.client.origin), "client" === A2.policyContainer && (null != A2.client ? A2.policyContainer = I(A2.client.policyContainer) : A2.policyContainer = c()), !A2.headersList.contains("accept", true)) {
      const e3 = "*/*";
      A2.headersList.append("accept", e3, true);
    }
    return A2.headersList.contains("accept-language", true) || A2.headersList.append("accept-language", "*", true), A2.priority, AA.has(A2.destination), pA(B2).catch((A3) => {
      B2.controller.terminate(A3);
    }), B2.controller;
  }
  async function pA(A2, e2 = false) {
    const t2 = A2.request;
    let s2 = null;
    if (t2.localURLsOnly && !G(d(t2)) && (s2 = r("local URLs only")), w(t2), "blocked" === C(t2) && (s2 = r("bad port")), "" === t2.referrerPolicy && (t2.referrerPolicy = t2.policyContainer.referrerPolicy), "no-referrer" !== t2.referrer && (t2.referrer = R(t2)), null === s2 && (s2 = await (async () => {
      const e3 = d(t2);
      return N(e3, t2.url) && "basic" === t2.responseTainting || "data:" === e3.protocol || "navigate" === t2.mode || "websocket" === t2.mode ? (t2.responseTainting = "basic", await kA(A2)) : "same-origin" === t2.mode ? r('request mode cannot be "same-origin"') : "no-cors" === t2.mode ? "follow" !== t2.redirect ? r('redirect mode cannot be "follow" for "no-cors" request') : (t2.responseTainting = "opaque", await kA(A2)) : J(d(t2)) ? (t2.responseTainting = "cors", await mA(A2)) : r("URL scheme must be a HTTP(S) scheme");
    })()), e2) return s2;
    0 === s2.status || s2.internalResponse || (t2.responseTainting, "basic" === t2.responseTainting ? s2 = o(s2, "basic") : "cors" === t2.responseTainting ? s2 = o(s2, "cors") : "opaque" === t2.responseTainting ? s2 = o(s2, "opaque") : Z(false));
    let n2 = 0 === s2.status ? s2 : s2.internalResponse;
    if (0 === n2.urlList.length && n2.urlList.push(...t2.urlList), t2.timingAllowFailed || (s2.timingAllowPassed = true), "opaque" === s2.type && 206 === n2.status && n2.rangeRequested && !t2.headers.contains("range", true) && (s2 = n2 = r()), 0 === s2.status || "HEAD" !== t2.method && "CONNECT" !== t2.method && !_.includes(n2.status) || (n2.body = null, A2.controller.dump = true), t2.integrity) {
      const e3 = (e4) => FA(A2, r(e4));
      if ("opaque" === t2.responseTainting || null == s2.body) return void e3(s2.error);
      const o2 = (r2) => {
        B(r2, t2.integrity) ? (s2.body = z(r2)[0], FA(A2, s2)) : e3("integrity mismatch");
      };
      await L(s2.body, o2, e3);
    } else FA(A2, s2);
  }
  function kA(A2) {
    if (S(A2) && 0 === A2.request.redirectCount) return Promise.resolve(s(A2));
    const { request: e2 } = A2, { protocol: o2 } = d(e2);
    switch (o2) {
      case "about:":
        return Promise.resolve(r("about scheme is not supported"));
      case "blob:": {
        lA || (lA = t(4573).resolveObjectURL);
        const A3 = d(e2);
        if (0 !== A3.search.length) return Promise.resolve(r("NetworkError when attempting to fetch resource."));
        const s2 = lA(A3.toString());
        if ("GET" !== e2.method || !b(s2)) return Promise.resolve(r("invalid method"));
        const o3 = n(), i2 = s2.size, a2 = Y(`${i2}`), Q2 = s2.type;
        if (e2.headersList.contains("range", true)) {
          o3.rangeRequested = true;
          const A4 = e2.headersList.get("range", true), t2 = V(A4, true);
          if ("failure" === t2) return Promise.resolve(r("failed to fetch the data URL"));
          let { rangeStartValue: n2, rangeEndValue: a3 } = t2;
          if (null === n2) n2 = i2 - a3, a3 = n2 + a3 - 1;
          else {
            if (n2 >= i2) return Promise.resolve(r("Range start is greater than the blob's size."));
            (null === a3 || a3 >= i2) && (a3 = i2 - 1);
          }
          const g2 = s2.slice(n2, a3, Q2), E2 = K(g2);
          o3.body = E2[0];
          const B2 = Y(`${g2.size}`), c2 = x(n2, a3, i2);
          o3.status = 206, o3.statusText = "Partial Content", o3.headersList.set("content-length", B2, true), o3.headersList.set("content-type", Q2, true), o3.headersList.set("content-range", c2, true);
        } else {
          const A4 = K(s2);
          o3.statusText = "OK", o3.body = A4[0], o3.headersList.set("content-length", a2, true), o3.headersList.set("content-type", Q2, true);
        }
        return Promise.resolve(o3);
      }
      case "data:": {
        const A3 = d(e2), t2 = QA(A3);
        if ("failure" === t2) return Promise.resolve(r("failed to fetch the data URL"));
        const s2 = gA(t2.mimeType);
        return Promise.resolve(n({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: s2 }]], body: z(t2.body)[0] }));
      }
      case "file:":
        return Promise.resolve(r("not implemented... yet..."));
      case "http:":
      case "https:":
        return mA(A2).catch((A3) => r(A3));
      default:
        return Promise.resolve(r("unknown scheme"));
    }
  }
  function RA(A2, e2) {
    A2.request.done = true, null != A2.processResponseDone && queueMicrotask(() => A2.processResponseDone(e2));
  }
  function FA(A2, e2) {
    let t2 = A2.timingInfo;
    const r2 = () => {
      const r3 = Date.now();
      "document" === A2.request.destination && (A2.controller.fullTimingInfo = t2), A2.controller.reportTimingSteps = () => {
        if ("https:" !== A2.request.url.protocol) return;
        t2.endTime = r3;
        let s3 = e2.cacheState;
        const o2 = e2.bodyInfo;
        e2.timingAllowPassed || (t2 = y(t2), s3 = "");
        let n2 = 0;
        if ("navigator" !== A2.request.mode || !e2.hasCrossOriginRedirects) {
          n2 = e2.status;
          const A3 = O(e2.headersList);
          "failure" !== A3 && (o2.contentType = EA(A3));
        }
        null != A2.request.initiatorType && wA(t2, A2.request.url.href, A2.request.initiatorType, globalThis, s3, o2, n2);
      };
      queueMicrotask(() => (A2.request.done = true, null != A2.processResponseEndOfBody && queueMicrotask(() => A2.processResponseEndOfBody(e2)), void (null != A2.request.initiatorType && A2.controller.reportTimingSteps())));
    };
    null != A2.processResponse && queueMicrotask(() => {
      A2.processResponse(e2), A2.processResponse = null;
    });
    const s2 = "error" === e2.type ? e2 : e2.internalResponse ?? e2;
    null == s2.body ? r2() : sA(s2.body.stream, () => {
      r2();
    });
  }
  async function mA(A2) {
    const e2 = A2.request;
    let t2 = null, s2 = null;
    const o2 = A2.timingInfo;
    if (e2.serviceWorkers, null === t2) {
      if ("follow" === e2.redirect && (e2.serviceWorkers = "none"), s2 = t2 = await bA(A2), "cors" === e2.responseTainting && "failure" === p(e2, t2)) return r("cors failure");
      "failure" === h(e2, t2) && (e2.timingAllowFailed = true);
    }
    return "opaque" !== e2.responseTainting && "opaque" !== t2.type || "blocked" !== k(e2.origin, e2.client, e2.destination, s2) ? (X.has(s2.status) && ("manual" !== e2.redirect && A2.controller.connection.destroy(void 0, false), "error" === e2.redirect ? t2 = r("unexpected redirect") : "manual" === e2.redirect ? t2 = s2 : "follow" === e2.redirect ? t2 = await (function(A3, e3) {
      const t3 = A3.request, s3 = e3.internalResponse ? e3.internalResponse : e3;
      let o3;
      try {
        if (o3 = u(s3, d(t3).hash), null == o3) return e3;
      } catch (A4) {
        return Promise.resolve(r(A4));
      }
      if (!J(o3)) return Promise.resolve(r("URL scheme must be a HTTP(S) scheme"));
      if (20 === t3.redirectCount) return Promise.resolve(r("redirect count exceeded"));
      if (t3.redirectCount += 1, "cors" === t3.mode && (o3.username || o3.password) && !N(t3, o3)) return Promise.resolve(r('cross origin not allowed for request mode "cors"'));
      if ("cors" === t3.responseTainting && (o3.username || o3.password)) return Promise.resolve(r('URL cannot contain credentials for request mode "cors"'));
      if (303 !== s3.status && null != t3.body && null == t3.body.source) return Promise.resolve(r());
      if ([301, 302].includes(s3.status) && "POST" === t3.method || 303 === s3.status && !CA.includes(t3.method)) {
        t3.method = "GET", t3.body = null;
        for (const A4 of $) t3.headersList.delete(A4);
      }
      N(d(t3), o3) || (t3.headersList.delete("authorization", true), t3.headersList.delete("proxy-authorization", true), t3.headersList.delete("cookie", true), t3.headersList.delete("host", true));
      null != t3.body && (Z(null != t3.body.source), t3.body = z(t3.body.source)[0]);
      const n2 = A3.timingInfo;
      n2.redirectEndTime = n2.postRedirectStartTime = F(A3.crossOriginIsolatedCapability), 0 === n2.redirectStartTime && (n2.redirectStartTime = n2.startTime);
      return t3.urlList.push(o3), f(t3, s3), pA(A3, true);
    })(A2, t2) : Z(false)), t2.timingInfo = o2, t2) : r("blocked");
  }
  async function bA(A2, e2 = false, t2 = false) {
    const o2 = A2.request;
    let i2 = null, Q2 = null, B2 = null;
    "no-window" === o2.window && "error" === o2.redirect ? (i2 = A2, Q2 = o2) : (Q2 = g(o2), i2 = { ...A2 }, i2.request = Q2);
    const c2 = "include" === o2.credentials || "same-origin" === o2.credentials && "basic" === o2.responseTainting, I2 = Q2.body ? Q2.body.length : null;
    let C2 = null;
    if (null == Q2.body && ["POST", "PUT"].includes(Q2.method) && (C2 = "0"), null != I2 && (C2 = Y(`${I2}`)), null != C2 && Q2.headersList.append("content-length", C2, true), null != I2 && Q2.keepalive, Q2.referrer instanceof URL && Q2.headersList.append("referer", Y(Q2.referrer.href), true), l(Q2), D(Q2), Q2.headersList.contains("user-agent", true) || Q2.headersList.append("user-agent", hA), "default" === Q2.cache && (Q2.headersList.contains("if-modified-since", true) || Q2.headersList.contains("if-none-match", true) || Q2.headersList.contains("if-unmodified-since", true) || Q2.headersList.contains("if-match", true) || Q2.headersList.contains("if-range", true)) && (Q2.cache = "no-store"), "no-cache" !== Q2.cache || Q2.preventNoCacheCacheControlHeaderModification || Q2.headersList.contains("cache-control", true) || Q2.headersList.append("cache-control", "max-age=0", true), "no-store" !== Q2.cache && "reload" !== Q2.cache || (Q2.headersList.contains("pragma", true) || Q2.headersList.append("pragma", "no-cache", true), Q2.headersList.contains("cache-control", true) || Q2.headersList.append("cache-control", "no-cache", true)), Q2.headersList.contains("range", true) && Q2.headersList.append("accept-encoding", "identity", true), Q2.headersList.contains("accept-encoding", true) || (v(d(Q2)) ? Q2.headersList.append("accept-encoding", "br, gzip, deflate", true) : Q2.headersList.append("accept-encoding", "gzip, deflate", true)), Q2.headersList.delete("host", true), Q2.cache = "no-store", "no-store" !== Q2.cache && Q2.cache, null == B2) {
      if ("only-if-cached" === Q2.cache) return r("only if cached");
      const A3 = await (async function(A4) {
        Z(!A4.controller.connection || A4.controller.connection.destroyed), A4.controller.connection = { abort: null, destroyed: false, destroy(A5, e4 = true) {
          this.destroyed || (this.destroyed = true, e4 && this.abort?.(A5 ?? new DOMException("The operation was aborted.", "AbortError")));
        } };
        const e3 = A4.request;
        let t3 = null;
        const o3 = A4.timingInfo, i3 = null;
        null == i3 && (e3.cache = "no-store");
        e3.mode;
        let Q3 = null;
        if (null == e3.body && A4.processRequestEndOfBody) queueMicrotask(() => A4.processRequestEndOfBody());
        else if (null != e3.body) {
          const t4 = async function* (e4) {
            S(A4) || (yield e4, A4.processRequestBodyChunkLength?.(e4.byteLength));
          }, r2 = () => {
            S(A4) || A4.processRequestEndOfBody && A4.processRequestEndOfBody();
          }, s2 = (e4) => {
            S(A4) || ("AbortError" === e4.name ? A4.controller.abort() : A4.controller.terminate(e4));
          };
          Q3 = (async function* () {
            try {
              for await (const A5 of e3.body.stream) yield* t4(A5);
              r2();
            } catch (A5) {
              s2(A5);
            }
          })();
        }
        try {
          const { body: e4, status: r2, statusText: s2, headersList: o4, socket: i4 } = await C3({ body: Q3 });
          if (i4) t3 = n({ status: r2, statusText: s2, headersList: o4, socket: i4 });
          else {
            const i5 = e4[Symbol.asyncIterator]();
            A4.controller.next = () => i5.next(), t3 = n({ status: r2, statusText: s2, headersList: o4 });
          }
        } catch (e4) {
          return "AbortError" === e4.name ? (A4.controller.connection.destroy(), s(A4, e4)) : r(e4);
        }
        const g2 = async () => {
          await A4.controller.resume();
        }, B3 = (e4) => {
          S(A4) || A4.controller.abort(e4);
        }, c3 = new ReadableStream({ async start(e4) {
          A4.controller.controller = e4;
        }, async pull(A5) {
          await g2(A5);
        }, async cancel(A5) {
          await B3(A5);
        }, type: "bytes" });
        function I3(e4) {
          M(A4) ? (t3.aborted = true, iA(c3) && A4.controller.controller.error(A4.controller.serializedAbortReason)) : iA(c3) && A4.controller.controller.error(new TypeError("terminated", { cause: U(e4) ? e4 : void 0 })), A4.controller.connection.destroy();
        }
        return t3.body = { stream: c3, source: null, length: null }, A4.controller.onAborted = I3, A4.controller.on("terminated", I3), A4.controller.resume = async () => {
          for (; ; ) {
            let e4, r2;
            try {
              const { done: t4, value: r3 } = await A4.controller.next();
              if (M(A4)) break;
              e4 = t4 ? void 0 : r3;
            } catch (t4) {
              A4.controller.ended && !o3.encodedBodySize ? e4 = void 0 : (e4 = t4, r2 = true);
            }
            if (void 0 === e4) return T(A4.controller.controller), void RA(A4, t3);
            if (o3.decodedBodySize += e4?.byteLength ?? 0, r2) return void A4.controller.terminate(e4);
            const s2 = new Uint8Array(e4);
            if (s2.byteLength && A4.controller.controller.enqueue(s2), nA(c3)) return void A4.controller.terminate();
            if (A4.controller.controller.desiredSize <= 0) return;
          }
        }, t3;
        function C3({ body: t4 }) {
          const r2 = d(e3), s2 = A4.controller.dispatcher;
          return new Promise((n2, i4) => s2.dispatch({ path: r2.pathname + r2.search, origin: r2.origin, method: e3.method, body: s2.isMockActive ? e3.body && (e3.body.source || e3.body.stream) : t4, headers: e3.headersList.entries, maxRedirections: 0, upgrade: "websocket" === e3.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(e4) {
            const { connection: t5 } = A4.controller;
            o3.finalConnectionTimingInfo = H(void 0, o3.postRedirectStartTime, A4.crossOriginIsolatedCapability), t5.destroyed ? e4(new DOMException("The operation was aborted.", "AbortError")) : (A4.controller.on("terminated", e4), this.abort = t5.abort = e4), o3.finalNetworkRequestStartTime = F(A4.crossOriginIsolatedCapability);
          }, onResponseStarted() {
            o3.finalNetworkResponseStartTime = F(A4.crossOriginIsolatedCapability);
          }, onHeaders(A5, t5, r3, s3) {
            if (A5 < 200) return;
            let o4 = "";
            const Q4 = new a();
            for (let A6 = 0; A6 < t5.length; A6 += 2) Q4.append(aA(t5[A6]), t5[A6 + 1].toString("latin1"), true);
            o4 = Q4.get("location", true), this.body = new tA({ read: r3 });
            const g3 = [], B4 = o4 && "follow" === e3.redirect && X.has(A5);
            if ("HEAD" !== e3.method && "CONNECT" !== e3.method && !_.includes(A5) && !B4) {
              const A6 = Q4.get("content-encoding", true), e4 = A6 ? A6.toLowerCase().split(",") : [], t6 = 5;
              if (e4.length > t6) return i4(new Error(`too many content-encodings in response: ${e4.length}, maximum allowed is ${t6}`)), true;
              for (let A7 = e4.length - 1; A7 >= 0; --A7) {
                const t7 = e4[A7].trim();
                if ("x-gzip" === t7 || "gzip" === t7) g3.push(E.createGunzip({ flush: E.constants.Z_SYNC_FLUSH, finishFlush: E.constants.Z_SYNC_FLUSH }));
                else if ("deflate" === t7) g3.push(W({ flush: E.constants.Z_SYNC_FLUSH, finishFlush: E.constants.Z_SYNC_FLUSH }));
                else {
                  if ("br" !== t7) {
                    g3.length = 0;
                    break;
                  }
                  g3.push(E.createBrotliDecompress({ flush: E.constants.BROTLI_OPERATION_FLUSH, finishFlush: E.constants.BROTLI_OPERATION_FLUSH }));
                }
              }
            }
            const c4 = this.onError.bind(this);
            return n2({ status: A5, statusText: s3, headersList: Q4, body: g3.length ? rA(this.body, ...g3, (A6) => {
              A6 && this.onError(A6);
            }).on("error", c4) : this.body.on("error", c4) }), true;
          }, onData(e4) {
            if (A4.controller.dump) return;
            const t5 = e4;
            return o3.encodedBodySize += t5.byteLength, this.body.push(t5);
          }, onComplete() {
            this.abort && A4.controller.off("terminated", this.abort), A4.controller.onAborted && A4.controller.off("terminated", A4.controller.onAborted), A4.controller.ended = true, this.body.push(null);
          }, onError(e4) {
            this.abort && A4.controller.off("terminated", this.abort), this.body?.destroy(e4), A4.controller.terminate(e4), i4(e4);
          }, onUpgrade(A5, e4, t5) {
            if (101 !== A5) return;
            const r3 = new a();
            for (let A6 = 0; A6 < e4.length; A6 += 2) r3.append(aA(e4[A6]), e4[A6 + 1].toString("latin1"), true);
            return n2({ status: A5, statusText: IA[A5], headersList: r3, socket: t5 }), true;
          } }));
        }
      })(i2, c2, t2);
      !j.has(Q2.method) && A3.status >= 200 && A3.status, null == B2 && (B2 = A3);
    }
    if (B2.urlList = [...Q2.urlList], Q2.headersList.contains("range", true) && (B2.rangeRequested = true), B2.requestIncludesCredentials = c2, 407 === B2.status) return "no-window" === o2.window ? r() : S(A2) ? s(A2) : r("proxy authentication required");
    if (421 === B2.status && !t2 && (null == o2.body || null != o2.body.source)) {
      if (S(A2)) return s(A2);
      A2.controller.connection.destroy(), B2 = await bA(A2, e2, true);
    }
    return B2;
  }
  A.exports = { fetch: function(A2, e2 = void 0) {
    cA.argumentLengthCheck(arguments, 1, "globalThis.fetch");
    let t2, r2 = m();
    try {
      t2 = new Q(A2, e2);
    } catch (A3) {
      return r2.reject(A3), r2.promise;
    }
    const s2 = t2[P];
    if (t2.signal.aborted) return yA(r2, s2, null, t2.signal.reason), r2.promise;
    const o2 = s2.client.globalObject;
    "ServiceWorkerGlobalScope" === o2?.constructor?.name && (s2.serviceWorkers = "none");
    let n2 = null, a2 = false, g2 = null;
    return oA(t2.signal, () => {
      a2 = true, Z(null != g2), g2.abort(t2.signal.reason);
      const A3 = n2?.deref();
      yA(r2, s2, A3, t2.signal.reason);
    }), g2 = DA({ request: s2, processResponseEndOfBody: dA, processResponse: (A3) => {
      a2 || (A3.aborted ? yA(r2, s2, n2, g2.serializedAbortReason) : "error" !== A3.type ? (n2 = new WeakRef(i(A3, "immutable")), r2.resolve(n2.deref()), r2 = null) : r2.reject(new TypeError("fetch failed", { cause: A3.error })));
    }, dispatcher: t2[q] }), r2.promise;
  }, Fetch: uA, fetching: DA, finalizeAndReportTiming: fA };
}