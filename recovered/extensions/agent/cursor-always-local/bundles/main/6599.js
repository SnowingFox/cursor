// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6599 range:3687732..3700956
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6599: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.wsReachabilityProbeTesting = void 0, e2.classifyTlsVendor = b, e2.attemptWsReachabilityProbe = R, e2.attemptWsDurabilityProbe = P, e2.scheduleWsReachabilityProbe = function(t3) {
      return N({ ...t3, kind: "reachability" });
    }, e2.scheduleWsDurabilityProbe = function(t3) {
      return N({ ...t3, kind: "durability" });
    }, e2.cancelWsDurabilityProbe = function() {
      const t3 = E.durability;
      void 0 !== t3.timer && clearTimeout(t3.timer);
      t3.controller?.abort(), t3.controller = void 0, t3.timer = void 0, "scheduled" === t3.state && (t3.state = "idle", t3.owner = void 0);
    };
    const n2 = r2(7598), s2 = r2(7670), i2 = r2(7126), o2 = "ws_reachability_probe", a = "ws_dark_durability_probe", u = "/ws-reachability-probe", c = 5e3, l = 1e4, m = 3e4, d = 4, f = 3e4, p = "ws_dark_durability_probe_config", h = 1e3, g = 4e4, A = 1e3, _ = 3e4, y = 1, w = 8, S = { holdMs: f, echoTimeoutMs: c, concurrency: d };
    function J(t3, e3, r3, n3) {
      return "number" == typeof t3 && Number.isFinite(t3) ? Math.min(r3, Math.max(e3, Math.round(t3))) : n3;
    }
    async function B(t3) {
      let e3;
      try {
        e3 = "function" == typeof t3.getDynamicConfigValue ? await t3.getDynamicConfigValue(p) : void 0;
      } catch {
        e3 = void 0;
      }
      if (null == e3) try {
        e3 = "function" == typeof t3.getDynamicConfigFallbackValues ? t3.getDynamicConfigFallbackValues(p) : void 0;
      } catch {
        e3 = void 0;
      }
      const r3 = "object" == typeof e3 && null !== e3 ? e3 : {};
      return { holdMs: J(r3.idleHoldMs, h, g, S.holdMs), echoTimeoutMs: J(r3.echoTimeoutMs, A, _, S.echoTimeoutMs), concurrency: J(r3.concurrency, y, w, S.concurrency) };
    }
    const E = { reachability: { state: "idle" }, durability: { state: "idle" } }, I = [[/netskope|goskope/i, "netskope"], [/zscaler/i, "zscaler"], [/palo\s*alto|globalprotect/i, "paloalto"], [/fortinet|fortigate/i, "fortinet"], [/forcepoint/i, "forcepoint"], [/mcafee|skyhigh/i, "skyhigh"], [/blue\s*coat|symantec|broadcom/i, "broadcom"], [/check\s*point/i, "checkpoint"], [/sophos/i, "sophos"], [/iboss/i, "iboss"], [/menlo/i, "menlo"], [/cato\s*networks/i, "cato"]], C = /let'?s\s*encrypt|amazon|google\s*trust|digicert|globalsign|sectigo|entrust|cloudflare|isrg/i;
    function b(t3) {
      if (void 0 === t3 || 0 === t3.length) return "unknown";
      for (const [e3, r3] of I) if (e3.test(t3)) return r3;
      return C.test(t3) ? "public_ca" : "other";
    }
    function k(t3, e3, r3) {
      const n3 = b(r3.tlsIssuer), s3 = { subkey: "ws_reachability_probe", outcome: r3.outcome, httpStatus: r3.httpStatus, handshakeMs: r3.handshakeMs, echoRttMs: r3.echoRttMs, errorCode: r3.errorCode, http1Reason: e3.http1Reason, mode: e3.mode, tlsVendor: n3, tlsIssuer: r3.tlsIssuer };
      try {
        i2.StructuredLogProviderImpl.info("transport", "WebSocket reachability probe", s3);
      } catch (e4) {
        t3.debugLog.error("[wsReachabilityProbe] failed to emit structured log", e4);
      }
      try {
        t3.metricsIncrement({ stat: "transport.ws_reachability_probe", tags: { outcome: r3.outcome, http1_reason: e3.http1Reason, mode: e3.mode, tls_vendor: n3, handshake_completed: void 0 !== r3.handshakeMs ? "true" : "false" } });
      } catch (e4) {
        t3.debugLog.error("[wsReachabilityProbe] failed to emit metric", e4);
      }
    }
    function v(t3, e3 = "short") {
      const r3 = new URL(u, t3);
      if ("durability" === e3 && r3.searchParams.set("mode", "durability"), "https:" === r3.protocol) r3.protocol = "wss:";
      else {
        if ("http:" !== r3.protocol) throw new Error(`unsupported backend protocol: ${r3.protocol}`);
        r3.protocol = "ws:";
      }
      return r3.toString();
    }
    function q(t3) {
      const e3 = t3.code;
      return "string" == typeof e3 ? e3 : void 0;
    }
    function R(t3) {
      const { backendUrl: e3, accessToken: r3, timeoutMs: i3 = c } = t3;
      return new Promise((t4) => {
        let o3;
        try {
          o3 = new s2.WebSocket(v(e3), { followRedirects: false, perMessageDeflate: false, headers: { Authorization: `Bearer ${r3}` } });
        } catch (e4) {
          return void t4({ outcome: "network_error", errorCode: e4 instanceof Error ? q(e4) : void 0 });
        }
        const a2 = performance.now();
        let u2, c2, l2 = false;
        const m2 = setTimeout(() => d2({ outcome: "timeout", handshakeMs: u2 }), i3);
        function d2(e4) {
          l2 || (l2 = true, clearTimeout(m2), o3.removeAllListeners(), o3.on("error", () => {
          }), o3.terminate(), t4({ tlsIssuer: c2, ...e4 }));
        }
        function f2(t5) {
          try {
            const e4 = t5.socket;
            if ("function" != typeof e4?.getPeerCertificate) return;
            const r4 = e4.getPeerCertificate()?.issuer;
            if (void 0 === r4) return;
            const n3 = [r4.O, r4.CN].filter((t6) => "string" == typeof t6 && t6.length > 0);
            c2 = n3.length > 0 ? n3.join(" / ") : void 0;
          } catch {
          }
        }
        m2.unref(), o3.once("upgrade", (t5) => {
          f2(t5);
        }), o3.once("unexpected-response", (t5, e4) => {
          f2(e4), e4.resume(), d2({ outcome: "rejected", httpStatus: e4.statusCode, handshakeMs: Math.round(performance.now() - a2) });
        }), o3.once("error", (t5) => {
          d2({ outcome: "network_error", handshakeMs: u2, errorCode: q(t5) });
        }), o3.once("close", () => {
          d2({ outcome: "closed_early", handshakeMs: u2 });
        }), o3.once("open", () => {
          u2 = Math.round(performance.now() - a2);
          const t5 = (0, n2.randomBytes)(16), e4 = performance.now();
          o3.once("message", (r4) => {
            (Array.isArray(r4) ? Buffer.concat(r4) : Buffer.isBuffer(r4) ? r4 : Buffer.from(r4)).equals(t5) ? d2({ outcome: "success", handshakeMs: u2, echoRttMs: Math.round(performance.now() - e4) }) : d2({ outcome: "echo_mismatch", handshakeMs: u2 });
          });
          try {
            o3.send(t5);
          } catch (t6) {
            d2({ outcome: "network_error", handshakeMs: u2, errorCode: t6 instanceof Error ? q(t6) : void 0 });
          }
        });
      });
    }
    async function P(t3) {
      const { backendUrl: e3, accessToken: r3, signal: i3, holdMs: o3 = f, timeoutMs: a2 = c, concurrency: u2 = d } = t3;
      let l2 = 0, m2 = 0;
      const p2 = Array.from({ length: u2 }, (t4, e4) => e4), h2 = await Promise.all(p2.map(() => (function(t4) {
        const { backendUrl: e4, accessToken: r4, holdMs: i4, timeoutMs: o4, signal: a3, onOpen: u3, onFinish: c2 } = t4;
        return new Promise((t5) => {
          if (a3.aborted) return void t5(void 0);
          let l3;
          try {
            l3 = new s2.WebSocket(v(e4, "durability"), { followRedirects: false, perMessageDeflate: false, headers: { Authorization: `Bearer ${r4}` } });
          } catch {
            return void t5("network_error");
          }
          let m3, d2, f2 = "handshake", p3 = false, h3 = false;
          const g3 = (t6, e5) => {
            void 0 !== d2 && clearTimeout(d2), d2 = setTimeout(t6, e5), d2.unref();
          }, A3 = (e5) => {
            h3 || (h3 = true, void 0 !== d2 && clearTimeout(d2), a3.removeEventListener("abort", _3), l3.removeAllListeners(), l3.on("error", () => {
            }), l3.terminate(), p3 && c2(), t5(e5));
          }, _3 = () => A3(void 0);
          a3.addEventListener("abort", _3, { once: true });
          const y2 = (t6) => {
            f2 = t6, m3 = (0, n2.randomBytes)(16), g3(() => A3("initial" === t6 ? "initial_echo_timeout" : "final_echo_timeout"), o4);
            try {
              l3.send(m3);
            } catch {
              A3("network_error");
            }
          };
          g3(() => A3("handshake_timeout"), o4), l3.once("unexpected-response", (t6, e5) => {
            e5.resume(), A3("rejected");
          }), l3.once("error", () => A3("network_error")), l3.once("close", () => A3("closed_early")), l3.once("open", () => {
            p3 = true, u3(), y2("initial");
          }), l3.on("message", (t6) => {
            if ("initial" !== f2 && "final" !== f2) return void A3("echo_mismatch");
            const e5 = Array.isArray(t6) ? Buffer.concat(t6) : Buffer.isBuffer(t6) ? t6 : Buffer.from(t6);
            void 0 !== m3 && e5.equals(m3) ? "initial" === f2 ? (f2 = "idle", m3 = void 0, g3(() => y2("final"), i4)) : A3("success") : A3("echo_mismatch");
          });
        });
      })({ backendUrl: e3, accessToken: r3, holdMs: o3, timeoutMs: a2, signal: i3, onOpen: () => {
        l2 += 1, m2 = Math.max(m2, l2);
      }, onFinish: () => {
        l2 -= 1;
      } })));
      if (i3.aborted || h2.some((t4) => void 0 === t4)) return;
      const g2 = h2.filter((t4) => void 0 !== t4), A2 = g2.filter((t4) => "success" === t4).length, _2 = g2.find((t4) => "success" !== t4) ?? "none";
      return { outcome: A2 === u2 ? "success" : 0 === A2 ? "failure" : "partial", achievedConcurrency: m2, firstFailureBySocketIndex: _2, socketOutcomes: g2 };
    }
    function T(t3, e3, r3) {
      const n3 = true === e3.hasEffectiveProxy, s3 = { subkey: "ws_dark_durability_probe", outcome: r3.outcome, achievedConcurrency: r3.achievedConcurrency, firstFailureBySocketIndex: r3.firstFailureBySocketIndex, socketOutcomes: r3.socketOutcomes, http1Reason: e3.http1Reason, mode: e3.mode, hasEffectiveProxy: n3 };
      try {
        i2.StructuredLogProviderImpl.info("transport", "Dark WebSocket durability probe", s3);
      } catch (e4) {
        t3.debugLog.error("[wsReachabilityProbe] failed to emit durability log", e4);
      }
      try {
        t3.metricsIncrement({ stat: "transport.ws_dark_durability_probe", tags: { outcome: r3.outcome, achieved_concurrency: String(r3.achievedConcurrency), first_failure_by_socket_index: r3.firstFailureBySocketIndex, http1_reason: e3.http1Reason, mode: e3.mode, has_effective_proxy: n3 ? "true" : "false" } });
      } catch (e4) {
        t3.debugLog.error("[wsReachabilityProbe] failed to emit durability metric", e4);
      }
    }
    function x(t3, e3) {
      const r3 = E[t3];
      "scheduled" === r3.state && r3.owner === e3 && (void 0 !== r3.timer && clearTimeout(r3.timer), r3.state = "idle", r3.owner = void 0, r3.controller = void 0, r3.timer = void 0);
    }
    function N(t3) {
      const { host: e3, getContext: r3, kind: n3 } = t3, s3 = E[n3];
      if ("idle" !== s3.state || void 0 === r3()) return;
      const i3 = /* @__PURE__ */ Symbol(`ws-${n3}-probe`), u2 = new AbortController();
      s3.state = "scheduled", s3.owner = i3, s3.controller = u2;
      const c2 = t3.delayMs ?? l + Math.random() * (m - l), d2 = setTimeout(() => {
        Promise.resolve().then(async () => {
          if ("scheduled" !== s3.state || s3.owner !== i3) return;
          if (void 0 === r3() || void 0 === e3.getCursorAuthToken()) return void x(n3, i3);
          const t4 = "reachability" === n3 ? o2 : a, c3 = await e3.checkFeatureGate(t4);
          if ("scheduled" !== s3.state || s3.owner !== i3) return;
          if (!c3) return void x(n3, i3);
          const l2 = r3(), m2 = e3.getCursorAuthToken();
          if (void 0 === l2 || void 0 === m2) return void x(n3, i3);
          if (s3.state = "attempted", s3.owner = void 0, s3.timer = void 0, "reachability" === n3) {
            const t5 = await e3.runWithNetworkContext(() => R({ backendUrl: l2.backendUrl, accessToken: m2 }));
            return { kind: n3, context: l2, result: t5 };
          }
          const d3 = await B(e3);
          if ("attempted" !== s3.state || u2.signal.aborted) return;
          const f2 = await e3.runWithNetworkContext(() => P({ backendUrl: l2.backendUrl, accessToken: m2, signal: u2.signal, holdMs: d3.holdMs, timeoutMs: d3.echoTimeoutMs, concurrency: d3.concurrency }));
          return void 0 === f2 ? void 0 : { kind: n3, context: l2, result: f2 };
        }).then((t4) => {
          s3.controller === u2 && (s3.controller = void 0), void 0 !== t4 && ("reachability" === t4.kind ? k(e3, t4.context, t4.result) : T(e3, t4.context, t4.result));
        }).catch((t4) => {
          ("scheduled" === s3.state && s3.owner === i3 || s3.controller === u2) && (void 0 !== s3.timer && clearTimeout(s3.timer), s3.state = "idle", s3.owner = void 0, s3.controller = void 0, s3.timer = void 0), e3.debugLog.error(`[wsReachabilityProbe] unexpected ${n3} probe failure`, t4);
        });
      }, c2);
      return s3.timer = d2, d2.unref(), { dispose: () => {
        clearTimeout(d2), u2.abort(), x(n3, i3);
      } };
    }
    e2.wsReachabilityProbeTesting = { resolveDurabilityConfig: (t3) => B(t3), emitDurabilityTelemetry(t3, e3, r3) {
      T(t3, e3, r3);
    }, emitProbeTelemetry(t3, e3, r3) {
      k(t3, e3, r3);
    }, reset() {
      void 0 !== E.reachability.timer && clearTimeout(E.reachability.timer), void 0 !== E.durability.timer && clearTimeout(E.durability.timer), E.reachability.controller?.abort(), E.durability.controller?.abort(), E.reachability = { state: "idle" }, E.durability = { state: "idle" };
    } };
  }