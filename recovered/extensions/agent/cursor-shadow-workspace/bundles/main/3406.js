// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3406 range:332264..354819
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3406: (e2, A2, t2) => {
    "use strict";
    const { Response: n2, makeNetworkError: r2, makeAppropriateNetworkError: o2, filterResponse: s, makeResponse: a } = t2(1099), { Headers: i } = t2(2932), { Request: c, makeRequest: l } = t2(2239), g = t2(3106), { bytesMatch: E, makePolicyContainer: u, clonePolicyContainer: d, requestBadPort: I, TAOCheck: h, appendRequestOriginHeader: Q, responseLocationURL: m, requestCurrentURL: C, setRequestReferrerPolicyOnRedirect: B, tryUpgradeRequestToAPotentiallyTrustworthyURL: p, createOpaqueTimingInfo: f, appendFetchMetadata: y, corsCheck: T, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: w, coarsenedSharedCurrentTime: N, createDeferredPromise: D, isBlobLike: R, sameOrigin: S, isCancelled: b, isAborted: F, isErrorLike: _, fullyReadBody: v, readableStreamClose: L, isomorphicEncode: U, urlIsLocal: M, urlIsHttpHttpsScheme: O, urlHasHttpsScheme: J } = t2(5728), { kState: Y, kHeaders: P, kGuard: G, kRealm: V } = t2(5899), x = t2(2613), { safelyExtractBody: H } = t2(7052), { redirectStatusSet: q, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: X, subresourceSet: K, DOMException: Z } = t2(6687), { kHeadersList: z } = t2(8832), $ = t2(4434), { Readable: ee, pipeline: Ae } = t2(2203), { addAbortListener: te, isErrored: ne, isReadable: re, nodeMajor: oe, nodeMinor: se } = t2(9361), { dataURLProcessor: ae, serializeAMimeType: ie } = t2(3631), { TransformStream: ce } = t2(3774), { getGlobalDispatcher: le } = t2(7362), { webidl: ge } = t2(8005), { STATUS_CODES: Ee } = t2(8611), ue = ["GET", "HEAD"];
    let de, Ie = globalThis.ReadableStream;
    class he extends $ {
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
    function Qe(e3, A3 = "other") {
      if ("error" === e3.type && e3.aborted) return;
      if (!e3.urlList?.length) return;
      const t3 = e3.urlList[0];
      let n3 = e3.timingInfo, r3 = e3.cacheState;
      O(t3) && null !== n3 && (e3.timingAllowPassed || (n3 = f({ startTime: n3.startTime }), r3 = ""), n3.endTime = N(), e3.timingInfo = n3, (function(e4, A4, t4, n4, r4) {
        (oe > 18 || 18 === oe && se >= 2) && performance.markResourceTiming(e4, A4.href, t4, n4, r4);
      })(n3, t3, A3, globalThis, r3));
    }
    function me(e3, A3, t3, n3) {
      if (n3 || (n3 = new Z("The operation was aborted.", "AbortError")), e3.reject(n3), null != A3.body && re(A3.body?.stream) && A3.body.stream.cancel(n3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      }), null == t3) return;
      const r3 = t3[Y];
      null != r3.body && re(r3.body?.stream) && r3.body.stream.cancel(n3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      });
    }
    function Ce({ request: e3, processRequestBodyChunkLength: A3, processRequestEndOfBody: t3, processResponse: n3, processResponseEndOfBody: r3, processResponseConsumeBody: o3, useParallelQueue: s2 = false, dispatcher: a2 }) {
      let i2 = null, c2 = false;
      null != e3.client && (i2 = e3.client.globalObject, c2 = e3.client.crossOriginIsolatedCapability);
      const l2 = N(c2), g2 = f({ startTime: l2 }), E2 = { controller: new he(a2), request: e3, timingInfo: g2, processRequestBodyChunkLength: A3, processRequestEndOfBody: t3, processResponse: n3, processResponseConsumeBody: o3, processResponseEndOfBody: r3, taskDestination: i2, crossOriginIsolatedCapability: c2 };
      if (x(!e3.body || e3.body.stream), "client" === e3.window && (e3.window = "Window" === e3.client?.globalObject?.constructor?.name ? e3.client : "no-window"), "client" === e3.origin && (e3.origin = e3.client?.origin), "client" === e3.policyContainer && (null != e3.client ? e3.policyContainer = d(e3.client.policyContainer) : e3.policyContainer = u()), !e3.headersList.contains("accept")) {
        const A4 = "*/*";
        e3.headersList.append("accept", A4);
      }
      return e3.headersList.contains("accept-language") || e3.headersList.append("accept-language", "*"), e3.priority, K.has(e3.destination), Be(E2).catch((e4) => {
        E2.controller.terminate(e4);
      }), E2.controller;
    }
    async function Be(e3, A3 = false) {
      const t3 = e3.request;
      let n3 = null;
      if (t3.localURLsOnly && !M(C(t3)) && (n3 = r2("local URLs only")), p(t3), "blocked" === I(t3) && (n3 = r2("bad port")), "" === t3.referrerPolicy && (t3.referrerPolicy = t3.policyContainer.referrerPolicy), "no-referrer" !== t3.referrer && (t3.referrer = w(t3)), null === n3 && (n3 = await (async () => {
        const A4 = C(t3);
        return S(A4, t3.url) && "basic" === t3.responseTainting || "data:" === A4.protocol || "navigate" === t3.mode || "websocket" === t3.mode ? (t3.responseTainting = "basic", await pe(e3)) : "same-origin" === t3.mode ? r2('request mode cannot be "same-origin"') : "no-cors" === t3.mode ? "follow" !== t3.redirect ? r2('redirect mode cannot be "follow" for "no-cors" request') : (t3.responseTainting = "opaque", await pe(e3)) : O(C(t3)) ? (t3.responseTainting = "cors", await Te(e3)) : r2("URL scheme must be a HTTP(S) scheme");
      })()), A3) return n3;
      0 === n3.status || n3.internalResponse || (t3.responseTainting, "basic" === t3.responseTainting ? n3 = s(n3, "basic") : "cors" === t3.responseTainting ? n3 = s(n3, "cors") : "opaque" === t3.responseTainting ? n3 = s(n3, "opaque") : x(false));
      let o3 = 0 === n3.status ? n3 : n3.internalResponse;
      if (0 === o3.urlList.length && o3.urlList.push(...t3.urlList), t3.timingAllowFailed || (n3.timingAllowPassed = true), "opaque" === n3.type && 206 === o3.status && o3.rangeRequested && !t3.headers.contains("range") && (n3 = o3 = r2()), 0 === n3.status || "HEAD" !== t3.method && "CONNECT" !== t3.method && !W.includes(o3.status) || (o3.body = null, e3.controller.dump = true), t3.integrity) {
        const A4 = (A5) => ye(e3, r2(A5));
        if ("opaque" === t3.responseTainting || null == n3.body) return void A4(n3.error);
        const o4 = (r3) => {
          E(r3, t3.integrity) ? (n3.body = H(r3)[0], ye(e3, n3)) : A4("integrity mismatch");
        };
        await v(n3.body, o4, A4);
      } else ye(e3, n3);
    }
    function pe(e3) {
      if (b(e3) && 0 === e3.request.redirectCount) return Promise.resolve(o2(e3));
      const { request: A3 } = e3, { protocol: n3 } = C(A3);
      switch (n3) {
        case "about:":
          return Promise.resolve(r2("about scheme is not supported"));
        case "blob:": {
          de || (de = t2(181).resolveObjectURL);
          const e4 = C(A3);
          if (0 !== e4.search.length) return Promise.resolve(r2("NetworkError when attempting to fetch resource."));
          const n4 = de(e4.toString());
          if ("GET" !== A3.method || !R(n4)) return Promise.resolve(r2("invalid method"));
          const o3 = H(n4), s2 = o3[0], i2 = U(`${s2.length}`), c2 = o3[1] ?? "", l2 = a({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: i2 }], ["content-type", { name: "Content-Type", value: c2 }]] });
          return l2.body = s2, Promise.resolve(l2);
        }
        case "data:": {
          const e4 = C(A3), t3 = ae(e4);
          if ("failure" === t3) return Promise.resolve(r2("failed to fetch the data URL"));
          const n4 = ie(t3.mimeType);
          return Promise.resolve(a({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: n4 }]], body: H(t3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(r2("not implemented... yet..."));
        case "http:":
        case "https:":
          return Te(e3).catch((e4) => r2(e4));
        default:
          return Promise.resolve(r2("unknown scheme"));
      }
    }
    function fe(e3, A3) {
      e3.request.done = true, null != e3.processResponseDone && queueMicrotask(() => e3.processResponseDone(A3));
    }
    function ye(e3, A3) {
      "error" === A3.type && (A3.urlList = [e3.request.urlList[0]], A3.timingInfo = f({ startTime: e3.timingInfo.startTime }));
      const t3 = () => {
        e3.request.done = true, null != e3.processResponseEndOfBody && queueMicrotask(() => e3.processResponseEndOfBody(A3));
      };
      if (null != e3.processResponse && queueMicrotask(() => e3.processResponse(A3)), null == A3.body) t3();
      else {
        const e4 = (e5, A4) => {
          A4.enqueue(e5);
        }, n3 = new ce({ start() {
        }, transform: e4, flush: t3 }, { size: () => 1 }, { size: () => 1 });
        A3.body = { stream: A3.body.stream.pipeThrough(n3) };
      }
      if (null != e3.processResponseConsumeBody) {
        const t4 = (t5) => e3.processResponseConsumeBody(A3, t5), n3 = (t5) => e3.processResponseConsumeBody(A3, t5);
        return null != A3.body ? v(A3.body, t4, n3) : (queueMicrotask(() => t4(null)), Promise.resolve());
      }
    }
    async function Te(e3) {
      const A3 = e3.request;
      let t3 = null, n3 = null;
      const o3 = e3.timingInfo;
      if (A3.serviceWorkers, null === t3) {
        if ("follow" === A3.redirect && (A3.serviceWorkers = "none"), n3 = t3 = await ke(e3), "cors" === A3.responseTainting && "failure" === T(A3, t3)) return r2("cors failure");
        "failure" === h(A3, t3) && (A3.timingAllowFailed = true);
      }
      return "opaque" !== A3.responseTainting && "opaque" !== t3.type || "blocked" !== k(A3.origin, A3.client, A3.destination, n3) ? (q.has(n3.status) && ("manual" !== A3.redirect && e3.controller.connection.destroy(), "error" === A3.redirect ? t3 = r2("unexpected redirect") : "manual" === A3.redirect ? t3 = n3 : "follow" === A3.redirect ? t3 = await (function(e4, A4) {
        const t4 = e4.request, n4 = A4.internalResponse ? A4.internalResponse : A4;
        let o4;
        try {
          if (o4 = m(n4, C(t4).hash), null == o4) return A4;
        } catch (e5) {
          return Promise.resolve(r2(e5));
        }
        if (!O(o4)) return Promise.resolve(r2("URL scheme must be a HTTP(S) scheme"));
        if (20 === t4.redirectCount) return Promise.resolve(r2("redirect count exceeded"));
        if (t4.redirectCount += 1, "cors" === t4.mode && (o4.username || o4.password) && !S(t4, o4)) return Promise.resolve(r2('cross origin not allowed for request mode "cors"'));
        if ("cors" === t4.responseTainting && (o4.username || o4.password)) return Promise.resolve(r2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n4.status && null != t4.body && null == t4.body.source) return Promise.resolve(r2());
        if ([301, 302].includes(n4.status) && "POST" === t4.method || 303 === n4.status && !ue.includes(t4.method)) {
          t4.method = "GET", t4.body = null;
          for (const e5 of X) t4.headersList.delete(e5);
        }
        S(C(t4), o4) || (t4.headersList.delete("authorization"), t4.headersList.delete("proxy-authorization", true), t4.headersList.delete("cookie"), t4.headersList.delete("host"));
        null != t4.body && (x(null != t4.body.source), t4.body = H(t4.body.source)[0]);
        const s2 = e4.timingInfo;
        s2.redirectEndTime = s2.postRedirectStartTime = N(e4.crossOriginIsolatedCapability), 0 === s2.redirectStartTime && (s2.redirectStartTime = s2.startTime);
        return t4.urlList.push(o4), B(t4, n4), Be(e4, true);
      })(e3, t3) : x(false)), t3.timingInfo = o3, t3) : r2("blocked");
    }
    async function ke(e3, A3 = false, n3 = false) {
      const s2 = e3.request;
      let c2 = null, E2 = null, u2 = null;
      "no-window" === s2.window && "error" === s2.redirect ? (c2 = e3, E2 = s2) : (E2 = l(s2), c2 = { ...e3 }, c2.request = E2);
      const d2 = "include" === s2.credentials || "same-origin" === s2.credentials && "basic" === s2.responseTainting, I2 = E2.body ? E2.body.length : null;
      let h2 = null;
      if (null == E2.body && ["POST", "PUT"].includes(E2.method) && (h2 = "0"), null != I2 && (h2 = U(`${I2}`)), null != h2 && E2.headersList.append("content-length", h2), null != I2 && E2.keepalive, E2.referrer instanceof URL && E2.headersList.append("referer", U(E2.referrer.href)), Q(E2), y(E2), E2.headersList.contains("user-agent") || E2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === E2.cache && (E2.headersList.contains("if-modified-since") || E2.headersList.contains("if-none-match") || E2.headersList.contains("if-unmodified-since") || E2.headersList.contains("if-match") || E2.headersList.contains("if-range")) && (E2.cache = "no-store"), "no-cache" !== E2.cache || E2.preventNoCacheCacheControlHeaderModification || E2.headersList.contains("cache-control") || E2.headersList.append("cache-control", "max-age=0"), "no-store" !== E2.cache && "reload" !== E2.cache || (E2.headersList.contains("pragma") || E2.headersList.append("pragma", "no-cache"), E2.headersList.contains("cache-control") || E2.headersList.append("cache-control", "no-cache")), E2.headersList.contains("range") && E2.headersList.append("accept-encoding", "identity"), E2.headersList.contains("accept-encoding") || (J(C(E2)) ? E2.headersList.append("accept-encoding", "br, gzip, deflate") : E2.headersList.append("accept-encoding", "gzip, deflate")), E2.headersList.delete("host"), E2.cache = "no-store", "no-store" !== E2.mode && E2.mode, null == u2) {
        if ("only-if-cached" === E2.mode) return r2("only if cached");
        const e4 = await (async function(e5) {
          x(!e5.controller.connection || e5.controller.connection.destroyed), e5.controller.connection = { abort: null, destroyed: false, destroy(e6) {
            this.destroyed || (this.destroyed = true, this.abort?.(e6 ?? new Z("The operation was aborted.", "AbortError")));
          } };
          const A4 = e5.request;
          let n4 = null;
          const s3 = e5.timingInfo, c3 = null;
          null == c3 && (A4.cache = "no-store");
          A4.mode;
          let l2 = null;
          if (null == A4.body && e5.processRequestEndOfBody) queueMicrotask(() => e5.processRequestEndOfBody());
          else if (null != A4.body) {
            const t3 = async function* (A5) {
              b(e5) || (yield A5, e5.processRequestBodyChunkLength?.(A5.byteLength));
            }, n5 = () => {
              b(e5) || e5.processRequestEndOfBody && e5.processRequestEndOfBody();
            }, r3 = (A5) => {
              b(e5) || ("AbortError" === A5.name ? e5.controller.abort() : e5.controller.terminate(A5));
            };
            l2 = (async function* () {
              try {
                for await (const e6 of A4.body.stream) yield* t3(e6);
                n5();
              } catch (e6) {
                r3(e6);
              }
            })();
          }
          try {
            const { body: A5, status: t3, statusText: r3, headersList: o3, socket: s4 } = await h3({ body: l2 });
            if (s4) n4 = a({ status: t3, statusText: r3, headersList: o3, socket: s4 });
            else {
              const s5 = A5[Symbol.asyncIterator]();
              e5.controller.next = () => s5.next(), n4 = a({ status: t3, statusText: r3, headersList: o3 });
            }
          } catch (A5) {
            return "AbortError" === A5.name ? (e5.controller.connection.destroy(), o2(e5, A5)) : r2(A5);
          }
          const E3 = () => {
            e5.controller.resume();
          }, u3 = (A5) => {
            e5.controller.abort(A5);
          };
          Ie || (Ie = t2(3774).ReadableStream);
          const d3 = new Ie({ async start(A5) {
            e5.controller.controller = A5;
          }, async pull(e6) {
            await E3(e6);
          }, async cancel(e6) {
            await u3(e6);
          } }, { highWaterMark: 0, size: () => 1 });
          function I3(A5) {
            F(e5) ? (n4.aborted = true, re(d3) && e5.controller.controller.error(e5.controller.serializedAbortReason)) : re(d3) && e5.controller.controller.error(new TypeError("terminated", { cause: _(A5) ? A5 : void 0 })), e5.controller.connection.destroy();
          }
          return n4.body = { stream: d3 }, e5.controller.on("terminated", I3), e5.controller.resume = async () => {
            for (; ; ) {
              let A5, t3;
              try {
                const { done: t4, value: n5 } = await e5.controller.next();
                if (F(e5)) break;
                A5 = t4 ? void 0 : n5;
              } catch (n5) {
                e5.controller.ended && !s3.encodedBodySize ? A5 = void 0 : (A5 = n5, t3 = true);
              }
              if (void 0 === A5) return L(e5.controller.controller), void fe(e5, n4);
              if (s3.decodedBodySize += A5?.byteLength ?? 0, t3) return void e5.controller.terminate(A5);
              if (e5.controller.controller.enqueue(new Uint8Array(A5)), ne(d3)) return void e5.controller.terminate();
              if (!e5.controller.controller.desiredSize) return;
            }
          }, n4;
          async function h3({ body: t3 }) {
            const n5 = C(A4), r3 = e5.controller.dispatcher;
            return new Promise((o3, a2) => r3.dispatch({ path: n5.pathname + n5.search, origin: n5.origin, method: A4.method, body: e5.controller.dispatcher.isMockActive ? A4.body && (A4.body.source || A4.body.stream) : t3, headers: A4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === A4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(A5) {
              const { connection: t4 } = e5.controller;
              t4.destroyed ? A5(new Z("The operation was aborted.", "AbortError")) : (e5.controller.on("terminated", A5), this.abort = t4.abort = A5);
            }, onHeaders(e6, t4, n6, r4) {
              if (e6 < 200) return;
              let s4 = [], a3 = "";
              const c4 = new i();
              if (Array.isArray(t4)) for (let e7 = 0; e7 < t4.length; e7 += 2) {
                const A5 = t4[e7 + 0].toString("latin1"), n7 = t4[e7 + 1].toString("latin1");
                "content-encoding" === A5.toLowerCase() ? s4 = n7.toLowerCase().split(",").map((e8) => e8.trim()) : "location" === A5.toLowerCase() && (a3 = n7), c4[z].append(A5, n7);
              }
              else {
                const e7 = Object.keys(t4);
                for (const A5 of e7) {
                  const e8 = t4[A5];
                  "content-encoding" === A5.toLowerCase() ? s4 = e8.toLowerCase().split(",").map((e9) => e9.trim()).reverse() : "location" === A5.toLowerCase() && (a3 = e8), c4[z].append(A5, e8);
                }
              }
              this.body = new ee({ read: n6 });
              const l3 = [], E4 = "follow" === A4.redirect && a3 && q.has(e6);
              if ("HEAD" !== A4.method && "CONNECT" !== A4.method && !W.includes(e6) && !E4) for (const e7 of s4) if ("x-gzip" === e7 || "gzip" === e7) l3.push(g.createGunzip({ flush: g.constants.Z_SYNC_FLUSH, finishFlush: g.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e7) l3.push(g.createInflate());
              else {
                if ("br" !== e7) {
                  l3.length = 0;
                  break;
                }
                l3.push(g.createBrotliDecompress());
              }
              return o3({ status: e6, statusText: r4, headersList: c4[z], body: l3.length ? Ae(this.body, ...l3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(A5) {
              if (e5.controller.dump) return;
              const t4 = A5;
              return s3.encodedBodySize += t4.byteLength, this.body.push(t4);
            }, onComplete() {
              this.abort && e5.controller.off("terminated", this.abort), e5.controller.ended = true, this.body.push(null);
            }, onError(A5) {
              this.abort && e5.controller.off("terminated", this.abort), this.body?.destroy(A5), e5.controller.terminate(A5), a2(A5);
            }, onUpgrade(e6, A5, t4) {
              if (101 !== e6) return;
              const n6 = new i();
              for (let e7 = 0; e7 < A5.length; e7 += 2) {
                const t5 = A5[e7 + 0].toString("latin1"), r4 = A5[e7 + 1].toString("latin1");
                n6[z].append(t5, r4);
              }
              return o3({ status: e6, statusText: Ee[e6], headersList: n6[z], socket: t4 }), true;
            } }));
          }
        })(c2, d2, n3);
        !j.has(E2.method) && e4.status >= 200 && e4.status, null == u2 && (u2 = e4);
      }
      if (u2.urlList = [...E2.urlList], E2.headersList.contains("range") && (u2.rangeRequested = true), u2.requestIncludesCredentials = d2, 407 === u2.status) return "no-window" === s2.window ? r2() : b(e3) ? o2(e3) : r2("proxy authentication required");
      if (421 === u2.status && !n3 && (null == s2.body || null != s2.body.source)) {
        if (b(e3)) return o2(e3);
        e3.controller.connection.destroy(), u2 = await ke(e3, A3, true);
      }
      return u2;
    }
    e2.exports = { fetch: function(e3, A3 = {}) {
      ge.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const t3 = D();
      let r3;
      try {
        r3 = new c(e3, A3);
      } catch (e4) {
        return t3.reject(e4), t3.promise;
      }
      const o3 = r3[Y];
      if (r3.signal.aborted) return me(t3, o3, null, r3.signal.reason), t3.promise;
      const s2 = o3.client.globalObject;
      "ServiceWorkerGlobalScope" === s2?.constructor?.name && (o3.serviceWorkers = "none");
      let a2 = null, i2 = false, l2 = null;
      return te(r3.signal, () => {
        i2 = true, x(null != l2), l2.abort(r3.signal.reason), me(t3, o3, a2, r3.signal.reason);
      }), l2 = Ce({ request: o3, processResponseEndOfBody: (e4) => Qe(e4, "fetch"), processResponse: (e4) => i2 ? Promise.resolve() : e4.aborted ? (me(t3, o3, a2, l2.serializedAbortReason), Promise.resolve()) : "error" === e4.type ? (t3.reject(Object.assign(new TypeError("fetch failed"), { cause: e4.error })), Promise.resolve()) : (a2 = new n2(), a2[Y] = e4, a2[V] = null, a2[P][z] = e4.headersList, a2[P][G] = "immutable", a2[P][V] = null, void t3.resolve(a2)), dispatcher: A3.dispatcher ?? le() }), t3.promise;
    }, Fetch: he, fetching: Ce, finalizeAndReportTiming: Qe };
  }