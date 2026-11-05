// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3406 range:614714..637278
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3406: (e2, a2, n2) => {
    "use strict";
    const { Response: t2, makeNetworkError: s2, makeAppropriateNetworkError: o2, filterResponse: r2, makeResponse: i2 } = n2(1099), { Headers: l } = n2(2932), { Request: d, makeRequest: m } = n2(2239), c = n2(3106), { bytesMatch: p, makePolicyContainer: A, clonePolicyContainer: u, requestBadPort: g, TAOCheck: T, appendRequestOriginHeader: h, responseLocationURL: k, requestCurrentURL: _, setRequestReferrerPolicyOnRedirect: E, tryUpgradeRequestToAPotentiallyTrustworthyURL: f, createOpaqueTimingInfo: C, appendFetchMetadata: I, corsCheck: v, crossOriginResourcePolicyCheck: y, determineRequestsReferrer: S, coarsenedSharedCurrentTime: R, createDeferredPromise: N, isBlobLike: B, sameOrigin: w, isCancelled: b, isAborted: Q, isErrorLike: D, fullyReadBody: M, readableStreamClose: O, isomorphicEncode: U, urlIsLocal: F, urlIsHttpHttpsScheme: P, urlHasHttpsScheme: L } = n2(5728), { kState: G, kHeaders: x, kGuard: V, kRealm: Y } = n2(5899), q = n2(2613), { safelyExtractBody: H } = n2(7052), { redirectStatusSet: J, nullBodyStatus: W, safeMethodsSet: K, requestBodyHeader: j, subresourceSet: $, DOMException: X } = n2(6687), { kHeadersList: z } = n2(8832), Z = n2(4434), { Readable: ee, pipeline: ae } = n2(2203), { addAbortListener: ne, isErrored: te, isReadable: se, nodeMajor: oe, nodeMinor: re } = n2(9361), { dataURLProcessor: ie, serializeAMimeType: le } = n2(3631), { TransformStream: de } = n2(3774), { getGlobalDispatcher: me } = n2(7362), { webidl: ce } = n2(8005), { STATUS_CODES: pe } = n2(8611), Ae = ["GET", "HEAD"];
    let ue, ge = globalThis.ReadableStream;
    class Te extends Z {
      constructor(e3) {
        super(), this.dispatcher = e3, this.connection = null, this.dump = false, this.state = "ongoing", this.setMaxListeners(21);
      }
      terminate(e3) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e3), this.emit("terminated", e3));
      }
      abort(e3) {
        "ongoing" === this.state && (this.state = "aborted", e3 || (e3 = new X("The operation was aborted.", "AbortError")), this.serializedAbortReason = e3, this.connection?.destroy(e3), this.emit("terminated", e3));
      }
    }
    function he(e3, a3 = "other") {
      if ("error" === e3.type && e3.aborted) return;
      if (!e3.urlList?.length) return;
      const n3 = e3.urlList[0];
      let t3 = e3.timingInfo, s3 = e3.cacheState;
      P(n3) && null !== t3 && (e3.timingAllowPassed || (t3 = C({ startTime: t3.startTime }), s3 = ""), t3.endTime = R(), e3.timingInfo = t3, (function(e4, a4, n4, t4, s4) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e4, a4.href, n4, t4, s4);
      })(t3, n3, a3, globalThis, s3));
    }
    function ke(e3, a3, n3, t3) {
      if (t3 || (t3 = new X("The operation was aborted.", "AbortError")), e3.reject(t3), null != a3.body && se(a3.body?.stream) && a3.body.stream.cancel(t3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      }), null == n3) return;
      const s3 = n3[G];
      null != s3.body && se(s3.body?.stream) && s3.body.stream.cancel(t3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      });
    }
    function _e({ request: e3, processRequestBodyChunkLength: a3, processRequestEndOfBody: n3, processResponse: t3, processResponseEndOfBody: s3, processResponseConsumeBody: o3, useParallelQueue: r3 = false, dispatcher: i3 }) {
      let l2 = null, d2 = false;
      null != e3.client && (l2 = e3.client.globalObject, d2 = e3.client.crossOriginIsolatedCapability);
      const m2 = R(d2), c2 = C({ startTime: m2 }), p2 = { controller: new Te(i3), request: e3, timingInfo: c2, processRequestBodyChunkLength: a3, processRequestEndOfBody: n3, processResponse: t3, processResponseConsumeBody: o3, processResponseEndOfBody: s3, taskDestination: l2, crossOriginIsolatedCapability: d2 };
      if (q(!e3.body || e3.body.stream), "client" === e3.window && (e3.window = "Window" === e3.client?.globalObject?.constructor?.name ? e3.client : "no-window"), "client" === e3.origin && (e3.origin = e3.client?.origin), "client" === e3.policyContainer && (null != e3.client ? e3.policyContainer = u(e3.client.policyContainer) : e3.policyContainer = A()), !e3.headersList.contains("accept")) {
        const a4 = "*/*";
        e3.headersList.append("accept", a4);
      }
      return e3.headersList.contains("accept-language") || e3.headersList.append("accept-language", "*"), e3.priority, $.has(e3.destination), Ee(p2).catch((e4) => {
        p2.controller.terminate(e4);
      }), p2.controller;
    }
    async function Ee(e3, a3 = false) {
      const n3 = e3.request;
      let t3 = null;
      if (n3.localURLsOnly && !F(_(n3)) && (t3 = s2("local URLs only")), f(n3), "blocked" === g(n3) && (t3 = s2("bad port")), "" === n3.referrerPolicy && (n3.referrerPolicy = n3.policyContainer.referrerPolicy), "no-referrer" !== n3.referrer && (n3.referrer = S(n3)), null === t3 && (t3 = await (async () => {
        const a4 = _(n3);
        return w(a4, n3.url) && "basic" === n3.responseTainting || "data:" === a4.protocol || "navigate" === n3.mode || "websocket" === n3.mode ? (n3.responseTainting = "basic", await fe(e3)) : "same-origin" === n3.mode ? s2('request mode cannot be "same-origin"') : "no-cors" === n3.mode ? "follow" !== n3.redirect ? s2('redirect mode cannot be "follow" for "no-cors" request') : (n3.responseTainting = "opaque", await fe(e3)) : P(_(n3)) ? (n3.responseTainting = "cors", await ve(e3)) : s2("URL scheme must be a HTTP(S) scheme");
      })()), a3) return t3;
      0 === t3.status || t3.internalResponse || (n3.responseTainting, "basic" === n3.responseTainting ? t3 = r2(t3, "basic") : "cors" === n3.responseTainting ? t3 = r2(t3, "cors") : "opaque" === n3.responseTainting ? t3 = r2(t3, "opaque") : q(false));
      let o3 = 0 === t3.status ? t3 : t3.internalResponse;
      if (0 === o3.urlList.length && o3.urlList.push(...n3.urlList), n3.timingAllowFailed || (t3.timingAllowPassed = true), "opaque" === t3.type && 206 === o3.status && o3.rangeRequested && !n3.headers.contains("range") && (t3 = o3 = s2()), 0 === t3.status || "HEAD" !== n3.method && "CONNECT" !== n3.method && !W.includes(o3.status) || (o3.body = null, e3.controller.dump = true), n3.integrity) {
        const a4 = (a5) => Ie(e3, s2(a5));
        if ("opaque" === n3.responseTainting || null == t3.body) return void a4(t3.error);
        const o4 = (s3) => {
          p(s3, n3.integrity) ? (t3.body = H(s3)[0], Ie(e3, t3)) : a4("integrity mismatch");
        };
        await M(t3.body, o4, a4);
      } else Ie(e3, t3);
    }
    function fe(e3) {
      if (b(e3) && 0 === e3.request.redirectCount) return Promise.resolve(o2(e3));
      const { request: a3 } = e3, { protocol: t3 } = _(a3);
      switch (t3) {
        case "about:":
          return Promise.resolve(s2("about scheme is not supported"));
        case "blob:": {
          ue || (ue = n2(181).resolveObjectURL);
          const e4 = _(a3);
          if (0 !== e4.search.length) return Promise.resolve(s2("NetworkError when attempting to fetch resource."));
          const t4 = ue(e4.toString());
          if ("GET" !== a3.method || !B(t4)) return Promise.resolve(s2("invalid method"));
          const o3 = H(t4), r3 = o3[0], l2 = U(`${r3.length}`), d2 = o3[1] ?? "", m2 = i2({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: l2 }], ["content-type", { name: "Content-Type", value: d2 }]] });
          return m2.body = r3, Promise.resolve(m2);
        }
        case "data:": {
          const e4 = _(a3), n3 = ie(e4);
          if ("failure" === n3) return Promise.resolve(s2("failed to fetch the data URL"));
          const t4 = le(n3.mimeType);
          return Promise.resolve(i2({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: t4 }]], body: H(n3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(s2("not implemented... yet..."));
        case "http:":
        case "https:":
          return ve(e3).catch((e4) => s2(e4));
        default:
          return Promise.resolve(s2("unknown scheme"));
      }
    }
    function Ce(e3, a3) {
      e3.request.done = true, null != e3.processResponseDone && queueMicrotask(() => e3.processResponseDone(a3));
    }
    function Ie(e3, a3) {
      "error" === a3.type && (a3.urlList = [e3.request.urlList[0]], a3.timingInfo = C({ startTime: e3.timingInfo.startTime }));
      const n3 = () => {
        e3.request.done = true, null != e3.processResponseEndOfBody && queueMicrotask(() => e3.processResponseEndOfBody(a3));
      };
      if (null != e3.processResponse && queueMicrotask(() => e3.processResponse(a3)), null == a3.body) n3();
      else {
        const e4 = (e5, a4) => {
          a4.enqueue(e5);
        }, t3 = new de({ start() {
        }, transform: e4, flush: n3 }, { size: () => 1 }, { size: () => 1 });
        a3.body = { stream: a3.body.stream.pipeThrough(t3) };
      }
      if (null != e3.processResponseConsumeBody) {
        const n4 = (n5) => e3.processResponseConsumeBody(a3, n5), t3 = (n5) => e3.processResponseConsumeBody(a3, n5);
        return null != a3.body ? M(a3.body, n4, t3) : (queueMicrotask(() => n4(null)), Promise.resolve());
      }
    }
    async function ve(e3) {
      const a3 = e3.request;
      let n3 = null, t3 = null;
      const o3 = e3.timingInfo;
      if (a3.serviceWorkers, null === n3) {
        if ("follow" === a3.redirect && (a3.serviceWorkers = "none"), t3 = n3 = await ye(e3), "cors" === a3.responseTainting && "failure" === v(a3, n3)) return s2("cors failure");
        "failure" === T(a3, n3) && (a3.timingAllowFailed = true);
      }
      return "opaque" !== a3.responseTainting && "opaque" !== n3.type || "blocked" !== y(a3.origin, a3.client, a3.destination, t3) ? (J.has(t3.status) && ("manual" !== a3.redirect && e3.controller.connection.destroy(), "error" === a3.redirect ? n3 = s2("unexpected redirect") : "manual" === a3.redirect ? n3 = t3 : "follow" === a3.redirect ? n3 = await (function(e4, a4) {
        const n4 = e4.request, t4 = a4.internalResponse ? a4.internalResponse : a4;
        let o4;
        try {
          if (o4 = k(t4, _(n4).hash), null == o4) return a4;
        } catch (e5) {
          return Promise.resolve(s2(e5));
        }
        if (!P(o4)) return Promise.resolve(s2("URL scheme must be a HTTP(S) scheme"));
        if (20 === n4.redirectCount) return Promise.resolve(s2("redirect count exceeded"));
        if (n4.redirectCount += 1, "cors" === n4.mode && (o4.username || o4.password) && !w(n4, o4)) return Promise.resolve(s2('cross origin not allowed for request mode "cors"'));
        if ("cors" === n4.responseTainting && (o4.username || o4.password)) return Promise.resolve(s2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== t4.status && null != n4.body && null == n4.body.source) return Promise.resolve(s2());
        if ([301, 302].includes(t4.status) && "POST" === n4.method || 303 === t4.status && !Ae.includes(n4.method)) {
          n4.method = "GET", n4.body = null;
          for (const e5 of j) n4.headersList.delete(e5);
        }
        w(_(n4), o4) || (n4.headersList.delete("authorization"), n4.headersList.delete("proxy-authorization", true), n4.headersList.delete("cookie"), n4.headersList.delete("host"));
        null != n4.body && (q(null != n4.body.source), n4.body = H(n4.body.source)[0]);
        const r3 = e4.timingInfo;
        r3.redirectEndTime = r3.postRedirectStartTime = R(e4.crossOriginIsolatedCapability), 0 === r3.redirectStartTime && (r3.redirectStartTime = r3.startTime);
        return n4.urlList.push(o4), E(n4, t4), Ee(e4, true);
      })(e3, n3) : q(false)), n3.timingInfo = o3, n3) : s2("blocked");
    }
    async function ye(e3, a3 = false, t3 = false) {
      const r3 = e3.request;
      let d2 = null, p2 = null, A2 = null;
      "no-window" === r3.window && "error" === r3.redirect ? (d2 = e3, p2 = r3) : (p2 = m(r3), d2 = { ...e3 }, d2.request = p2);
      const u2 = "include" === r3.credentials || "same-origin" === r3.credentials && "basic" === r3.responseTainting, g2 = p2.body ? p2.body.length : null;
      let T2 = null;
      if (null == p2.body && ["POST", "PUT"].includes(p2.method) && (T2 = "0"), null != g2 && (T2 = U(`${g2}`)), null != T2 && p2.headersList.append("content-length", T2), null != g2 && p2.keepalive, p2.referrer instanceof URL && p2.headersList.append("referer", U(p2.referrer.href)), h(p2), I(p2), p2.headersList.contains("user-agent") || p2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === p2.cache && (p2.headersList.contains("if-modified-since") || p2.headersList.contains("if-none-match") || p2.headersList.contains("if-unmodified-since") || p2.headersList.contains("if-match") || p2.headersList.contains("if-range")) && (p2.cache = "no-store"), "no-cache" !== p2.cache || p2.preventNoCacheCacheControlHeaderModification || p2.headersList.contains("cache-control") || p2.headersList.append("cache-control", "max-age=0"), "no-store" !== p2.cache && "reload" !== p2.cache || (p2.headersList.contains("pragma") || p2.headersList.append("pragma", "no-cache"), p2.headersList.contains("cache-control") || p2.headersList.append("cache-control", "no-cache")), p2.headersList.contains("range") && p2.headersList.append("accept-encoding", "identity"), p2.headersList.contains("accept-encoding") || (L(_(p2)) ? p2.headersList.append("accept-encoding", "br, gzip, deflate") : p2.headersList.append("accept-encoding", "gzip, deflate")), p2.headersList.delete("host"), p2.cache = "no-store", "no-store" !== p2.mode && p2.mode, null == A2) {
        if ("only-if-cached" === p2.mode) return s2("only if cached");
        const e4 = await (async function(e5) {
          q(!e5.controller.connection || e5.controller.connection.destroyed), e5.controller.connection = { abort: null, destroyed: false, destroy(e6) {
            this.destroyed || (this.destroyed = true, this.abort?.(e6 ?? new X("The operation was aborted.", "AbortError")));
          } };
          const a4 = e5.request;
          let t4 = null;
          const r4 = e5.timingInfo, d3 = null;
          null == d3 && (a4.cache = "no-store");
          a4.mode;
          let m2 = null;
          if (null == a4.body && e5.processRequestEndOfBody) queueMicrotask(() => e5.processRequestEndOfBody());
          else if (null != a4.body) {
            const n3 = async function* (a5) {
              b(e5) || (yield a5, e5.processRequestBodyChunkLength?.(a5.byteLength));
            }, t5 = () => {
              b(e5) || e5.processRequestEndOfBody && e5.processRequestEndOfBody();
            }, s3 = (a5) => {
              b(e5) || ("AbortError" === a5.name ? e5.controller.abort() : e5.controller.terminate(a5));
            };
            m2 = (async function* () {
              try {
                for await (const e6 of a4.body.stream) yield* n3(e6);
                t5();
              } catch (e6) {
                s3(e6);
              }
            })();
          }
          try {
            const { body: a5, status: n3, statusText: s3, headersList: o3, socket: r5 } = await T3({ body: m2 });
            if (r5) t4 = i2({ status: n3, statusText: s3, headersList: o3, socket: r5 });
            else {
              const r6 = a5[Symbol.asyncIterator]();
              e5.controller.next = () => r6.next(), t4 = i2({ status: n3, statusText: s3, headersList: o3 });
            }
          } catch (a5) {
            return "AbortError" === a5.name ? (e5.controller.connection.destroy(), o2(e5, a5)) : s2(a5);
          }
          const p3 = () => {
            e5.controller.resume();
          }, A3 = (a5) => {
            e5.controller.abort(a5);
          };
          ge || (ge = n2(3774).ReadableStream);
          const u3 = new ge({ async start(a5) {
            e5.controller.controller = a5;
          }, async pull(e6) {
            await p3(e6);
          }, async cancel(e6) {
            await A3(e6);
          } }, { highWaterMark: 0, size: () => 1 });
          function g3(a5) {
            Q(e5) ? (t4.aborted = true, se(u3) && e5.controller.controller.error(e5.controller.serializedAbortReason)) : se(u3) && e5.controller.controller.error(new TypeError("terminated", { cause: D(a5) ? a5 : void 0 })), e5.controller.connection.destroy();
          }
          return t4.body = { stream: u3 }, e5.controller.on("terminated", g3), e5.controller.resume = async () => {
            for (; ; ) {
              let a5, n3;
              try {
                const { done: n4, value: t5 } = await e5.controller.next();
                if (Q(e5)) break;
                a5 = n4 ? void 0 : t5;
              } catch (t5) {
                e5.controller.ended && !r4.encodedBodySize ? a5 = void 0 : (a5 = t5, n3 = true);
              }
              if (void 0 === a5) return O(e5.controller.controller), void Ce(e5, t4);
              if (r4.decodedBodySize += a5?.byteLength ?? 0, n3) return void e5.controller.terminate(a5);
              if (e5.controller.controller.enqueue(new Uint8Array(a5)), te(u3)) return void e5.controller.terminate();
              if (!e5.controller.controller.desiredSize) return;
            }
          }, t4;
          async function T3({ body: n3 }) {
            const t5 = _(a4), s3 = e5.controller.dispatcher;
            return new Promise((o3, i3) => s3.dispatch({ path: t5.pathname + t5.search, origin: t5.origin, method: a4.method, body: e5.controller.dispatcher.isMockActive ? a4.body && (a4.body.source || a4.body.stream) : n3, headers: a4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === a4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(a5) {
              const { connection: n4 } = e5.controller;
              n4.destroyed ? a5(new X("The operation was aborted.", "AbortError")) : (e5.controller.on("terminated", a5), this.abort = n4.abort = a5);
            }, onHeaders(e6, n4, t6, s4) {
              if (e6 < 200) return;
              let r5 = [], i4 = "";
              const d4 = new l();
              if (Array.isArray(n4)) for (let e7 = 0; e7 < n4.length; e7 += 2) {
                const a5 = n4[e7 + 0].toString("latin1"), t7 = n4[e7 + 1].toString("latin1");
                "content-encoding" === a5.toLowerCase() ? r5 = t7.toLowerCase().split(",").map((e8) => e8.trim()) : "location" === a5.toLowerCase() && (i4 = t7), d4[z].append(a5, t7);
              }
              else {
                const e7 = Object.keys(n4);
                for (const a5 of e7) {
                  const e8 = n4[a5];
                  "content-encoding" === a5.toLowerCase() ? r5 = e8.toLowerCase().split(",").map((e9) => e9.trim()).reverse() : "location" === a5.toLowerCase() && (i4 = e8), d4[z].append(a5, e8);
                }
              }
              this.body = new ee({ read: t6 });
              const m3 = [], p4 = "follow" === a4.redirect && i4 && J.has(e6);
              if ("HEAD" !== a4.method && "CONNECT" !== a4.method && !W.includes(e6) && !p4) for (const e7 of r5) if ("x-gzip" === e7 || "gzip" === e7) m3.push(c.createGunzip({ flush: c.constants.Z_SYNC_FLUSH, finishFlush: c.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e7) m3.push(c.createInflate());
              else {
                if ("br" !== e7) {
                  m3.length = 0;
                  break;
                }
                m3.push(c.createBrotliDecompress());
              }
              return o3({ status: e6, statusText: s4, headersList: d4[z], body: m3.length ? ae(this.body, ...m3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(a5) {
              if (e5.controller.dump) return;
              const n4 = a5;
              return r4.encodedBodySize += n4.byteLength, this.body.push(n4);
            }, onComplete() {
              this.abort && e5.controller.off("terminated", this.abort), e5.controller.ended = true, this.body.push(null);
            }, onError(a5) {
              this.abort && e5.controller.off("terminated", this.abort), this.body?.destroy(a5), e5.controller.terminate(a5), i3(a5);
            }, onUpgrade(e6, a5, n4) {
              if (101 !== e6) return;
              const t6 = new l();
              for (let e7 = 0; e7 < a5.length; e7 += 2) {
                const n5 = a5[e7 + 0].toString("latin1"), s4 = a5[e7 + 1].toString("latin1");
                t6[z].append(n5, s4);
              }
              return o3({ status: e6, statusText: pe[e6], headersList: t6[z], socket: n4 }), true;
            } }));
          }
        })(d2, u2, t3);
        !K.has(p2.method) && e4.status >= 200 && e4.status, null == A2 && (A2 = e4);
      }
      if (A2.urlList = [...p2.urlList], p2.headersList.contains("range") && (A2.rangeRequested = true), A2.requestIncludesCredentials = u2, 407 === A2.status) return "no-window" === r3.window ? s2() : b(e3) ? o2(e3) : s2("proxy authentication required");
      if (421 === A2.status && !t3 && (null == r3.body || null != r3.body.source)) {
        if (b(e3)) return o2(e3);
        e3.controller.connection.destroy(), A2 = await ye(e3, a3, true);
      }
      return A2;
    }
    e2.exports = { fetch: function(e3, a3 = {}) {
      ce.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const n3 = N();
      let s3;
      try {
        s3 = new d(e3, a3);
      } catch (e4) {
        return n3.reject(e4), n3.promise;
      }
      const o3 = s3[G];
      if (s3.signal.aborted) return ke(n3, o3, null, s3.signal.reason), n3.promise;
      const r3 = o3.client.globalObject;
      "ServiceWorkerGlobalScope" === r3?.constructor?.name && (o3.serviceWorkers = "none");
      let i3 = null, l2 = false, m2 = null;
      return ne(s3.signal, () => {
        l2 = true, q(null != m2), m2.abort(s3.signal.reason), ke(n3, o3, i3, s3.signal.reason);
      }), m2 = _e({ request: o3, processResponseEndOfBody: (e4) => he(e4, "fetch"), processResponse: (e4) => l2 ? Promise.resolve() : e4.aborted ? (ke(n3, o3, i3, m2.serializedAbortReason), Promise.resolve()) : "error" === e4.type ? (n3.reject(Object.assign(new TypeError("fetch failed"), { cause: e4.error })), Promise.resolve()) : (i3 = new t2(), i3[G] = e4, i3[Y] = null, i3[x][z] = e4.headersList, i3[x][V] = "immutable", i3[x][Y] = null, void n3.resolve(i3)), dispatcher: a3.dispatcher ?? me() }), n3.promise;
    }, Fetch: Te, fetching: _e, finalizeAndReportTiming: he };
  }