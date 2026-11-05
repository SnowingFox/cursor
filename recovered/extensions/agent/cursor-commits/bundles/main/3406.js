// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3406 range:332489..355053
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3406: (e2, n2, a2) => {
    "use strict";
    const { Response: t2, makeNetworkError: s2, makeAppropriateNetworkError: o2, filterResponse: r2, makeResponse: i2 } = a2(1099), { Headers: A } = a2(2932), { Request: l, makeRequest: c } = a2(2239), m = a2(3106), { bytesMatch: d, makePolicyContainer: g, clonePolicyContainer: u, requestBadPort: E, TAOCheck: p, appendRequestOriginHeader: T, responseLocationURL: k, requestCurrentURL: I, setRequestReferrerPolicyOnRedirect: h, tryUpgradeRequestToAPotentiallyTrustworthyURL: _, createOpaqueTimingInfo: C, appendFetchMetadata: f, corsCheck: B, crossOriginResourcePolicyCheck: Q, determineRequestsReferrer: y, coarsenedSharedCurrentTime: R, createDeferredPromise: N, isBlobLike: v, sameOrigin: S, isCancelled: D, isAborted: w, isErrorLike: b, fullyReadBody: M, readableStreamClose: F, isomorphicEncode: O, urlIsLocal: U, urlIsHttpHttpsScheme: L, urlHasHttpsScheme: P } = a2(5728), { kState: x, kHeaders: G, kGuard: Y, kRealm: J } = a2(5899), V = a2(2613), { safelyExtractBody: q } = a2(7052), { redirectStatusSet: H, nullBodyStatus: W, safeMethodsSet: K, requestBodyHeader: j, subresourceSet: X, DOMException: Z } = a2(6687), { kHeadersList: z } = a2(8832), $ = a2(4434), { Readable: ee, pipeline: ne } = a2(2203), { addAbortListener: ae, isErrored: te, isReadable: se, nodeMajor: oe, nodeMinor: re } = a2(9361), { dataURLProcessor: ie, serializeAMimeType: Ae } = a2(3631), { TransformStream: le } = a2(3774), { getGlobalDispatcher: ce } = a2(7362), { webidl: me } = a2(8005), { STATUS_CODES: de } = a2(8611), ge = ["GET", "HEAD"];
    let ue, Ee = globalThis.ReadableStream;
    class pe extends $ {
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
    function Te(e3, n3 = "other") {
      if ("error" === e3.type && e3.aborted) return;
      if (!e3.urlList?.length) return;
      const a3 = e3.urlList[0];
      let t3 = e3.timingInfo, s3 = e3.cacheState;
      L(a3) && null !== t3 && (e3.timingAllowPassed || (t3 = C({ startTime: t3.startTime }), s3 = ""), t3.endTime = R(), e3.timingInfo = t3, (function(e4, n4, a4, t4, s4) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e4, n4.href, a4, t4, s4);
      })(t3, a3, n3, globalThis, s3));
    }
    function ke(e3, n3, a3, t3) {
      if (t3 || (t3 = new Z("The operation was aborted.", "AbortError")), e3.reject(t3), null != n3.body && se(n3.body?.stream) && n3.body.stream.cancel(t3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      }), null == a3) return;
      const s3 = a3[x];
      null != s3.body && se(s3.body?.stream) && s3.body.stream.cancel(t3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      });
    }
    function Ie({ request: e3, processRequestBodyChunkLength: n3, processRequestEndOfBody: a3, processResponse: t3, processResponseEndOfBody: s3, processResponseConsumeBody: o3, useParallelQueue: r3 = false, dispatcher: i3 }) {
      let A2 = null, l2 = false;
      null != e3.client && (A2 = e3.client.globalObject, l2 = e3.client.crossOriginIsolatedCapability);
      const c2 = R(l2), m2 = C({ startTime: c2 }), d2 = { controller: new pe(i3), request: e3, timingInfo: m2, processRequestBodyChunkLength: n3, processRequestEndOfBody: a3, processResponse: t3, processResponseConsumeBody: o3, processResponseEndOfBody: s3, taskDestination: A2, crossOriginIsolatedCapability: l2 };
      if (V(!e3.body || e3.body.stream), "client" === e3.window && (e3.window = "Window" === e3.client?.globalObject?.constructor?.name ? e3.client : "no-window"), "client" === e3.origin && (e3.origin = e3.client?.origin), "client" === e3.policyContainer && (null != e3.client ? e3.policyContainer = u(e3.client.policyContainer) : e3.policyContainer = g()), !e3.headersList.contains("accept")) {
        const n4 = "*/*";
        e3.headersList.append("accept", n4);
      }
      return e3.headersList.contains("accept-language") || e3.headersList.append("accept-language", "*"), e3.priority, X.has(e3.destination), he(d2).catch((e4) => {
        d2.controller.terminate(e4);
      }), d2.controller;
    }
    async function he(e3, n3 = false) {
      const a3 = e3.request;
      let t3 = null;
      if (a3.localURLsOnly && !U(I(a3)) && (t3 = s2("local URLs only")), _(a3), "blocked" === E(a3) && (t3 = s2("bad port")), "" === a3.referrerPolicy && (a3.referrerPolicy = a3.policyContainer.referrerPolicy), "no-referrer" !== a3.referrer && (a3.referrer = y(a3)), null === t3 && (t3 = await (async () => {
        const n4 = I(a3);
        return S(n4, a3.url) && "basic" === a3.responseTainting || "data:" === n4.protocol || "navigate" === a3.mode || "websocket" === a3.mode ? (a3.responseTainting = "basic", await _e(e3)) : "same-origin" === a3.mode ? s2('request mode cannot be "same-origin"') : "no-cors" === a3.mode ? "follow" !== a3.redirect ? s2('redirect mode cannot be "follow" for "no-cors" request') : (a3.responseTainting = "opaque", await _e(e3)) : L(I(a3)) ? (a3.responseTainting = "cors", await Be(e3)) : s2("URL scheme must be a HTTP(S) scheme");
      })()), n3) return t3;
      0 === t3.status || t3.internalResponse || (a3.responseTainting, "basic" === a3.responseTainting ? t3 = r2(t3, "basic") : "cors" === a3.responseTainting ? t3 = r2(t3, "cors") : "opaque" === a3.responseTainting ? t3 = r2(t3, "opaque") : V(false));
      let o3 = 0 === t3.status ? t3 : t3.internalResponse;
      if (0 === o3.urlList.length && o3.urlList.push(...a3.urlList), a3.timingAllowFailed || (t3.timingAllowPassed = true), "opaque" === t3.type && 206 === o3.status && o3.rangeRequested && !a3.headers.contains("range") && (t3 = o3 = s2()), 0 === t3.status || "HEAD" !== a3.method && "CONNECT" !== a3.method && !W.includes(o3.status) || (o3.body = null, e3.controller.dump = true), a3.integrity) {
        const n4 = (n5) => fe(e3, s2(n5));
        if ("opaque" === a3.responseTainting || null == t3.body) return void n4(t3.error);
        const o4 = (s3) => {
          d(s3, a3.integrity) ? (t3.body = q(s3)[0], fe(e3, t3)) : n4("integrity mismatch");
        };
        await M(t3.body, o4, n4);
      } else fe(e3, t3);
    }
    function _e(e3) {
      if (D(e3) && 0 === e3.request.redirectCount) return Promise.resolve(o2(e3));
      const { request: n3 } = e3, { protocol: t3 } = I(n3);
      switch (t3) {
        case "about:":
          return Promise.resolve(s2("about scheme is not supported"));
        case "blob:": {
          ue || (ue = a2(181).resolveObjectURL);
          const e4 = I(n3);
          if (0 !== e4.search.length) return Promise.resolve(s2("NetworkError when attempting to fetch resource."));
          const t4 = ue(e4.toString());
          if ("GET" !== n3.method || !v(t4)) return Promise.resolve(s2("invalid method"));
          const o3 = q(t4), r3 = o3[0], A2 = O(`${r3.length}`), l2 = o3[1] ?? "", c2 = i2({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: A2 }], ["content-type", { name: "Content-Type", value: l2 }]] });
          return c2.body = r3, Promise.resolve(c2);
        }
        case "data:": {
          const e4 = I(n3), a3 = ie(e4);
          if ("failure" === a3) return Promise.resolve(s2("failed to fetch the data URL"));
          const t4 = Ae(a3.mimeType);
          return Promise.resolve(i2({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: t4 }]], body: q(a3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(s2("not implemented... yet..."));
        case "http:":
        case "https:":
          return Be(e3).catch((e4) => s2(e4));
        default:
          return Promise.resolve(s2("unknown scheme"));
      }
    }
    function Ce(e3, n3) {
      e3.request.done = true, null != e3.processResponseDone && queueMicrotask(() => e3.processResponseDone(n3));
    }
    function fe(e3, n3) {
      "error" === n3.type && (n3.urlList = [e3.request.urlList[0]], n3.timingInfo = C({ startTime: e3.timingInfo.startTime }));
      const a3 = () => {
        e3.request.done = true, null != e3.processResponseEndOfBody && queueMicrotask(() => e3.processResponseEndOfBody(n3));
      };
      if (null != e3.processResponse && queueMicrotask(() => e3.processResponse(n3)), null == n3.body) a3();
      else {
        const e4 = (e5, n4) => {
          n4.enqueue(e5);
        }, t3 = new le({ start() {
        }, transform: e4, flush: a3 }, { size: () => 1 }, { size: () => 1 });
        n3.body = { stream: n3.body.stream.pipeThrough(t3) };
      }
      if (null != e3.processResponseConsumeBody) {
        const a4 = (a5) => e3.processResponseConsumeBody(n3, a5), t3 = (a5) => e3.processResponseConsumeBody(n3, a5);
        return null != n3.body ? M(n3.body, a4, t3) : (queueMicrotask(() => a4(null)), Promise.resolve());
      }
    }
    async function Be(e3) {
      const n3 = e3.request;
      let a3 = null, t3 = null;
      const o3 = e3.timingInfo;
      if (n3.serviceWorkers, null === a3) {
        if ("follow" === n3.redirect && (n3.serviceWorkers = "none"), t3 = a3 = await Qe(e3), "cors" === n3.responseTainting && "failure" === B(n3, a3)) return s2("cors failure");
        "failure" === p(n3, a3) && (n3.timingAllowFailed = true);
      }
      return "opaque" !== n3.responseTainting && "opaque" !== a3.type || "blocked" !== Q(n3.origin, n3.client, n3.destination, t3) ? (H.has(t3.status) && ("manual" !== n3.redirect && e3.controller.connection.destroy(), "error" === n3.redirect ? a3 = s2("unexpected redirect") : "manual" === n3.redirect ? a3 = t3 : "follow" === n3.redirect ? a3 = await (function(e4, n4) {
        const a4 = e4.request, t4 = n4.internalResponse ? n4.internalResponse : n4;
        let o4;
        try {
          if (o4 = k(t4, I(a4).hash), null == o4) return n4;
        } catch (e5) {
          return Promise.resolve(s2(e5));
        }
        if (!L(o4)) return Promise.resolve(s2("URL scheme must be a HTTP(S) scheme"));
        if (20 === a4.redirectCount) return Promise.resolve(s2("redirect count exceeded"));
        if (a4.redirectCount += 1, "cors" === a4.mode && (o4.username || o4.password) && !S(a4, o4)) return Promise.resolve(s2('cross origin not allowed for request mode "cors"'));
        if ("cors" === a4.responseTainting && (o4.username || o4.password)) return Promise.resolve(s2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== t4.status && null != a4.body && null == a4.body.source) return Promise.resolve(s2());
        if ([301, 302].includes(t4.status) && "POST" === a4.method || 303 === t4.status && !ge.includes(a4.method)) {
          a4.method = "GET", a4.body = null;
          for (const e5 of j) a4.headersList.delete(e5);
        }
        S(I(a4), o4) || (a4.headersList.delete("authorization"), a4.headersList.delete("proxy-authorization", true), a4.headersList.delete("cookie"), a4.headersList.delete("host"));
        null != a4.body && (V(null != a4.body.source), a4.body = q(a4.body.source)[0]);
        const r3 = e4.timingInfo;
        r3.redirectEndTime = r3.postRedirectStartTime = R(e4.crossOriginIsolatedCapability), 0 === r3.redirectStartTime && (r3.redirectStartTime = r3.startTime);
        return a4.urlList.push(o4), h(a4, t4), he(e4, true);
      })(e3, a3) : V(false)), a3.timingInfo = o3, a3) : s2("blocked");
    }
    async function Qe(e3, n3 = false, t3 = false) {
      const r3 = e3.request;
      let l2 = null, d2 = null, g2 = null;
      "no-window" === r3.window && "error" === r3.redirect ? (l2 = e3, d2 = r3) : (d2 = c(r3), l2 = { ...e3 }, l2.request = d2);
      const u2 = "include" === r3.credentials || "same-origin" === r3.credentials && "basic" === r3.responseTainting, E2 = d2.body ? d2.body.length : null;
      let p2 = null;
      if (null == d2.body && ["POST", "PUT"].includes(d2.method) && (p2 = "0"), null != E2 && (p2 = O(`${E2}`)), null != p2 && d2.headersList.append("content-length", p2), null != E2 && d2.keepalive, d2.referrer instanceof URL && d2.headersList.append("referer", O(d2.referrer.href)), T(d2), f(d2), d2.headersList.contains("user-agent") || d2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === d2.cache && (d2.headersList.contains("if-modified-since") || d2.headersList.contains("if-none-match") || d2.headersList.contains("if-unmodified-since") || d2.headersList.contains("if-match") || d2.headersList.contains("if-range")) && (d2.cache = "no-store"), "no-cache" !== d2.cache || d2.preventNoCacheCacheControlHeaderModification || d2.headersList.contains("cache-control") || d2.headersList.append("cache-control", "max-age=0"), "no-store" !== d2.cache && "reload" !== d2.cache || (d2.headersList.contains("pragma") || d2.headersList.append("pragma", "no-cache"), d2.headersList.contains("cache-control") || d2.headersList.append("cache-control", "no-cache")), d2.headersList.contains("range") && d2.headersList.append("accept-encoding", "identity"), d2.headersList.contains("accept-encoding") || (P(I(d2)) ? d2.headersList.append("accept-encoding", "br, gzip, deflate") : d2.headersList.append("accept-encoding", "gzip, deflate")), d2.headersList.delete("host"), d2.cache = "no-store", "no-store" !== d2.mode && d2.mode, null == g2) {
        if ("only-if-cached" === d2.mode) return s2("only if cached");
        const e4 = await (async function(e5) {
          V(!e5.controller.connection || e5.controller.connection.destroyed), e5.controller.connection = { abort: null, destroyed: false, destroy(e6) {
            this.destroyed || (this.destroyed = true, this.abort?.(e6 ?? new Z("The operation was aborted.", "AbortError")));
          } };
          const n4 = e5.request;
          let t4 = null;
          const r4 = e5.timingInfo, l3 = null;
          null == l3 && (n4.cache = "no-store");
          n4.mode;
          let c2 = null;
          if (null == n4.body && e5.processRequestEndOfBody) queueMicrotask(() => e5.processRequestEndOfBody());
          else if (null != n4.body) {
            const a3 = async function* (n5) {
              D(e5) || (yield n5, e5.processRequestBodyChunkLength?.(n5.byteLength));
            }, t5 = () => {
              D(e5) || e5.processRequestEndOfBody && e5.processRequestEndOfBody();
            }, s3 = (n5) => {
              D(e5) || ("AbortError" === n5.name ? e5.controller.abort() : e5.controller.terminate(n5));
            };
            c2 = (async function* () {
              try {
                for await (const e6 of n4.body.stream) yield* a3(e6);
                t5();
              } catch (e6) {
                s3(e6);
              }
            })();
          }
          try {
            const { body: n5, status: a3, statusText: s3, headersList: o3, socket: r5 } = await p3({ body: c2 });
            if (r5) t4 = i2({ status: a3, statusText: s3, headersList: o3, socket: r5 });
            else {
              const r6 = n5[Symbol.asyncIterator]();
              e5.controller.next = () => r6.next(), t4 = i2({ status: a3, statusText: s3, headersList: o3 });
            }
          } catch (n5) {
            return "AbortError" === n5.name ? (e5.controller.connection.destroy(), o2(e5, n5)) : s2(n5);
          }
          const d3 = () => {
            e5.controller.resume();
          }, g3 = (n5) => {
            e5.controller.abort(n5);
          };
          Ee || (Ee = a2(3774).ReadableStream);
          const u3 = new Ee({ async start(n5) {
            e5.controller.controller = n5;
          }, async pull(e6) {
            await d3(e6);
          }, async cancel(e6) {
            await g3(e6);
          } }, { highWaterMark: 0, size: () => 1 });
          function E3(n5) {
            w(e5) ? (t4.aborted = true, se(u3) && e5.controller.controller.error(e5.controller.serializedAbortReason)) : se(u3) && e5.controller.controller.error(new TypeError("terminated", { cause: b(n5) ? n5 : void 0 })), e5.controller.connection.destroy();
          }
          return t4.body = { stream: u3 }, e5.controller.on("terminated", E3), e5.controller.resume = async () => {
            for (; ; ) {
              let n5, a3;
              try {
                const { done: a4, value: t5 } = await e5.controller.next();
                if (w(e5)) break;
                n5 = a4 ? void 0 : t5;
              } catch (t5) {
                e5.controller.ended && !r4.encodedBodySize ? n5 = void 0 : (n5 = t5, a3 = true);
              }
              if (void 0 === n5) return F(e5.controller.controller), void Ce(e5, t4);
              if (r4.decodedBodySize += n5?.byteLength ?? 0, a3) return void e5.controller.terminate(n5);
              if (e5.controller.controller.enqueue(new Uint8Array(n5)), te(u3)) return void e5.controller.terminate();
              if (!e5.controller.controller.desiredSize) return;
            }
          }, t4;
          async function p3({ body: a3 }) {
            const t5 = I(n4), s3 = e5.controller.dispatcher;
            return new Promise((o3, i3) => s3.dispatch({ path: t5.pathname + t5.search, origin: t5.origin, method: n4.method, body: e5.controller.dispatcher.isMockActive ? n4.body && (n4.body.source || n4.body.stream) : a3, headers: n4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === n4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(n5) {
              const { connection: a4 } = e5.controller;
              a4.destroyed ? n5(new Z("The operation was aborted.", "AbortError")) : (e5.controller.on("terminated", n5), this.abort = a4.abort = n5);
            }, onHeaders(e6, a4, t6, s4) {
              if (e6 < 200) return;
              let r5 = [], i4 = "";
              const l4 = new A();
              if (Array.isArray(a4)) for (let e7 = 0; e7 < a4.length; e7 += 2) {
                const n5 = a4[e7 + 0].toString("latin1"), t7 = a4[e7 + 1].toString("latin1");
                "content-encoding" === n5.toLowerCase() ? r5 = t7.toLowerCase().split(",").map((e8) => e8.trim()) : "location" === n5.toLowerCase() && (i4 = t7), l4[z].append(n5, t7);
              }
              else {
                const e7 = Object.keys(a4);
                for (const n5 of e7) {
                  const e8 = a4[n5];
                  "content-encoding" === n5.toLowerCase() ? r5 = e8.toLowerCase().split(",").map((e9) => e9.trim()).reverse() : "location" === n5.toLowerCase() && (i4 = e8), l4[z].append(n5, e8);
                }
              }
              this.body = new ee({ read: t6 });
              const c3 = [], d4 = "follow" === n4.redirect && i4 && H.has(e6);
              if ("HEAD" !== n4.method && "CONNECT" !== n4.method && !W.includes(e6) && !d4) for (const e7 of r5) if ("x-gzip" === e7 || "gzip" === e7) c3.push(m.createGunzip({ flush: m.constants.Z_SYNC_FLUSH, finishFlush: m.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e7) c3.push(m.createInflate());
              else {
                if ("br" !== e7) {
                  c3.length = 0;
                  break;
                }
                c3.push(m.createBrotliDecompress());
              }
              return o3({ status: e6, statusText: s4, headersList: l4[z], body: c3.length ? ne(this.body, ...c3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(n5) {
              if (e5.controller.dump) return;
              const a4 = n5;
              return r4.encodedBodySize += a4.byteLength, this.body.push(a4);
            }, onComplete() {
              this.abort && e5.controller.off("terminated", this.abort), e5.controller.ended = true, this.body.push(null);
            }, onError(n5) {
              this.abort && e5.controller.off("terminated", this.abort), this.body?.destroy(n5), e5.controller.terminate(n5), i3(n5);
            }, onUpgrade(e6, n5, a4) {
              if (101 !== e6) return;
              const t6 = new A();
              for (let e7 = 0; e7 < n5.length; e7 += 2) {
                const a5 = n5[e7 + 0].toString("latin1"), s4 = n5[e7 + 1].toString("latin1");
                t6[z].append(a5, s4);
              }
              return o3({ status: e6, statusText: de[e6], headersList: t6[z], socket: a4 }), true;
            } }));
          }
        })(l2, u2, t3);
        !K.has(d2.method) && e4.status >= 200 && e4.status, null == g2 && (g2 = e4);
      }
      if (g2.urlList = [...d2.urlList], d2.headersList.contains("range") && (g2.rangeRequested = true), g2.requestIncludesCredentials = u2, 407 === g2.status) return "no-window" === r3.window ? s2() : D(e3) ? o2(e3) : s2("proxy authentication required");
      if (421 === g2.status && !t3 && (null == r3.body || null != r3.body.source)) {
        if (D(e3)) return o2(e3);
        e3.controller.connection.destroy(), g2 = await Qe(e3, n3, true);
      }
      return g2;
    }
    e2.exports = { fetch: function(e3, n3 = {}) {
      me.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const a3 = N();
      let s3;
      try {
        s3 = new l(e3, n3);
      } catch (e4) {
        return a3.reject(e4), a3.promise;
      }
      const o3 = s3[x];
      if (s3.signal.aborted) return ke(a3, o3, null, s3.signal.reason), a3.promise;
      const r3 = o3.client.globalObject;
      "ServiceWorkerGlobalScope" === r3?.constructor?.name && (o3.serviceWorkers = "none");
      let i3 = null, A2 = false, c2 = null;
      return ae(s3.signal, () => {
        A2 = true, V(null != c2), c2.abort(s3.signal.reason), ke(a3, o3, i3, s3.signal.reason);
      }), c2 = Ie({ request: o3, processResponseEndOfBody: (e4) => Te(e4, "fetch"), processResponse: (e4) => A2 ? Promise.resolve() : e4.aborted ? (ke(a3, o3, i3, c2.serializedAbortReason), Promise.resolve()) : "error" === e4.type ? (a3.reject(Object.assign(new TypeError("fetch failed"), { cause: e4.error })), Promise.resolve()) : (i3 = new t2(), i3[x] = e4, i3[J] = null, i3[G][z] = e4.headersList, i3[G][Y] = "immutable", i3[G][J] = null, void a3.resolve(i3)), dispatcher: n3.dispatcher ?? ce() }), a3.promise;
    }, Fetch: pe, fetching: Ie, finalizeAndReportTiming: Te };
  }