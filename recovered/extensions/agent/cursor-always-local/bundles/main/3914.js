// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3914 range:1020052..1042610
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3914: (t2, e2, r2) => {
    "use strict";
    const { Response: n2, makeNetworkError: s2, makeAppropriateNetworkError: i2, filterResponse: o2, makeResponse: a } = r2(3511), { Headers: u } = r2(2848), { Request: c, makeRequest: l } = r2(547), m = r2(3106), { bytesMatch: d, makePolicyContainer: f, clonePolicyContainer: p, requestBadPort: h, TAOCheck: g, appendRequestOriginHeader: A, responseLocationURL: _, requestCurrentURL: y, setRequestReferrerPolicyOnRedirect: w, tryUpgradeRequestToAPotentiallyTrustworthyURL: S, createOpaqueTimingInfo: J, appendFetchMetadata: B, corsCheck: E, crossOriginResourcePolicyCheck: I, determineRequestsReferrer: C, coarsenedSharedCurrentTime: b, createDeferredPromise: k, isBlobLike: v, sameOrigin: q, isCancelled: R, isAborted: P, isErrorLike: T, fullyReadBody: x, readableStreamClose: N, isomorphicEncode: D, urlIsLocal: U, urlIsHttpHttpsScheme: Q, urlHasHttpsScheme: M } = r2(8116), { kState: O, kHeaders: F, kGuard: L, kRealm: $ } = r2(7271), G = r2(2613), { safelyExtractBody: H } = r2(9608), { redirectStatusSet: K, nullBodyStatus: V, safeMethodsSet: z, requestBodyHeader: W, subresourceSet: Y, DOMException: j } = r2(2955), { kHeadersList: X } = r2(5532), Z = r2(4434), { Readable: tt, pipeline: et } = r2(2203), { addAbortListener: rt, isErrored: nt, isReadable: st, nodeMajor: it, nodeMinor: ot } = r2(3589), { dataURLProcessor: at, serializeAMimeType: ut } = r2(4387), { TransformStream: ct } = r2(3774), { getGlobalDispatcher: lt } = r2(7582), { webidl: mt } = r2(8193), { STATUS_CODES: dt } = r2(8611), ft = ["GET", "HEAD"];
    let pt, ht = globalThis.ReadableStream;
    class gt extends Z {
      constructor(t3) {
        super(), this.dispatcher = t3, this.connection = null, this.dump = false, this.state = "ongoing", this.setMaxListeners(21);
      }
      terminate(t3) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(t3), this.emit("terminated", t3));
      }
      abort(t3) {
        "ongoing" === this.state && (this.state = "aborted", t3 || (t3 = new j("The operation was aborted.", "AbortError")), this.serializedAbortReason = t3, this.connection?.destroy(t3), this.emit("terminated", t3));
      }
    }
    function At(t3, e3 = "other") {
      if ("error" === t3.type && t3.aborted) return;
      if (!t3.urlList?.length) return;
      const r3 = t3.urlList[0];
      let n3 = t3.timingInfo, s3 = t3.cacheState;
      Q(r3) && null !== n3 && (t3.timingAllowPassed || (n3 = J({ startTime: n3.startTime }), s3 = ""), n3.endTime = b(), t3.timingInfo = n3, (function(t4, e4, r4, n4, s4) {
        (it > 18 || 18 === it && ot >= 2) && performance.markResourceTiming(t4, e4.href, r4, n4, s4);
      })(n3, r3, e3, globalThis, s3));
    }
    function _t(t3, e3, r3, n3) {
      if (n3 || (n3 = new j("The operation was aborted.", "AbortError")), t3.reject(n3), null != e3.body && st(e3.body?.stream) && e3.body.stream.cancel(n3).catch((t4) => {
        if ("ERR_INVALID_STATE" !== t4.code) throw t4;
      }), null == r3) return;
      const s3 = r3[O];
      null != s3.body && st(s3.body?.stream) && s3.body.stream.cancel(n3).catch((t4) => {
        if ("ERR_INVALID_STATE" !== t4.code) throw t4;
      });
    }
    function yt({ request: t3, processRequestBodyChunkLength: e3, processRequestEndOfBody: r3, processResponse: n3, processResponseEndOfBody: s3, processResponseConsumeBody: i3, useParallelQueue: o3 = false, dispatcher: a2 }) {
      let u2 = null, c2 = false;
      null != t3.client && (u2 = t3.client.globalObject, c2 = t3.client.crossOriginIsolatedCapability);
      const l2 = b(c2), m2 = J({ startTime: l2 }), d2 = { controller: new gt(a2), request: t3, timingInfo: m2, processRequestBodyChunkLength: e3, processRequestEndOfBody: r3, processResponse: n3, processResponseConsumeBody: i3, processResponseEndOfBody: s3, taskDestination: u2, crossOriginIsolatedCapability: c2 };
      if (G(!t3.body || t3.body.stream), "client" === t3.window && (t3.window = "Window" === t3.client?.globalObject?.constructor?.name ? t3.client : "no-window"), "client" === t3.origin && (t3.origin = t3.client?.origin), "client" === t3.policyContainer && (null != t3.client ? t3.policyContainer = p(t3.client.policyContainer) : t3.policyContainer = f()), !t3.headersList.contains("accept")) {
        const e4 = "*/*";
        t3.headersList.append("accept", e4);
      }
      return t3.headersList.contains("accept-language") || t3.headersList.append("accept-language", "*"), t3.priority, Y.has(t3.destination), wt(d2).catch((t4) => {
        d2.controller.terminate(t4);
      }), d2.controller;
    }
    async function wt(t3, e3 = false) {
      const r3 = t3.request;
      let n3 = null;
      if (r3.localURLsOnly && !U(y(r3)) && (n3 = s2("local URLs only")), S(r3), "blocked" === h(r3) && (n3 = s2("bad port")), "" === r3.referrerPolicy && (r3.referrerPolicy = r3.policyContainer.referrerPolicy), "no-referrer" !== r3.referrer && (r3.referrer = C(r3)), null === n3 && (n3 = await (async () => {
        const e4 = y(r3);
        return q(e4, r3.url) && "basic" === r3.responseTainting || "data:" === e4.protocol || "navigate" === r3.mode || "websocket" === r3.mode ? (r3.responseTainting = "basic", await St(t3)) : "same-origin" === r3.mode ? s2('request mode cannot be "same-origin"') : "no-cors" === r3.mode ? "follow" !== r3.redirect ? s2('redirect mode cannot be "follow" for "no-cors" request') : (r3.responseTainting = "opaque", await St(t3)) : Q(y(r3)) ? (r3.responseTainting = "cors", await Et(t3)) : s2("URL scheme must be a HTTP(S) scheme");
      })()), e3) return n3;
      0 === n3.status || n3.internalResponse || (r3.responseTainting, "basic" === r3.responseTainting ? n3 = o2(n3, "basic") : "cors" === r3.responseTainting ? n3 = o2(n3, "cors") : "opaque" === r3.responseTainting ? n3 = o2(n3, "opaque") : G(false));
      let i3 = 0 === n3.status ? n3 : n3.internalResponse;
      if (0 === i3.urlList.length && i3.urlList.push(...r3.urlList), r3.timingAllowFailed || (n3.timingAllowPassed = true), "opaque" === n3.type && 206 === i3.status && i3.rangeRequested && !r3.headers.contains("range") && (n3 = i3 = s2()), 0 === n3.status || "HEAD" !== r3.method && "CONNECT" !== r3.method && !V.includes(i3.status) || (i3.body = null, t3.controller.dump = true), r3.integrity) {
        const e4 = (e5) => Bt(t3, s2(e5));
        if ("opaque" === r3.responseTainting || null == n3.body) return void e4(n3.error);
        const i4 = (s3) => {
          d(s3, r3.integrity) ? (n3.body = H(s3)[0], Bt(t3, n3)) : e4("integrity mismatch");
        };
        await x(n3.body, i4, e4);
      } else Bt(t3, n3);
    }
    function St(t3) {
      if (R(t3) && 0 === t3.request.redirectCount) return Promise.resolve(i2(t3));
      const { request: e3 } = t3, { protocol: n3 } = y(e3);
      switch (n3) {
        case "about:":
          return Promise.resolve(s2("about scheme is not supported"));
        case "blob:": {
          pt || (pt = r2(181).resolveObjectURL);
          const t4 = y(e3);
          if (0 !== t4.search.length) return Promise.resolve(s2("NetworkError when attempting to fetch resource."));
          const n4 = pt(t4.toString());
          if ("GET" !== e3.method || !v(n4)) return Promise.resolve(s2("invalid method"));
          const i3 = H(n4), o3 = i3[0], u2 = D(`${o3.length}`), c2 = i3[1] ?? "", l2 = a({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: u2 }], ["content-type", { name: "Content-Type", value: c2 }]] });
          return l2.body = o3, Promise.resolve(l2);
        }
        case "data:": {
          const t4 = y(e3), r3 = at(t4);
          if ("failure" === r3) return Promise.resolve(s2("failed to fetch the data URL"));
          const n4 = ut(r3.mimeType);
          return Promise.resolve(a({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: n4 }]], body: H(r3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(s2("not implemented... yet..."));
        case "http:":
        case "https:":
          return Et(t3).catch((t4) => s2(t4));
        default:
          return Promise.resolve(s2("unknown scheme"));
      }
    }
    function Jt(t3, e3) {
      t3.request.done = true, null != t3.processResponseDone && queueMicrotask(() => t3.processResponseDone(e3));
    }
    function Bt(t3, e3) {
      "error" === e3.type && (e3.urlList = [t3.request.urlList[0]], e3.timingInfo = J({ startTime: t3.timingInfo.startTime }));
      const r3 = () => {
        t3.request.done = true, null != t3.processResponseEndOfBody && queueMicrotask(() => t3.processResponseEndOfBody(e3));
      };
      if (null != t3.processResponse && queueMicrotask(() => t3.processResponse(e3)), null == e3.body) r3();
      else {
        const t4 = (t5, e4) => {
          e4.enqueue(t5);
        }, n3 = new ct({ start() {
        }, transform: t4, flush: r3 }, { size: () => 1 }, { size: () => 1 });
        e3.body = { stream: e3.body.stream.pipeThrough(n3) };
      }
      if (null != t3.processResponseConsumeBody) {
        const r4 = (r5) => t3.processResponseConsumeBody(e3, r5), n3 = (r5) => t3.processResponseConsumeBody(e3, r5);
        return null != e3.body ? x(e3.body, r4, n3) : (queueMicrotask(() => r4(null)), Promise.resolve());
      }
    }
    async function Et(t3) {
      const e3 = t3.request;
      let r3 = null, n3 = null;
      const i3 = t3.timingInfo;
      if (e3.serviceWorkers, null === r3) {
        if ("follow" === e3.redirect && (e3.serviceWorkers = "none"), n3 = r3 = await It(t3), "cors" === e3.responseTainting && "failure" === E(e3, r3)) return s2("cors failure");
        "failure" === g(e3, r3) && (e3.timingAllowFailed = true);
      }
      return "opaque" !== e3.responseTainting && "opaque" !== r3.type || "blocked" !== I(e3.origin, e3.client, e3.destination, n3) ? (K.has(n3.status) && ("manual" !== e3.redirect && t3.controller.connection.destroy(), "error" === e3.redirect ? r3 = s2("unexpected redirect") : "manual" === e3.redirect ? r3 = n3 : "follow" === e3.redirect ? r3 = await (function(t4, e4) {
        const r4 = t4.request, n4 = e4.internalResponse ? e4.internalResponse : e4;
        let i4;
        try {
          if (i4 = _(n4, y(r4).hash), null == i4) return e4;
        } catch (t5) {
          return Promise.resolve(s2(t5));
        }
        if (!Q(i4)) return Promise.resolve(s2("URL scheme must be a HTTP(S) scheme"));
        if (20 === r4.redirectCount) return Promise.resolve(s2("redirect count exceeded"));
        if (r4.redirectCount += 1, "cors" === r4.mode && (i4.username || i4.password) && !q(r4, i4)) return Promise.resolve(s2('cross origin not allowed for request mode "cors"'));
        if ("cors" === r4.responseTainting && (i4.username || i4.password)) return Promise.resolve(s2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n4.status && null != r4.body && null == r4.body.source) return Promise.resolve(s2());
        if ([301, 302].includes(n4.status) && "POST" === r4.method || 303 === n4.status && !ft.includes(r4.method)) {
          r4.method = "GET", r4.body = null;
          for (const t5 of W) r4.headersList.delete(t5);
        }
        q(y(r4), i4) || (r4.headersList.delete("authorization"), r4.headersList.delete("proxy-authorization", true), r4.headersList.delete("cookie"), r4.headersList.delete("host"));
        null != r4.body && (G(null != r4.body.source), r4.body = H(r4.body.source)[0]);
        const o3 = t4.timingInfo;
        o3.redirectEndTime = o3.postRedirectStartTime = b(t4.crossOriginIsolatedCapability), 0 === o3.redirectStartTime && (o3.redirectStartTime = o3.startTime);
        return r4.urlList.push(i4), w(r4, n4), wt(t4, true);
      })(t3, r3) : G(false)), r3.timingInfo = i3, r3) : s2("blocked");
    }
    async function It(t3, e3 = false, n3 = false) {
      const o3 = t3.request;
      let c2 = null, d2 = null, f2 = null;
      "no-window" === o3.window && "error" === o3.redirect ? (c2 = t3, d2 = o3) : (d2 = l(o3), c2 = { ...t3 }, c2.request = d2);
      const p2 = "include" === o3.credentials || "same-origin" === o3.credentials && "basic" === o3.responseTainting, h2 = d2.body ? d2.body.length : null;
      let g2 = null;
      if (null == d2.body && ["POST", "PUT"].includes(d2.method) && (g2 = "0"), null != h2 && (g2 = D(`${h2}`)), null != g2 && d2.headersList.append("content-length", g2), null != h2 && d2.keepalive, d2.referrer instanceof URL && d2.headersList.append("referer", D(d2.referrer.href)), A(d2), B(d2), d2.headersList.contains("user-agent") || d2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === d2.cache && (d2.headersList.contains("if-modified-since") || d2.headersList.contains("if-none-match") || d2.headersList.contains("if-unmodified-since") || d2.headersList.contains("if-match") || d2.headersList.contains("if-range")) && (d2.cache = "no-store"), "no-cache" !== d2.cache || d2.preventNoCacheCacheControlHeaderModification || d2.headersList.contains("cache-control") || d2.headersList.append("cache-control", "max-age=0"), "no-store" !== d2.cache && "reload" !== d2.cache || (d2.headersList.contains("pragma") || d2.headersList.append("pragma", "no-cache"), d2.headersList.contains("cache-control") || d2.headersList.append("cache-control", "no-cache")), d2.headersList.contains("range") && d2.headersList.append("accept-encoding", "identity"), d2.headersList.contains("accept-encoding") || (M(y(d2)) ? d2.headersList.append("accept-encoding", "br, gzip, deflate") : d2.headersList.append("accept-encoding", "gzip, deflate")), d2.headersList.delete("host"), d2.cache = "no-store", "no-store" !== d2.mode && d2.mode, null == f2) {
        if ("only-if-cached" === d2.mode) return s2("only if cached");
        const t4 = await (async function(t5) {
          G(!t5.controller.connection || t5.controller.connection.destroyed), t5.controller.connection = { abort: null, destroyed: false, destroy(t6) {
            this.destroyed || (this.destroyed = true, this.abort?.(t6 ?? new j("The operation was aborted.", "AbortError")));
          } };
          const e4 = t5.request;
          let n4 = null;
          const o4 = t5.timingInfo, c3 = null;
          null == c3 && (e4.cache = "no-store");
          e4.mode;
          let l2 = null;
          if (null == e4.body && t5.processRequestEndOfBody) queueMicrotask(() => t5.processRequestEndOfBody());
          else if (null != e4.body) {
            const r3 = async function* (e5) {
              R(t5) || (yield e5, t5.processRequestBodyChunkLength?.(e5.byteLength));
            }, n5 = () => {
              R(t5) || t5.processRequestEndOfBody && t5.processRequestEndOfBody();
            }, s3 = (e5) => {
              R(t5) || ("AbortError" === e5.name ? t5.controller.abort() : t5.controller.terminate(e5));
            };
            l2 = (async function* () {
              try {
                for await (const t6 of e4.body.stream) yield* r3(t6);
                n5();
              } catch (t6) {
                s3(t6);
              }
            })();
          }
          try {
            const { body: e5, status: r3, statusText: s3, headersList: i3, socket: o5 } = await g3({ body: l2 });
            if (o5) n4 = a({ status: r3, statusText: s3, headersList: i3, socket: o5 });
            else {
              const o6 = e5[Symbol.asyncIterator]();
              t5.controller.next = () => o6.next(), n4 = a({ status: r3, statusText: s3, headersList: i3 });
            }
          } catch (e5) {
            return "AbortError" === e5.name ? (t5.controller.connection.destroy(), i2(t5, e5)) : s2(e5);
          }
          const d3 = () => {
            t5.controller.resume();
          }, f3 = (e5) => {
            t5.controller.abort(e5);
          };
          ht || (ht = r2(3774).ReadableStream);
          const p3 = new ht({ async start(e5) {
            t5.controller.controller = e5;
          }, async pull(t6) {
            await d3(t6);
          }, async cancel(t6) {
            await f3(t6);
          } }, { highWaterMark: 0, size: () => 1 });
          function h3(e5) {
            P(t5) ? (n4.aborted = true, st(p3) && t5.controller.controller.error(t5.controller.serializedAbortReason)) : st(p3) && t5.controller.controller.error(new TypeError("terminated", { cause: T(e5) ? e5 : void 0 })), t5.controller.connection.destroy();
          }
          return n4.body = { stream: p3 }, t5.controller.on("terminated", h3), t5.controller.resume = async () => {
            for (; ; ) {
              let e5, r3;
              try {
                const { done: r4, value: n5 } = await t5.controller.next();
                if (P(t5)) break;
                e5 = r4 ? void 0 : n5;
              } catch (n5) {
                t5.controller.ended && !o4.encodedBodySize ? e5 = void 0 : (e5 = n5, r3 = true);
              }
              if (void 0 === e5) return N(t5.controller.controller), void Jt(t5, n4);
              if (o4.decodedBodySize += e5?.byteLength ?? 0, r3) return void t5.controller.terminate(e5);
              if (t5.controller.controller.enqueue(new Uint8Array(e5)), nt(p3)) return void t5.controller.terminate();
              if (!t5.controller.controller.desiredSize) return;
            }
          }, n4;
          async function g3({ body: r3 }) {
            const n5 = y(e4), s3 = t5.controller.dispatcher;
            return new Promise((i3, a2) => s3.dispatch({ path: n5.pathname + n5.search, origin: n5.origin, method: e4.method, body: t5.controller.dispatcher.isMockActive ? e4.body && (e4.body.source || e4.body.stream) : r3, headers: e4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === e4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(e5) {
              const { connection: r4 } = t5.controller;
              r4.destroyed ? e5(new j("The operation was aborted.", "AbortError")) : (t5.controller.on("terminated", e5), this.abort = r4.abort = e5);
            }, onHeaders(t6, r4, n6, s4) {
              if (t6 < 200) return;
              let o5 = [], a3 = "";
              const c4 = new u();
              if (Array.isArray(r4)) for (let t7 = 0; t7 < r4.length; t7 += 2) {
                const e5 = r4[t7 + 0].toString("latin1"), n7 = r4[t7 + 1].toString("latin1");
                "content-encoding" === e5.toLowerCase() ? o5 = n7.toLowerCase().split(",").map((t8) => t8.trim()) : "location" === e5.toLowerCase() && (a3 = n7), c4[X].append(e5, n7);
              }
              else {
                const t7 = Object.keys(r4);
                for (const e5 of t7) {
                  const t8 = r4[e5];
                  "content-encoding" === e5.toLowerCase() ? o5 = t8.toLowerCase().split(",").map((t9) => t9.trim()).reverse() : "location" === e5.toLowerCase() && (a3 = t8), c4[X].append(e5, t8);
                }
              }
              this.body = new tt({ read: n6 });
              const l3 = [], d4 = "follow" === e4.redirect && a3 && K.has(t6);
              if ("HEAD" !== e4.method && "CONNECT" !== e4.method && !V.includes(t6) && !d4) for (const t7 of o5) if ("x-gzip" === t7 || "gzip" === t7) l3.push(m.createGunzip({ flush: m.constants.Z_SYNC_FLUSH, finishFlush: m.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === t7) l3.push(m.createInflate());
              else {
                if ("br" !== t7) {
                  l3.length = 0;
                  break;
                }
                l3.push(m.createBrotliDecompress());
              }
              return i3({ status: t6, statusText: s4, headersList: c4[X], body: l3.length ? et(this.body, ...l3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(e5) {
              if (t5.controller.dump) return;
              const r4 = e5;
              return o4.encodedBodySize += r4.byteLength, this.body.push(r4);
            }, onComplete() {
              this.abort && t5.controller.off("terminated", this.abort), t5.controller.ended = true, this.body.push(null);
            }, onError(e5) {
              this.abort && t5.controller.off("terminated", this.abort), this.body?.destroy(e5), t5.controller.terminate(e5), a2(e5);
            }, onUpgrade(t6, e5, r4) {
              if (101 !== t6) return;
              const n6 = new u();
              for (let t7 = 0; t7 < e5.length; t7 += 2) {
                const r5 = e5[t7 + 0].toString("latin1"), s4 = e5[t7 + 1].toString("latin1");
                n6[X].append(r5, s4);
              }
              return i3({ status: t6, statusText: dt[t6], headersList: n6[X], socket: r4 }), true;
            } }));
          }
        })(c2, p2, n3);
        !z.has(d2.method) && t4.status >= 200 && t4.status, null == f2 && (f2 = t4);
      }
      if (f2.urlList = [...d2.urlList], d2.headersList.contains("range") && (f2.rangeRequested = true), f2.requestIncludesCredentials = p2, 407 === f2.status) return "no-window" === o3.window ? s2() : R(t3) ? i2(t3) : s2("proxy authentication required");
      if (421 === f2.status && !n3 && (null == o3.body || null != o3.body.source)) {
        if (R(t3)) return i2(t3);
        t3.controller.connection.destroy(), f2 = await It(t3, e3, true);
      }
      return f2;
    }
    t2.exports = { fetch: function(t3, e3 = {}) {
      mt.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const r3 = k();
      let s3;
      try {
        s3 = new c(t3, e3);
      } catch (t4) {
        return r3.reject(t4), r3.promise;
      }
      const i3 = s3[O];
      if (s3.signal.aborted) return _t(r3, i3, null, s3.signal.reason), r3.promise;
      const o3 = i3.client.globalObject;
      "ServiceWorkerGlobalScope" === o3?.constructor?.name && (i3.serviceWorkers = "none");
      let a2 = null, u2 = false, l2 = null;
      return rt(s3.signal, () => {
        u2 = true, G(null != l2), l2.abort(s3.signal.reason), _t(r3, i3, a2, s3.signal.reason);
      }), l2 = yt({ request: i3, processResponseEndOfBody: (t4) => At(t4, "fetch"), processResponse: (t4) => u2 ? Promise.resolve() : t4.aborted ? (_t(r3, i3, a2, l2.serializedAbortReason), Promise.resolve()) : "error" === t4.type ? (r3.reject(Object.assign(new TypeError("fetch failed"), { cause: t4.error })), Promise.resolve()) : (a2 = new n2(), a2[O] = t4, a2[$] = null, a2[F][X] = t4.headersList, a2[F][L] = "immutable", a2[F][$] = null, void r3.resolve(a2)), dispatcher: e3.dispatcher ?? lt() }), r3.promise;
    }, Fetch: gt, fetching: yt, finalizeAndReportTiming: At };
  }