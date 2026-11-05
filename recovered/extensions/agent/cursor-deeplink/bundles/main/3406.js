// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3406 range:428686..451241
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3406: (e2, t2, A2) => {
    "use strict";
    const { Response: n2, makeNetworkError: r2, makeAppropriateNetworkError: o2, filterResponse: s, makeResponse: i } = A2(1099), { Headers: a } = A2(2932), { Request: c, makeRequest: l } = A2(2239), u = A2(3106), { bytesMatch: g, makePolicyContainer: E, clonePolicyContainer: h, requestBadPort: d, TAOCheck: I, appendRequestOriginHeader: B, responseLocationURL: Q, requestCurrentURL: f, setRequestReferrerPolicyOnRedirect: C, tryUpgradeRequestToAPotentiallyTrustworthyURL: p, createOpaqueTimingInfo: m, appendFetchMetadata: y, corsCheck: w, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: b, coarsenedSharedCurrentTime: N, createDeferredPromise: T, isBlobLike: D, sameOrigin: S, isCancelled: R, isAborted: F, isErrorLike: v, fullyReadBody: M, readableStreamClose: U, isomorphicEncode: L, urlIsLocal: _, urlIsHttpHttpsScheme: J, urlHasHttpsScheme: O } = A2(5728), { kState: Y, kHeaders: G, kGuard: P, kRealm: V } = A2(5899), x = A2(2613), { safelyExtractBody: H } = A2(7052), { redirectStatusSet: q, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: K, subresourceSet: X, DOMException: Z } = A2(6687), { kHeadersList: z } = A2(8832), $ = A2(4434), { Readable: ee, pipeline: te } = A2(2203), { addAbortListener: Ae, isErrored: ne, isReadable: re, nodeMajor: oe, nodeMinor: se } = A2(9361), { dataURLProcessor: ie, serializeAMimeType: ae } = A2(3631), { TransformStream: ce } = A2(3774), { getGlobalDispatcher: le } = A2(7362), { webidl: ue } = A2(8005), { STATUS_CODES: ge } = A2(8611), Ee = ["GET", "HEAD"];
    let he, de = globalThis.ReadableStream;
    class Ie extends $ {
      constructor(e3) {
        super(), this.dispatcher = e3, this.connection = null, this.dump = false, this.state = "ongoing", this.setMaxListeners(21);
      }
      terminate(e3) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e3), this.emit("terminated", e3));
      }
      abort(e3) {
        "ongoing" === this.state && (this.state = "aborted", e3 || (e3 = new Z("The operation was aborted.", "AbortError")), this.serializedAbortReason = e3, this.connection?.destroy(e3), this.emit("terminated", e3));
      }
    }
    function Be(e3, t3 = "other") {
      if ("error" === e3.type && e3.aborted) return;
      if (!e3.urlList?.length) return;
      const A3 = e3.urlList[0];
      let n3 = e3.timingInfo, r3 = e3.cacheState;
      J(A3) && null !== n3 && (e3.timingAllowPassed || (n3 = m({ startTime: n3.startTime }), r3 = ""), n3.endTime = N(), e3.timingInfo = n3, (function(e4, t4, A4, n4, r4) {
        (oe > 18 || 18 === oe && se >= 2) && performance.markResourceTiming(e4, t4.href, A4, n4, r4);
      })(n3, A3, t3, globalThis, r3));
    }
    function Qe(e3, t3, A3, n3) {
      if (n3 || (n3 = new Z("The operation was aborted.", "AbortError")), e3.reject(n3), null != t3.body && re(t3.body?.stream) && t3.body.stream.cancel(n3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      }), null == A3) return;
      const r3 = A3[Y];
      null != r3.body && re(r3.body?.stream) && r3.body.stream.cancel(n3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      });
    }
    function fe({ request: e3, processRequestBodyChunkLength: t3, processRequestEndOfBody: A3, processResponse: n3, processResponseEndOfBody: r3, processResponseConsumeBody: o3, useParallelQueue: s2 = false, dispatcher: i2 }) {
      let a2 = null, c2 = false;
      null != e3.client && (a2 = e3.client.globalObject, c2 = e3.client.crossOriginIsolatedCapability);
      const l2 = N(c2), u2 = m({ startTime: l2 }), g2 = { controller: new Ie(i2), request: e3, timingInfo: u2, processRequestBodyChunkLength: t3, processRequestEndOfBody: A3, processResponse: n3, processResponseConsumeBody: o3, processResponseEndOfBody: r3, taskDestination: a2, crossOriginIsolatedCapability: c2 };
      if (x(!e3.body || e3.body.stream), "client" === e3.window && (e3.window = "Window" === e3.client?.globalObject?.constructor?.name ? e3.client : "no-window"), "client" === e3.origin && (e3.origin = e3.client?.origin), "client" === e3.policyContainer && (null != e3.client ? e3.policyContainer = h(e3.client.policyContainer) : e3.policyContainer = E()), !e3.headersList.contains("accept")) {
        const t4 = "*/*";
        e3.headersList.append("accept", t4);
      }
      return e3.headersList.contains("accept-language") || e3.headersList.append("accept-language", "*"), e3.priority, X.has(e3.destination), Ce(g2).catch((e4) => {
        g2.controller.terminate(e4);
      }), g2.controller;
    }
    async function Ce(e3, t3 = false) {
      const A3 = e3.request;
      let n3 = null;
      if (A3.localURLsOnly && !_(f(A3)) && (n3 = r2("local URLs only")), p(A3), "blocked" === d(A3) && (n3 = r2("bad port")), "" === A3.referrerPolicy && (A3.referrerPolicy = A3.policyContainer.referrerPolicy), "no-referrer" !== A3.referrer && (A3.referrer = b(A3)), null === n3 && (n3 = await (async () => {
        const t4 = f(A3);
        return S(t4, A3.url) && "basic" === A3.responseTainting || "data:" === t4.protocol || "navigate" === A3.mode || "websocket" === A3.mode ? (A3.responseTainting = "basic", await pe(e3)) : "same-origin" === A3.mode ? r2('request mode cannot be "same-origin"') : "no-cors" === A3.mode ? "follow" !== A3.redirect ? r2('redirect mode cannot be "follow" for "no-cors" request') : (A3.responseTainting = "opaque", await pe(e3)) : J(f(A3)) ? (A3.responseTainting = "cors", await we(e3)) : r2("URL scheme must be a HTTP(S) scheme");
      })()), t3) return n3;
      0 === n3.status || n3.internalResponse || (A3.responseTainting, "basic" === A3.responseTainting ? n3 = s(n3, "basic") : "cors" === A3.responseTainting ? n3 = s(n3, "cors") : "opaque" === A3.responseTainting ? n3 = s(n3, "opaque") : x(false));
      let o3 = 0 === n3.status ? n3 : n3.internalResponse;
      if (0 === o3.urlList.length && o3.urlList.push(...A3.urlList), A3.timingAllowFailed || (n3.timingAllowPassed = true), "opaque" === n3.type && 206 === o3.status && o3.rangeRequested && !A3.headers.contains("range") && (n3 = o3 = r2()), 0 === n3.status || "HEAD" !== A3.method && "CONNECT" !== A3.method && !W.includes(o3.status) || (o3.body = null, e3.controller.dump = true), A3.integrity) {
        const t4 = (t5) => ye(e3, r2(t5));
        if ("opaque" === A3.responseTainting || null == n3.body) return void t4(n3.error);
        const o4 = (r3) => {
          g(r3, A3.integrity) ? (n3.body = H(r3)[0], ye(e3, n3)) : t4("integrity mismatch");
        };
        await M(n3.body, o4, t4);
      } else ye(e3, n3);
    }
    function pe(e3) {
      if (R(e3) && 0 === e3.request.redirectCount) return Promise.resolve(o2(e3));
      const { request: t3 } = e3, { protocol: n3 } = f(t3);
      switch (n3) {
        case "about:":
          return Promise.resolve(r2("about scheme is not supported"));
        case "blob:": {
          he || (he = A2(181).resolveObjectURL);
          const e4 = f(t3);
          if (0 !== e4.search.length) return Promise.resolve(r2("NetworkError when attempting to fetch resource."));
          const n4 = he(e4.toString());
          if ("GET" !== t3.method || !D(n4)) return Promise.resolve(r2("invalid method"));
          const o3 = H(n4), s2 = o3[0], a2 = L(`${s2.length}`), c2 = o3[1] ?? "", l2 = i({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: a2 }], ["content-type", { name: "Content-Type", value: c2 }]] });
          return l2.body = s2, Promise.resolve(l2);
        }
        case "data:": {
          const e4 = f(t3), A3 = ie(e4);
          if ("failure" === A3) return Promise.resolve(r2("failed to fetch the data URL"));
          const n4 = ae(A3.mimeType);
          return Promise.resolve(i({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: n4 }]], body: H(A3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(r2("not implemented... yet..."));
        case "http:":
        case "https:":
          return we(e3).catch((e4) => r2(e4));
        default:
          return Promise.resolve(r2("unknown scheme"));
      }
    }
    function me(e3, t3) {
      e3.request.done = true, null != e3.processResponseDone && queueMicrotask(() => e3.processResponseDone(t3));
    }
    function ye(e3, t3) {
      "error" === t3.type && (t3.urlList = [e3.request.urlList[0]], t3.timingInfo = m({ startTime: e3.timingInfo.startTime }));
      const A3 = () => {
        e3.request.done = true, null != e3.processResponseEndOfBody && queueMicrotask(() => e3.processResponseEndOfBody(t3));
      };
      if (null != e3.processResponse && queueMicrotask(() => e3.processResponse(t3)), null == t3.body) A3();
      else {
        const e4 = (e5, t4) => {
          t4.enqueue(e5);
        }, n3 = new ce({ start() {
        }, transform: e4, flush: A3 }, { size: () => 1 }, { size: () => 1 });
        t3.body = { stream: t3.body.stream.pipeThrough(n3) };
      }
      if (null != e3.processResponseConsumeBody) {
        const A4 = (A5) => e3.processResponseConsumeBody(t3, A5), n3 = (A5) => e3.processResponseConsumeBody(t3, A5);
        return null != t3.body ? M(t3.body, A4, n3) : (queueMicrotask(() => A4(null)), Promise.resolve());
      }
    }
    async function we(e3) {
      const t3 = e3.request;
      let A3 = null, n3 = null;
      const o3 = e3.timingInfo;
      if (t3.serviceWorkers, null === A3) {
        if ("follow" === t3.redirect && (t3.serviceWorkers = "none"), n3 = A3 = await ke(e3), "cors" === t3.responseTainting && "failure" === w(t3, A3)) return r2("cors failure");
        "failure" === I(t3, A3) && (t3.timingAllowFailed = true);
      }
      return "opaque" !== t3.responseTainting && "opaque" !== A3.type || "blocked" !== k(t3.origin, t3.client, t3.destination, n3) ? (q.has(n3.status) && ("manual" !== t3.redirect && e3.controller.connection.destroy(), "error" === t3.redirect ? A3 = r2("unexpected redirect") : "manual" === t3.redirect ? A3 = n3 : "follow" === t3.redirect ? A3 = await (function(e4, t4) {
        const A4 = e4.request, n4 = t4.internalResponse ? t4.internalResponse : t4;
        let o4;
        try {
          if (o4 = Q(n4, f(A4).hash), null == o4) return t4;
        } catch (e5) {
          return Promise.resolve(r2(e5));
        }
        if (!J(o4)) return Promise.resolve(r2("URL scheme must be a HTTP(S) scheme"));
        if (20 === A4.redirectCount) return Promise.resolve(r2("redirect count exceeded"));
        if (A4.redirectCount += 1, "cors" === A4.mode && (o4.username || o4.password) && !S(A4, o4)) return Promise.resolve(r2('cross origin not allowed for request mode "cors"'));
        if ("cors" === A4.responseTainting && (o4.username || o4.password)) return Promise.resolve(r2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n4.status && null != A4.body && null == A4.body.source) return Promise.resolve(r2());
        if ([301, 302].includes(n4.status) && "POST" === A4.method || 303 === n4.status && !Ee.includes(A4.method)) {
          A4.method = "GET", A4.body = null;
          for (const e5 of K) A4.headersList.delete(e5);
        }
        S(f(A4), o4) || (A4.headersList.delete("authorization"), A4.headersList.delete("proxy-authorization", true), A4.headersList.delete("cookie"), A4.headersList.delete("host"));
        null != A4.body && (x(null != A4.body.source), A4.body = H(A4.body.source)[0]);
        const s2 = e4.timingInfo;
        s2.redirectEndTime = s2.postRedirectStartTime = N(e4.crossOriginIsolatedCapability), 0 === s2.redirectStartTime && (s2.redirectStartTime = s2.startTime);
        return A4.urlList.push(o4), C(A4, n4), Ce(e4, true);
      })(e3, A3) : x(false)), A3.timingInfo = o3, A3) : r2("blocked");
    }
    async function ke(e3, t3 = false, n3 = false) {
      const s2 = e3.request;
      let c2 = null, g2 = null, E2 = null;
      "no-window" === s2.window && "error" === s2.redirect ? (c2 = e3, g2 = s2) : (g2 = l(s2), c2 = { ...e3 }, c2.request = g2);
      const h2 = "include" === s2.credentials || "same-origin" === s2.credentials && "basic" === s2.responseTainting, d2 = g2.body ? g2.body.length : null;
      let I2 = null;
      if (null == g2.body && ["POST", "PUT"].includes(g2.method) && (I2 = "0"), null != d2 && (I2 = L(`${d2}`)), null != I2 && g2.headersList.append("content-length", I2), null != d2 && g2.keepalive, g2.referrer instanceof URL && g2.headersList.append("referer", L(g2.referrer.href)), B(g2), y(g2), g2.headersList.contains("user-agent") || g2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === g2.cache && (g2.headersList.contains("if-modified-since") || g2.headersList.contains("if-none-match") || g2.headersList.contains("if-unmodified-since") || g2.headersList.contains("if-match") || g2.headersList.contains("if-range")) && (g2.cache = "no-store"), "no-cache" !== g2.cache || g2.preventNoCacheCacheControlHeaderModification || g2.headersList.contains("cache-control") || g2.headersList.append("cache-control", "max-age=0"), "no-store" !== g2.cache && "reload" !== g2.cache || (g2.headersList.contains("pragma") || g2.headersList.append("pragma", "no-cache"), g2.headersList.contains("cache-control") || g2.headersList.append("cache-control", "no-cache")), g2.headersList.contains("range") && g2.headersList.append("accept-encoding", "identity"), g2.headersList.contains("accept-encoding") || (O(f(g2)) ? g2.headersList.append("accept-encoding", "br, gzip, deflate") : g2.headersList.append("accept-encoding", "gzip, deflate")), g2.headersList.delete("host"), g2.cache = "no-store", "no-store" !== g2.mode && g2.mode, null == E2) {
        if ("only-if-cached" === g2.mode) return r2("only if cached");
        const e4 = await (async function(e5) {
          x(!e5.controller.connection || e5.controller.connection.destroyed), e5.controller.connection = { abort: null, destroyed: false, destroy(e6) {
            this.destroyed || (this.destroyed = true, this.abort?.(e6 ?? new Z("The operation was aborted.", "AbortError")));
          } };
          const t4 = e5.request;
          let n4 = null;
          const s3 = e5.timingInfo, c3 = null;
          null == c3 && (t4.cache = "no-store");
          t4.mode;
          let l2 = null;
          if (null == t4.body && e5.processRequestEndOfBody) queueMicrotask(() => e5.processRequestEndOfBody());
          else if (null != t4.body) {
            const A3 = async function* (t5) {
              R(e5) || (yield t5, e5.processRequestBodyChunkLength?.(t5.byteLength));
            }, n5 = () => {
              R(e5) || e5.processRequestEndOfBody && e5.processRequestEndOfBody();
            }, r3 = (t5) => {
              R(e5) || ("AbortError" === t5.name ? e5.controller.abort() : e5.controller.terminate(t5));
            };
            l2 = (async function* () {
              try {
                for await (const e6 of t4.body.stream) yield* A3(e6);
                n5();
              } catch (e6) {
                r3(e6);
              }
            })();
          }
          try {
            const { body: t5, status: A3, statusText: r3, headersList: o3, socket: s4 } = await I3({ body: l2 });
            if (s4) n4 = i({ status: A3, statusText: r3, headersList: o3, socket: s4 });
            else {
              const s5 = t5[Symbol.asyncIterator]();
              e5.controller.next = () => s5.next(), n4 = i({ status: A3, statusText: r3, headersList: o3 });
            }
          } catch (t5) {
            return "AbortError" === t5.name ? (e5.controller.connection.destroy(), o2(e5, t5)) : r2(t5);
          }
          const g3 = () => {
            e5.controller.resume();
          }, E3 = (t5) => {
            e5.controller.abort(t5);
          };
          de || (de = A2(3774).ReadableStream);
          const h3 = new de({ async start(t5) {
            e5.controller.controller = t5;
          }, async pull(e6) {
            await g3(e6);
          }, async cancel(e6) {
            await E3(e6);
          } }, { highWaterMark: 0, size: () => 1 });
          function d3(t5) {
            F(e5) ? (n4.aborted = true, re(h3) && e5.controller.controller.error(e5.controller.serializedAbortReason)) : re(h3) && e5.controller.controller.error(new TypeError("terminated", { cause: v(t5) ? t5 : void 0 })), e5.controller.connection.destroy();
          }
          return n4.body = { stream: h3 }, e5.controller.on("terminated", d3), e5.controller.resume = async () => {
            for (; ; ) {
              let t5, A3;
              try {
                const { done: A4, value: n5 } = await e5.controller.next();
                if (F(e5)) break;
                t5 = A4 ? void 0 : n5;
              } catch (n5) {
                e5.controller.ended && !s3.encodedBodySize ? t5 = void 0 : (t5 = n5, A3 = true);
              }
              if (void 0 === t5) return U(e5.controller.controller), void me(e5, n4);
              if (s3.decodedBodySize += t5?.byteLength ?? 0, A3) return void e5.controller.terminate(t5);
              if (e5.controller.controller.enqueue(new Uint8Array(t5)), ne(h3)) return void e5.controller.terminate();
              if (!e5.controller.controller.desiredSize) return;
            }
          }, n4;
          async function I3({ body: A3 }) {
            const n5 = f(t4), r3 = e5.controller.dispatcher;
            return new Promise((o3, i2) => r3.dispatch({ path: n5.pathname + n5.search, origin: n5.origin, method: t4.method, body: e5.controller.dispatcher.isMockActive ? t4.body && (t4.body.source || t4.body.stream) : A3, headers: t4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === t4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(t5) {
              const { connection: A4 } = e5.controller;
              A4.destroyed ? t5(new Z("The operation was aborted.", "AbortError")) : (e5.controller.on("terminated", t5), this.abort = A4.abort = t5);
            }, onHeaders(e6, A4, n6, r4) {
              if (e6 < 200) return;
              let s4 = [], i3 = "";
              const c4 = new a();
              if (Array.isArray(A4)) for (let e7 = 0; e7 < A4.length; e7 += 2) {
                const t5 = A4[e7 + 0].toString("latin1"), n7 = A4[e7 + 1].toString("latin1");
                "content-encoding" === t5.toLowerCase() ? s4 = n7.toLowerCase().split(",").map((e8) => e8.trim()) : "location" === t5.toLowerCase() && (i3 = n7), c4[z].append(t5, n7);
              }
              else {
                const e7 = Object.keys(A4);
                for (const t5 of e7) {
                  const e8 = A4[t5];
                  "content-encoding" === t5.toLowerCase() ? s4 = e8.toLowerCase().split(",").map((e9) => e9.trim()).reverse() : "location" === t5.toLowerCase() && (i3 = e8), c4[z].append(t5, e8);
                }
              }
              this.body = new ee({ read: n6 });
              const l3 = [], g4 = "follow" === t4.redirect && i3 && q.has(e6);
              if ("HEAD" !== t4.method && "CONNECT" !== t4.method && !W.includes(e6) && !g4) for (const e7 of s4) if ("x-gzip" === e7 || "gzip" === e7) l3.push(u.createGunzip({ flush: u.constants.Z_SYNC_FLUSH, finishFlush: u.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e7) l3.push(u.createInflate());
              else {
                if ("br" !== e7) {
                  l3.length = 0;
                  break;
                }
                l3.push(u.createBrotliDecompress());
              }
              return o3({ status: e6, statusText: r4, headersList: c4[z], body: l3.length ? te(this.body, ...l3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(t5) {
              if (e5.controller.dump) return;
              const A4 = t5;
              return s3.encodedBodySize += A4.byteLength, this.body.push(A4);
            }, onComplete() {
              this.abort && e5.controller.off("terminated", this.abort), e5.controller.ended = true, this.body.push(null);
            }, onError(t5) {
              this.abort && e5.controller.off("terminated", this.abort), this.body?.destroy(t5), e5.controller.terminate(t5), i2(t5);
            }, onUpgrade(e6, t5, A4) {
              if (101 !== e6) return;
              const n6 = new a();
              for (let e7 = 0; e7 < t5.length; e7 += 2) {
                const A5 = t5[e7 + 0].toString("latin1"), r4 = t5[e7 + 1].toString("latin1");
                n6[z].append(A5, r4);
              }
              return o3({ status: e6, statusText: ge[e6], headersList: n6[z], socket: A4 }), true;
            } }));
          }
        })(c2, h2, n3);
        !j.has(g2.method) && e4.status >= 200 && e4.status, null == E2 && (E2 = e4);
      }
      if (E2.urlList = [...g2.urlList], g2.headersList.contains("range") && (E2.rangeRequested = true), E2.requestIncludesCredentials = h2, 407 === E2.status) return "no-window" === s2.window ? r2() : R(e3) ? o2(e3) : r2("proxy authentication required");
      if (421 === E2.status && !n3 && (null == s2.body || null != s2.body.source)) {
        if (R(e3)) return o2(e3);
        e3.controller.connection.destroy(), E2 = await ke(e3, t3, true);
      }
      return E2;
    }
    e2.exports = { fetch: function(e3, t3 = {}) {
      ue.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const A3 = T();
      let r3;
      try {
        r3 = new c(e3, t3);
      } catch (e4) {
        return A3.reject(e4), A3.promise;
      }
      const o3 = r3[Y];
      if (r3.signal.aborted) return Qe(A3, o3, null, r3.signal.reason), A3.promise;
      const s2 = o3.client.globalObject;
      "ServiceWorkerGlobalScope" === s2?.constructor?.name && (o3.serviceWorkers = "none");
      let i2 = null, a2 = false, l2 = null;
      return Ae(r3.signal, () => {
        a2 = true, x(null != l2), l2.abort(r3.signal.reason), Qe(A3, o3, i2, r3.signal.reason);
      }), l2 = fe({ request: o3, processResponseEndOfBody: (e4) => Be(e4, "fetch"), processResponse: (e4) => a2 ? Promise.resolve() : e4.aborted ? (Qe(A3, o3, i2, l2.serializedAbortReason), Promise.resolve()) : "error" === e4.type ? (A3.reject(Object.assign(new TypeError("fetch failed"), { cause: e4.error })), Promise.resolve()) : (i2 = new n2(), i2[Y] = e4, i2[V] = null, i2[G][z] = e4.headersList, i2[G][P] = "immutable", i2[G][V] = null, void A3.resolve(i2)), dispatcher: t3.dispatcher ?? le() }), A3.promise;
    }, Fetch: Ie, fetching: fe, finalizeAndReportTiming: Be };
  }