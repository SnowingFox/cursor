// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 26599 range:4709796..4722997
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26599: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.wsReachabilityProbeTesting = void 0, t.classifyTlsVendor = k, t.attemptWsReachabilityProbe = B, t.attemptWsDurabilityProbe = P, t.scheduleWsReachabilityProbe = function(e2) {
      return q({ ...e2, kind: "reachability" });
    }, t.scheduleWsDurabilityProbe = function(e2) {
      return q({ ...e2, kind: "durability" });
    }, t.cancelWsDurabilityProbe = function() {
      const e2 = E.durability;
      void 0 !== e2.timer && clearTimeout(e2.timer);
      e2.controller?.abort(), e2.controller = void 0, e2.timer = void 0, "scheduled" === e2.state && (e2.state = "idle", e2.owner = void 0);
    };
    const n = r(77598), s = r(47670), o = r(7126), i = "ws_reachability_probe", a = "ws_dark_durability_probe", c = "/ws-reachability-probe", l = 5e3, u = 1e4, d = 3e4, p = 4, m = 3e4, h = "ws_dark_durability_probe_config", f = 1e3, g = 4e4, y = 1e3, w = 3e4, v = 1, _ = 8, A = { holdMs: m, echoTimeoutMs: l, concurrency: p };
    function S(e2, t2, r2, n2) {
      return "number" == typeof e2 && Number.isFinite(e2) ? Math.min(r2, Math.max(t2, Math.round(e2))) : n2;
    }
    async function b(e2) {
      let t2;
      try {
        t2 = "function" == typeof e2.getDynamicConfigValue ? await e2.getDynamicConfigValue(h) : void 0;
      } catch {
        t2 = void 0;
      }
      if (null == t2) try {
        t2 = "function" == typeof e2.getDynamicConfigFallbackValues ? e2.getDynamicConfigFallbackValues(h) : void 0;
      } catch {
        t2 = void 0;
      }
      const r2 = "object" == typeof t2 && null !== t2 ? t2 : {};
      return { holdMs: S(r2.idleHoldMs, f, g, A.holdMs), echoTimeoutMs: S(r2.echoTimeoutMs, y, w, A.echoTimeoutMs), concurrency: S(r2.concurrency, v, _, A.concurrency) };
    }
    const E = { reachability: { state: "idle" }, durability: { state: "idle" } }, I = [[/netskope|goskope/i, "netskope"], [/zscaler/i, "zscaler"], [/palo\s*alto|globalprotect/i, "paloalto"], [/fortinet|fortigate/i, "fortinet"], [/forcepoint/i, "forcepoint"], [/mcafee|skyhigh/i, "skyhigh"], [/blue\s*coat|symantec|broadcom/i, "broadcom"], [/check\s*point/i, "checkpoint"], [/sophos/i, "sophos"], [/iboss/i, "iboss"], [/menlo/i, "menlo"], [/cato\s*networks/i, "cato"]], C = /let'?s\s*encrypt|amazon|google\s*trust|digicert|globalsign|sectigo|entrust|cloudflare|isrg/i;
    function k(e2) {
      if (void 0 === e2 || 0 === e2.length) return "unknown";
      for (const [t2, r2] of I) if (t2.test(e2)) return r2;
      return C.test(e2) ? "public_ca" : "other";
    }
    function x(e2, t2, r2) {
      const n2 = k(r2.tlsIssuer), s2 = { subkey: "ws_reachability_probe", outcome: r2.outcome, httpStatus: r2.httpStatus, handshakeMs: r2.handshakeMs, echoRttMs: r2.echoRttMs, errorCode: r2.errorCode, http1Reason: t2.http1Reason, mode: t2.mode, tlsVendor: n2, tlsIssuer: r2.tlsIssuer };
      try {
        o.StructuredLogProviderImpl.info("transport", "WebSocket reachability probe", s2);
      } catch (t3) {
        e2.debugLog.error("[wsReachabilityProbe] failed to emit structured log", t3);
      }
      try {
        e2.metricsIncrement({ stat: "transport.ws_reachability_probe", tags: { outcome: r2.outcome, http1_reason: t2.http1Reason, mode: t2.mode, tls_vendor: n2, handshake_completed: void 0 !== r2.handshakeMs ? "true" : "false" } });
      } catch (t3) {
        e2.debugLog.error("[wsReachabilityProbe] failed to emit metric", t3);
      }
    }
    function T(e2, t2 = "short") {
      const r2 = new URL(c, e2);
      if ("durability" === t2 && r2.searchParams.set("mode", "durability"), "https:" === r2.protocol) r2.protocol = "wss:";
      else {
        if ("http:" !== r2.protocol) throw new Error(`unsupported backend protocol: ${r2.protocol}`);
        r2.protocol = "ws:";
      }
      return r2.toString();
    }
    function R(e2) {
      const t2 = e2.code;
      return "string" == typeof t2 ? t2 : void 0;
    }
    function B(e2) {
      const { backendUrl: t2, accessToken: r2, timeoutMs: o2 = l } = e2;
      return new Promise((e3) => {
        let i2;
        try {
          i2 = new s.WebSocket(T(t2), { followRedirects: false, perMessageDeflate: false, headers: { Authorization: `Bearer ${r2}` } });
        } catch (t3) {
          return void e3({ outcome: "network_error", errorCode: t3 instanceof Error ? R(t3) : void 0 });
        }
        const a2 = performance.now();
        let c2, l2, u2 = false;
        const d2 = setTimeout(() => p2({ outcome: "timeout", handshakeMs: c2 }), o2);
        function p2(t3) {
          u2 || (u2 = true, clearTimeout(d2), i2.removeAllListeners(), i2.on("error", () => {
          }), i2.terminate(), e3({ tlsIssuer: l2, ...t3 }));
        }
        function m2(e4) {
          try {
            const t3 = e4.socket;
            if ("function" != typeof t3?.getPeerCertificate) return;
            const r3 = t3.getPeerCertificate()?.issuer;
            if (void 0 === r3) return;
            const n2 = [r3.O, r3.CN].filter((e5) => "string" == typeof e5 && e5.length > 0);
            l2 = n2.length > 0 ? n2.join(" / ") : void 0;
          } catch {
          }
        }
        d2.unref(), i2.once("upgrade", (e4) => {
          m2(e4);
        }), i2.once("unexpected-response", (e4, t3) => {
          m2(t3), t3.resume(), p2({ outcome: "rejected", httpStatus: t3.statusCode, handshakeMs: Math.round(performance.now() - a2) });
        }), i2.once("error", (e4) => {
          p2({ outcome: "network_error", handshakeMs: c2, errorCode: R(e4) });
        }), i2.once("close", () => {
          p2({ outcome: "closed_early", handshakeMs: c2 });
        }), i2.once("open", () => {
          c2 = Math.round(performance.now() - a2);
          const e4 = (0, n.randomBytes)(16), t3 = performance.now();
          i2.once("message", (r3) => {
            (Array.isArray(r3) ? Buffer.concat(r3) : Buffer.isBuffer(r3) ? r3 : Buffer.from(r3)).equals(e4) ? p2({ outcome: "success", handshakeMs: c2, echoRttMs: Math.round(performance.now() - t3) }) : p2({ outcome: "echo_mismatch", handshakeMs: c2 });
          });
          try {
            i2.send(e4);
          } catch (e5) {
            p2({ outcome: "network_error", handshakeMs: c2, errorCode: e5 instanceof Error ? R(e5) : void 0 });
          }
        });
      });
    }
    async function P(e2) {
      const { backendUrl: t2, accessToken: r2, signal: o2, holdMs: i2 = m, timeoutMs: a2 = l, concurrency: c2 = p } = e2;
      let u2 = 0, d2 = 0;
      const h2 = Array.from({ length: c2 }, (e3, t3) => t3), f2 = await Promise.all(h2.map(() => (function(e3) {
        const { backendUrl: t3, accessToken: r3, holdMs: o3, timeoutMs: i3, signal: a3, onOpen: c3, onFinish: l2 } = e3;
        return new Promise((e4) => {
          if (a3.aborted) return void e4(void 0);
          let u3;
          try {
            u3 = new s.WebSocket(T(t3, "durability"), { followRedirects: false, perMessageDeflate: false, headers: { Authorization: `Bearer ${r3}` } });
          } catch {
            return void e4("network_error");
          }
          let d3, p2, m2 = "handshake", h3 = false, f3 = false;
          const g3 = (e5, t4) => {
            void 0 !== p2 && clearTimeout(p2), p2 = setTimeout(e5, t4), p2.unref();
          }, y3 = (t4) => {
            f3 || (f3 = true, void 0 !== p2 && clearTimeout(p2), a3.removeEventListener("abort", w3), u3.removeAllListeners(), u3.on("error", () => {
            }), u3.terminate(), h3 && l2(), e4(t4));
          }, w3 = () => y3(void 0);
          a3.addEventListener("abort", w3, { once: true });
          const v2 = (e5) => {
            m2 = e5, d3 = (0, n.randomBytes)(16), g3(() => y3("initial" === e5 ? "initial_echo_timeout" : "final_echo_timeout"), i3);
            try {
              u3.send(d3);
            } catch {
              y3("network_error");
            }
          };
          g3(() => y3("handshake_timeout"), i3), u3.once("unexpected-response", (e5, t4) => {
            t4.resume(), y3("rejected");
          }), u3.once("error", () => y3("network_error")), u3.once("close", () => y3("closed_early")), u3.once("open", () => {
            h3 = true, c3(), v2("initial");
          }), u3.on("message", (e5) => {
            if ("initial" !== m2 && "final" !== m2) return void y3("echo_mismatch");
            const t4 = Array.isArray(e5) ? Buffer.concat(e5) : Buffer.isBuffer(e5) ? e5 : Buffer.from(e5);
            void 0 !== d3 && t4.equals(d3) ? "initial" === m2 ? (m2 = "idle", d3 = void 0, g3(() => v2("final"), o3)) : y3("success") : y3("echo_mismatch");
          });
        });
      })({ backendUrl: t2, accessToken: r2, holdMs: i2, timeoutMs: a2, signal: o2, onOpen: () => {
        u2 += 1, d2 = Math.max(d2, u2);
      }, onFinish: () => {
        u2 -= 1;
      } })));
      if (o2.aborted || f2.some((e3) => void 0 === e3)) return;
      const g2 = f2.filter((e3) => void 0 !== e3), y2 = g2.filter((e3) => "success" === e3).length, w2 = g2.find((e3) => "success" !== e3) ?? "none";
      return { outcome: y2 === c2 ? "success" : 0 === y2 ? "failure" : "partial", achievedConcurrency: d2, firstFailureBySocketIndex: w2, socketOutcomes: g2 };
    }
    function J(e2, t2, r2) {
      const n2 = true === t2.hasEffectiveProxy, s2 = { subkey: "ws_dark_durability_probe", outcome: r2.outcome, achievedConcurrency: r2.achievedConcurrency, firstFailureBySocketIndex: r2.firstFailureBySocketIndex, socketOutcomes: r2.socketOutcomes, http1Reason: t2.http1Reason, mode: t2.mode, hasEffectiveProxy: n2 };
      try {
        o.StructuredLogProviderImpl.info("transport", "Dark WebSocket durability probe", s2);
      } catch (t3) {
        e2.debugLog.error("[wsReachabilityProbe] failed to emit durability log", t3);
      }
      try {
        e2.metricsIncrement({ stat: "transport.ws_dark_durability_probe", tags: { outcome: r2.outcome, achieved_concurrency: String(r2.achievedConcurrency), first_failure_by_socket_index: r2.firstFailureBySocketIndex, http1_reason: t2.http1Reason, mode: t2.mode, has_effective_proxy: n2 ? "true" : "false" } });
      } catch (t3) {
        e2.debugLog.error("[wsReachabilityProbe] failed to emit durability metric", t3);
      }
    }
    function M(e2, t2) {
      const r2 = E[e2];
      "scheduled" === r2.state && r2.owner === t2 && (void 0 !== r2.timer && clearTimeout(r2.timer), r2.state = "idle", r2.owner = void 0, r2.controller = void 0, r2.timer = void 0);
    }
    function q(e2) {
      const { host: t2, getContext: r2, kind: n2 } = e2, s2 = E[n2];
      if ("idle" !== s2.state || void 0 === r2()) return;
      const o2 = /* @__PURE__ */ Symbol(`ws-${n2}-probe`), c2 = new AbortController();
      s2.state = "scheduled", s2.owner = o2, s2.controller = c2;
      const l2 = e2.delayMs ?? u + Math.random() * (d - u), p2 = setTimeout(() => {
        Promise.resolve().then(async () => {
          if ("scheduled" !== s2.state || s2.owner !== o2) return;
          if (void 0 === r2() || void 0 === t2.getCursorAuthToken()) return void M(n2, o2);
          const e3 = "reachability" === n2 ? i : a, l3 = await t2.checkFeatureGate(e3);
          if ("scheduled" !== s2.state || s2.owner !== o2) return;
          if (!l3) return void M(n2, o2);
          const u2 = r2(), d2 = t2.getCursorAuthToken();
          if (void 0 === u2 || void 0 === d2) return void M(n2, o2);
          if (s2.state = "attempted", s2.owner = void 0, s2.timer = void 0, "reachability" === n2) {
            const e4 = await t2.runWithNetworkContext(() => B({ backendUrl: u2.backendUrl, accessToken: d2 }));
            return { kind: n2, context: u2, result: e4 };
          }
          const p3 = await b(t2);
          if ("attempted" !== s2.state || c2.signal.aborted) return;
          const m2 = await t2.runWithNetworkContext(() => P({ backendUrl: u2.backendUrl, accessToken: d2, signal: c2.signal, holdMs: p3.holdMs, timeoutMs: p3.echoTimeoutMs, concurrency: p3.concurrency }));
          return void 0 === m2 ? void 0 : { kind: n2, context: u2, result: m2 };
        }).then((e3) => {
          s2.controller === c2 && (s2.controller = void 0), void 0 !== e3 && ("reachability" === e3.kind ? x(t2, e3.context, e3.result) : J(t2, e3.context, e3.result));
        }).catch((e3) => {
          ("scheduled" === s2.state && s2.owner === o2 || s2.controller === c2) && (void 0 !== s2.timer && clearTimeout(s2.timer), s2.state = "idle", s2.owner = void 0, s2.controller = void 0, s2.timer = void 0), t2.debugLog.error(`[wsReachabilityProbe] unexpected ${n2} probe failure`, e3);
        });
      }, l2);
      return s2.timer = p2, p2.unref(), { dispose: () => {
        clearTimeout(p2), c2.abort(), M(n2, o2);
      } };
    }
    t.wsReachabilityProbeTesting = { resolveDurabilityConfig: (e2) => b(e2), emitDurabilityTelemetry(e2, t2, r2) {
      J(e2, t2, r2);
    }, emitProbeTelemetry(e2, t2, r2) {
      x(e2, t2, r2);
    }, reset() {
      void 0 !== E.reachability.timer && clearTimeout(E.reachability.timer), void 0 !== E.durability.timer && clearTimeout(E.durability.timer), E.reachability.controller?.abort(), E.durability.controller?.abort(), E.reachability = { state: "idle" }, E.durability = { state: "idle" };
    } };
  }