// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4113 range:160410..397798
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4113: (e, t, r) => {
    "use strict";
    r.d(t, { wB: () => us, mJ: () => ds, qU: () => ps });
    var n = r(9639), s = r(37949), o = r(33002), i = r(17392), a = r(60431), c = r(65588), l = r(17714), u = r(77213), d = r(31791), p = r(4410), m = r(5326), h = r(76263), f = r(34038), g = r(95750), y = r(1025);
    var w = r(67360), v = r(87339);
    async function _(e2, t2 = {}) {
      if ("external" === e2.kind) {
        const t3 = e2.agentTransport;
        return { agentClient: new i.PW({ run: (e3, r3, n3) => t3.run(e3, r3, n3) }, e2.agentBackendUrl), dispose: () => {
        } };
      }
      const r2 = await (async function(e3) {
        const t3 = { credentialManager: e3.credentialManager, backendUrl: e3.backendUrl, agentBackendUrl: e3.agentBackendUrl, clientIdentity: e3.clientIdentity, enabledFeatureGates: e3.enabledFeatureGates }, r3 = e3.createNetworkHost?.(t3) ?? (0, v.Z)((0, w.W)(t3), { clientIdentity: t3.clientIdentity });
        return await r3.initialize(), r3;
      })(e2), n2 = void 0 !== t2.createNetworkAgentClient ? await t2.createNetworkAgentClient(r2) : await (async function(e3, t3 = {}) {
        const r3 = e3, n3 = t3.createTransportHandler ?? ((e4) => new c.AiConnectTransportHandler(e4)), s2 = t3.createContextClient ?? ((e4, t4) => (0, a.Zj)(e4, t4)), o2 = t3.createConnectClient ?? f.UU, w2 = t3.createAgentClient ?? ((e4, t4) => new i.PW(e4, t4)), v2 = t3.loadBackgroundComposerService ?? (async () => d.BackgroundComposerService), _2 = n3(r3), A2 = _2.isSetup.then(() => {
        });
        let S2;
        var b2, E2;
        void 0 === r3.getCursorAuthToken() && void 0 !== r3.getCursorCreds() ? (b2 = _2, E2 = A2, S2 = { unary: async (e4, t4, r4, n4, s3, o3, i2) => (await E2, b2.getTransport().unary(e4, t4, r4, n4, s3, o3, i2)), stream: async (e4, t4, r4, n4, s3, o3, i2) => (await E2, b2.getTransport().stream(e4, t4, r4, n4, s3, o3, i2)) }) : (await A2, S2 = _2.getTransport());
        const I2 = r3.getCursorCreds()?.agentBackendUrlNonPrivacy.default ?? r3.getCursorCreds()?.backendUrl ?? "", C2 = s2(l.AgentService, S2), k2 = (0, g.u)({ run: (e4, t4, r4) => C2.run(e4, t4, r4) });
        let x2;
        const T2 = w2(void 0 === t3.wrapAgentTransport ? k2 : t3.wrapAgentTransport(k2), I2), R2 = { transport: S2, isHttp2TransportFor: (e4) => _2.isHttp2TransportFor(e4) }, B2 = void 0 === t3.wrapInferenceTransport ? R2 : t3.wrapInferenceTransport(R2), P2 = o2(p.InferenceService, B2.transport), J2 = o2(u.AiService, B2.transport), M2 = { runWebSearch: J2.runWebSearch, runWebFetch: J2.runWebFetch, runGenerateImage: J2.runGenerateImage, runGenerateVideo: J2.runGenerateVideo, runXSearch: J2.runXSearch, codebaseSearch: o2(h.RepositoryService, B2.transport), smartModeClassifier: J2 }, q2 = new y.ZC(r3, o2(m.PrivateInferenceService, B2.transport)), D2 = o2(l.AgentService, B2.transport);
        return { client: T2, transport: S2, inferenceTransport: B2.transport, managedInferenceClient: P2, managedAgentToolsClient: M2, managedAgentServiceClient: D2, privateInferenceBackend: q2, backgroundComposerClientProvider: () => (x2 ??= Promise.resolve().then(() => v2()).then((e4) => o2(e4, S2)).catch((e4) => {
          throw x2 = void 0, e4;
        }), x2), transportReady: A2, dispose: () => {
          q2.dispose(), _2.dispose(), e3.dispose?.();
        } };
      })(r2, { ...void 0 === e2.wrapAgentTransport ? {} : { wrapAgentTransport: e2.wrapAgentTransport }, ...void 0 === e2.wrapInferenceTransport ? {} : { wrapInferenceTransport: e2.wrapInferenceTransport } });
      return void 0 !== n2.transport && void 0 !== e2.onConnectTransportReady && e2.onConnectTransportReady(n2.transport), { agentClient: n2.client, managedInferenceClient: n2.managedInferenceClient, managedAgentToolsClient: n2.managedAgentToolsClient, managedAgentServiceClient: n2.managedAgentServiceClient, inferenceTransport: n2.inferenceTransport, privateInferenceBackend: n2.privateInferenceBackend, backgroundComposerClientProvider: n2.backgroundComposerClientProvider, runtimeCapabilities: r2, dispose: () => n2.dispose() };
    }
    var A = r(8032), S = r(40328);
    const b = "InferenceService.RunInference is not enabled for this account";
    class E {
      constructor() {
        this.latched = false, this.denials = 0, this.gateReadOff = false;
      }
      recordDenial() {
        this.latched || (this.latched = true, this.denials += 1, this.gateReadOff = false);
      }
      observeGate(e2) {
        return !!this.latched && (e2 ? this.gateReadOff && 1 === this.denials && (this.latched = false) : this.gateReadOff = true, this.latched);
      }
    }
    class I extends i.SK {
      constructor(e2) {
        super("The local agent loop was turned off for this account during the turn", { cause: e2, displayInfo: { title: "Local agent loop turned off", detail: "The local agent loop was turned off for your account while this turn was running. Resume to continue on the backend loop.", isRetryable: true } });
      }
    }
    var C = r(51635), k = r(56151), x = r(77598), T = r(45904), R = r(81958);
    const B = 524288, P = 3e4, J = 1e3, M = R.Ik({ token: R.Yj().min(1), expiresAt: R.ai().finite(), retryAt: R.ai().finite(), failures: R.ai().int().min(0).max(10) }), q = "~turn";
    class D {
      constructor(e2) {
        this.options = e2, this.disposed = false, this.identityVersion = 0, this.flushAgain = false;
      }
      start() {
        this.disposed || void 0 !== this.identitySubscription || (this.identitySubscription = this.options.backend.onDidChangeIdentity(() => {
          this.identityVersion++, this.cancelRequest?.(), this.schedule(0);
        }), this.schedule(0));
      }
      enqueue(e2, t2) {
        if (0 === t2.usageUuid.length || 0 === t2.invocationId.length) throw new Error("Private inference usage requires a complete identity");
        this.enqueueRecord(e2, { kind: "invocation", value: t2 });
      }
      enqueueTurn(e2, t2) {
        if (0 === t2.usageUuid.length) throw new Error("Private inference turn outcome requires a usage id");
        this.enqueueRecord(e2, { kind: "turn", value: t2 });
      }
      enqueueRecord(e2, t2) {
        if (this.disposed) throw new Error("Private inference usage outbox is disposed");
        if (0 === e2.authId.length || 0 === e2.backendUrl.length) throw new Error("Private inference usage requires a complete identity");
        if (L(t2) > B) throw new Error("Private inference usage record exceeds batch size");
        const r2 = N(e2, t2), n2 = t2.value.toJsonString();
        this.options.store.transaction(() => {
          const e3 = this.options.store.items.get(r2);
          if (void 0 !== e3 && e3 !== n2) throw new Error(`Conflicting private inference usage ${t2.kind}`);
          void 0 === e3 && this.options.store.items.set(r2, n2);
        }), this.start(), this.schedule(0);
      }
      flush() {
        if (this.disposed) return Promise.resolve();
        if (void 0 !== this.inFlight) return this.inFlight;
        this.start(), this.cancelScheduled(), this.flushAgain = false;
        let e2 = J;
        return this.inFlight = this.flushOnce().then((t2) => {
          e2 = t2;
        }).finally(() => {
          this.inFlight = void 0, this.schedule(this.flushAgain ? 0 : e2);
        }), this.inFlight;
      }
      dispose() {
        this.disposed || (this.disposed = true, this.identitySubscription?.dispose(), this.identitySubscription = void 0, this.cancelScheduled(), this.cancelRequest?.(), this.cancelRequest = void 0);
      }
      async flushOnce() {
        const [e2, t2] = (0, o.q6)().withTimeoutAndCancel(2e4);
        this.cancelRequest = t2;
        const r2 = this.identityVersion;
        let n2;
        try {
          const t3 = await $(e2, () => this.options.backend.getIdentity());
          if (e2.canceled) throw e2.reason;
          if (void 0 === t3 || 0 === this.options.store.items.keys(O("pending", t3)).length) return P;
          const r3 = this.claimLease(t3);
          if ("waitMs" in r3) return r3.waitMs;
          n2 = r3;
          const s2 = this.readBatch(t3);
          if (e2.canceled || Date.now() >= n2.expiresAt) throw new Error("Private inference usage flush lease expired");
          if (s2.length > 0 && await $(e2, () => this.options.backend.reportUsage(t3, U(s2), e2.signal)), e2.canceled) throw e2.reason;
          return this.settleLease(n2, s2), s2.length > 0 && this.countFlush("sent"), s2.length > 0 ? 0 : P;
        } catch (e3) {
          if (this.disposed) return P;
          let t3 = J;
          if (void 0 !== n2) try {
            t3 = this.settleLease(n2);
          } catch (e4) {
            this.options.onError(e4);
          }
          return r2 !== this.identityVersion ? (this.countFlush("superseded"), 0) : (this.countFlush("failed", (function(e4) {
            if (e4 instanceof S.T) return A.C[e4.code] ?? "Unknown";
            if (e4 instanceof Error) return "" === e4.name ? "Error" : e4.name;
            return "Unknown";
          })(e3)), this.options.onError(e3), t3);
        } finally {
          t2(), this.cancelRequest = void 0;
        }
      }
      claimLease(e2) {
        const t2 = O("coordination", e2);
        return this.options.store.transaction(() => {
          const e3 = M.optional().parse(this.options.store.items.get(t2)), r2 = Date.now(), n2 = Math.max(e3?.expiresAt ?? 0, e3?.retryAt ?? 0);
          if (n2 > r2) return { waitMs: Math.min(P, n2 - r2) };
          const s2 = { token: (0, x.randomUUID)(), expiresAt: r2 + 6e4, retryAt: 0, failures: e3?.failures ?? 0 };
          return this.options.store.items.set(t2, s2), { key: t2, token: s2.token, expiresAt: s2.expiresAt };
        });
      }
      readBatch(e2) {
        const t2 = [];
        let r2 = 0;
        const n2 = this.options.store.items.keys(O("pending", e2)).slice(0, 50);
        for (const s2 of n2) {
          const n3 = this.options.store.items.get(s2);
          if (void 0 === n3) continue;
          if ("string" != typeof n3) throw new Error("Invalid private inference usage record");
          const o2 = F(s2, n3);
          if (N(e2, o2) !== s2) throw new Error("Private inference usage record identity mismatch");
          const i2 = L(o2);
          if (i2 > B) throw new Error("Private inference usage record exceeds batch size");
          if (r2 + i2 > B) break;
          r2 += i2, t2.push({ key: s2, json: n3, record: o2 });
        }
        return t2;
      }
      settleLease(e2, t2) {
        return this.options.store.transaction(() => {
          const r2 = M.optional().parse(this.options.store.items.get(e2.key)), n2 = Date.now();
          if (r2?.token !== e2.token || r2.expiresAt <= n2) return 0;
          if (void 0 !== t2) {
            for (const e3 of t2) {
              const t3 = this.options.store.items.get(e3.key);
              if (void 0 !== t3 && t3 !== e3.json) throw new Error("Private inference usage changed during upload");
              void 0 !== t3 && this.options.store.items.delete(e3.key);
            }
            return this.options.store.items.delete(e2.key), 0;
          }
          const s2 = Math.min(3e5, J * 2 ** r2.failures);
          return this.options.store.items.set(e2.key, { ...r2, expiresAt: 0, retryAt: n2 + s2, failures: Math.min(10, r2.failures + 1) }), s2;
        });
      }
      schedule(e2) {
        if (this.disposed) return;
        if (void 0 !== this.inFlight) return void (this.flushAgain = true);
        const t2 = Date.now() + e2;
        if (void 0 !== this.scheduled && this.scheduled.at <= t2) return;
        this.cancelScheduled();
        const [r2, n2] = (0, o.q6)().withTimeoutAndCancel(e2), s2 = { at: t2, cancel: n2 };
        this.scheduled = s2, (0, o.uk)(r2).then(() => {
          this.scheduled !== s2 || this.disposed || (this.scheduled = void 0, this.flush().catch(this.options.onError));
        });
      }
      cancelScheduled() {
        const e2 = this.scheduled;
        this.scheduled = void 0, e2?.cancel();
      }
      countFlush(e2, t2) {
        try {
          this.options.metrics?.increment?.({ stat: "agent_host.private_inference.usage_flush", value: 1, tags: void 0 === t2 ? { outcome: e2 } : { outcome: e2, reason: t2 } });
        } catch (e3) {
          this.options.onError(e3);
        }
      }
    }
    function O(e2, t2) {
      return `private-inference-usage/v1/${e2}/${encodeURIComponent(t2.authId)}/${encodeURIComponent(t2.backendUrl)}/`;
    }
    function N(e2, t2) {
      const r2 = `${O("pending", e2)}${encodeURIComponent(t2.value.usageUuid)}/`;
      return "invocation" === t2.kind ? `${r2}${encodeURIComponent(t2.value.invocationId)}` : `${r2}${q}`;
    }
    function F(e2, t2) {
      return e2.endsWith(`/${q}`) ? { kind: "turn", value: T.YN.fromJsonString(t2, { ignoreUnknownFields: true }) } : { kind: "invocation", value: T.u0.fromJsonString(t2, { ignoreUnknownFields: true }) };
    }
    function U(e2) {
      const t2 = new T.Ln();
      for (const { record: r2 } of e2) "invocation" === r2.kind ? t2.invocations.push(r2.value) : t2.turns.push(r2.value);
      return t2;
    }
    function L(e2) {
      return U([{ key: "", json: "", record: e2 }]).toBinary().byteLength;
    }
    function $(e2, t2) {
      return e2.canceled ? Promise.reject(e2.reason) : new Promise((r2, n2) => {
        const s2 = () => n2(e2.reason);
        e2.signal.addEventListener("abort", s2, { once: true });
        try {
          t2().then(r2, n2).finally(() => e2.signal.removeEventListener("abort", s2));
        } catch (t3) {
          e2.signal.removeEventListener("abort", s2), n2(t3);
        }
      });
    }
    var Q = r(35068), j = r(84304);
    function G(e2, t2) {
      let r2 = e2;
      return void 0 !== t2.requestId && (r2 = r2.with(j.ku, t2.requestId)), void 0 !== t2.parentRequestId && (r2 = r2.with(j.UI, t2.parentRequestId)), void 0 !== t2.rootParentRequestId && (r2 = r2.with(j.OR, t2.rootParentRequestId)), r2;
    }
    var H = r(34472);
    const z = [["IS_CLOUD_AGENT", "true"], ["EVERYSPHERE_DEV_IN_CLOUD", "1"]];
    var W = r(31421);
    class V extends Error {
      constructor() {
        super(...arguments), this.name = "LlmGatewayCredentialError";
      }
    }
    function K(e2, t2) {
      const r2 = e2.trim();
      return "" === r2 ? Promise.reject(new V("LLM Gateway credential helper command must not be empty")) : true === t2.signal?.aborted ? Promise.reject(new V("LLM Gateway credential helper run was aborted")) : new Promise((e3, n2) => {
        const s2 = "win32" === process.platform ? (0, W.spawn)("cmd.exe", ["/d", "/s", "/c", `"${r2}"`], { stdio: ["ignore", "pipe", "pipe"], windowsHide: true, windowsVerbatimArguments: true }) : (0, W.spawn)("/bin/sh", ["-c", r2], { stdio: ["ignore", "pipe", "pipe"], detached: true }), o2 = [], i2 = [];
        let a2 = 0, c2 = 0, l2 = false;
        const u2 = (e4) => {
          l2 || (l2 = true, clearTimeout(h2), clearTimeout(m2), t2.signal?.removeEventListener("abort", p2), n2(e4));
        }, d2 = (e4) => {
          (() => {
            if ("win32" !== process.platform) {
              if (void 0 !== s2.pid) try {
                return void process.kill(-s2.pid, "SIGKILL");
              } catch {
              }
              s2.kill("SIGKILL");
            } else void 0 !== s2.pid ? (0, W.spawn)("taskkill", ["/pid", String(s2.pid), "/t", "/f"], { stdio: "ignore", windowsHide: true }).on("error", () => {
              s2.kill("SIGKILL");
            }) : s2.kill("SIGKILL");
          })(), s2.stdout.destroy(), s2.stderr.destroy(), u2(e4);
        }, p2 = () => {
          d2(new V("LLM Gateway credential helper run was aborted"));
        };
        let m2;
        t2.signal?.addEventListener("abort", p2, { once: true });
        const h2 = setTimeout(() => {
          if (0 === s2.exitCode) return m2 = setTimeout(() => {
            l2 || d2(new V("LLM Gateway credential helper exited successfully but left child processes holding stdout past the deadline; helper scripts must not let background children inherit stdout (for example, redirect them to /dev/null)"));
          }, 250), void m2.unref?.();
          d2(new V(`LLM Gateway credential helper timed out after ${t2.timeoutMs}ms`));
        }, t2.timeoutMs);
        h2.unref?.(), s2.stdout.on("data", (e4) => {
          const r3 = Buffer.from(e4);
          a2 += r3.length, a2 > t2.maxOutputBytes ? d2(new V(`LLM Gateway credential helper exceeded the ${t2.maxOutputBytes}-byte output limit`)) : o2.push(r3);
        }), s2.stderr.on("data", (e4) => {
          if (c2 >= 8192) return;
          const t3 = Buffer.from(e4);
          c2 += t3.length, i2.push(t3);
        }), s2.on("error", (e4) => {
          u2(new V("LLM Gateway credential helper failed to start", { cause: e4 }));
        }), s2.on("close", (r3, n3) => {
          if (l2) return;
          if (0 === r3) return l2 = true, clearTimeout(h2), clearTimeout(m2), t2.signal?.removeEventListener("abort", p2), void e3(Buffer.concat(o2).toString("utf8"));
          const s3 = Buffer.concat(i2).toString("utf8");
          u2(new V(`LLM Gateway credential helper exited unsuccessfully: ${(function(e4, t3) {
            if (null !== e4) return `exit code ${e4}`;
            return null !== t3 ? `signal ${t3}` : "unknown exit status";
          })(r3, n3)}${(function(e4) {
            const t3 = e4.trim();
            if (!t3) return "";
            return `; stderr: ${(r4 = t3, r4.replace(/[A-Za-z0-9_./+=-]{24,}/gu, "[redacted]")).slice(0, 1e3)}`;
            var r4;
          })(s3)}`));
        });
      });
    }
    function Y(e2, t2 = {}) {
      const r2 = t2.now ?? Date.now, n2 = t2.runHelper ?? K, s2 = e2.timeoutMs ?? 1e4, o2 = e2.maxOutputBytes ?? 1048576;
      let i2, a2;
      const c2 = async (t3) => {
        const a3 = await n2(e2.helperCommand, { timeoutMs: s2, maxOutputBytes: o2, signal: t3 });
        if (t3.aborted) throw new V("LLM Gateway credential helper run was cancelled");
        const c3 = a3.trim();
        if ("" === c3) throw new V("LLM Gateway credential helper produced empty output");
        if (/[\r\n]/u.test(c3)) throw new V("LLM Gateway credential helper produced multi-line output");
        return i2 = { value: c3, expiresAtMs: r2() + e2.ttlMs }, c3;
      };
      return { getCredential({ signal: e3 }) {
        if (e3.aborted) return Promise.reject(new V("LLM Gateway credential request was cancelled"));
        if (void 0 !== i2 && r2() < i2.expiresAtMs) return Promise.resolve(i2.value);
        if (void 0 === a2) {
          const e4 = new AbortController(), t4 = { promise: c2(e4.signal).finally(() => {
            a2 === t4 && (a2 = void 0);
          }), waiters: 0, abort: e4 };
          a2 = t4;
        }
        const t3 = a2;
        return t3.waiters += 1, (function(e4, t4, r3) {
          return new Promise((n3, s3) => {
            const o3 = () => {
              s3(new V("LLM Gateway credential request was cancelled")), r3();
            };
            t4.addEventListener("abort", o3, { once: true }), e4.then((e5) => {
              t4.removeEventListener("abort", o3), n3(e5);
            }, (e5) => {
              t4.removeEventListener("abort", o3), s3(e5);
            });
          });
        })(t3.promise, e3, () => {
          t3.waiters -= 1, 0 === t3.waiters && (t3.abort.abort(), a2 === t3 && (a2 = void 0));
        });
      } };
    }
    function Z(e2 = process.env) {
      const t2 = (function(e3) {
        if (z.some(([t4, r4]) => e3[t4] === r4)) return;
        const t3 = e3.CURSOR_LLM_GATEWAY_API_KEY_HELPER?.trim();
        if (!t3) return;
        const r3 = e3.CURSOR_LLM_GATEWAY_API_KEY_HELPER_TTL_MS?.trim(), n2 = void 0 === r3 || "" === r3 ? Number.NaN : Number(r3);
        return { helperCommand: t3, ttlMs: Number.isFinite(n2) && n2 > 0 && n2 <= 36e5 ? n2 : 3e5 };
      })(e2);
      if (void 0 === t2) return;
      const r2 = Y(t2);
      return async (e3) => ({ bearerToken: await r2.getCredential({ signal: e3 }) });
    }
    class X {
      constructor(e2, t2 = {}) {
        this.client = e2, this.mintLlmGatewayCredential = "from-local-env" === t2.llmGatewayCredential ? Z() : void 0;
      }
      async run(e2) {
        const t2 = this.mintLlmGatewayCredential, r2 = void 0 === t2 ? e2.runOptions : { ...e2.runOptions, mintLlmGatewayCredential: t2 }, n2 = e2.runOptions.conversationId, s2 = G(e2.ctx, { requestId: e2.runOptions.generationUUID, parentRequestId: e2.runOptions.parentRequestId, rootParentRequestId: e2.runOptions.rootParentRequestId }).with(H.u, { conversationId: n2, composerId: e2.runOptions.conversationGroupId ?? n2, requestId: e2.runOptions.generationUUID ?? "", modelName: e2.runOptions.requestedModel?.modelId ?? e2.modelDetails?.modelId ?? "", ...e2.runOptions.parentAgentToolCallId ? { parentToolCallId: e2.runOptions.parentAgentToolCallId } : {} });
        (0, Q.notifyAgentStoreConversationTurn)(n2, "start");
        try {
          await this.client.run(s2, e2.conversationState, e2.action, e2.modelDetails, e2.interactionListener, e2.resources, e2.blobStore, e2.conversationActionManager, e2.checkpointHandler, e2.mcpTools, r2);
        } finally {
          (0, Q.notifyAgentStoreConversationTurn)(n2, "end");
        }
      }
      dispose() {
      }
    }
    const ee = () => ({ runtime: "connect", reason: "managed-local-unavailable", disposition: "expected" });
    var te = r(11247);
    const re = (0, s.h)("@anysphere/agent-host:turn-routing");
    class ne extends i.SK {
      constructor(e2) {
        super(`A turn that restricts its tools runs only on the local loop, and it was routed to the backend (${e2})`, { displayInfo: { title: "This turn's tool restriction needs the local loop", detail: `This turn limits the tools its agent may use, and only the local loop enforces that. It was routed to the backend loop (${e2}), so it was refused rather than run with every tool.`, isRetryable: false } });
      }
    }
    function se(e2, t2) {
      return { ...e2, ctx: e2.ctx.with(te.y, t2) };
    }
    function oe(e2, t2, r2) {
      e2.runOptions.onTurnRuntimeSelected?.({ runtime: t2, reason: r2 });
    }
    function ie(e2) {
      const t2 = e2.runOptions.requestedModel?.modelId, r2 = e2.modelDetails?.modelId;
      return { conversationId: e2.runOptions.conversationId, generationUUID: e2.runOptions.generationUUID, actionCase: e2.action.action.case, modelId: t2 || r2 || void 0 };
    }
    class ae {
      constructor(e2, t2 = ee, r2, n2, s2) {
        this.connect = e2, this.route = t2, this.managedLocal = r2, this.metrics = n2, this.enrollmentLatch = s2;
      }
      async run(e2) {
        const t2 = await this.route(e2), r2 = ie(e2);
        switch (re.info(e2.ctx, "Selected Agent Host turn runtime", { runtime: t2.runtime, reason: t2.reason, ...r2 }), "connect" === t2.runtime && "fallback" === t2.disposition && (re.warn(e2.ctx, "Local loop fell back to the backend loop for this turn", { reason: t2.reason, ...r2 }), this.count(e2.ctx, "agent_host.local_loop.fallback", { reason: t2.reason })), t2.runtime) {
          case "connect":
            return this.runOnConnect(e2, t2.reason);
          case "managed-local":
            if (void 0 === this.managedLocal) throw new Error(`managed-local runtime selected (${t2.reason}) but no managed-local adapter exists`);
            return oe(e2, "managed-local", t2.reason), void 0 === this.enrollmentLatch ? this.managedLocal.run(se(e2, t2.runtime)) : this.runOnLocalLoop(e2, this.managedLocal, this.enrollmentLatch);
          case "fail":
            throw t2.error;
          default: {
            const e3 = t2;
            throw new Error(`Unknown turn route decision: ${JSON.stringify(e3)}`);
          }
        }
      }
      runOnConnect(e2, t2) {
        if (void 0 !== e2.runOptions.toolRestriction) throw new ne(t2);
        return oe(e2, "connect", t2), this.connect.run(se(e2, "connect"));
      }
      async runOnLocalLoop(e2, t2, r2) {
        const n2 = (function(e3) {
          let t3 = false;
          const r3 = /* @__PURE__ */ new Set(), n3 = (t4) => ({ sendUpdate: t4, query: e3.query.bind(e3), enqueuePostTurnEndedWork: e3.enqueuePostTurnEndedWork?.bind(e3), flushPostTurnEndedWork: e3.flushPostTurnEndedWork?.bind(e3) });
          return { listener: n3((n4, s2) => {
            if ((0, i.qi)(s2)) t3 = true;
            else if ("userMessageAppended" === s2.message.case) {
              const e4 = s2.message.value.userMessage?.messageId;
              e4 && r3.add(e4);
            }
            return e3.sendUpdate(n4, s2);
          }), sawModelOutput: () => t3, listenerForRerun: () => n3((t4, n4) => "userMessageAppended" === n4.message.case && r3.has(n4.message.value.userMessage?.messageId ?? "") ? Promise.resolve() : e3.sendUpdate(t4, n4)) };
        })(e2.interactionListener);
        try {
          await t2.run(se({ ...e2, interactionListener: n2.listener }, "managed-local"));
        } catch (t3) {
          if (!(function(e3) {
            const t4 = /* @__PURE__ */ new Set();
            let r3 = e3;
            for (; r3 instanceof Error && !t4.has(r3); ) {
              if (t4.add(r3), r3 instanceof i.Yv) {
                const e4 = r3.displayInfo;
                if (e4?.connectCode === A.C.PermissionDenied && e4.detail === b) return true;
              } else if (r3 instanceof S.T && r3.code === A.C.PermissionDenied && r3.rawMessage === b) return true;
              r3 = r3.cause;
            }
            return false;
          })(t3)) throw t3;
          r2.recordDenial();
          const s2 = n2.sawModelOutput() ? "failed_mid_turn" : "retried_on_connect";
          if (re.warn(e2.ctx, "Local loop refused for this account", { outcome: s2, ...ie(e2) }), this.count(e2.ctx, "agent_host.local_loop.enrollment_denied", { outcome: s2 }), "failed_mid_turn" === s2) throw new I(t3);
          return e2.conversationActionManager.resetStream(), this.runOnConnect({ ...e2, interactionListener: n2.listenerForRerun() }, "enrollment-denied");
        }
      }
      count(e2, t2, r2) {
        try {
          this.metrics?.increment?.({ stat: t2, value: 1, tags: r2 });
        } catch (r3) {
          re.warn(e2, "Local loop counter emission failed", { stat: t2, error: String(r3) });
        }
      }
      dispose() {
        let e2;
        try {
          this.managedLocal?.dispose();
        } catch (t2) {
          e2 = t2;
        }
        try {
          this.connect.dispose();
        } catch (t2) {
          e2 ??= t2;
        }
        if (void 0 !== e2) throw e2;
      }
    }
    var ce = r(58878), le = r(69584), ue = r(86209), de = r(62337), pe = r(15071), me = r(86928);
    const he = [/[\s~^:?*\\]/, /\[/, /\.\./, /@\{/, /\/\//, /\/$/, /\.lock$/, /\.$/];
    async function fe(e2) {
      const t2 = await (async function(e3, t3, r3) {
        const n3 = [];
        let s3 = t3.length > 0;
        for (const i3 of t3) {
          const t4 = await e3.exec((0, o.q6)(), i3, ["config", "--get-regexp", "^remote\\..*\\.url$"], { caller: "cloudSubagentRepositoryResolver" }).catch(() => {
          });
          if (0 !== t4?.exitCode) {
            s3 = false;
            continue;
          }
          const a2 = ye(t4.stdout).map((e4) => we(e4, i3)).filter((e4) => void 0 !== e4), c2 = (void 0 === r3 || 0 === r3.identityKeys.size ? void 0 : a2.find((e4) => r3.identityKeys.has((0, pe.CR)(e4.repoUrl)))) ?? a2[0];
          if (void 0 === c2) {
            s3 = false;
            continue;
          }
          const l2 = (0, pe.CR)(c2.repoUrl), u2 = a2.filter((e4) => (0, pe.xY)((0, pe.CR)(e4.repoUrl), l2));
          n3.push(ge(u2, r3) ?? c2);
        }
        return { repositories: n3, everyWorkspaceResolved: s3 };
      })(e2.gitExecutor, e2.workspacePaths, e2.preferredRepos);
      if (!t2.everyWorkspaceResolved) return { kind: "fallback", reason: "workspace_not_resolved" };
      if (1 !== new Set(t2.repositories.map((e3) => (0, pe.CR)(e3.repoUrl))).size) return { kind: "fallback", reason: "repository_not_unique" };
      const r2 = /* @__PURE__ */ new Map();
      for (const e3 of t2.repositories) {
        const t3 = r2.get(e3.transportScheme);
        if (void 0 === t3) r2.set(e3.transportScheme, e3.transportPort);
        else if (t3 !== e3.transportPort) return { kind: "fallback", reason: "repository_not_unique" };
      }
      const n2 = ge(t2.repositories, e2.preferredRepos);
      if (void 0 === n2) return { kind: "fallback", reason: "repository_not_unique" };
      const s2 = e2.requestedBaseBranch?.trim(), i2 = void 0 !== s2 && s2.length > 0 ? Se(s2) : await (async function(e3, t3) {
        const r3 = /* @__PURE__ */ new Set();
        for (const n3 of new Set(t3)) {
          const t4 = await e3.exec((0, o.q6)(), n3, ["branch", "--show-current"], { caller: "cloudSubagentRepositoryResolver" }).catch(() => {
          }), s3 = 0 === t4?.exitCode && t4.stdout.trim() || void 0;
          if (void 0 === s3) return;
          r3.add(Se(s3));
        }
        return 1 === r3.size ? r3.values().next().value : void 0;
      })(e2.gitExecutor, t2.repositories.map((e3) => e3.workspacePath));
      return void 0 === i2 ? { kind: "fallback", reason: "branch_not_unique" } : { kind: "resolved", binding: { repoUrl: n2.repoUrl, fullRepoUrl: n2.fullRepoUrl, baseBranch: i2 } };
    }
    function ge(e2, t2) {
      return (void 0 === t2 || 0 === t2.transportUrls.size ? void 0 : e2.find((e3) => t2.transportUrls.has(e3.fullRepoUrl))) ?? e2[0];
    }
    function ye(e2) {
      const t2 = [];
      for (const r2 of e2.split("\n")) {
        const e3 = r2.search(/\s/);
        if (-1 === e3) continue;
        const n2 = r2.slice(0, e3), s2 = r2.slice(e3 + 1).trim();
        n2.startsWith("remote.") && n2.endsWith(".url") && s2.length > 0 && t2.push(s2);
      }
      return t2;
    }
    function we(e2, t2) {
      const r2 = (function(e3) {
        if (e3.includes("://")) return e3;
        const t3 = e3.match(/^[^@/]+@([^:]+):(.+)$/);
        if (null === t3) return e3;
        return `https://${t3[1]}/${t3[2]}`;
      })(e2), n2 = r2.match(/^([a-z][a-z0-9+.-]*):\/\//i)?.[1]?.toLowerCase();
      if (void 0 === n2 || !["http", "https", "ssh", "git"].includes(n2)) return;
      const s2 = (0, pe.zB)(r2), o2 = (0, pe.dA)(r2);
      return 0 !== s2.length && 0 !== o2.length ? { repoUrl: s2, fullRepoUrl: o2, workspacePath: t2, transportScheme: ve({ rawUrl: e2, rewrittenUrl: r2, scheme: n2 }), transportPort: Ae({ url: r2, scheme: n2 }) } : void 0;
    }
    function ve(e2) {
      return e2.rewrittenUrl !== e2.rawUrl || "ssh" === e2.scheme ? "ssh" : "http" === e2.scheme || "https" === e2.scheme ? e2.scheme : "git";
    }
    const _e = { ssh: "22", git: "9418" };
    function Ae(e2) {
      try {
        const t2 = new URL(e2.url).port;
        return t2 === _e[e2.scheme] ? "" : t2;
      } catch {
        return "";
      }
    }
    function Se(e2) {
      let t2 = e2.trim();
      for (const e3 of ["refs/heads/", "heads/", "refs/remotes/", "remotes/"]) if (t2.startsWith(e3)) {
        t2 = t2.slice(e3.length);
        break;
      }
      if (t2.startsWith("origin/") && (t2 = t2.slice(7)), !(function(e3) {
        if (0 === e3.length) return false;
        for (const t3 of e3) {
          const e4 = t3.charCodeAt(0);
          if (e4 < 32 || 127 === e4) return false;
        }
        return e3.trim() === e3 && (!(e3.startsWith("-") || e3.startsWith(".") || e3.startsWith("/")) && ("HEAD" !== e3 && ("@" !== e3 && (!e3.split("/").some((e4) => e4.startsWith(".") || e4.endsWith(".lock") || e4.endsWith(".")) && he.every((t3) => !t3.test(e3))))));
      })(t2)) throw new Error(`Invalid cloud base branch: ${e2}`);
      return t2;
    }
    const be = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4";
    function Ee(e2) {
      return /* @__PURE__ */ (function(e3) {
        const t2 = /* @__PURE__ */ new Map(), r2 = async (r3, n2, s2) => {
          const o2 = s2.parentConversationId?.trim();
          if (!o2) throw new Error("Missing parent conversation id for cloud subagent resume.");
          const i2 = t2.get(n2);
          if (void 0 !== i2) {
            if (i2.parent.parentSessionId !== o2) throw new Error("Cloud subagent parent mismatch for resume.");
            return void Be(e3.logTrace, "resume-ownership", { agentId: n2, source: "in-memory" });
          }
          const a2 = await (async function(e4) {
            const t3 = (0, x.randomUUID)();
            let r4;
            try {
              r4 = await (await e4.backend.backgroundComposerClientProvider()).getBackgroundComposerInfo(new de.Y_J({ bcId: e4.bcId, includeDiff: false, doNotThrowIfSetupNotFinished: true }), Ve(e4.ctx, t3));
            } catch (r5) {
              throw new Error(`Cloud subagent ownership check failed: ${Fe(r5)} (cloud subagent ${e4.bcId}, server request ID ${t3})`, { cause: r5 });
            }
            const n3 = r4.composer?.composer?.cloudSubagentParent;
            if (n3?.parentAgentType !== de.A4w.LOCAL || n3.parentAgentId.trim() !== e4.requestedParentId) throw new Error("Cloud subagent parent mismatch for resume.");
            return { parentToolCallId: n3.parentToolCallId };
          })({ ctx: r3, backend: e3.backend, bcId: n2, requestedParentId: o2 });
          t2.set(n2, { kind: "remote-cloud", sessionId: n2, parent: { parentSessionId: o2, parentToolCallId: a2.parentToolCallId, rootSessionId: s2.rootParentConversationId?.trim() || o2 } }), Be(e3.logTrace, "resume-ownership", { agentId: n2, source: "server-record" });
        };
        return { createOrResumeCloudSubagent: async (n2, s2) => {
          if (void 0 !== s2.forkAgentId) throw new Error('environment: "cloud" does not support forkAgentId/resume="self" yet.');
          if (void 0 !== s2.continuationConfig) throw new Error('environment: "cloud" does not support continuation subagents yet.');
          const o2 = s2.resumeAgentId?.trim();
          if (o2) return await r2(n2, o2, s2), o2;
          const i2 = s2.parentConversationId?.trim();
          if (!i2) throw new Error("Cloud subagent creation requires a parent conversation id.");
          const a2 = await e3.creator.create(n2, s2);
          return t2.set(a2, { kind: "remote-cloud", sessionId: a2, parent: { parentSessionId: i2, parentToolCallId: s2.toolCallId.trim(), rootSessionId: s2.rootParentConversationId?.trim() || i2 } }), Be(e3.logTrace, "create-fresh", { agentId: a2, toolCallId: s2.toolCallId, runInBackground: s2.runInBackground }), a2;
        }, runCloudSubagent: async (n2, s2, i2) => {
          const a2 = i2.resumeAgentId?.trim();
          return a2 && !t2.has(a2) && await r2(n2, a2, i2), (async function(e4) {
            const t3 = (function(e5) {
              const t4 = e5.args.resumeAgentId?.trim();
              if (!t4) return { kind: "initial", targetMessageId: e5.args.toolCallId };
              if (e5.args.prompt.trim().length > 0) {
                const t5 = (0, x.randomUUID)(), r3 = e5.args.parentConversationId?.trim() ?? "", n3 = e5.backend.getParentEffectiveMaxMode(r3);
                return { kind: "followup", targetMessageId: t5, submit: (r4) => (async function(e6) {
                  const t6 = (0, x.randomUUID)();
                  Be(e6.logTrace, "followup-submit", { agentId: e6.agentId, followupId: e6.followupId, interrupt: true === e6.args.interrupt, requestId: t6 });
                  const r5 = await Ge({ ctx: e6.ctx, backend: e6.backend, parentSessionId: e6.args.parentConversationId?.trim() ?? "", maxMode: e6.maxMode, args: e6.args, logWarning: e6.logWarning }), n4 = await e6.backend.backgroundComposerClientProvider();
                  await n4.addAsyncFollowupBackgroundComposer(new de.FFs({ bcId: e6.agentId, synchronous: false, followupConversationAction: je({ prompt: e6.args.prompt, messageId: e6.followupId, selectedContext: e6.args.selectedContext }), followupId: e6.followupId, followupSource: de._bo.AS_SUBAGENT_FROM_LOCAL, requestedModel: He(e6.args, e6.maxMode, r5) }), Ve(e6.ctx, t6)), true === e6.args.interrupt && await n4.submitPendingFollowupNow(new de.$te({ bcId: e6.agentId, followupId: e6.followupId }), Ve(e6.ctx, (0, x.randomUUID)()));
                })({ ctx: r4, agentId: e5.agentId, args: e5.args, followupId: t5, maxMode: n3, backend: e5.backend, logWarning: e5.logWarning, logTrace: e5.logTrace }) };
              }
              return { kind: "await-idle" };
            })(e4);
            Be(e4.logTrace, "watch-start", { agentId: e4.agentId, toolCallId: e4.args.toolCallId, watch: t3.kind, runInBackground: e4.args.runInBackground });
            try {
              const r3 = await (async function(e5, t4) {
                let r4, n3, s3, o2, i3, a3 = false, c2 = false, l2 = false, u2 = 0, d2 = 0, p2 = false, m2 = false;
                const h2 = "await-idle" === t4.kind ? void 0 : t4.targetMessageId, f2 = (e6) => {
                  0 !== e6.length && e6 !== r4 && (r4 = e6, u2 = 0);
                };
                for (; ; ) {
                  Ye(e5.ctx);
                  const [g2, y2] = e5.ctx.withCancel();
                  let w2;
                  const v2 = () => {
                    void 0 !== w2 && clearTimeout(w2), w2 = setTimeout(() => y2(new Error("Cloud subagent stream became inactive")), Re);
                  };
                  try {
                    v2();
                    const u3 = await e5.backend.backgroundComposerClientProvider(), y3 = (0, x.randomUUID)(), w3 = u3.streamConversation(new de.D23({ bcId: e5.agentId, offsetKey: r4, filterHeavyStepData: true, shouldSendPrefetchedBlobsFirst: false, prefetchOnlyLastStepPerTurn: true, maxBlobsAfterPrefetch: 0, allowStreamingWhenTerminalStatus: true, includeStreamHeartbeats: true, purpose: de.OE5.LIVE }), Ve(g2, y3));
                    for await (const r5 of w3) {
                      v2();
                      const u4 = r5.message;
                      if ("followup" === t4.kind && !l2) {
                        const r6 = "initialState" === u4.case || "workflowStatusWithOffset" === u4.case ? u4.value.workflowStatus : void 0;
                        if (void 0 !== r6) {
                          const e6 = Je({ status: r6, watchKind: t4.kind, sawTargetMessage: a3, sawTurnActivity: c2 });
                          if ("error" === e6?.kind) throw new Ue(e6.message);
                          o2 = r6 === de.sB5.RUNNING || r6 === de.sB5.WAITING_FOR_BACKGROUND_WORK;
                        }
                        l2 = true;
                        try {
                          await t4.submit(e5.ctx);
                        } catch (t5) {
                          throw new Le(`Cloud subagent follow-up submit failed for ${e5.agentId}: ${Fe(t5)}`);
                        }
                      }
                      let g3;
                      switch (u4.case) {
                        case "initialState": {
                          const r6 = u4.value.cloudAgentState?.conversationState;
                          n3 = r6 ?? n3, s3 ??= n3?.turns.length, "followup" === t4.kind && void 0 !== r6 && await Pe({ ctx: e5.ctx, agentId: e5.agentId, backend: e5.backend, conversationState: r6, minimumTurnIndex: Math.max(0, (s3 ?? 1) - 1), targetMessageId: t4.targetMessageId }) && (m2 = true, g3 = i3, i3 = void 0), u4.value.workflowStatus !== de.sB5.RUNNING && u4.value.workflowStatus !== de.sB5.WAITING_FOR_BACKGROUND_WORK || (c2 = true);
                          const o3 = Je({ status: u4.value.workflowStatus, watchKind: t4.kind, sawTargetMessage: a3, sawTurnActivity: c2 });
                          g3 ??= "followup" === t4.kind && "error" !== o3?.kind ? void 0 : o3, Be(e5.logTrace, "workflow-status", { agentId: e5.agentId, status: u4.value.workflowStatus, source: "initial-state" });
                          break;
                        }
                        case "interactionUpdateWithOffset": {
                          f2(u4.value.offsetKey);
                          const e6 = u4.value.interactionUpdate;
                          if ("userMessageAppended" === e6?.message.case) void 0 !== h2 && e6.message.value.userMessage?.messageId === h2 && (a3 = true);
                          else if ("turnEnded" === e6?.message.case) {
                            if ("initial" === t4.kind && (a3 || c2)) g3 = { kind: "completed", requireSummary: false };
                            else if ("followup" === t4.kind && a3) {
                              const e7 = { kind: "completed", requireSummary: false };
                              m2 ? g3 = e7 : true !== o2 || p2 ? i3 = e7 : p2 = true;
                            }
                          }
                          break;
                        }
                        case "workflowStatusWithOffset": {
                          f2(u4.value.offsetKey);
                          const r6 = u4.value.workflowStatus;
                          r6 !== de.sB5.RUNNING && r6 !== de.sB5.WAITING_FOR_BACKGROUND_WORK || (c2 = true);
                          const n4 = Je({ status: r6, watchKind: t4.kind, sawTargetMessage: a3, sawTurnActivity: c2 });
                          g3 = "followup" !== t4.kind || "completed" !== n4?.kind || m2 ? n4 : void 0, Be(e5.logTrace, "workflow-status", { agentId: e5.agentId, status: r6, source: "stream-update" });
                          break;
                        }
                        case "cloudAgentStateWithIdAndOffset": {
                          f2(u4.value.offsetKey);
                          const r6 = u4.value.cloudAgentState?.conversationState;
                          n3 = r6 ?? n3, s3 ??= n3?.turns.length, "followup" === t4.kind && void 0 !== r6 && await Pe({ ctx: e5.ctx, agentId: e5.agentId, backend: e5.backend, conversationState: r6, minimumTurnIndex: Math.max(0, (s3 ?? 1) - 1), targetMessageId: t4.targetMessageId }) && (m2 = true, g3 = i3, i3 = void 0);
                          break;
                        }
                      }
                      if ("error" === g3?.kind) throw new Ue(g3.message);
                      if ("completed" === g3?.kind) {
                        if ("followup" === t4.kind && !m2) continue;
                        const r6 = await Me(e5);
                        if (g3.requireSummary && !r6) {
                          if (d2 >= Te) throw new Qe(`Cloud subagent summary was unavailable after ${Te} retries for ${e5.agentId}`);
                          throw d2 += 1, new $e(`Cloud subagent summary is not ready for ${e5.agentId}`);
                        }
                        return r6;
                      }
                    }
                    throw new Error("Cloud subagent stream ended before the turn completed");
                  } catch (t5) {
                    if (Ye(e5.ctx), !Oe(t5)) throw t5;
                    if (u2 >= xe) throw new Error(`Native cloud subagent stream failed after ${xe} retries without progress for ${e5.agentId}: ${Fe(t5)}`, { cause: t5 });
                    const r5 = Ke(u2, Ce, ke);
                    u2 += 1, e5.logWarning?.(`Native cloud subagent stream disconnected for ${e5.agentId}; retrying in ${r5}ms: ${Fe(t5)}`), await Ne(r5, e5.ctx.signal);
                  } finally {
                    void 0 !== w2 && clearTimeout(w2), y2();
                  }
                }
              })(e4, t3);
              return Be(e4.logTrace, "watch-terminal", { agentId: e4.agentId, watch: t3.kind, outcome: "completed", hasSummary: void 0 !== r3 }), { status: "completed", ...void 0 === r3 ? {} : { finalMessage: r3 } };
            } catch (r3) {
              if (e4.ctx.signal.aborted) {
                try {
                  const t4 = (0, o.q6)().withTimeout(1e4);
                  await (await e4.backend.backgroundComposerClientProvider()).pauseBackgroundComposer(new de.O6D({ bcId: e4.agentId, source: de._bo.AS_SUBAGENT_FROM_LOCAL }), Ve(t4, (0, x.randomUUID)()));
                } catch (t4) {
                  e4.logWarning?.(`Failed to pause aborted native cloud subagent ${e4.agentId}: ${Fe(t4)}`);
                }
                return Be(e4.logTrace, "watch-terminal", { agentId: e4.agentId, watch: t3.kind, outcome: "aborted" }), { status: "aborted", error: "Cloud subagent was aborted" };
              }
              return Be(e4.logTrace, "watch-terminal", { agentId: e4.agentId, watch: t3.kind, outcome: "error", errorName: r3 instanceof Error ? r3.name : typeof r3 }), { status: "error", error: Fe(r3) };
            }
          })({ ctx: n2, agentId: s2, args: i2, backend: e3.backend, logWarning: e3.logWarning, logTrace: e3.logTrace });
        }, ownsCloudChildLifecycle: true };
      })({ creator: Ie({ ...e2, resolveCloudSubagentStorePreparer: ce.V2 }), backend: e2.backend, logWarning: e2.nativeCloudSubagents.logWarning, logTrace: e2.nativeCloudSubagents.logTrace });
    }
    function Ie(e2) {
      return new ze(e2);
    }
    const Ce = 1e3, ke = 3e4, xe = 8, Te = 8, Re = 75e3;
    function Be(e2, t2, r2) {
      e2?.(`[native-cloud-subagent] ${t2} ${JSON.stringify(r2)}`);
    }
    async function Pe(e2) {
      const t2 = e2.conversationState?.turns;
      if (void 0 === t2) return false;
      const r2 = await e2.backend.backgroundComposerClientProvider();
      for (let n2 = t2.length - 1; n2 >= e2.minimumTurnIndex; n2 -= 1) {
        const s2 = await r2.getBlobForAgentKV(new de.Wt4({ bcId: e2.agentId, blobId: new Uint8Array(t2[n2]) }), Ve(e2.ctx, (0, x.randomUUID)()));
        if (0 === s2.blobData.length) continue;
        const o2 = le.cmU.fromBinary(s2.blobData);
        if ("agentConversationTurn" !== o2.turn.case) continue;
        const i2 = o2.turn.value.userMessage;
        if (0 === i2.length) continue;
        const a2 = await r2.getBlobForAgentKV(new de.Wt4({ bcId: e2.agentId, blobId: new Uint8Array(i2) }), Ve(e2.ctx, (0, x.randomUUID)()));
        if (0 !== a2.blobData.length && le.RGk.fromBinary(a2.blobData).messageId === e2.targetMessageId) return true;
      }
      return false;
    }
    function Je(e2) {
      switch (e2.status) {
        case de.sB5.IDLE:
        case de.sB5.ARCHIVED:
          return "followup" === e2.watchKind ? e2.sawTargetMessage ? { kind: "completed", requireSummary: false } : void 0 : "await-idle" === e2.watchKind ? { kind: "completed", requireSummary: false } : { kind: "completed", requireSummary: !(e2.sawTargetMessage || e2.sawTurnActivity) };
        case de.sB5.ERROR:
        case de.sB5.EXPIRED:
          return { kind: "error", message: `Cloud subagent ended with workflow status ${e2.status}` };
        default:
          return;
      }
    }
    async function Me(e2) {
      for (let t2 = 0; t2 < 3; t2 += 1) try {
        const t3 = (0, x.randomUUID)();
        return (await (await e2.backend.backgroundComposerClientProvider()).getTurnSummaryBackgroundComposer(new de.zoE({ bcId: e2.agentId, sourceType: de._bo.AS_SUBAGENT_FROM_LOCAL }), Ve(e2.ctx, t3))).summary.trim() || void 0;
      } catch (r2) {
        if (Ye(e2.ctx), !Oe(r2) || 2 === t2) return void e2.logWarning?.(`Failed to hydrate native cloud subagent summary for ${e2.agentId}: ${Fe(r2)}`);
        await Ne(Ke(t2, Ce, ke), e2.ctx.signal);
      }
    }
    function qe(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      let n2 = e2;
      for (; null !== n2 && ("object" == typeof n2 || "function" == typeof n2) && !r2.has(n2); ) t2.push(n2), r2.add(n2), n2 = "cause" in n2 ? n2.cause : void 0;
      for (const e3 of t2) if (De(e3)) return new S.T(e3.rawMessage, e3.code, void 0, void 0, e3);
      for (const e3 of t2) {
        if (!(e3 instanceof Error)) continue;
        const t3 = /^\[([a-z_]+)\](?:\s+(.*))?$/.exec(e3.message);
        if (null === t3) continue;
        const r3 = (0, me.X)(t3[1] ?? "");
        if (void 0 !== r3) return new S.T(t3[2] ?? "", r3, void 0, void 0, e3);
      }
      return S.T.from(e2);
    }
    function De(e2) {
      if (null === e2 || "object" != typeof e2) return false;
      const t2 = e2;
      return "number" == typeof t2.code && t2.code >= A.C.Canceled && t2.code <= A.C.Unauthenticated && "string" == typeof t2.rawMessage;
    }
    function Oe(e2) {
      if (e2 instanceof $e) return true;
      if (e2 instanceof Ue || e2 instanceof Le || e2 instanceof Qe) return false;
      const t2 = qe(e2);
      return t2.code === A.C.Canceled || t2.code === A.C.Unknown || t2.code === A.C.DeadlineExceeded || t2.code === A.C.NotFound || t2.code === A.C.ResourceExhausted || t2.code === A.C.Aborted || t2.code === A.C.Internal || t2.code === A.C.Unavailable || t2.code === A.C.DataLoss;
    }
    function Ne(e2, t2) {
      return t2.aborted ? Promise.reject(t2.reason ?? new Error("Cloud subagent cancelled")) : new Promise((r2, n2) => {
        const s2 = setTimeout(() => {
          t2.removeEventListener("abort", o2), r2();
        }, e2), o2 = () => {
          clearTimeout(s2), n2(t2.reason ?? new Error("Cloud subagent cancelled"));
        };
        t2.addEventListener("abort", o2, { once: true }), t2.aborted && o2();
      });
    }
    function Fe(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    class Ue extends Error {
    }
    class Le extends Error {
    }
    class $e extends Error {
    }
    class Qe extends Error {
    }
    function je(e2) {
      return new le.QFf({ action: { case: "userMessageAction", value: new le.Vtf({ userMessage: new le.RGk({ text: e2.prompt, messageId: e2.messageId, selectedContext: e2.selectedContext, mode: le.xyI.AGENT }), sendToInteractionListener: true }) } });
    }
    async function Ge(e2) {
      if (e2.args.modelParameters.length > 0) return e2.args.modelParameters;
      const t2 = e2.backend.resolveSavedModelParameters;
      if (void 0 !== t2) try {
        const r2 = await t2({ ctx: e2.ctx, parentSessionId: e2.parentSessionId, rootSessionId: e2.args.rootParentConversationId?.trim() || e2.parentSessionId, modelId: e2.args.modelId, ...void 0 === e2.maxMode ? {} : { maxMode: e2.maxMode } });
        return r2?.map((e3) => ({ id: e3.id, value: e3.value }));
      } catch (t3) {
        return void e2.logWarning?.(`Saved model parameter lookup degraded to the bare model id for ${e2.args.modelId}: ${Fe(t3)}`);
      }
    }
    function He(e2, t2, r2) {
      return new ue.G4({ modelId: e2.modelId, ...void 0 === t2 ? {} : { maxMode: t2 }, parameters: (r2 ?? e2.modelParameters).map((e3) => new ue.SR({ id: e3.id, value: e3.value })) });
    }
    class ze {
      constructor(e2) {
        this.options = e2, this.creationByIdentity = /* @__PURE__ */ new Map(), this.createInFlight = /* @__PURE__ */ new Map();
      }
      async resolveCloudEnvironmentRepoPreference(e2) {
        const t2 = this.cloudEnvironmentRepoPreferenceCache;
        if (void 0 !== t2 && Date.now() < t2.expiresAtMs) return t2.preference;
        const r2 = this.cloudEnvironmentRepoPreferenceInFlight;
        if (void 0 !== r2) return Ze(r2, e2);
        const n2 = this.fetchCloudEnvironmentRepoPreference().finally(() => {
          this.cloudEnvironmentRepoPreferenceInFlight === n2 && (this.cloudEnvironmentRepoPreferenceInFlight = void 0);
        });
        return this.cloudEnvironmentRepoPreferenceInFlight = n2, Ze(n2, e2);
      }
      async fetchCloudEnvironmentRepoPreference() {
        const e2 = Date.now();
        let t2;
        const [r2, n2] = (0, o.q6)().withTimeoutAndCancel(5e3);
        try {
          const e3 = await this.options.backend.backgroundComposerClientProvider(), n3 = [];
          let s2;
          do {
            const t3 = await e3.listEnvironments(new de.Cwe({ includeEnvironmentJson: false, ...void 0 === s2 ? {} : { pageToken: s2 } }), { signal: r2.signal });
            n3.push(...t3.environments), s2 = t3.hasMore && t3.nextPageToken ? t3.nextPageToken : void 0;
          } while (void 0 !== s2);
          t2 = (0, pe._f)(n3);
        } catch (e3) {
          this.options.nativeCloudSubagents.logWarning?.(`Cloud environment lookup failed; resolving repositories without environment preference: ${String(e3)}`), t2 = void 0;
        } finally {
          n2();
        }
        return this.cloudEnvironmentRepoPreferenceCache = { preference: t2, expiresAtMs: e2 + 6e4 }, t2;
      }
      async create(e2, t2) {
        if (void 0 !== t2.resumeAgentId || void 0 !== t2.forkAgentId || void 0 !== t2.continuationConfig) throw new Error("Native cloud subagent creator only handles fresh creations.");
        const r2 = t2.parentConversationId?.trim(), n2 = t2.toolCallId.trim();
        if (!r2 || !n2) throw new Error("Cloud subagent creation requires parent conversation and tool call IDs.");
        const s2 = `${r2}\0${n2}`, o2 = `bc-${(function(e3, t3) {
          const r3 = Buffer.from(t3.replaceAll("-", ""), "hex"), n3 = (0, x.createHash)("sha1").update(r3).update(e3, "utf8").digest(), s3 = Buffer.from(n3.subarray(0, 16));
          s3[6] = 15 & s3[6] | 80, s3[8] = 63 & s3[8] | 128;
          const o3 = s3.toString("hex");
          return `${o3.slice(0, 8)}-${o3.slice(8, 12)}-${o3.slice(12, 16)}-${o3.slice(16, 20)}-${o3.slice(20)}`;
        })(`local-task:${(i2 = { parentConversationId: r2, parentToolCallId: n2 }).parentConversationId}:${i2.parentToolCallId}`, be)}`;
        var i2;
        const a2 = this.creationByIdentity.get(s2);
        if ("created" === a2?.status) return Be(this.options.nativeCloudSubagents.logTrace, "create-replay", { status: a2.status, agentId: a2.bcId, toolCallId: n2 }), a2.bcId;
        if ("uncertain" === a2?.status) throw Be(this.options.nativeCloudSubagents.logTrace, "create-replay", { status: a2.status, agentId: a2.bcId, toolCallId: n2 }), a2.error;
        const c2 = this.createInFlight.get(s2);
        if (void 0 !== c2) return Be(this.options.nativeCloudSubagents.logTrace, "create-replay", { status: "in-flight", toolCallId: n2 }), Ze(c2, e2);
        this.creationByIdentity.set(s2, { status: "reserved", bcId: o2 });
        const l2 = this.options.backend.getParentEffectiveMaxMode(r2), u2 = this.start(e2, t2, r2, n2, o2, l2).then((e3) => (this.creationByIdentity.set(s2, { status: "created", bcId: e3 }), e3)).catch((e3) => {
          throw e3 instanceof We ? this.creationByIdentity.set(s2, { status: "uncertain", bcId: o2, error: e3 }) : this.creationByIdentity.delete(s2), e3;
        });
        this.createInFlight.set(s2, u2);
        try {
          return await u2;
        } finally {
          this.createInFlight.get(s2) === u2 && this.createInFlight.delete(s2);
        }
      }
      async start(e2, t2, r2, n2, s2, o2) {
        Ye(e2);
        const i2 = this.options.resolveSessionOptions(r2);
        if (void 0 === i2) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", { reason: "missing-session-options", agentId: s2, toolCallId: n2 }), new Error(`No agent-host session options for cloud subagent parent ${r2}.`);
        const a2 = i2.workspacePaths ?? [];
        if (0 === a2.length || a2.some((e3) => 0 === e3.trim().length)) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", { reason: "missing-workspace-roots", agentId: s2, toolCallId: n2 }), new Error(`No non-empty workspace roots for cloud subagent parent ${r2}.`);
        const c2 = await this.resolveCloudEnvironmentRepoPreference(e2);
        Ye(e2);
        const l2 = await fe({ gitExecutor: this.options.gitExecutor, workspacePaths: a2, requestedBaseBranch: t2.cloudBaseBranch, ...void 0 === c2 ? {} : { preferredRepos: c2 } });
        if (Ye(e2), "fallback" === l2.kind) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", { reason: l2.reason, agentId: s2, toolCallId: n2 }), new Error((function(e3) {
          switch (e3) {
            case "workspace_not_resolved":
              return 'environment: "cloud" requires every workspace folder to be a git repository with a supported remote.';
            case "repository_not_unique":
              return 'environment: "cloud" requires exactly one known git remote for the parent workspace.';
            case "branch_not_unique":
              return 'environment: "cloud" requires a base branch; no cloud_base_branch was provided and the current branch could not be determined.';
          }
        })(l2.reason));
        const u2 = i2.owningProject, d2 = u2?.projectAgentId.trim() || void 0, p2 = await (async function(e3) {
          if (void 0 === e3.preparer) return [];
          try {
            Ye(e3.ctx);
            const t3 = await e3.preparer.prepareCloudSubagentStores({ signal: e3.ctx.signal, parentStoreId: e3.parentStoreId, additionalStoreIds: e3.additionalStoreIds });
            return Ye(e3.ctx), [...new Set(t3.map((e4) => e4.trim()).filter(Boolean))];
          } catch (t3) {
            if (e3.ctx.signal.aborted) throw t3;
            return e3.logWarning?.("Cloud subagent store preparation degraded to none."), [];
          }
        })({ ctx: e2, parentStoreId: r2, additionalStoreIds: void 0 === d2 ? [] : [d2], preparer: this.options.resolveCloudSubagentStorePreparer?.(), logWarning: this.options.nativeCloudSubagents.logWarning });
        Ye(e2);
        const m2 = void 0 === u2 ? void 0 : new le.umU({ ...u2.projectName?.trim() ? { name: u2.projectName.trim() } : {}, subagent: new le.H1o({ ...void 0 !== d2 && p2.includes(d2) ? { storeDir: `/cursor/stores/${d2}` } : {} }) }), h2 = this.options.backend.getTeamId(), f2 = await Ge({ ctx: e2, backend: this.options.backend, parentSessionId: r2, maxMode: o2, args: t2, logWarning: this.options.nativeCloudSubagents.logWarning }), g2 = new de.IU4({ bcId: s2, snapshotNameOrId: l2.binding.repoUrl, devcontainerStartingPoint: new de.Zlj({ url: l2.binding.fullRepoUrl, ref: l2.binding.baseBranch }), snapshotWorkspaceRootPath: "/workspace", returnImmediately: true, repoUrl: l2.binding.fullRepoUrl, source: de._bo.AS_SUBAGENT_FROM_LOCAL, autoBranch: true, baseBranch: l2.binding.baseBranch, conversationAction: je({ prompt: t2.prompt, messageId: n2, selectedContext: t2.selectedContext }), startingMessageType: de.sPB.USER_MESSAGE, addInitialMessageToResponses: true, repositoryInfo: { pathEncryptionKey: "", shouldSyncIndex: false }, requestedModels: [He(t2, o2, f2)], ...void 0 === h2 ? {} : { teamId: h2 }, cloudSubagentParent: new de.gqt({ parentAgentId: r2, parentToolCallId: n2, parentAgentType: de.A4w.LOCAL, subagentTypeName: t2.subagentType }), requestedAdditionalStoreIds: p2, projectDetails: m2, skills: [] }), y2 = (0, x.randomUUID)();
        Be(this.options.nativeCloudSubagents.logTrace, "native-start", { agentId: s2, requestId: y2, toolCallId: n2, runInBackground: t2.runInBackground });
        try {
          const t3 = await (await this.options.backend.backgroundComposerClientProvider()).startBackgroundComposerFromSnapshot(g2, Ve(e2, y2)), r3 = t3.composer?.bcId || s2;
          if (r3 !== s2) throw new We(`Cloud subagent returned unexpected agent id: ${r3}`);
          return Be(this.options.nativeCloudSubagents.logTrace, "native-created", { agentId: s2, requestId: y2, toolCallId: n2 }), s2;
        } catch (e3) {
          const t3 = qe(e3);
          if (Be(this.options.nativeCloudSubagents.logTrace, "native-start-error", { agentId: s2, requestId: y2, errorName: e3 instanceof Error ? e3.name : typeof e3, code: A.C[t3.code], message: t3.rawMessage.slice(0, 200) }), e3 instanceof We) throw e3;
          if ((function(e4) {
            return e4.code === A.C.InvalidArgument || e4.code === A.C.NotFound || e4.code === A.C.PermissionDenied || e4.code === A.C.FailedPrecondition || e4.code === A.C.Unauthenticated || e4.code === A.C.Unimplemented || e4.code === A.C.ResourceExhausted;
          })(t3)) throw new Error(`Cloud subagent start was rejected by the server: ${t3.rawMessage} (${A.C[t3.code]}; bcId ${s2}, request ID ${y2})`, { cause: e3 });
          throw new We(`Cloud subagent start outcome is unknown (${A.C[t3.code]}: ${t3.rawMessage}; bcId ${s2}, request ID ${y2})`, e3);
        }
      }
    }
    class We extends Error {
      constructor(e2, t2) {
        super(e2, void 0 === t2 ? void 0 : { cause: t2 }), this.name = "AgentHostCloudCreateOutcomeUnknownError";
      }
    }
    function Ve(e2, t2) {
      return { signal: e2.signal, headers: { "X-Request-ID": t2, "X-Amzn-Trace-Id": `Root=${t2}` } };
    }
    function Ke(e2, t2, r2) {
      return Math.random() * Math.min(t2 * 2 ** e2, r2);
    }
    function Ye(e2) {
      if (e2.signal.aborted) throw e2.signal.reason ?? new Error("Cloud subagent creation cancelled");
    }
    function Ze(e2, t2) {
      return t2.signal.aborted ? Promise.reject(t2.signal.reason ?? new Error("Cloud subagent creation cancelled")) : new Promise((r2, n2) => {
        const s2 = () => {
          n2(t2.signal.reason ?? new Error("Cloud subagent creation cancelled"));
        };
        t2.signal.addEventListener("abort", s2, { once: true }), e2.then(r2, n2).finally(() => {
          t2.signal.removeEventListener("abort", s2);
        });
      });
    }
    const Xe = "composer-2.5-fast";
    function et(e2 = Xe) {
      return new le.Gmx({ modelId: e2, displayModelId: e2, displayName: e2, displayNameShort: e2, aliases: [] });
    }
    class tt {
      constructor() {
        this.entries = /* @__PURE__ */ new Map(), this.lastByComposer = /* @__PURE__ */ new Map();
      }
      expect(e2) {
        this.entry(e2).expected = true;
      }
      isExpected(e2) {
        return true === this.entries.get(e2)?.expected;
      }
      offer(e2, t2) {
        const r2 = this.entry(e2);
        r2.overlay = t2;
        const n2 = r2.waiters.splice(0);
        for (const e3 of n2) e3.resolve(t2);
      }
      peek(e2) {
        return this.entries.get(e2)?.overlay;
      }
      recordLast(e2, t2) {
        this.lastByComposer.set(e2, t2);
      }
      last(e2) {
        return this.lastByComposer.get(e2);
      }
      awaitOverlay(e2, t2) {
        const r2 = this.entries.get(e2)?.overlay;
        if (void 0 !== r2) return Promise.resolve(r2);
        if (void 0 !== t2 && t2 <= 0) return Promise.resolve(void 0);
        const n2 = this.entry(e2);
        return new Promise((e3) => {
          let r3, s2 = false;
          const i2 = (t3) => {
            s2 || (s2 = true, r3?.(), e3(t3));
          }, a2 = { resolve: i2 };
          if (n2.waiters.push(a2), void 0 === t2) return;
          const [c2, l2] = (0, o.q6)().withTimeoutAndCancel(t2);
          r3 = l2, c2.signal.addEventListener("abort", () => {
            const e4 = n2.waiters.indexOf(a2);
            e4 >= 0 && n2.waiters.splice(e4, 1), i2(void 0);
          }, { once: true });
        });
      }
      forget(e2) {
        const t2 = this.entries.get(e2);
        if (void 0 !== t2) {
          this.entries.delete(e2);
          for (const e3 of t2.waiters) e3.resolve(void 0);
        }
      }
      entry(e2) {
        const t2 = this.entries.get(e2);
        if (void 0 !== t2) return t2;
        const r2 = { expected: false, overlay: void 0, waiters: [] };
        return this.entries.set(e2, r2), r2;
      }
    }
    class rt {
      constructor() {
        this.runningCount = 0;
      }
      tryAcquire(e2) {
        if (this.runningCount >= e2) return;
        this.runningCount += 1;
        let t2 = false;
        return () => {
          t2 || (t2 = true, this.runningCount -= 1);
        };
      }
    }
    var nt = r(27498), st = r(82103), ot = r(46612), it = r(43195), at = r(3702), ct = r(61754);
    const lt = { generation: ct.KQ, source: "static", commit: void 0, builtAt: void 0 };
    class ut {
      constructor(e2, t2 = Date.now) {
        this.log = e2, this.now = t2, this.listeners = /* @__PURE__ */ new Set();
      }
      current() {
        return this.serving;
      }
      onDidChange(e2) {
        return this.listeners.add(e2), () => this.listeners.delete(e2);
      }
      serve(e2, t2, r2) {
        const n2 = (0, ct.eN)(e2, t2);
        if (void 0 === n2) return this.log(`serving module ${e2.generation.slice(0, 12)} has no telemetry identity`), void this.set(void 0);
        const s2 = this.serving, o2 = void 0 !== s2 && s2.identity.generation === n2.generation && s2.identity.source === n2.source;
        o2 && s2.cause === r2 && s2.identity.channel === n2.channel || this.set({ identity: n2, cause: r2, since: o2 ? s2.since : this.now() });
      }
      follow(e2) {
        const t2 = e2.servedNow();
        return void 0 !== t2 && this.serve(t2.module, t2.channel, t2.cause), e2.onDidServe(({ module: e3, channel: t3, cause: r2 }) => this.serve(e3, t3, r2));
      }
      clear() {
        void 0 !== this.serving && this.set(void 0);
      }
      set(e2) {
        this.serving = e2;
        for (const t2 of this.listeners) try {
          t2(e2);
        } catch (e3) {
          this.log(`serving module change not reported: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
    }
    var dt = r(36038), pt = r(90417), mt = r(39738), ht = r(68892), ft = r(12544), gt = r(11491);
    const yt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, wt = 36700160;
    function vt(e2) {
      switch (e2.dataOrBlobId?.case) {
        case "data":
          return e2.dataOrBlobId.value.length;
        case "blobIdWithData":
          return e2.dataOrBlobId.value.data.length;
        default:
          return 0;
      }
    }
    function _t(e2) {
      if ("watchVideo" !== e2.subagentType || void 0 === e2.selectedContext) return;
      if ((e2.selectedContext.selectedVideos ?? []).length > 5) throw new Error("Video attachments are limited to 5 files.");
      if ((function(e3) {
        let t2 = 0;
        for (const r2 of e3.selectedVideos ?? []) t2 += vt(r2);
        return t2;
      })(e2.selectedContext) > wt) throw new Error(`Video attachments exceed maximum total inline size of 36700160 bytes (${Math.round(35)}MB).`);
    }
    function At(e2, t2) {
      return "number" == typeof e2 && Number.isFinite(e2) && e2 >= 1 ? Math.floor(e2) : t2;
    }
    function St(e2) {
      switch (e2) {
        case gt.dU.UNSPECIFIED:
        case gt.dU.LOCAL:
          return "local";
        case gt.dU.CLOUD:
          return "cloud";
        default:
          throw new Error(`Unsupported subagent execution environment: ${e2}`);
      }
    }
    function bt(e2) {
      switch (e2.status) {
        case "completed":
        case "background":
          return "success";
        case "aborted":
          return "aborted";
        case "error":
          return "error";
        default:
          return e2;
      }
    }
    function Et(e2) {
      switch (e2.status) {
        case "completed":
        case "background":
          return e2.finalMessage?.trim() || void 0;
        case "aborted":
        case "error":
          return e2.error;
        default:
          return e2;
      }
    }
    function It(e2) {
      const t2 = e2.toolCallId.trim();
      if (t2) return [t2, e2.resumeAgentId ?? "", e2.forkAgentId ?? ""].join("\0");
    }
    function Ct(e2, t2) {
      return `${e2}:${t2}`;
    }
    function kt(e2) {
      return e2.stampedRoot.length > 0 && e2.stampedRoot !== e2.parentSessionId ? e2.stampedRoot : e2.liveRoot || e2.stampedRoot || e2.parentSessionId;
    }
    async function xt(e2) {
      const { args: t2, resolveRequiredGlobalCommands: r2 } = e2;
      if (void 0 === r2) return t2.prompt;
      const s2 = t2.parentConversationId?.trim() || e2.parentConversationId;
      try {
        const o2 = await r2({ ctx: e2.ctx, parentSessionId: s2, rootSessionId: kt({ stampedRoot: t2.rootParentConversationId?.trim() ?? "", liveRoot: e2.rootSessionId ?? "", parentSessionId: s2 }), subagentType: t2.subagentType });
        return (0, n.rSS)(t2.prompt, o2 ?? []);
      } catch {
        return t2.prompt;
      }
    }
    function Tt(e2, t2) {
      const r2 = e2.map((e3) => {
        const t3 = e3.success ? "SUCCESS" : "FAILED";
        return `## Agent ${e3.agentId} -- ${t3}

${e3.finalMessage}`;
      }).join("\n\n---\n\n");
      return t2.replace("{summaries}", r2);
    }
    function Rt(e2) {
      return Boolean(e2.resumeAgentId) && (0, n.UOG)(e2.prompt);
    }
    function Bt(e2) {
      return true === e2.interrupt && Rt(e2);
    }
    function Pt(e2) {
      return e2?.requestedModel?.maxMode ?? e2?.modelDetails?.maxMode;
    }
    function Jt(e2) {
      const { retrySettings: t2, subagentModelSettings: r2, requestContextBlobTransport: n2, blobEncryptionKey: s2, clientTurnSettings: o2, toolRestriction: i2, subagentSmartModeAutoRun: a2 } = e2, c2 = t2?.stallDetectorConfig;
      return { ...void 0 === t2?.enableAgentRetries ? {} : { enableAgentRetries: t2.enableAgentRetries }, ...void 0 === t2?.fixedRetryDelayMs ? {} : { fixedRetryDelayMs: t2.fixedRetryDelayMs }, ...void 0 === t2?.endlessRetries ? {} : { endlessRetries: true === t2.endlessRetries?.() }, ...void 0 === c2?.advisoryTimeoutMs ? {} : { stallAdvisoryTimeoutMs: c2.advisoryTimeoutMs }, ...void 0 === c2?.failTimeoutMs ? {} : { stallFailTimeoutMs: c2.failTimeoutMs }, ...void 0 === t2?.isRunningInTest ? {} : { isRunningInTest: t2.isRunningInTest }, ...void 0 === n2?.requestContextBlobTransportMode ? {} : { requestContextBlobTransportMode: n2.requestContextBlobTransportMode }, ...void 0 === n2?.requestContextBlobMaxBytes ? {} : { requestContextBlobMaxBytes: n2.requestContextBlobMaxBytes }, ...void 0 === n2?.requestContextDynamicInlineMaxBytes ? {} : { requestContextDynamicInlineMaxBytes: n2.requestContextDynamicInlineMaxBytes }, ...void 0 === s2 ? {} : { blobEncryptionKey: s2 }, ...void 0 === o2?.headers ? {} : { requestHeaders: o2.headers }, ...void 0 === o2?.maxSteps ? {} : { maxSteps: o2.maxSteps }, ...void 0 === o2?.canCreateCloudSubagents ? {} : { canCreateCloudSubagents: o2.canCreateCloudSubagents }, ...void 0 === o2?.localLoopGateEnabled ? {} : { localLoopGateEnabled: o2.localLoopGateEnabled }, ...void 0 === o2?.startedAsNewProject ? {} : { startedAsNewProject: o2.startedAsNewProject }, ...void 0 === o2?.firstProjectOnboarding ? {} : { firstProjectOnboarding: o2.firstProjectOnboarding }, ...void 0 === o2?.harness || "" === o2.harness ? {} : { harness: o2.harness }, ...void 0 === o2?.suggestNextPrompt ? {} : { suggestNextPrompt: o2.suggestNextPrompt }, ...void 0 === o2?.clientSupportsInlineImages ? {} : { clientSupportsInlineImages: o2.clientSupportsInlineImages }, ...void 0 === o2?.clientSupportsPreviewCard ? {} : { clientSupportsPreviewCard: o2.clientSupportsPreviewCard }, ...void 0 === o2?.clientSupportsSendToUser ? {} : { clientSupportsSendToUser: o2.clientSupportsSendToUser }, ...void 0 === o2?.clientSupportsRoutedModelUpdate ? {} : { clientSupportsRoutedModelUpdate: o2.clientSupportsRoutedModelUpdate }, ...void 0 === r2 ? {} : { selectedSubagentModels: [...r2.selectedSubagentModels], subagentModelOverrides: [...r2.subagentModelOverrides] }, ...void 0 === i2 ? {} : { allowedTools: i2.allowed ?? [], excludedTools: i2.excluded }, ...void 0 === a2 ? {} : { subagentSmartModeAutoRun: a2 } };
    }
    function Mt(e2) {
      if (void 0 !== e2) return { requestContextBlobTransportMode: e2.requestContextBlobTransportMode, requestContextBlobMaxBytes: e2.requestContextBlobMaxBytes, requestContextDynamicInlineMaxBytes: e2.requestContextDynamicInlineMaxBytes };
    }
    function qt(e2) {
      if (void 0 === e2) return;
      const { [pt.WI]: t2, ...r2 } = e2.headers ?? {};
      return { headers: 0 === Object.keys(r2).length ? void 0 : r2, maxSteps: e2.maxSteps, canCreateCloudSubagents: e2.canCreateCloudSubagents, localLoopGateEnabled: e2.localLoopGateEnabled, startedAsNewProject: e2.startedAsNewProject, firstProjectOnboarding: e2.firstProjectOnboarding, harness: e2.harness, suggestNextPrompt: e2.suggestNextPrompt, clientSupportsInlineImages: e2.clientSupportsInlineImages, clientSupportsPreviewCard: e2.clientSupportsPreviewCard, clientSupportsSendToUser: e2.clientSupportsSendToUser, clientSupportsRoutedModelUpdate: e2.clientSupportsRoutedModelUpdate };
    }
    async function Dt(e2) {
      const t2 = e2.subagentArgs.modelParameters.length > 0 ? e2.subagentArgs.modelParameters : await (async function(e3) {
        const { args: t3, maxMode: r3, resolveSavedModelParameters: n3 } = e3;
        if (void 0 === n3) return [];
        const s2 = t3.parentConversationId?.trim() || e3.parentConversationId;
        try {
          return await n3({ ctx: e3.ctx, parentSessionId: s2, rootSessionId: kt({ stampedRoot: t3.rootParentConversationId?.trim() ?? "", liveRoot: e3.rootSessionId ?? "", parentSessionId: s2 }), modelId: t3.modelId || Xe, ...void 0 === r3 ? {} : { maxMode: r3 } }) ?? [];
        } catch {
          return [];
        }
      })({ ctx: e2.ctx, args: e2.subagentArgs, maxMode: e2.parentMaxMode, resolveSavedModelParameters: e2.resolveSavedModelParameters, parentConversationId: e2.parentConversationId ?? "", rootSessionId: e2.rootSessionId }), r2 = t2.length > 0 || void 0 !== e2.parentMaxMode ? new ue.G4({ modelId: e2.subagentArgs.modelId || Xe, ...void 0 === e2.parentMaxMode ? {} : { maxMode: e2.parentMaxMode }, parameters: t2.map((e3) => new ue.SR({ id: e3.id, value: e3.value })) }) : void 0;
      let n2;
      return void 0 === r2 && (n2 = e2.subagentArgs.modelId ? new le.Gmx({ modelId: e2.subagentArgs.modelId, displayModelId: e2.subagentArgs.modelId, displayName: e2.subagentArgs.modelId }) : et()), void 0 !== e2.subagentArgs.credentials.case && (void 0 !== r2 ? r2.credentials = e2.subagentArgs.credentials : void 0 !== n2 && (n2.credentials = e2.subagentArgs.credentials)), { requestedModel: r2, modelDetails: n2, lastTurnModel: { ...e2.subagentArgs.modelId ? { modelId: e2.subagentArgs.modelId } : {}, ...void 0 === n2 ? {} : { modelDetails: n2 }, ...void 0 === r2 ? {} : { requestedModel: r2 }, turnOptions: Jt({ retrySettings: e2.retrySettings, subagentModelSettings: e2.subagentModelSettings, requestContextBlobTransport: e2.requestContextBlobTransport, blobEncryptionKey: e2.blobEncryptionKey, clientTurnSettings: e2.clientTurnSettings, toolRestriction: e2.toolRestriction, subagentSmartModeAutoRun: e2.subagentSmartModeAutoRun }), ...void 0 === e2.customSubagents ? {} : { customSubagents: e2.customSubagents }, ...void 0 === e2.projectFolder ? {} : { projectFolder: e2.projectFolder }, ...void 0 === e2.requestContext ? {} : { requestContext: e2.requestContext } } };
    }
    var Ot = r(60525), Nt = r(39024), Ft = r(77314);
    class Ut {
      constructor(e2) {
        this.options = e2, this.pending = /* @__PURE__ */ new Set(), this.delayMs = e2.delayMs ?? 1e3;
      }
      schedule(e2) {
        this.options.isLive(e2) && (this.pending.add(e2), void 0 === this.flushTimer && (this.flushTimer = setTimeout(() => {
          this.flushTimer = void 0, this.flush();
        }, this.delayMs)));
      }
      cancel(e2) {
        this.pending.delete(e2), this.clearTimerIfIdle();
      }
      cancelAll() {
        this.pending.clear(), void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
      }
      flush() {
        const e2 = [...this.pending];
        this.pending.clear();
        for (const t2 of e2) this.options.isLive(t2) && this.options.emitUpdated(t2);
      }
      clearTimerIfIdle() {
        0 === this.pending.size && void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
      }
    }
    function Lt(e2) {
      return new le.QFf({ action: { case: "backgroundTaskCompletionAction", value: new le.Kwc({ completions: [...e2] }) } });
    }
    function $t(e2) {
      if ("backgroundTaskCompletionAction" === e2.action.case) return e2.action.value.completions.map((e3) => e3.taskId).filter((e3) => e3.length > 0);
    }
    function Qt(e2) {
      switch (e2) {
        case Ot.NX.SHELL:
          return "shell";
        case Ot.NX.SUBAGENT:
          return "subagent";
        case Ot.NX.UNSPECIFIED:
        case void 0:
          return;
        default:
          return e2;
      }
    }
    function jt(e2) {
      switch (e2) {
        case Ot.wy.RUNNING:
          return "running";
        case Ot.wy.QUEUED:
          return "queued";
        case Ot.wy.UNSPECIFIED:
        case void 0:
          return;
        default:
          return e2;
      }
    }
    function Gt(e2) {
      switch (e2) {
        case "shell":
          return Ot.NX.SHELL;
        case "subagent":
          return Ot.NX.SUBAGENT;
        default:
          return e2;
      }
    }
    function Ht(e2) {
      switch (e2) {
        case "running":
          return Ot.wy.RUNNING;
        case "queued":
          return Ot.wy.QUEUED;
        default:
          return e2;
      }
    }
    function zt(e2) {
      return { id: e2.id, kind: Gt(e2.kind), state: Ht(e2.state), ownerId: e2.ownerId, hasAbort: e2.hasAbort, metadata: e2.metadata };
    }
    var Wt = r(16074);
    function Vt(e2, t2, r2) {
      return t2.has(e2) ? t2.get(e2) : r2;
    }
    function Kt(e2, t2, r2) {
      const n2 = t2.get(e2);
      return void 0 === n2 || void 0 === r2 ? r2 ?? n2 : Math.max(n2, r2);
    }
    function Yt(e2, t2) {
      const r2 = Vt(e2.sessionId, t2.titles, e2.title), n2 = Kt(e2.sessionId, t2.updatedAt), s2 = t2.modelIds.get(e2.sessionId), o2 = t2.workspacePaths.get(e2.sessionId);
      return { sessionId: e2.sessionId, status: Ot.g6.IDLE, lastEventId: BigInt(0), queuedTurnIds: [], ...void 0 === r2 ? {} : { title: r2 }, ...void 0 === s2 ? {} : { modelId: s2 }, ...(0, Wt.Ox)(void 0 === o2 ? void 0 : { workspacePaths: o2, displayPath: t2.workspaceDisplayPaths.get(e2.sessionId) }), ...void 0 === e2.forkedFromSessionId ? {} : { forkedFromSessionId: e2.forkedFromSessionId }, ...void 0 === e2.parent ? {} : { parent: { parentSessionId: e2.parent.parentSessionId, parentToolCallId: e2.parent.parentToolCallId, rootSessionId: e2.parent.rootSessionId } }, ...void 0 === n2 ? {} : { updatedAt: dt.Timestamp.fromDate(new Date(n2)) } };
    }
    var Zt = r(80962), Xt = r(69457), er = r(27322);
    function tr(e2) {
      return e2.startsWith("bc-");
    }
    function rr(e2) {
      const t2 = /* @__PURE__ */ new Set();
      return sr(e2, t2, /* @__PURE__ */ new Set()), [...t2];
    }
    async function nr(e2, t2, r2, n2, s2) {
      if (0 !== r2.size) {
        ir(t2, r2, s2, /* @__PURE__ */ new Set()), await (async function(e3, t3, r3, n3, s3) {
          const o2 = {};
          for (const [i2, a2] of Object.entries(t3.subagentStateRefs ?? {})) {
            const c2 = r3.get(i2) ?? i2, l2 = await cr(e3, n3, a2, r3, s3?.get(i2));
            if (void 0 !== l2) {
              o2[c2] = l2;
              continue;
            }
            if (void 0 === (t3.subagentStates[c2] ?? t3.subagentStates[i2])) throw new Error(`Agent host fork could not load subagent state for child: ${i2}`);
          }
          t3.subagentStateRefs = o2;
        })(e2, t2, r2, n2, s2), t2.subagentThreads = lr(t2.subagentThreads, r2);
        for (const e3 of Object.values(t2.subagentRunsByParentToolCallId ?? {})) void 0 !== e3.subagentId && (e3.subagentId = r2.get(e3.subagentId) ?? e3.subagentId);
      }
    }
    function sr(e2, t2, r2) {
      if (!r2.has(e2)) {
        r2.add(e2);
        for (const r3 of Object.keys(e2.subagentStates ?? {})) or(t2, r3);
        for (const r3 of Object.keys(e2.subagentStateRefs ?? {})) or(t2, r3);
        for (const r3 of Object.keys(e2.subagentThreads ?? {})) or(t2, r3);
        for (const r3 of Object.values(e2.subagentRunsByParentToolCallId ?? {})) or(t2, r3.subagentId);
        for (const n2 of Object.values(e2.subagentStates ?? {})) void 0 !== n2.conversationState && sr(n2.conversationState, t2, r2);
      }
    }
    function or(e2, t2) {
      const r2 = t2?.trim();
      void 0 !== r2 && r2.length > 0 && !tr(r2) && e2.add(r2);
    }
    function ir(e2, t2, r2, n2) {
      if (n2.has(e2)) return;
      n2.add(e2);
      const s2 = {};
      for (const [o2, i2] of Object.entries(e2.subagentStates ?? {})) {
        const e3 = t2.get(o2) ?? o2, a2 = r2?.get(o2);
        void 0 !== a2 ? i2.conversationState = a2.clone() : void 0 !== i2.conversationState && ar(i2.conversationState, t2, r2, n2), s2[e3] = i2;
      }
      e2.subagentStates = s2;
    }
    function ar(e2, t2, r2, n2) {
      ir(e2, t2, r2, n2), e2.subagentThreads = lr(e2.subagentThreads, t2);
      for (const r3 of Object.values(e2.subagentRunsByParentToolCallId ?? {})) void 0 !== r3.subagentId && (r3.subagentId = t2.get(r3.subagentId) ?? r3.subagentId);
      e2.subagentStateRefs = lr(e2.subagentStateRefs, t2);
    }
    async function cr(e2, t2, r2, n2, s2) {
      if (void 0 === t2) return r2;
      const o2 = await t2.getBlob(e2, r2);
      if (void 0 === o2) return;
      const i2 = le.aK_.fromBinary(o2);
      void 0 !== s2 ? i2.conversationState = s2.clone() : void 0 !== i2.conversationState && ar(i2.conversationState, n2, void 0, /* @__PURE__ */ new Set());
      const a2 = i2.toBinary(), c2 = await (0, er.Bk)(a2);
      return await t2.setBlob(e2, c2, a2), c2;
    }
    function lr(e2, t2) {
      const r2 = {};
      for (const [n2, s2] of Object.entries(e2 ?? {})) r2[t2.get(n2) ?? n2] = s2;
      return r2;
    }
    var ur = r(56126);
    async function dr(e2, t2, r2) {
      if (r2.visiting.has(r2.source.sessionId)) return [];
      r2.visiting.add(r2.source.sessionId);
      const n2 = new Set(rr(r2.copiedHistory));
      if (r2.includeCurrentChildren) for (const s3 of await (async function(e3, t3, r3) {
        const n3 = /* @__PURE__ */ new Set();
        for (const e4 of t3.listLiveSessions()) true !== e4.deleted && e4.parent?.parentSessionId === r3 && n3.add(e4.sessionId);
        const s4 = t3.sessionCatalog;
        if (void 0 === s4) return [...n3];
        const o3 = await s4.listSessions(e3, { parentSessionId: r3, limit: Zt.KH });
        for (const e4 of o3) e4.parent?.parentSessionId === r3 && n3.add(e4.sessionId);
        return [...n3];
      })(e2, t2, r2.source.sessionId)) n2.add(s3);
      const s2 = /* @__PURE__ */ new Map(), o2 = [];
      try {
        for (const i2 of n2) {
          if (i2 === r2.source.sessionId || i2 === r2.destinationParentSessionId || r2.idRemap.has(i2) || tr(i2)) continue;
          const n3 = await hr(e2, t2, r2.source.sessionId, i2), a2 = crypto.randomUUID();
          if (r2.idRemap.set(i2, a2), void 0 === n3) continue;
          t2.reserveSessionId(a2), r2.reservedChildIds.push(a2);
          const c2 = await mr(e2, { copiedHistory: r2.copiedHistory, childId: i2, live: n3.session, includeCurrentChildren: r2.includeCurrentChildren, blobStore: r2.source.store.getBlobStore() }), l2 = c2.history, u2 = await dr(e2, t2, { source: n3.session, copiedHistory: l2, destinationParentSessionId: a2, destinationRootSessionId: r2.destinationRootSessionId, includeCurrentChildren: r2.includeCurrentChildren, idRemap: r2.idRemap, visiting: r2.visiting, reservedChildIds: r2.reservedChildIds });
          let d2;
          c2.writeBack && s2.set(i2, l2);
          try {
            d2 = await n3.session.store.createFork(e2, { sessionId: a2, initialHistory: l2 });
          } catch (e3) {
            throw await fr(u2, /* @__PURE__ */ new Set()), e3;
          }
          o2.push({ sourceSessionId: n3.session.sessionId, destinationSessionId: a2, destinationParentSessionId: r2.destinationParentSessionId, destinationRootSessionId: r2.destinationRootSessionId, parentToolCallId: n3.parentToolCallId, history: l2, sessionOptions: n3.session.sessionOptions, owningClientInstanceId: n3.session.owningClientInstanceId, store: d2, children: u2 });
        }
        return await nr(e2, r2.copiedHistory, r2.idRemap, r2.source.store.getBlobStore(), s2), r2.visiting.delete(r2.source.sessionId), o2;
      } catch (e3) {
        throw await fr(o2, /* @__PURE__ */ new Set()), e3;
      }
    }
    async function pr(e2, t2, r2, n2) {
      for (const s2 of t2) await n2(e2, s2), r2.push(s2.destinationSessionId), await pr(e2, s2.children, r2, n2);
    }
    async function mr(e2, t2) {
      if (t2.includeCurrentChildren) return { history: (0, ur.ks)(t2.live.store.getConversationState()), writeBack: true };
      const r2 = await (async function(e3, t3, r3, n2) {
        const s2 = t3.subagentStates?.[r3]?.conversationState;
        if (void 0 !== s2) return (0, ur.ks)(s2);
        const o2 = t3.subagentStateRefs?.[r3];
        if (void 0 === o2) return;
        const i2 = await n2.getBlob(e3, o2);
        if (void 0 === i2) return;
        const a2 = le.aK_.fromBinary(i2);
        if (void 0 === a2.conversationState) return;
        return (0, ur.ks)(a2.conversationState);
      })(e2, t2.copiedHistory, t2.childId, t2.blobStore);
      return void 0 === r2 ? { history: new le.Y9z(), writeBack: false } : { history: r2, writeBack: true };
    }
    async function hr(e2, t2, r2, n2) {
      let s2, o2 = t2.getSession(n2);
      if (void 0 === o2 || true === o2.deleted) {
        const i2 = t2.sessionCatalog;
        if (void 0 === i2) return;
        const a2 = (await i2.listSessions(e2, { parentSessionId: r2, limit: Zt.KH })).find((e3) => e3.sessionId === n2);
        let c2;
        if (c2 = void 0 === a2 ? void 0 : a2.parent?.parentSessionId !== r2 ? "other" : a2.parent.parentToolCallId, "other" === c2) return;
        if (void 0 !== c2 && (s2 = c2), void 0 === i2.ensureLoaded || !await i2.ensureLoaded(e2, n2)) {
          if (void 0 !== c2) throw new Error(`Agent host fork could not load child session: ${n2}`);
          return;
        }
        if (o2 = t2.getSession(n2), void 0 === o2 || true === o2.deleted) throw new Error(`Agent host fork could not load child session: ${n2}`);
      }
      return o2.parent?.parentSessionId === r2 ? { session: o2, parentToolCallId: o2.parent.parentToolCallId } : void 0 === o2.parent && void 0 !== s2 ? { session: o2, parentToolCallId: s2 } : void 0;
    }
    async function fr(e2, t2) {
      for (const r2 of e2) await fr(r2.children, t2), t2.has(r2.destinationSessionId) || await r2.store.dispose?.();
    }
    var gr = r(91693);
    async function yr(e2, t2, r2, n2) {
      const s2 = (function(e3) {
        const t3 = /* @__PURE__ */ new Set(), r3 = [];
        for (const n3 of e3) {
          const e4 = (0, er.nj)(n3);
          t3.has(e4) || (t3.add(e4), r3.push(n3));
        }
        return r3;
      })(r2), o2 = [], i2 = [], a2 = [];
      let c2 = [], l2 = BigInt(0);
      for (const [r3, u2] of s2.entries()) {
        const d2 = await t2.getBlob(e2, u2);
        if (void 0 === d2) {
          i2.push(u2);
          continue;
        }
        const p2 = BigInt(d2.byteLength);
        if (void 0 !== n2 && n2 > BigInt(0)) {
          if (0 === o2.length && p2 > n2) {
            a2.push(u2);
            continue;
          }
          if (l2 + p2 > n2) {
            c2 = s2.slice(r3);
            break;
          }
        }
        l2 += p2, o2.push({ blobId: (0, er.Fo)(u2), data: (0, er.Fo)(d2) });
      }
      return { blobs: o2, missingBlobIds: i2, oversizeBlobIds: a2, remainingBlobIds: c2 };
    }
    function wr(e2, t2) {
      const r2 = vr(e2, t2), n2 = _r(e2, t2);
      return { sessionId: e2.sessionId, workspacePaths: [...r2], ...void 0 === n2 ? {} : { owningClientInstanceId: n2 }, ...void 0 === e2.parent ? {} : { parent: e2.parent } };
    }
    function vr(e2, t2) {
      if (void 0 !== e2.sessionOptions) return e2.sessionOptions.workspacePaths ?? [];
      const r2 = t2.catalogWorkspacePaths.get(e2.sessionId);
      if (void 0 !== r2) return r2;
      const n2 = e2.parent?.parentSessionId;
      if (void 0 === n2) return [];
      const s2 = t2.sessions.get(n2);
      return void 0 !== s2 ? vr(s2, t2) : t2.catalogWorkspacePaths.get(n2) ?? [];
    }
    function _r(e2, t2) {
      if (void 0 !== e2.owningClientInstanceId) return e2.owningClientInstanceId;
      const r2 = t2.catalogOwningClientInstanceIds.get(e2.sessionId);
      if (void 0 !== r2) return r2;
      const n2 = e2.parent?.parentSessionId;
      if (void 0 === n2) return;
      const s2 = t2.sessions.get(n2);
      return void 0 !== s2 ? _r(s2, t2) : t2.catalogOwningClientInstanceIds.get(n2);
    }
    function Ar(e2) {
      e2.updatedAt = Math.max(Date.now(), e2.updatedAt ?? 0);
    }
    var Sr = r(11541);
    class br {
      constructor() {
        this.fanout = new Sr.W();
      }
      async *subscribe(e2, t2, r2) {
        const n2 = { events: new Sr.l(), notify: void 0, matches: r2 ?? (() => true), announcedIds: /* @__PURE__ */ new Set(), pendingDeletes: /* @__PURE__ */ new Set(), snapshotPending: true, filtered: void 0 !== r2 };
        this.fanout.add(n2);
        try {
          const r3 = (await t2()).filter((e3) => !n2.pendingDeletes.has(e3.sessionId));
          for (const e3 of r3) n2.announcedIds.add(e3.sessionId);
          for (n2.snapshotPending = false, n2.pendingDeletes.clear(), yield { event: { case: "snapshot", value: { sessions: r3.map(ur.J5) } } }; !e2.signal.aborted; ) {
            const t3 = n2.events.shift();
            void 0 === t3 ? await this.fanout.waitForEvent(e2, n2) : yield t3;
          }
        } finally {
          this.fanout.delete(n2);
        }
      }
      emitAdded(e2, t2) {
        this.fanout.forEach((r2) => {
          r2.filtered && !r2.matches(t2) || (r2.announcedIds.has(e2.sessionId) ? this.push(r2, { event: { case: "updated", value: { session: e2 } } }) : (r2.announcedIds.add(e2.sessionId), this.push(r2, { event: { case: "added", value: { session: e2 } } })));
        });
      }
      emitUpdated(e2, t2) {
        this.fanout.forEach((r2) => {
          if (!r2.filtered) return void this.push(r2, { event: { case: "updated", value: { session: e2 } } });
          const n2 = r2.matches(t2), s2 = r2.announcedIds.has(e2.sessionId);
          if (!n2 || !s2) return n2 && !s2 ? (r2.announcedIds.add(e2.sessionId), void this.push(r2, { event: { case: "added", value: { session: e2 } } })) : void (!n2 && s2 && (r2.announcedIds.delete(e2.sessionId), this.push(r2, { event: { case: "deleted", value: { sessionId: e2.sessionId } } })));
          this.push(r2, { event: { case: "updated", value: { session: e2 } } });
        });
      }
      emitDeleted(e2) {
        this.fanout.forEach((t2) => {
          if (t2.snapshotPending) return t2.pendingDeletes.add(e2), t2.announcedIds.delete(e2), void this.push(t2, { event: { case: "deleted", value: { sessionId: e2 } } });
          t2.filtered && !t2.announcedIds.has(e2) || (t2.announcedIds.delete(e2), this.push(t2, { event: { case: "deleted", value: { sessionId: e2 } } }));
        });
      }
      push(e2, t2) {
        e2.events.push((0, ur.q4)(t2)), this.fanout.wake(e2);
      }
    }
    var Er = r(52883);
    function Ir(e2, t2, r2, n2) {
      const s2 = (function(e3, t3) {
        const r3 = e3.get(t3);
        if (void 0 === r3 || r3.deleted) return [];
        const n3 = /* @__PURE__ */ new Map();
        for (const t4 of e3.values()) {
          const e4 = t4.parent?.parentSessionId;
          if (void 0 === e4 || t4.deleted) continue;
          const r4 = n3.get(e4) ?? [];
          r4.push(t4), n3.set(e4, r4);
        }
        const s3 = [], o3 = [r3], i3 = /* @__PURE__ */ new Set();
        for (let e4 = o3.shift(); void 0 !== e4; e4 = o3.shift()) if (!i3.has(e4.sessionId)) {
          i3.add(e4.sessionId), s3.push(e4);
          for (const t4 of n3.get(e4.sessionId) ?? []) o3.push(t4);
        }
        return s3;
      })(e2, t2), o2 = new Set(s2.map((e3) => e3.sessionId));
      for (const t3 of s2) {
        const r3 = void 0 === t3.parent ? void 0 : e2.get(t3.parent.parentSessionId);
        if (void 0 === r3 || !o2.has(r3.sessionId)) continue;
        r3.backgroundWorkRegistry.listWork({ kind: "subagent", state: "running" }).some((e3) => e3.id === t3.sessionId) && r3.backgroundWorkRegistry.suppress(r3.sessionId, t3.sessionId);
      }
      let i2 = false;
      for (const e3 of s2) (0, Er.He)(e3, r2, n2) > 0 && (i2 = true);
      return i2;
    }
    async function Cr(e2, t2, r2, n2) {
      if (void 0 === n2) return;
      const s2 = await (async function(e3, t3, r3) {
        const n3 = await e3.sessionCatalog?.listSessions(t3, { limit: Zt.KH }, (e4) => e4.sessionId === r3) ?? [];
        return n3.find((e4) => e4.sessionId === r3);
      })(e2, t2, r2);
      if (void 0 !== s2 && !kr(s2.parent, n2)) return;
      const o2 = e2.sessions.has(r2);
      await e2.ensureSessionLoaded(t2, r2);
      const i2 = e2.sessions.get(r2);
      if (void 0 !== i2 && true !== i2.deleted) {
        if (void 0 !== i2.parent) return kr(i2.parent, n2) ? i2 : void 0;
        if (!o2) return i2.parent = n2, e2.emitSessionUpdated(i2), i2;
      }
    }
    function kr(e2, t2) {
      return e2?.parentSessionId === t2.parentSessionId && e2.rootSessionId === t2.rootSessionId;
    }
    var xr = r(19209);
    const Tr = (0, s.h)("agent-host");
    class Rr {
      constructor(e2) {
        this.options = e2, this.sessions = /* @__PURE__ */ new Map(), this.creatingSessionIds = /* @__PURE__ */ new Set(), this.deletingSessionIds = /* @__PURE__ */ new Set(), this.announcedSessions = /* @__PURE__ */ new WeakSet(), this.sessionTitles = /* @__PURE__ */ new Map(), this.archivedSessionIds = /* @__PURE__ */ new Set(), this.catalogUpdatedAt = /* @__PURE__ */ new Map(), this.catalogModelIds = /* @__PURE__ */ new Map(), this.catalogWorkspacePaths = /* @__PURE__ */ new Map(), this.catalogWorkspaceDisplayPaths = /* @__PURE__ */ new Map(), this.catalogOwningClientInstanceIds = /* @__PURE__ */ new Map(), this.catalogHostOwnedStorage = /* @__PURE__ */ new Map(), this.sessionWatchers = new br(), this.appendSessionUpdates = new Ut({ isLive: (e3) => this.isLiveSessionInstance(e3), emitUpdated: (e3) => this.emitSessionUpdatedNow(e3) });
        const t2 = e2.sessionCatalog?.onTitleChanged;
        void 0 !== t2 && (this.unsubscribeCatalogTitleChanged = t2((e3, t3) => {
          this.applyExternalSessionTitle(e3, t3);
        }));
        const r2 = e2.sessionCatalog?.onArchivedChanged;
        void 0 !== r2 && (this.unsubscribeCatalogArchivedChanged = r2((e3, t3) => {
          this.applyExternalSessionArchived(e3, t3);
        }));
        const n2 = e2.sessionCatalog?.onModelChanged;
        void 0 !== n2 && (this.unsubscribeCatalogModelChanged = n2((e3, t3) => {
          this.applyExternalSessionModel(e3, t3);
        }));
        const s2 = e2.sessionCatalog?.onHostOwnedStorageChanged;
        void 0 !== s2 && (this.unsubscribeCatalogHostOwnedStorageChanged = s2((e3, t3) => {
          this.applyExternalSessionHostOwnedStorage(e3, t3);
        }));
      }
      dispose() {
        return this.appendSessionUpdates.cancelAll(), this.disposePromise ??= this.disposeInternal(), this.disposePromise;
      }
      async deleteSession(e2, t2) {
        this.ensureNotDisposing(), this.validateSessionId(t2.sessionId);
        const r2 = this.sessions.get(t2.sessionId);
        if (void 0 === r2) {
          const r3 = await this.hasLiveOrCatalogSession(e2, t2.sessionId);
          if (this.sessionWatchers.emitDeleted(t2.sessionId), this.catalogWorkspacePaths.delete(t2.sessionId), this.catalogWorkspaceDisplayPaths.delete(t2.sessionId), this.catalogOwningClientInstanceIds.delete(t2.sessionId), this.catalogUpdatedAt.delete(t2.sessionId), this.catalogModelIds.delete(t2.sessionId), this.sessionTitles.delete(t2.sessionId), !r3) throw new Error(`Agent host session not found: ${t2.sessionId}`);
          return this.options.onSessionDeleted?.(t2.sessionId), {};
        }
        const n2 = true === this.options.subagentsAsSessions && void 0 === r2.parent ? (function(e3, t3) {
          const r3 = [];
          for (const [n3, s2] of e3) n3 !== t3 && s2.parent?.rootSessionId === t3 && true !== s2.deleted && r3.push(n3);
          return [...r3, t3];
        })(this.sessions, t2.sessionId) : [t2.sessionId];
        for (const e3 of n2) await this.deleteHostedSession(e3);
        return {};
      }
      async interruptTurn(e2, t2) {
        if (this.ensureNotDisposing(), true === t2.sessionTree) return this.validateSessionId(t2.sessionId), { interrupted: Ir(this.sessions, t2.sessionId, t2.reason, { initiatedBy: t2.initiatedBy }) };
        const r2 = this.getSession(t2.sessionId);
        return { interrupted: (0, Er.ht)(r2, t2.turnId, t2.reason, { initiatedBy: t2.initiatedBy }) };
      }
      async cancelQueuedTurn(e2, t2) {
        this.ensureNotDisposing();
        const r2 = this.getSession(t2.sessionId), n2 = (0, Er.VG)(r2, t2.turnId, t2.reason, { initiatedBy: t2.initiatedBy });
        return n2 && this.emitSessionUpdated(r2), { cancelled: n2 };
      }
      async respondToInteraction(e2, t2) {
        this.ensureNotDisposing();
        const r2 = this.getSession(t2.sessionId).interactionRegistry, { answer: n2 } = t2;
        return { status: "interactionResponse" === n2.case ? r2.respond(t2.interactionId, n2.value) : r2.respondToHostQuestion(t2.interactionId, n2) };
      }
      watchSessionInteractions(e2, t2) {
        return this.ensureNotDisposing(), this.getSession(t2.sessionId).interactionRegistry.watch(e2);
      }
      async createSession(e2, t2, r2) {
        this.ensureNotDisposing(), this.reserveSessionId(t2.sessionId);
        try {
          return await this.createReservedSession(e2, t2, { ...void 0 === r2?.parent ? {} : { parent: r2.parent }, initialHistoryMode: r2?.initialHistoryMode });
        } finally {
          this.creatingSessionIds.delete(t2.sessionId);
        }
      }
      async forkSession(e2, t2) {
        this.ensureNotDisposing(), await this.ensureSessionLoaded(e2, t2.sessionId);
        const r2 = this.getSession(t2.sessionId), n2 = crypto.randomUUID();
        this.reserveSessionId(n2);
        const s2 = [], o2 = [];
        let i2 = [];
        try {
          const a2 = this.getSessionHistoryForFork(r2, t2.throughTurnId);
          let c2;
          i2 = await dr(e2, { listLiveSessions: () => this.sessions.values(), getSession: (e3) => this.sessions.get(e3), sessionCatalog: this.options.sessionCatalog, reserveSessionId: (e3) => this.reserveSessionId(e3) }, { source: r2, copiedHistory: a2, destinationParentSessionId: n2, destinationRootSessionId: n2, includeCurrentChildren: void 0 === t2.throughTurnId, idRemap: /* @__PURE__ */ new Map(), visiting: /* @__PURE__ */ new Set(), reservedChildIds: s2 });
          try {
            c2 = await r2.store.createFork(e2, { sessionId: n2, initialHistory: a2 }), await this.createReservedSession(e2, { sessionId: n2, initialHistory: a2, ...void 0 === r2.sessionOptions ? {} : { sessionOptions: r2.sessionOptions }, ...void 0 === r2.owningClientInstanceId ? {} : { owningClientInstanceId: r2.owningClientInstanceId } }, { forkedFromSessionId: r2.sessionId }, c2), o2.push(n2), await pr(e2, i2, o2, async (e3, t3) => {
              await this.createReservedSession(e3, { sessionId: t3.destinationSessionId, initialHistory: t3.history, ...void 0 === t3.sessionOptions ? {} : { sessionOptions: t3.sessionOptions }, ...void 0 === t3.owningClientInstanceId ? {} : { owningClientInstanceId: t3.owningClientInstanceId } }, { forkedFromSessionId: t3.sourceSessionId, parent: { parentSessionId: t3.destinationParentSessionId, parentToolCallId: t3.parentToolCallId, rootSessionId: t3.destinationRootSessionId } }, t3.store);
            });
          } catch (t3) {
            throw await (async function(e3, t4, r3, n3, s3) {
              for (const r4 of [...t4].reverse()) s3(r4) && await n3(e3, r4);
              await fr(r3, new Set(t4));
            })(e2, o2, i2, async (e3, t4) => {
              await this.deleteSession(e3, { sessionId: t4 });
            }, (e3) => this.sessions.has(e3)), void 0 === c2 || o2.includes(n2) || await c2.dispose?.(), t3;
          }
          return { sessionId: n2 };
        } finally {
          this.creatingSessionIds.delete(n2);
          for (const e3 of s2) this.creatingSessionIds.delete(e3);
        }
      }
      async createReservedSession(e2, t2, r2, n2, s2) {
        const { session: o2, events: i2 } = await this.options.createHostedSession(e2, t2, n2, { ...void 0 === r2?.parent ? {} : { parent: r2.parent }, ...void 0 === r2?.forkedFromSessionId ? {} : { forkedFromSessionId: r2.forkedFromSessionId }, initialHistoryMode: r2?.initialHistoryMode, hostHooks: { queueBackgroundWakeup: (e3) => {
          this.queueHostOwnedBackgroundWakeup(t2.sessionId, e3);
        }, createChildSession: async (e3, r3, n3, s3) => {
          const o3 = await (async function(e4, t3, r4, n4, s4) {
            const o4 = e4.sessions.get(r4);
            if (void 0 !== o4) {
              if (true === o4.deleted) return;
              return void 0 !== n4 && void 0 !== o4.parent && o4.parent.parentSessionId === n4.parentSessionId && o4.parent.rootSessionId === n4.rootSessionId ? o4 : void 0 === o4.parent && s4 ? (void 0 !== n4 && (o4.parent = n4, e4.emitSessionUpdated(o4)), o4) : void 0;
            }
            if (!s4) return;
            await e4.ensureSessionLoaded(t3, r4);
            const i4 = e4.sessions.get(r4);
            return void 0 !== i4 && true !== i4.deleted ? void 0 !== i4.parent ? void 0 !== n4 && i4.parent.parentSessionId === n4.parentSessionId && i4.parent.rootSessionId === n4.rootSessionId ? i4 : void 0 : (void 0 !== n4 && (i4.parent = n4, e4.emitSessionUpdated(i4)), i4) : void 0;
          })(this.sessionTreeHost(), e3, r3.sessionId, n3?.parent, true === n3?.adoptVerifiedDurableChild);
          if (void 0 !== o3) return o3;
          if (true === n3?.requireExistingChild) {
            const t3 = await Cr(this.sessionTreeHost(), e3, r3.sessionId, n3.parent);
            if (void 0 === t3) throw new Error(`Subagent ${r3.sessionId} not found.`);
            return t3;
          }
          const i3 = (function(e4, t3) {
            if (void 0 === e4 && void 0 === t3) return;
            const r4 = { ...e4, ...t3 };
            return { ...r4, ...void 0 === r4.workspacePaths ? {} : { workspacePaths: [...r4.workspacePaths] }, ...void 0 === r4.owningProject ? {} : { owningProject: { ...r4.owningProject } }, ...void 0 === r4.localSubagentLimits ? {} : { localSubagentLimits: { ...r4.localSubagentLimits } } };
          })(t2.sessionOptions, r3.sessionOptions), a3 = r3.owningClientInstanceId ?? r3.clientInstanceId ?? t2.owningClientInstanceId ?? t2.clientInstanceId, c2 = { ...r3, ...void 0 === i3 ? {} : { sessionOptions: i3 }, ...void 0 === a3 ? {} : { owningClientInstanceId: a3 } };
          if (void 0 === r3.initialHistory) await this.createSession(e3, c2, n3);
          else {
            let s4;
            this.reserveSessionId(r3.sessionId);
            try {
              s4 = await this.getSession(t2.sessionId).store.createFork(e3, { sessionId: r3.sessionId, initialHistory: r3.initialHistory }), await this.createReservedSession(e3, c2, void 0 === n3?.parent ? void 0 : { parent: n3.parent }, s4), s4 = void 0;
            } finally {
              await s4?.dispose?.(), this.creatingSessionIds.delete(r3.sessionId);
            }
          }
          return this.getSession(r3.sessionId);
        } } }, s2);
        o2.forkedFromSessionId = r2?.forkedFromSessionId, i2.setOnAppend(() => {
          Ar(o2), this.appendSessionUpdates.schedule(o2);
        }), o2.onAwaitingInputChanged = () => this.emitSessionUpdated(o2), o2.onBackgroundWorkChanged = () => this.emitSessionUpdated(o2), this.sessions.set(t2.sessionId, o2), o2.store.markLive?.();
        const a2 = o2.owningClientInstanceId?.trim();
        return void 0 !== a2 && a2.length > 0 && this.catalogOwningClientInstanceIds.set(t2.sessionId, a2), void 0 !== o2.sessionOptions?.workspacePaths && this.catalogWorkspacePaths.set(t2.sessionId, o2.sessionOptions.workspacePaths), this.emitSessionUpdatedNow(o2), {};
      }
      hasHostedSession(e2) {
        return !!this.creatingSessionIds.has(e2) || this.hasLiveSession(e2);
      }
      hasLiveSession(e2) {
        const t2 = this.sessions.get(e2);
        return void 0 !== t2 && true !== t2.deleted;
      }
      servingModule() {
        return this.options.servingModule?.current();
      }
      onDidChangeServingModule(e2) {
        return this.options.servingModule?.onDidChange(e2) ?? (() => {
        });
      }
      async hasSession(e2, t2) {
        return { exists: this.hasHostedSession(t2.sessionId) };
      }
      countHostedSessions() {
        let e2 = 0;
        for (const t2 of this.sessions.values()) true !== t2.deleted && (e2 += 1);
        for (const t2 of this.creatingSessionIds) {
          const r2 = this.sessions.get(t2);
          void 0 !== r2 && true !== r2.deleted || (e2 += 1);
        }
        return e2 += this.deletingSessionIds.size, e2;
      }
      async listSessions(e2, t2) {
        return { sessions: await this.listSessionSummaries(e2, t2) };
      }
      watchSessions(e2, t2) {
        const r2 = void 0 === t2 ? void 0 : { workspacePathsFilter: t2.workspacePathsFilter, matchAnyWorkspaceRoot: t2.matchAnyWorkspaceRoot, ownerClientInstanceId: t2.ownerClientInstanceId, includeOwnerUnrootedSessions: t2.includeOwnerUnrootedSessions }, n2 = (function(e3) {
          return void 0 !== e3 && ((e3.workspacePathsFilter?.length ?? 0) > 0 || true === e3.includeOwnerUnrootedSessions);
        })(r2);
        return this.sessionWatchers.subscribe(e2, () => this.listSessionSummaries(e2, r2), n2 ? (e3) => (0, Nt.zl)(e3, r2) : void 0);
      }
      async listWorkspaces(e2, t2) {
        const r2 = await this.options.workspaceCatalog?.listWorkspaces(e2);
        if (void 0 === r2) throw new Wt.YE();
        return { workspaces: (0, Wt.Qj)(r2) };
      }
      async setSessionTitle(e2, t2) {
        if (this.ensureNotDisposing(), this.validateSessionId(t2.sessionId), !await this.hasLiveOrCatalogSession(e2, t2.sessionId)) throw new Error(`Agent host session not found: ${t2.sessionId}`);
        const r2 = t2.title;
        if (void 0 === r2) return await this.options.sessionCatalog?.setTitle?.(e2, t2.sessionId, void 0), void this.emitSessionCatalogFieldsUpdated(t2.sessionId);
        this.sessionTitles.set(t2.sessionId, r2);
        const n2 = this.sessions.get(t2.sessionId);
        void 0 !== n2 && true !== n2.deleted && (n2.title = r2), await this.options.sessionCatalog?.setTitle?.(e2, t2.sessionId, r2), this.emitSessionCatalogFieldsUpdated(t2.sessionId);
      }
      async sendMessage(e2, t2) {
        return this.sendAction(e2, { sessionId: t2.sessionId, action: (0, pt.J2)(t2.text, t2.messageId), modelId: t2.modelId, modelDetails: t2.modelDetails, requestedModel: t2.requestedModel, turnOptions: t2.turnOptions });
      }
      async sendAction(e2, t2) {
        if (this.ensureNotDisposing(), (0, gr.lw)(t2) && "userMessageAction" !== t2.action.action.case) throw new gr.Ym();
        (0, pt.G5)(t2.turnOptions);
        const r2 = this.getSession(t2.sessionId), n2 = t2.replaceQueuedTurnId, s2 = { getSendNowBehavior: this.options.getSendNowBehavior, emitSessionUpdated: (e3) => this.emitSessionUpdated(e3), enqueueOrStartAction: (e3, t3, r3) => this.enqueueOrStartAction(e3, t3, r3) };
        return void 0 !== n2 && "" !== n2 ? (0, gr.OC)({ session: r2, request: t2, turnId: n2, host: s2 }) : (0, gr.Sd)(t2) ? (0, gr.Kg)(r2, t2, s2.getSendNowBehavior) ?? (0, gr.fP)({ ctx: e2, session: r2, request: t2, host: s2 }) : this.enqueueOrStartAction(e2, t2);
      }
      async enqueueOrStartAction(e2, t2, r2) {
        const n2 = this.getSession(t2.sessionId), s2 = void 0 === t2.action ? void 0 : (0, xr.xL)(n2, t2.action);
        if ("steer" === s2?.kind) return { turnId: s2.turnId, deliveredAs: Ot.CD.STEERED };
        if ("reject" === s2?.kind) throw new Error(`Agent host rejected context injection: ${s2.reason}`);
        const o2 = this.findExistingBackgroundWakeupTurn(n2, t2.action);
        if (void 0 !== o2) return { turnId: o2, deliveredAs: Ot.CD.QUEUE };
        const i2 = crypto.randomUUID(), a2 = (0, pt.pA)(t2.turnOptions), c2 = void 0 === t2.requestedModel ? a2 : { ...a2, requestedModel: t2.requestedModel }, l2 = t2.modelDetails ?? (void 0 === t2.requestedModel ? this.options.createModelDetails?.(t2.modelId) ?? et(t2.modelId) : void 0), u2 = this.options.getRunOptions?.({ sessionId: t2.sessionId, turnId: i2, runOptions: c2 }) ?? c2, d2 = "enqueue" === s2?.kind && void 0 !== t2.action && (0, xr.n$)(t2.action) ? { ...u2, generationUUID: i2 } : u2;
        return Ar(n2), n2.lastTurnModel = (function(e3) {
          const { previous: t3, request: r3 } = e3, n3 = r3.requestContextDecoration ?? t3?.requestContextDecoration;
          return { ...void 0 === r3.modelId ? {} : { modelId: r3.modelId }, ...void 0 === r3.modelDetails ? {} : { modelDetails: r3.modelDetails }, ...void 0 === r3.requestedModel ? {} : { requestedModel: r3.requestedModel }, ...void 0 === r3.turnOptions ? {} : { turnOptions: r3.turnOptions }, ...void 0 === n3 ? {} : { requestContextDecoration: n3 }, ...void 0 === t3?.customSubagents ? {} : { customSubagents: t3.customSubagents }, ...void 0 === t3?.projectFolder ? {} : { projectFolder: t3.projectFolder }, ...void 0 === t3?.requestContext ? {} : { requestContext: t3.requestContext }, ...void 0 === t3?.requestId ? {} : { requestId: t3.requestId }, ...void 0 === t3?.parentRequestId ? {} : { parentRequestId: t3.parentRequestId }, ...void 0 === t3?.rootParentRequestId ? {} : { rootParentRequestId: t3.rootParentRequestId } };
        })({ previous: n2.lastTurnModel, request: { ...void 0 === t2.modelId ? {} : { modelId: t2.modelId }, ...void 0 === l2 ? {} : { modelDetails: l2 }, ...void 0 === t2.requestedModel ? {} : { requestedModel: t2.requestedModel }, ...void 0 === t2.turnOptions ? {} : { turnOptions: t2.turnOptions }, ...void 0 === t2.requestContextDecoration ? {} : { requestContextDecoration: t2.requestContextDecoration } } }), this.rememberBackgroundWakeupTurn(n2, t2.action, i2), (0, Er.rW)({ ctx: e2, request: "enqueue" === s2?.kind ? { ...t2, action: s2.action } : t2, session: n2, turnId: i2, modelDetails: l2, runOptions: d2, onSessionUpdated: (e3) => this.emitSessionUpdated(e3), ...true === r2?.insertAtHead ? { insertAtHead: true } : {} }), { turnId: i2, deliveredAs: Ot.CD.QUEUE };
      }
      watchSessionBackgroundWork(e2, t2) {
        const r2 = this.getSession(t2.sessionId), n2 = { kind: Qt(t2.kind), state: jt(t2.state), ownerId: t2.ownerId ?? void 0 };
        return r2.backgroundWorkWatchers.subscribe(e2, () => r2.backgroundWorkRegistry.listWork(n2).map(zt));
      }
      watchSessionTurnLifecycle(e2, t2) {
        return this.getSession(t2.sessionId).turnLifecycleWatchers.subscribe(e2);
      }
      async abortBackgroundWork(e2, t2) {
        return { aborted: this.getSession(t2.sessionId).backgroundWorkRegistry.abortWork(t2.workId) };
      }
      async abortAllBackgroundWork(e2, t2) {
        return { abortedCount: this.getSession(t2.sessionId).backgroundWorkRegistry.abortAllWork({ kind: Qt(t2.kind), state: jt(t2.state), ownerId: t2.ownerId ?? void 0 }) };
      }
      attachSession(e2, t2) {
        return this.ensureNotDisposing(), this.attachSessionInternal(e2, t2);
      }
      async *attachSessionInternal(e2, t2) {
        await this.ensureSessionLoaded(e2, t2.sessionId), yield* this.getSession(t2.sessionId).events.subscribe(e2, t2.lastEventId, true === t2.backgroundTaskCompletionsOnly ? { backgroundTaskCompletionsOnly: true } : void 0);
      }
      async getSessionBlobs(e2, t2) {
        if (this.ensureNotDisposing(), t2.blobIds.length > 64) throw new Error(`blobIds must be at most 64 per request, got ${t2.blobIds.length}`);
        if (t2.blobIds.some((e3) => e3.byteLength > 64)) throw new Error("blobIds must be at most 64 bytes each");
        await this.ensureSessionLoaded(e2, t2.sessionId);
        return yr(e2, this.getSession(t2.sessionId).store.getBlobStore(), t2.blobIds, t2.maxResponseBytes);
      }
      readFile(e2, t2) {
        return this.ensureNotDisposing(), this.readFileInternal(e2, t2);
      }
      async *readFileInternal(e2, t2) {
        const r2 = (0, Xt.cC)(t2.path);
        yield* (0, Xt.Ng)(e2, r2, { readOffset: t2.readOffset ?? BigInt(0), readLimit: t2.readLimit ?? BigInt(0), cachedMtimeMs: t2.cachedMtimeMs });
      }
      sessionTreeHost() {
        return { sessions: this.sessions, sessionCatalog: this.options.sessionCatalog, ensureSessionLoaded: (e2, t2) => this.ensureSessionLoaded(e2, t2), emitSessionUpdated: (e2) => this.emitSessionUpdated(e2) };
      }
      async ensureSessionLoaded(e2, t2) {
        this.validateSessionId(t2);
        const r2 = this.sessions.get(t2);
        if (void 0 !== r2 && true !== r2.deleted) return;
        if (true === r2?.deleted) return;
        const n2 = this.options.sessionCatalog?.ensureLoaded;
        if (void 0 === n2) return;
        if (!await n2(e2, t2)) return;
        const s2 = this.sessions.get(t2);
        if (void 0 === s2 || true === s2.deleted) throw new Error(`Agent host session catalog ensureLoaded returned true but session is not hosted: ${t2}`);
      }
      async disposeInternal() {
        let e2;
        this.unsubscribeCatalogTitleChanged?.(), this.unsubscribeCatalogArchivedChanged?.(), this.unsubscribeCatalogModelChanged?.(), this.unsubscribeCatalogHostOwnedStorageChanged?.();
        const t2 = [...this.sessions.values()];
        this.appendSessionUpdates.cancelAll();
        for (const e3 of t2) {
          e3.disposing = true;
          const t3 = e3.interactionRegistry.close("Agent host is disposing");
          for (const r2 of t3) (0, Er.ht)(e3, r2, "Agent host is disposing", { immediate: true, initiatedBy: Ot.TQ.HOST });
          (0, Er.l$)(e3, "Agent host is disposing");
          for (const t4 of [...e3.hostedTaskTurnAborts.values()]) t4("Agent host is disposing", { immediate: true, initiatedBy: Ot.TQ.HOST });
          (0, Er.sl)(e3);
        }
        for (const r2 of t2) try {
          await r2.turnChain;
        } catch (t3) {
          e2 ??= t3;
        }
        for (const e3 of t2) e3.events.close(), e3.backgroundWorkWatchers.close(), e3.turnLifecycleWatchers.close();
        for (const r2 of t2) {
          try {
            await r2.disposeResources();
          } catch (t3) {
            e2 ??= t3;
          }
          try {
            await r2.store.dispose?.();
          } catch (t3) {
            e2 ??= t3;
          }
        }
        try {
          await this.options.dispose?.();
        } catch (t3) {
          e2 ??= t3;
        }
        if (void 0 !== e2) throw e2;
      }
      getSession(e2) {
        this.validateSessionId(e2);
        const t2 = this.sessions.get(e2);
        if (void 0 === t2 || t2.deleted) throw new Error(`Agent host session not found: ${e2}`);
        return t2;
      }
      async listSessionSummaries(e2, t2) {
        const r2 = (0, Zt.oF)(t2?.limit), n2 = { ...t2, limit: r2 }, s2 = this.options.sessionCatalog, o2 = new Map(this.catalogModelIds), i2 = (e3) => (0, Nt.Gk)(e3.parent, t2) && (0, Nt.zl)(this.catalogEntryFilterIdentity(e3), t2), a2 = void 0 === s2 ? [] : await s2.listSessions(e2, n2, i2), c2 = new Map(this.catalogModelIds);
        this.seedCatalogSessionMetadata(a2, t2), (0, Zt.sZ)({ catalogModelIds: this.catalogModelIds, beforeList: o2, afterList: c2 });
        const l2 = /* @__PURE__ */ new Map();
        for (const e3 of this.sessions.values()) true !== e3.deleted && (0, Nt.Gk)(e3.parent, t2) && (0, Nt.zl)(this.sessionFilterIdentity(e3), t2) && (0, Zt.j7)(e3) && (this.archivedSessionIds.has(e3.sessionId) || l2.set(e3.sessionId, this.toSessionSummary(e3)));
        if (void 0 === s2) return [...l2.values()].sort(Zt.zZ).slice(0, r2);
        const u2 = /* @__PURE__ */ new Map();
        for (const e3 of a2) i2(e3) && (l2.has(e3.sessionId) || u2.set(e3.sessionId, Yt(e3, this.catalogMirrors())));
        for (const [e3, t3] of l2) u2.set(e3, t3);
        return [...u2.values()].sort(Zt.zZ).slice(0, r2);
      }
      seedCatalogSessionMetadata(e2, t2) {
        for (const r2 of e2) {
          if (!(0, Nt.Gk)(r2.parent, t2)) continue;
          void 0 !== r2.updatedAt && this.catalogUpdatedAt.set(r2.sessionId, r2.updatedAt);
          const e3 = r2.modelId?.trim();
          void 0 !== e3 && e3.length > 0 ? this.catalogModelIds.set(r2.sessionId, e3) : this.catalogModelIds.delete(r2.sessionId);
          const n2 = void 0 === r2.workspace ? void 0 : (0, Wt.r6)(r2.workspace);
          if (void 0 !== n2) {
            const e4 = this.catalogWorkspacePaths.get(r2.sessionId), t3 = void 0 !== e4 && e4.length === n2.workspacePaths.length && e4.every((e5, t4) => e5 === n2.workspacePaths[t4]);
            this.catalogWorkspacePaths.set(r2.sessionId, n2.workspacePaths), void 0 !== n2.displayPath ? this.catalogWorkspaceDisplayPaths.set(r2.sessionId, n2.displayPath) : t3 || this.catalogWorkspaceDisplayPaths.delete(r2.sessionId);
          }
          const s2 = r2.owningClientInstanceId?.trim();
          void 0 !== s2 && s2.length > 0 && this.catalogOwningClientInstanceIds.set(r2.sessionId, s2), true !== r2.hostOwnedStorage || this.catalogHostOwnedStorage.has(r2.sessionId) || this.catalogHostOwnedStorage.set(r2.sessionId, true);
          const o2 = r2.title?.trim();
          void 0 !== o2 && o2.length > 0 && (this.sessionTitles.has(r2.sessionId) || this.sessionTitles.set(r2.sessionId, o2));
          const i2 = this.sessions.get(r2.sessionId);
          void 0 !== i2 && true !== i2.deleted && void 0 === i2.title && void 0 !== o2 && (i2.title = o2);
        }
      }
      catalogMirrors() {
        return { titles: this.sessionTitles, updatedAt: this.catalogUpdatedAt, modelIds: this.catalogModelIds, workspacePaths: this.catalogWorkspacePaths, workspaceDisplayPaths: this.catalogWorkspaceDisplayPaths };
      }
      sessionFilterIdentity(e2) {
        return wr(e2, { sessions: this.sessions, catalogWorkspacePaths: this.catalogWorkspacePaths, catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds });
      }
      catalogEntryFilterIdentity(e2) {
        const t2 = void 0 === e2.workspace ? void 0 : (0, Wt.r6)(e2.workspace), r2 = e2.owningClientInstanceId?.trim();
        return (function(e3, t3) {
          const r3 = e3.owningClientInstanceId ?? t3.catalogOwningClientInstanceIds.get(e3.sessionId);
          return { sessionId: e3.sessionId, workspacePaths: e3.workspacePaths ?? t3.catalogWorkspacePaths.get(e3.sessionId) ?? [], ...void 0 === r3 ? {} : { owningClientInstanceId: r3 }, ...void 0 === e3.parent ? {} : { parent: e3.parent } };
        })({ sessionId: e2.sessionId, ...void 0 === e2.parent ? {} : { parent: e2.parent }, ...void 0 === t2 ? {} : { workspacePaths: t2.workspacePaths }, ...void 0 === r2 || 0 === r2.length ? {} : { owningClientInstanceId: r2 } }, { catalogWorkspacePaths: this.catalogWorkspacePaths, catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds });
      }
      resolveLiveSessionWorkspace(e2) {
        const t2 = e2.sessionOptions?.workspacePaths;
        if (void 0 === t2) {
          const t3 = this.catalogWorkspacePaths.get(e2.sessionId);
          return void 0 === t3 ? void 0 : { workspacePaths: t3, displayPath: this.catalogWorkspaceDisplayPaths.get(e2.sessionId) };
        }
        const r2 = t2.filter((e3) => e3.length > 0);
        return { workspacePaths: r2, worktreeMainPath: e2.sessionOptions?.worktreeMainPath, displayPath: (0, Wt.wi)(r2, this.options.userHomeDirectory) };
      }
      toSessionSummary(e2) {
        const t2 = Vt(e2.sessionId, this.sessionTitles, e2.title), r2 = Kt(e2.sessionId, this.catalogUpdatedAt, e2.updatedAt), n2 = this.catalogModelIds.get(e2.sessionId), { runningTurnId: s2, queuedTurnIds: o2 } = (0, Er.sN)(e2);
        return { sessionId: e2.sessionId, status: this.computeSessionStatus(e2), lastEventId: e2.events.getLastEventId(), queuedTurnIds: o2, ...void 0 === s2 ? {} : { runningTurnId: s2 }, ...void 0 === t2 ? {} : { title: t2 }, ...void 0 === n2 ? {} : { modelId: n2 }, ...(0, Wt.Ox)(this.resolveLiveSessionWorkspace(e2)), ...void 0 === e2.forkedFromSessionId ? {} : { forkedFromSessionId: e2.forkedFromSessionId }, ...void 0 === e2.parent ? {} : { parent: { parentSessionId: e2.parent.parentSessionId, parentToolCallId: e2.parent.parentToolCallId, rootSessionId: e2.parent.rootSessionId } }, ...void 0 === r2 ? {} : { updatedAt: dt.Timestamp.fromDate(new Date(r2)) } };
      }
      applyExternalSessionTitle(e2, t2) {
        if (void 0 !== this.disposePromise) return;
        if (this.sessionTitles.get(e2) === t2) return;
        this.sessionTitles.set(e2, t2);
        const r2 = this.sessions.get(e2);
        void 0 !== r2 && true !== r2.deleted && (r2.title = t2), this.emitSessionCatalogFieldsUpdated(e2);
      }
      applyExternalSessionModel(e2, t2) {
        if (void 0 !== this.disposePromise) return;
        const r2 = t2?.trim(), n2 = r2 || void 0;
        this.catalogModelIds.get(e2) !== n2 && (void 0 === n2 ? this.catalogModelIds.delete(e2) : this.catalogModelIds.set(e2, n2), this.emitSessionCatalogFieldsUpdated(e2));
      }
      applyExternalSessionArchived(e2, t2) {
        if (void 0 !== this.disposePromise) return;
        if (this.archivedSessionIds.has(e2) === t2) return;
        const r2 = this.sessions.get(e2);
        if (t2) return this.archivedSessionIds.add(e2), void 0 !== r2 && this.announcedSessions.delete(r2), void this.sessionWatchers.emitDeleted(e2);
        if (this.archivedSessionIds.delete(e2), void 0 !== r2 && this.isLiveSessionInstance(r2)) return void this.emitSessionUpdatedNow(r2);
        const n2 = Yt({ sessionId: e2 }, this.catalogMirrors());
        this.sessionWatchers.emitAdded(n2, this.catalogEntryFilterIdentity({ sessionId: e2 }));
      }
      applyExternalSessionHostOwnedStorage(e2, t2) {
        if (void 0 !== this.disposePromise) return;
        const r2 = this.catalogHostOwnedStorage.get(e2) ?? false;
        if (this.catalogHostOwnedStorage.set(e2, t2), r2 === t2) return;
        const n2 = this.sessions.get(e2);
        void 0 !== n2 && this.isLiveSessionInstance(n2) ? this.emitSessionUpdated(n2) : t2 ? this.archivedSessionIds.has(e2) || this.sessionWatchers.emitAdded(Yt({ sessionId: e2 }, this.catalogMirrors()), this.catalogEntryFilterIdentity({ sessionId: e2 })) : this.sessionWatchers.emitDeleted(e2);
      }
      emitSessionCatalogFieldsUpdated(e2) {
        if (void 0 !== this.disposePromise) return;
        if (this.archivedSessionIds.has(e2)) return;
        const t2 = this.sessions.get(e2);
        if (void 0 !== t2 && this.isLiveSessionInstance(t2) && this.announcedSessions.has(t2)) return void this.emitSessionUpdated(t2);
        const r2 = Yt({ sessionId: e2 }, this.catalogMirrors());
        this.sessionWatchers.emitUpdated(r2, this.catalogEntryFilterIdentity({ sessionId: e2 }));
      }
      computeSessionStatus(e2) {
        return e2.awaitingInputCount > 0 ? Ot.g6.AWAITING_INPUT : e2.pendingTurns > 0 || e2.backgroundWorkRegistry.hasRunningWork({ kind: "subagent" }) ? Ot.g6.RUNNING : Ot.g6.IDLE;
      }
      queueHostOwnedBackgroundWakeup(e2, t2) {
        if (0 === t2.length || true === this.options.surfaceOwnsBackgroundWakeups) return;
        const r2 = this.sessions.get(e2);
        if (void 0 === r2 || r2.deleted) return;
        if (void 0 !== this.findExistingBackgroundWakeupTurn(r2, Lt(t2))) return;
        const n2 = (function(e3) {
          if (void 0 === e3) return;
          const { generationUuid: t3, ...r3 } = e3;
          return r3;
        })(r2.lastTurnModel?.turnOptions);
        this.sendAction((0, o.q6)(), { sessionId: e2, action: Lt(t2), ...void 0 === r2.lastTurnModel?.modelId ? {} : { modelId: r2.lastTurnModel.modelId }, ...void 0 === r2.lastTurnModel?.modelDetails ? {} : { modelDetails: r2.lastTurnModel.modelDetails }, ...void 0 === r2.lastTurnModel?.requestedModel ? {} : { requestedModel: r2.lastTurnModel.requestedModel }, ...void 0 === n2 ? {} : { turnOptions: n2 }, ...void 0 === r2.lastTurnModel?.requestContextDecoration ? {} : { requestContextDecoration: r2.lastTurnModel.requestContextDecoration } }).catch((t3) => {
          Tr.warn((0, o.q6)(), "Host-owned background wakeup failed", { sessionId: e2, error: t3 });
        });
      }
      findExistingBackgroundWakeupTurn(e2, t2) {
        if (void 0 === t2) return;
        const r2 = $t(t2);
        if (void 0 === r2 || 0 === r2.length) return;
        const n2 = e2.backgroundWorkRegistry.findExactWakeupTurn(r2);
        if (void 0 === n2) return;
        const s2 = e2.turns.get(n2);
        if (void 0 !== s2 && "finished" !== s2.state && !s2.cancelled) return n2;
        e2.backgroundWorkRegistry.forgetWakeupTurnsForTurn(n2);
      }
      rememberBackgroundWakeupTurn(e2, t2, r2) {
        if (void 0 === t2) return;
        const n2 = $t(t2);
        if (void 0 !== n2) for (const t3 of n2) e2.backgroundWorkRegistry.rememberWakeupTurn({ taskId: t3, turnId: r2 });
      }
      emitSessionUpdated(e2) {
        this.appendSessionUpdates.cancel(e2), this.emitSessionUpdatedNow(e2);
      }
      emitSessionUpdatedNow(e2) {
        this.isLiveSessionInstance(e2) && (this.archivedSessionIds.has(e2.sessionId) || (this.announcedSessions.has(e2) ? this.sessionWatchers.emitUpdated(this.toSessionSummary(e2), this.sessionFilterIdentity(e2)) : (0, Zt.j7)(e2) && (this.announcedSessions.add(e2), this.sessionWatchers.emitAdded(this.toSessionSummary(e2), this.sessionFilterIdentity(e2)))));
      }
      isLiveSessionInstance(e2) {
        return void 0 === this.disposePromise && !e2.deleted && this.sessions.get(e2.sessionId) === e2;
      }
      async deleteHostedSession(e2) {
        this.validateSessionId(e2);
        const t2 = this.sessions.get(e2);
        if (void 0 !== t2 && !t2.deleted) {
          t2.deleted = true, this.deletingSessionIds.add(e2);
          try {
            let r2;
            this.appendSessionUpdates.cancel(t2), t2.backgroundWorkWatchers.close(), t2.turnLifecycleWatchers.close(), (0, Er.EL)(t2, "session deleted"), (0, Er.sl)(t2), t2.backgroundWorkRegistry.abortAllWork();
            try {
              await t2.turnChain;
            } catch (e3) {
              r2 ??= e3;
            }
            this.sessions.delete(e2);
            try {
              this.options.onSessionDeleted?.(e2);
            } catch (e3) {
              r2 ??= e3;
            }
            t2.interactionRegistry.close("session deleted"), t2.events.close();
            try {
              await t2.disposeResources();
            } catch (e3) {
              r2 ??= e3;
            }
            try {
              await t2.store.dispose?.();
            } catch (e3) {
              r2 ??= e3;
            }
            if (this.sessionWatchers.emitDeleted(e2), void 0 !== r2) throw r2;
          } finally {
            this.deletingSessionIds.delete(e2);
          }
        }
      }
      validateSessionId(e2) {
        if (0 === e2.trim().length) throw new Error("sessionId is required");
        (0, Ft.M)(e2);
      }
      async hasLiveOrCatalogSession(e2, t2) {
        const r2 = this.sessions.get(t2);
        if (void 0 !== r2 && true !== r2.deleted) return true;
        const n2 = this.options.sessionCatalog;
        if (void 0 === n2) return false;
        return (await n2.listSessions(e2)).some((e3) => e3.sessionId === t2);
      }
      reserveSessionId(e2) {
        if (this.validateSessionId(e2), this.sessions.has(e2) || this.creatingSessionIds.has(e2)) throw new Error(`Agent host session already exists: ${e2}`);
        this.creatingSessionIds.add(e2);
      }
      getSessionHistoryForFork(e2, t2) {
        if (void 0 === t2) return (0, ur.ks)(e2.store.getConversationState());
        if (0 === t2.trim().length) throw new Error("throughTurnId cannot be empty");
        return e2.events.getSessionHistoryThroughTurn(t2);
      }
      ensureNotDisposing() {
        if (void 0 !== this.disposePromise) throw new Error("Agent host is disposing");
      }
    }
    var Br = r(8898);
    class Pr {
      constructor(e2) {
        this.open = e2, this.closed = false;
      }
      get items() {
        return this.opened().items;
      }
      transaction(e2) {
        return this.opened().transaction(e2);
      }
      close() {
        this.closed = true, this.store?.close();
      }
      opened() {
        if (void 0 === this.store) {
          if (this.closed) throw new Error("Agent host global store is closed");
          this.store = this.open();
        }
        return this.store;
      }
    }
    var Jr = r(67640), Mr = r(89396);
    function qr(e2) {
      switch (e2) {
        case "shell":
          return le.aZc.SHELL;
        case "subagent":
          return le.aZc.SUBAGENT;
        default:
          return e2;
      }
    }
    function Dr(e2) {
      switch (e2) {
        case "success":
          return le.uHL.SUCCESS;
        case "error":
          return le.uHL.ERROR;
        case "aborted":
          return le.uHL.ABORTED;
        default:
          return e2;
      }
    }
    const Or = (0, s.h)("agent-host:background-work-registry");
    class Nr extends n.R10 {
      constructor(e2) {
        super(), this.ctx = e2, this.wakeupTurnByTaskId = /* @__PURE__ */ new Map();
      }
      setOnCompletionEnqueued(e2) {
        this.completionCallback = e2;
      }
      setOnWorkChanged(e2) {
        this.workChangedCallback = e2;
      }
      rememberWakeupTurn(e2) {
        this.wakeupTurnByTaskId.set(e2.taskId, e2.turnId);
      }
      findWakeupTurn(e2) {
        return this.wakeupTurnByTaskId.get(e2);
      }
      findExactWakeupTurn(e2) {
        if (0 === e2.length) return;
        const t2 = [...new Set(e2)], r2 = t2.map((e3) => this.wakeupTurnByTaskId.get(e3)), n2 = r2[0];
        if (void 0 === n2 || r2.some((e3) => e3 !== n2)) return;
        let s2 = 0;
        for (const e3 of this.wakeupTurnByTaskId.values()) e3 === n2 && (s2 += 1);
        return s2 === t2.length ? n2 : void 0;
      }
      forgetWakeupTurnsForTurn(e2) {
        for (const [t2, r2] of this.wakeupTurnByTaskId) r2 === e2 && this.wakeupTurnByTaskId.delete(t2);
      }
      upsertWork(...e2) {
        this.wakeupTurnByTaskId.delete(e2[0].id), super.upsertWork(...e2), this.workChangedCallback?.();
      }
      clearWork(...e2) {
        const t2 = super.clearWork(...e2);
        return t2 && this.workChangedCallback?.(), t2;
      }
      abortWork(...e2) {
        const t2 = super.abortWork(...e2);
        return t2 && this.workChangedCallback?.(), t2;
      }
      abortAllWork(...e2) {
        const t2 = super.abortAllWork(...e2);
        return t2 > 0 && this.workChangedCallback?.(), t2;
      }
      enqueue(...e2) {
        const t2 = this.getWakeupRevision();
        super.enqueue(...e2);
        const r2 = this.getWakeupRevision() > t2;
        r2 && this.completionCallback?.(), this.logEnqueueOutcome(e2[0], r2);
      }
      logEnqueueOutcome(e2, t2) {
        void 0 !== this.ctx && Or.info(this.ctx, "agent.background_wakeup_enqueue", { event: "agent.background_wakeup_enqueue", outcome: t2 ? "enqueued" : "dropped", wakeup_id: e2.id, conversation_id: e2.conversationId, source: e2.source, task_id: e2.payload.taskId, work_kind: e2.payload.kind, completion_status: e2.payload.status });
      }
    }
    const Fr = (0, s.h)("agent-host:hosted-child-request-context");
    function Ur(e2) {
      const t2 = e2.clone();
      return t2.fileContents = {}, t2.precomputedHumanChanges = [], t2.recentlyAddedPlugin = void 0, t2.matchedInstalledPlugin = void 0, t2.debugModeConfig = void 0, t2.hooksAdditionalContext = void 0, t2.searchConversationsEnabled = false, t2.conversationNotesListing = void 0, void 0 !== t2.env && (t2.env.agentConversationNotesFolder = "", t2.env.devForceNextSmartModeClassifierBlockToken = void 0, t2.env.devDelayNextSmartModeClassifierToken = void 0), t2;
    }
    function Lr(e2, t2, r2) {
      false === e2.customSubagentsInfoComplete && void 0 !== t2 && (e2.customSubagents = [...t2], e2.customSubagentsInfoComplete = true), e2.env?.projectFolder || void 0 === r2 || (e2.env ??= new Mr.GE(), e2.env.projectFolder = r2);
    }
    function $r(e2, t2) {
      return void 0 === t2 ? e2 : new n.dwX(e2, [(0, n.VNS)(n.MZM, (r2 = t2, { execute: async () => new Mr._G({ result: { case: "success", value: new Mr.yW({ requestContext: Ur(r2) }) } }) }))]);
      var r2;
    }
    var Qr = r(18130), jr = r(829), Gr = r(18951), Hr = r(60544), zr = r(3411);
    async function Wr(e2) {
      const t2 = e2.conversationActionManager ?? new zr.h();
      return "userMessageAction" === e2.action.action.case && (e2.action.action.value.sendToInteractionListener = true), await e2.adapter.run({ ctx: e2.ctx, conversationState: e2.conversationState, action: e2.action, modelDetails: e2.modelDetails, interactionListener: e2.interactionListener, resources: e2.resources, blobStore: e2.blobStore, conversationActionManager: t2, checkpointHandler: e2.checkpointHandler, mcpTools: e2.mcpTools ?? [], runOptions: e2.runOptions }), { conversationActionManager: t2 };
    }
    function Vr(e2, t2, r2) {
      const n2 = (function(e3, t3 = new er.ve()) {
        const r3 = new er.We(), n3 = (0, er.sh)(e3), s3 = new er.pH(t3, r3);
        return s3.setMetadata("agentId", n3.agentId), s3.setMetadata("latestRootBlobId", n3.latestRootBlobId), s3.setMetadata("name", n3.name), s3.setMetadata("createdAt", n3.createdAt), s3.setMetadata("mode", n3.mode), s3.setMetadata("isRunEverything", n3.isRunEverything), s3.setMetadata("lastUsedModel", n3.lastUsedModel), s3.setMetadata("lastDebugServerPort", n3.lastDebugServerPort), s3.setMetadata("currentPlanUri", n3.currentPlanUri), s3;
      })(e2 ?? crypto.randomUUID(), t2);
      let s2 = r2 ?? n2.getConversationStateStructure();
      return { getConversationState: () => s2, getBlobStore: () => n2.getBlobStore(), async handleCheckpoint(e3, t3) {
        s2 = t3, await n2.handleCheckpoint(e3, t3);
      }, createFork: async (e3, t3) => Vr(t3.sessionId, n2.getBlobStore()) };
    }
    const Kr = "Await timed out while task is still running";
    function Yr(e2) {
      if (!Boolean(e2.resumeAgentId && !(0, n.UOG)(e2.prompt) && true === e2.readonly && true !== e2.runInBackground)) return false;
      if (0 === (e2.parentConversationId ?? "").trim().length) throw new Error(`Missing parentConversationId for subagent await/status check (subagentId: ${e2.resumeAgentId})`);
      return true;
    }
    async function Zr(e2, t2, r2) {
      const n2 = e2.getTrackedBackgroundRun(t2);
      return n2 ? en(n2, r2.signal) : e2.isBackgroundRunBusy(t2) ? (async function(e3, t3, r3) {
        for (; e3.isBackgroundRunBusy(t3); ) {
          if (r3.signal.aborted) return { status: "error", error: Kr };
          const n3 = e3.getTrackedBackgroundRun(t3);
          if (n3) return en(n3, r3.signal);
          await Xr(r3.withDetached().withTimeout(50).signal);
        }
        return { status: "completed", toolCallCount: 0 };
      })(e2, t2, r2) : { status: "error", error: `No background subagent found for id: ${t2}` };
    }
    function Xr(e2) {
      return new Promise((t2) => {
        e2.aborted ? t2() : e2.addEventListener("abort", () => t2(), { once: true });
      });
    }
    async function en(e2, t2) {
      if (t2.aborted) return { status: "error", error: Kr };
      const r2 = { status: "error", error: Kr };
      return new Promise((n2) => {
        const s2 = () => {
          n2(r2);
        };
        t2.addEventListener("abort", s2, { once: true }), e2.promise.then(n2).finally(() => t2.removeEventListener("abort", s2));
      });
    }
    async function tn(e2, t2, r2) {
      const n2 = r2.agentId, s2 = e2.getTrackedBackgroundRun(n2);
      if (void 0 === s2) return e2.isBackgroundRunBusy(n2) ? rn(n2) : new ft.zJ({ result: { case: "notFound", value: new ft.Hq({ agentId: n2 }) } });
      const o2 = await (function(e3, t3, r3) {
        if (r3.signal.aborted) return Promise.resolve(void 0);
        const [n3, s3] = r3.withTimeoutAndCancel(Math.max(0, t3));
        return new Promise((t4) => {
          const r4 = () => {
            t4(void 0);
          };
          n3.signal.addEventListener("abort", r4, { once: true }), e3.promise.then(t4).finally(() => {
            n3.signal.removeEventListener("abort", r4), s3();
          });
        });
      })(s2, r2.timeoutMs, t2);
      if (void 0 === o2) return rn(n2, s2.transcriptPath);
      switch (o2.status) {
        case "completed":
          return new ft.zJ({ result: { case: "complete", value: new ft.bE({ agentId: n2, toolCallCount: o2.toolCallCount ?? 0, transcriptPath: s2.transcriptPath, ...void 0 === o2.finalMessage ? {} : { finalMessage: o2.finalMessage } }) } });
        case "background":
          return rn(n2, s2.transcriptPath);
        case "aborted":
        case "error":
          return new ft.zJ({ result: { case: "error", value: new ft.Y({ agentId: n2, error: o2.error ?? "Subagent was aborted" }) } });
        default:
          return o2;
      }
    }
    function rn(e2, t2) {
      return new ft.zJ({ result: { case: "stillRunning", value: new ft.L5({ agentId: e2, transcriptPath: t2 }) } });
    }
    var nn = r(23152), sn = r(36190);
    class on {
      constructor(e2) {
        this.options = e2, this.replayByToolCallId = /* @__PURE__ */ new Map(), this.executionByToolCallId = /* @__PURE__ */ new Map(), this.verifiedReplayChildIds = /* @__PURE__ */ new Set(), this.capturedRootSessionId = e2.rootSessionId;
      }
      clearReplayForExplicitContinuation(e2) {
        (e2.resumeAgentId || e2.forkAgentId) && this.replayByToolCallId.delete(e2.toolCallId.trim());
      }
      async findIndexedReplayChild(e2, t2) {
        const r2 = this.options.findExistingChildSessionId, n2 = e2.toolCallId.trim();
        if (void 0 === r2 || t2 || e2.resumeAgentId || e2.forkAgentId || !n2) return;
        const s2 = (await r2({ parentToolCallId: n2 }))?.trim();
        return void 0 !== s2 && this.options.isValidChildSessionId(s2) ? s2 : void 0;
      }
      rememberVerifiedReplayChild(e2) {
        if (!this.verifiedReplayChildIds.has(e2) && this.verifiedReplayChildIds.size >= 100) {
          const e3 = this.verifiedReplayChildIds.values().next().value;
          void 0 !== e3 && this.verifiedReplayChildIds.delete(e3);
        }
        this.verifiedReplayChildIds.add(e2);
      }
      takeVerifiedReplayChild(e2) {
        return this.verifiedReplayChildIds.delete(e2);
      }
      async claim({ args: e2, proposedChildSessionId: t2, indexedChildSessionId: r2 }) {
        const n2 = this.options.store, s2 = e2.toolCallId.trim();
        if (!this.options.enabled || void 0 === n2 || e2.resumeAgentId || e2.forkAgentId || !s2) return;
        const o2 = await n2.claim({ parentSessionId: this.options.parentSessionId, rootSessionId: this.rootSessionId(), parentToolCallId: s2, proposedChildSessionId: r2 ?? t2 });
        if (!this.options.isValidChildSessionId(o2.invocation.childSessionId)) throw new Error(`Durable Task invocation has invalid child session id: ${o2.invocation.childSessionId}`);
        let i2;
        return "existing" === o2.kind ? i2 = o2.invocation.childSessionId : void 0 !== r2 && r2 === o2.invocation.childSessionId && (i2 = r2), void 0 !== i2 ? (this.replayByToolCallId.set(s2, o2.invocation), { replayResumeAgentId: i2 }) : { claimedChildSessionId: o2.invocation.childSessionId };
      }
      completedOutcome({ parentToolCallId: e2, childSessionId: t2 }) {
        const r2 = this.replayByToolCallId.get(e2.trim());
        if ("completed" === r2?.kind && r2.childSessionId === t2) return r2.outcome;
      }
      runOnce(e2, t2) {
        const r2 = e2.toolCallId.trim();
        if (!this.options.enabled || void 0 === this.options.store || e2.resumeAgentId || e2.forkAgentId || !r2) return t2();
        const n2 = this.executionByToolCallId.get(r2);
        if (void 0 !== n2) return n2;
        const s2 = t2();
        this.executionByToolCallId.set(r2, s2);
        const o2 = () => {
          this.executionByToolCallId.get(r2) === s2 && this.executionByToolCallId.delete(r2);
        };
        return s2.then(o2, o2), s2;
      }
      async shouldResumeCheckpoint(e2, t2, r2) {
        const n2 = e2.toolCallId.trim(), s2 = this.replayByToolCallId.get(n2);
        return ("checkpointed" === s2?.kind || "started" === s2?.kind && r2.toBinary().length > 0) && (this.replayByToolCallId.delete(n2), "started" === s2?.kind && await this.markCheckpointed(e2, t2), true);
      }
      async createConversationAction(e2, t2, r2, n2) {
        return await this.shouldResumeCheckpoint(e2, t2, r2) ? new le.QFf({ action: { case: "resumeAction", value: new le.qKo() } }) : new le.QFf({ action: { case: "userMessageAction", value: new le.Vtf({ userMessage: new le.RGk({ text: e2.prompt, mode: n2, ...void 0 === e2.selectedContext ? {} : { selectedContext: e2.selectedContext } }) }) } });
      }
      async markCheckpointed(e2, t2) {
        const r2 = this.key(e2, t2);
        void 0 !== r2 && await this.options.store?.markCheckpointed(r2);
      }
      async markCompleted(e2, t2, r2) {
        if ("completed" !== r2.status && "background" !== r2.status) return;
        const n2 = this.key(e2, t2);
        void 0 !== n2 && await this.options.store?.markCompleted({ ...n2, outcome: r2 });
      }
      key(e2, t2) {
        if (void 0 === this.options.store || e2.resumeAgentId || e2.forkAgentId) return;
        const r2 = e2.toolCallId.trim();
        return r2 ? { parentSessionId: this.options.parentSessionId, rootSessionId: this.rootSessionId(), parentToolCallId: r2, childSessionId: t2 } : void 0;
      }
      rootSessionId() {
        return this.options.getRootSessionId?.() ?? this.capturedRootSessionId;
      }
    }
    function an(e2) {
      return "completed" === e2.status ? e2.finalMessage ?? "" : "error" === e2.status ? e2.error : "Subagent was aborted by the user";
    }
    class cn {
      constructor(e2) {
        this.options = e2, this.childParentIds = /* @__PURE__ */ new Map(), this.parentChildIds = /* @__PURE__ */ new Map(), this.queuedChildCompletions = /* @__PURE__ */ new Map(), this.childCompletionWaiters = /* @__PURE__ */ new Map(), this.pendingCleanups = /* @__PURE__ */ new Set();
      }
      registerParentChildLink(e2, t2) {
        const r2 = t2?.trim();
        if (!r2 || r2 === e2) return;
        if (!this.options.isTrackedSpawner(r2)) return;
        const n2 = this.childParentIds.get(e2);
        if (n2 === r2) return;
        n2 && (this.parentChildIds.get(n2)?.delete(e2), 0 === (this.parentChildIds.get(n2)?.size ?? 0) && this.parentChildIds.delete(n2)), this.childParentIds.set(e2, r2);
        const s2 = this.parentChildIds.get(r2) ?? /* @__PURE__ */ new Set();
        s2.add(e2), this.parentChildIds.set(r2, s2);
      }
      removeParentChildLink(e2) {
        const t2 = this.childParentIds.get(e2);
        if (!t2) return;
        this.childParentIds.delete(e2);
        const r2 = this.parentChildIds.get(t2);
        r2?.delete(e2), 0 === (r2?.size ?? 0) && this.parentChildIds.delete(t2);
      }
      enqueueChildCompletion(e2, t2) {
        const r2 = this.childParentIds.get(e2);
        if (!r2) return false;
        const n2 = this.queuedChildCompletions.get(r2) ?? [];
        n2.push({ agentId: e2, success: "completed" === t2.status, finalMessage: an(t2) }), this.queuedChildCompletions.set(r2, n2), this.removeParentChildLink(e2);
        const s2 = this.childCompletionWaiters.get(r2);
        if (void 0 !== s2) {
          this.childCompletionWaiters.delete(r2);
          for (const e3 of s2) e3();
        }
        return true;
      }
      async collectAvailableChildCompletions(e2, t2) {
        const r2 = this.drainChildCompletions(e2);
        return r2.length > 0 ? r2 : this.hasPendingChildSubagents(e2) ? (await this.waitForChildCompletion(e2, t2), this.drainChildCompletions(e2)) : [];
      }
      deferCleanup(e2) {
        this.pendingCleanups.add(e2);
      }
      hasDeferredCleanup(e2) {
        return this.pendingCleanups.has(e2);
      }
      cleanupChildCompletionState(e2) {
        this.pendingCleanups.delete(e2);
        const t2 = this.parentChildIds.get(e2);
        if (void 0 !== t2) for (const e3 of t2) this.childParentIds.delete(e3);
        this.removeParentChildLink(e2), this.parentChildIds.delete(e2), this.queuedChildCompletions.delete(e2), this.childCompletionWaiters.delete(e2);
      }
      hasPendingChildSubagents(e2) {
        return (this.parentChildIds.get(e2)?.size ?? 0) > 0;
      }
      drainChildCompletions(e2) {
        const t2 = this.queuedChildCompletions.get(e2) ?? [];
        return this.queuedChildCompletions.delete(e2), t2;
      }
      async waitForChildCompletion(e2, t2) {
        if (t2.aborted) throw new Error("aborted");
        await new Promise((r2, n2) => {
          const s2 = this.childCompletionWaiters.get(e2) ?? /* @__PURE__ */ new Set(), o2 = () => {
            a2(), r2();
          }, i2 = () => {
            a2(), n2(new Error("aborted"));
          }, a2 = () => {
            s2.delete(o2), 0 === s2.size && this.childCompletionWaiters.delete(e2), t2.removeEventListener("abort", i2);
          };
          s2.add(o2), this.childCompletionWaiters.set(e2, s2), t2.addEventListener("abort", i2, { once: true });
        });
      }
    }
    async function ln(e2, t2, r2, n2, s2, o2) {
      let i2, a2, c2 = 0;
      for (let l2 = 0; l2 < s2; l2++) {
        if (e2.signal.aborted) return { status: "aborted", error: "Subagent was aborted" };
        const s3 = 0 === l2 ? r2.prompt : un(n2, c2, i2), u2 = 0 === l2 ? new ft.Pw({ ...r2, runInBackground: false }) : new ft.Pw({ ...r2, prompt: s3, resumeAgentId: t2, runInBackground: false });
        if (a2 = await o2.runTurn(e2, u2), "completed" !== a2.status) return a2;
        const d2 = a2.toolCallCount ?? 0, p2 = a2.finalMessage ?? "";
        if (void 0 !== i2 && p2.includes(i2)) return a2;
        d2 > 0 ? (c2 = 0, i2 = void 0) : (c2 += 1, i2 = c2 >= n2.idleThreshold ? `DONE_${(0, x.randomUUID)().replace(/-/g, "").slice(0, 8)}` : void 0);
      }
      return a2 ?? { status: "error", error: "Subagent continuation exited unexpectedly" };
    }
    function un(e2, t2, r2) {
      return t2 >= e2.idleThreshold && void 0 !== r2 ? e2.escapeMessageTemplate.replace("{idle_count}", String(t2)).replace("{escape_token}", r2) : e2.nudgeMessage;
    }
    class dn {
      constructor(e2) {
        this.conversationActionManager = new zr.h(), this.abortRequested = false, this.settled = false, this.disposed = false, this.dispatchCtx = e2.ctx;
        const [t2, r2] = e2.ctx.withDetached().withCancel();
        this.turnCtx = t2, this.cancelTurnCtx = r2, this.forwardDispatchAbort = () => {
          r2(e2.ctx.signal.reason);
        }, e2.ctx.signal.addEventListener("abort", this.forwardDispatchAbort, { once: true }), e2.ctx.signal.aborted && this.forwardDispatchAbort(), this.abortTurn = (t3, r3) => {
          this.abortRequested || this.turnCtx.signal.aborted || this.disposed || (this.abortRequested = true, this.abortReasonValue = t3?.trim() || "Subagent was aborted", this.abortInitiatedByValue = r3?.initiatedBy, e2.onAbortRequested?.(), true !== r3?.immediate ? (this.conversationActionManager.abort(this.abortReasonValue), this.armHardCancelBackstop()) : this.cancelTurnCtx(this.abortReasonValue));
        };
      }
      isAborted() {
        return this.abortRequested || this.turnCtx.signal.aborted;
      }
      get abortReason() {
        return this.abortReasonValue;
      }
      get abortInitiatedBy() {
        return this.abortInitiatedByValue;
      }
      claimSettle() {
        return !this.settled && (this.settled = true, true);
      }
      dispose() {
        this.disposed || (this.disposed = true, this.dispatchCtx.signal.removeEventListener("abort", this.forwardDispatchAbort), this.releaseHardCancelBackstop?.(), this.releaseHardCancelBackstop = void 0, this.conversationActionManager.dispose());
      }
      armHardCancelBackstop() {
        const [e2, t2] = this.dispatchCtx.withDetached().withTimeoutAndCancel(8e3);
        let r2 = false;
        this.releaseHardCancelBackstop = () => {
          r2 = true, t2();
        }, e2.signal.addEventListener("abort", () => {
          r2 || this.cancelTurnCtx(this.abortReasonValue);
        }, { once: true });
      }
    }
    var pn = r(38812);
    class mn extends Error {
      constructor(e2) {
        super(`Agent host bubbled interaction has no active parent turn: ${e2}`), this.name = "AgentHostNoActiveParentTurnError";
      }
    }
    const hn = (0, s.h)("agent-host:subagent-interaction-policy"), fn = "Interaction not available to subagent";
    function gn(e2) {
      return void 0 === e2 || e2 === Ot.w3.UNSPECIFIED ? Ot.w3.AUTO_REJECT : e2;
    }
    function yn(e2, t2 = fn) {
      const r2 = (0, pn.oF)(e2, t2);
      if (void 0 === r2) throw new Error(`Unhandled interaction query type for subagent auto-reject: ${String(e2.query.case)}`);
      return r2;
    }
    const wn = { webSearchRequestQuery: "bubble-to-parent", webFetchRequestQuery: "bubble-to-parent", askQuestionInteractionQuery: "surface-to-user", createPlanRequestQuery: "surface-to-user", mcpAuthRequestQuery: "surface-to-user", connectScmRequestQuery: "surface-to-user", switchModeRequestQuery: "host-execute", setupVmEnvironmentArgs: "auto-reject", prManagementRequestQuery: "auto-reject", generateImageRequestQuery: "auto-reject", replaceEnvArgs: "auto-reject" };
    const vn = /* @__PURE__ */ new Set(["agent", "chat", "plan", "debug", "triage", "multitask"]);
    function _n(e2, t2, r2) {
      if ("switchModeRequestQuery" !== t2.query.case) throw new Error(`Expected switchModeRequestQuery, got ${String(t2.query.case)}`);
      const n2 = t2.query.value.args?.targetModeId?.trim() ?? "";
      return vn.has(n2) ? (hn.info(e2, "Subagent switch-mode host-approved", { childSessionId: r2.childSessionId, parentToolCallId: r2.parentToolCallId, targetModeId: n2 }), mt.x1.switchModeApproved(t2.id)) : (hn.info(e2, "Subagent switch-mode target is not loop-executable; rejecting", { childSessionId: r2.childSessionId, parentToolCallId: r2.parentToolCallId, targetModeId: n2 }), mt.x1.switchModeRejected(t2.id, (function(e3) {
        return `Mode '${e3}' is not supported for subagent mode switches`;
      })(n2)));
    }
    async function An(e2, t2) {
      const r2 = gn(t2.policy), n2 = (function(e3) {
        const t3 = e3.query.case;
        return void 0 === t3 ? "auto-reject" : wn[t3] ?? "auto-reject";
      })(t2.query);
      switch (r2) {
        case Ot.w3.BUBBLE_TO_PARENT:
          return "host-execute" === n2 ? _n(e2, t2.query, t2.correlation) : "bubble-to-parent" !== n2 ? (hn.info(e2, "Subagent interaction query kind does not bubble to parent; auto-rejecting", { childSessionId: t2.correlation.childSessionId, parentToolCallId: t2.correlation.parentToolCallId, queryCase: t2.query.query.case }), yn(t2.query)) : Sn(e2, t2);
        case Ot.w3.SURFACE_TO_USER:
          return "host-execute" === n2 ? _n(e2, t2.query, t2.correlation) : "bubble-to-parent" === n2 ? Sn(e2, t2) : "surface-to-user" === n2 ? void 0 === t2.surfaceToUser ? (hn.info(e2, "SURFACE_TO_USER has no child interaction surface; auto-rejecting", { childSessionId: t2.correlation.childSessionId, parentToolCallId: t2.correlation.parentToolCallId, queryCase: t2.query.query.case }), yn(t2.query)) : t2.surfaceToUser(e2, t2.query, t2.correlation) : (hn.info(e2, "Subagent interaction query kind does not surface to user; auto-rejecting", { childSessionId: t2.correlation.childSessionId, parentToolCallId: t2.correlation.parentToolCallId, queryCase: t2.query.query.case }), yn(t2.query));
        case Ot.w3.AUTO_REJECT:
        case Ot.w3.UNSPECIFIED:
          return yn(t2.query);
        default:
          return r2;
      }
    }
    function Sn(e2, t2) {
      return bn(e2, { ...t2, question: t2.query, kind: t2.query.query.case, reject: (e3) => yn(t2.query, e3) });
    }
    async function bn(e2, t2) {
      const { question: r2, correlation: n2 } = t2;
      if (!(false === t2.parentHasActiveTurn?.())) try {
        return await t2.bubbleToParent(e2, r2, n2);
      } catch (e3) {
        if (!(e3 instanceof mn)) throw e3;
      }
      return void 0 !== t2.surfaceToUser ? (hn.info(e2, "Parent has no active turn; surfacing bubbled subagent interaction on the child channel", { childSessionId: n2.childSessionId, parentToolCallId: n2.parentToolCallId, queryCase: t2.kind }), t2.surfaceToUser(e2, r2, n2)) : (hn.info(e2, "Parent has no active turn and the child has no interaction surface; auto-rejecting bubbled subagent interaction", { childSessionId: n2.childSessionId, parentToolCallId: n2.parentToolCallId, queryCase: t2.kind }), t2.reject("Parent turn is not running, so the subagent's approval could not be shown"));
    }
    function En(e2) {
      return e2.getRootSessionId?.() ?? e2.rootSessionId ?? e2.parentConversationId;
    }
    function In(e2, t2) {
      const r2 = En(t2), n2 = e2.rootParentConversationId?.trim() ?? "", s2 = e2.parentConversationId?.trim() ?? "";
      if (n2 === r2 || n2.length > 0 && n2 !== s2 && n2 !== t2.parentConversationId) return e2;
      const o2 = e2.clone();
      return o2.rootParentConversationId = r2, o2;
    }
    var Cn = r(643);
    const kn = (0, s.h)("agent-host:subagent-spawn-metrics");
    class xn {
      constructor(e2, t2) {
        this.metrics = e2, this.getSurfaceKind = t2, this.pending = /* @__PURE__ */ new WeakMap();
      }
      async createOrResume(e2, t2, r2, n2) {
        const s2 = r2 ? Cn.performance.now() : void 0, o2 = (function(e3) {
          if (e3.resumeAgentId) return "resume";
          return e3.forkAgentId ? "fork" : "create";
        })(t2);
        let i2 = "ok";
        try {
          return await n2();
        } catch (t3) {
          throw i2 = Tn(t3, e2.signal) ? "aborted" : "error", t3;
        } finally {
          void 0 !== s2 && this.completeCreateOrResume(e2, t2, s2, o2, i2);
        }
      }
      async run(e2, t2, r2) {
        try {
          const n2 = await r2(), s2 = this.pending.get(t2);
          return "background" === n2.status && true === s2?.storeInheritanceStarted ? await s2.settled : this.finish(e2, t2, (function(e3) {
            if ("aborted" === e3.status) return "aborted";
            if ("error" === e3.status) return "error";
            return "ok";
          })(n2)), n2;
        } catch (r3) {
          throw this.finish(e2, t2, Tn(r3, e2.signal) ? "aborted" : "error"), r3;
        }
      }
      async recordStoreInheritance(e2, t2, r2) {
        const n2 = this.pending.get(t2);
        void 0 !== n2 && (n2.storeInheritanceStarted = true);
        const s2 = Cn.performance.now(), o2 = await r2();
        return void 0 !== n2 && "ok" === o2 && this.record(e2, { phase: "store_inherit", mode: n2.mode, durationMs: Cn.performance.now() - s2, outcome: o2 }), this.finish(e2, t2, "ok"), o2;
      }
      completeCreateOrResume(e2, t2, r2, s2, o2) {
        if ("ok" === o2 && (0, n.UOG)(t2.prompt)) {
          const e3 = Promise.withResolvers();
          return void this.pending.set(t2, { startedAtMs: r2, mode: s2, settled: e3.promise, settle: e3.resolve, storeInheritanceStarted: false });
        }
        this.record(e2, { phase: "total", mode: s2, durationMs: Cn.performance.now() - r2, outcome: o2 });
      }
      finish(e2, t2, r2) {
        const n2 = this.pending.get(t2);
        void 0 !== n2 && (this.pending.delete(t2), this.record(e2, { phase: "total", mode: n2.mode, durationMs: Cn.performance.now() - n2.startedAtMs, outcome: r2 }), n2.settle());
      }
      record(e2, t2) {
        if (void 0 !== this.metrics) try {
          this.metrics.distribution({ stat: "composer.subagent.localSpawnMs", value: Rn(t2.durationMs), tags: { phase: t2.phase, mode: t2.mode, surface_kind: this.getSurfaceKind(), outcome: t2.outcome, owner: "agent_host" } });
        } catch (t3) {
          kn.warn(e2, "Local subagent spawn metric emission failed", { error: String(t3) });
        }
      }
    }
    function Tn(e2, t2) {
      return t2.aborted || e2 instanceof Error && ("AbortError" === e2.name || "CancellationError" === e2.name);
    }
    function Rn(e2) {
      return Number.isFinite(e2) ? Math.round(Math.min(e2, 18e5)) : 0;
    }
    const Bn = (0, s.h)("agent-host:subagent-store-mounts");
    class Pn {
      constructor(e2) {
        this.options = e2, this.activeRunsByChildId = /* @__PURE__ */ new Map(), this.applyByChildId = /* @__PURE__ */ new Map(), this.mountedChildIds = /* @__PURE__ */ new Set();
      }
      async applyForRun(e2, t2, r2) {
        const n2 = this.activeRunsByChildId.get(t2) ?? 0;
        if (this.activeRunsByChildId.set(t2, n2 + 1), n2 > 0) return await this.applyByChildId.get(t2) ?? "unavailable";
        const s2 = this.options.resolveMounter();
        if (void 0 === s2) return "unavailable";
        const o2 = (async () => {
          try {
            return await s2.applySubagentStoreMounts({ signal: e2.signal, parentStoreId: this.options.resolveParentStoreId(r2), childStoreId: t2 }), this.mountedChildIds.add(t2), "ok";
          } catch (t3) {
            return Bn.warn(e2, "Subagent store-mount apply failed", { error: String(t3) }), (function(e3, t4) {
              return t4.aborted || e3 instanceof Error && ("AbortError" === e3.name || "CancellationError" === e3.name);
            })(t3, e2.signal) ? "aborted" : "error";
          }
        })();
        this.applyByChildId.set(t2, o2);
        try {
          return await o2;
        } finally {
          this.applyByChildId.delete(t2);
        }
      }
      async clearAfterRun(e2, t2) {
        const r2 = this.activeRunsByChildId.get(t2) ?? 0;
        if (r2 > 1) return void this.activeRunsByChildId.set(t2, r2 - 1);
        if (this.activeRunsByChildId.delete(t2), !this.mountedChildIds.delete(t2)) return;
        const n2 = this.options.resolveMounter();
        if (void 0 !== n2) try {
          await n2.clearSubagentStoreMounts({ childStoreId: t2 });
        } catch (t3) {
          Bn.warn(e2, "Subagent store-mount clear failed", { error: String(t3) });
        }
      }
    }
    var Jn = r(51455), Mn = r(76760), qn = r(24804);
    const Dn = (0, s.h)("agent-host:subagent-transcript-writer");
    async function On(e2, t2) {
      await (0, Jn.mkdir)((0, Mn.dirname)(e2), { recursive: true }), await (0, Jn.writeFile)(e2, t2, "utf-8");
    }
    class Nn {
      constructor(e2) {
        this.writeChain = Promise.resolve(), this.conversationId = e2.conversationId;
        const t2 = (t3, r2) => (0, Mn.join)(e2.projectDir, (0, qn.sk)({ conversationId: t3, ext: r2, kind: "subagent", parentConversationId: e2.parentConversationId }));
        this.transcriptPath = t2(e2.conversationId, "jsonl"), this.transcriptStore = new qn.YF(e2.projectDir, e2.blobStore, On, { writeText: false, writeJsonl: true, pathResolver: t2 });
      }
      getTranscriptPath() {
        return this.transcriptPath;
      }
      async ensureTranscriptFile(e2) {
        let t2;
        return await this.enqueueWrite(e2, async () => {
          await (0, Jn.mkdir)((0, Mn.dirname)(this.transcriptPath), { recursive: true }), await (0, Jn.writeFile)(this.transcriptPath, "", { flag: "a" }), t2 = this.transcriptPath;
        }), t2;
      }
      writeFromState(e2, t2) {
        this.enqueueWrite(e2, async () => {
          await this.transcriptStore.writeFromStateFull(e2, t2, this.conversationId);
        });
      }
      writeTurnEnded(e2, t2, r2) {
        return this.enqueueWrite(e2, async () => {
          await this.transcriptStore.writeFromStateFull(e2, t2, this.conversationId, { turnEnded: r2 });
        });
      }
      waitForPendingWrites() {
        return this.writeChain;
      }
      enqueueWrite(e2, t2) {
        return this.writeChain = this.writeChain.then(async () => {
          try {
            await t2();
          } catch (t3) {
            Dn.warn(e2, "Subagent transcript write failed", { conversationId: this.conversationId, error: String(t3) });
          }
        }), this.writeChain;
      }
    }
    const Fn = (0, s.h)("agent-host:subagent-host-adapter");
    class Un {
      constructor(e2) {
        this.options = e2, this.sessions = /* @__PURE__ */ new Map(), this.hostedChildByIdentity = /* @__PURE__ */ new Map(), this.mintInFlightByIdentity = /* @__PURE__ */ new Map(), this.backgroundRuns = /* @__PURE__ */ new Map(), this.backgroundPromises = /* @__PURE__ */ new Set(), this.interruptedBackgroundRunKeys = /* @__PURE__ */ new Set(), this.activeForegroundExecutions = /* @__PURE__ */ new Map(), this.pendingForegroundBackgroundToolCallIds = /* @__PURE__ */ new Set(), this.lifecycleStore = new n.VMj(), this.storeMounts = new Pn({ resolveMounter: () => (this.options.resolveLocalSubagentStoreMounter ?? nn.ux)(), resolveParentStoreId: (e3) => e3.parentConversationId?.trim() || this.options.parentConversationId }), this.childCompletions = new cn({ isTrackedSpawner: (e3) => this.sessions.has(e3) || this.ownSessionCollectEnabled && e3 === this.options.parentConversationId }), this.ownSessionCollectEnabled = false, this.fallbackLocalRunSlots = new rt(), this.turnAbortRequestedAgentIds = /* @__PURE__ */ new Set(), this.localSpawnMetrics = new xn(e2.metrics, () => e2.getLocalSubagentSpawnSurfaceKind?.() ?? "agent"), this.durableInvocations = new on({ enabled: true === e2.subagentsAsSessions, parentSessionId: e2.parentConversationId, rootSessionId: e2.rootSessionId ?? e2.parentConversationId, ...void 0 === e2.getRootSessionId ? {} : { getRootSessionId: e2.getRootSessionId }, store: e2.durableSubagentInvocations, ...void 0 === e2.findExistingChildSessionId ? {} : { findExistingChildSessionId: e2.findExistingChildSessionId }, isValidChildSessionId: (e3) => yt.test(e3) });
      }
      getOwnSessionChildCollectControl() {
        return { enableCollect: () => {
          this.ownSessionCollectEnabled = true;
        }, collectAvailableChildCompletions: (e2) => this.childCompletions.collectAvailableChildCompletions(this.options.parentConversationId, e2), cleanup: () => {
          this.ownSessionCollectEnabled = false, this.childCompletions.cleanupChildCompletionState(this.options.parentConversationId);
        } };
      }
      tryAcquireLocalRunSlot() {
        return (this.options.getLocalRunSlots?.() ?? this.fallbackLocalRunSlots).tryAcquire(At(this.options.localSubagentLimits?.maxRunning, 32));
      }
      async createOrResumeSession(e2, t2) {
        const r2 = St(t2.environment);
        return _t(t2), this.localSpawnMetrics.createOrResume(e2, t2, "local" === r2 && !Yr(t2), async () => {
          const n2 = t2.forkAgentId?.trim() ?? "";
          if (this.durableInvocations.clearReplayForExplicitContinuation(t2), t2.resumeAgentId && n2) throw new Error("Cannot set both resumeAgentId and forkAgentId for the same subagent request.");
          if ("cloud" === r2) {
            const r3 = this.requireCloudSubagentRunner(), n3 = Bt(t2);
            n3 || this.throwIfFollowupTargetsBusyRun(t2);
            const s3 = In(t2, this.options), o3 = await r3.createOrResumeCloudSubagent(e2, s3);
            return n3 && this.detachBusyCloudRunForInterrupt(t2), true === r3.ownsCloudChildLifecycle && this.options.emitSubagentStarted?.({ turnId: this.options.getParentActiveTurnId?.()?.trim() || "", parentToolCallId: t2.toolCallId.trim(), childSessionId: o3, rootSessionId: s3.rootParentConversationId?.trim() || En(this.options) }), o3;
          }
          if (n2 && (n2 !== (t2.parentConversationId?.trim() ?? "") || n2 !== this.options.parentConversationId)) throw new Error("Forking an existing child is not supported in headless subagents; only self-forking the running parent is supported.");
          if (n2 && true !== this.options.subagentsAsSessions) throw new Error("Self-forking requires subagentsAsSessions in headless subagents.");
          const s2 = It(t2), o2 = void 0 === s2 ? void 0 : this.mintInFlightByIdentity.get(s2);
          if (void 0 !== o2) return await o2;
          const i2 = void 0 === s2 ? void 0 : this.hostedChildByIdentity.get(s2), a2 = await this.durableInvocations.findIndexedReplayChild(t2, void 0 !== i2 && this.sessions.has(i2)), c2 = i2 ?? (0, x.randomUUID)(), l2 = await this.durableInvocations.claim({ args: t2, proposedChildSessionId: c2, ...void 0 === a2 ? {} : { indexedChildSessionId: a2 } }), u2 = l2?.claimedChildSessionId;
          let d2 = l2?.replayResumeAgentId;
          void 0 === l2 && (d2 = a2), void 0 !== d2 && (t2 = new ft.Pw({ ...t2, resumeAgentId: d2 }), this.durableInvocations.rememberVerifiedReplayChild(d2));
          const p2 = t2.resumeAgentId;
          if (p2 && (function(e3) {
            if (!yt.test(e3)) throw new Error(`Invalid resumeAgentId format: ${e3}`);
          })(p2), p2 && !t2.prompt) return p2;
          if (void 0 === d2 && (Bt(t2) ? await this.interruptBusyLocalBackgroundRun(t2) : this.throwIfFollowupTargetsBusyRun(t2)), p2 && this.sessions.has(p2)) return p2;
          if (true === this.options.subagentsAsSessions) {
            const r3 = void 0 !== p2 && void 0 === d2 && void 0 === u2;
            return this.createOrResumeHostedChildSession(e2, t2, p2, u2, r3);
          }
          const m2 = p2 ?? (0, x.randomUUID)(), h2 = Vr(m2), f2 = this.createTranscriptWriter(m2, h2, t2);
          return this.sessions.set(m2, { store: h2, toolCallId: t2.toolCallId, ...void 0 === f2 ? {} : { transcriptWriter: f2 } }), this.childCompletions.registerParentChildLink(m2, t2.parentConversationId), m2;
        });
      }
      createTranscriptWriter(e2, t2, r2) {
        return (function(e3) {
          const t3 = e3.spec;
          if (void 0 === t3) return;
          const r3 = "function" == typeof t3.projectDir ? t3.projectDir() : t3.projectDir;
          return r3 ? new Nn({ projectDir: r3, conversationId: e3.conversationId, parentConversationId: e3.parentConversationId, blobStore: e3.blobStore }) : void 0;
        })({ spec: this.options.subagentTranscripts, conversationId: e2, parentConversationId: r2.parentConversationId?.trim() || this.options.parentConversationId, blobStore: t2.getBlobStore() });
      }
      async createOrResumeHostedChildSession(e2, t2, r2, n2, s2) {
        const o2 = It(t2);
        if (void 0 !== o2) {
          const i3 = this.hostedChildByIdentity.get(o2);
          if (void 0 !== i3 && this.sessions.has(i3)) return i3;
          const a2 = this.mintInFlightByIdentity.get(o2);
          if (void 0 !== a2) return a2;
          const c2 = (async () => {
            const i4 = n2 ?? r2 ?? this.hostedChildByIdentity.get(o2) ?? (0, x.randomUUID)();
            return this.sessions.has(i4) ? this.hostedChildByIdentity.set(o2, i4) : await this.mintHostedChildSession(e2, i4, t2, s2), i4;
          })();
          this.mintInFlightByIdentity.set(o2, c2);
          try {
            return await c2;
          } finally {
            this.mintInFlightByIdentity.get(o2) === c2 && this.mintInFlightByIdentity.delete(o2);
          }
        }
        const i2 = n2 ?? r2 ?? (0, x.randomUUID)();
        return this.sessions.has(i2) || await this.mintHostedChildSession(e2, i2, t2, s2), i2;
      }
      async mintHostedChildSession(e2, t2, r2, n2) {
        const s2 = this.options.createChildSession;
        if (void 0 === s2) throw new Error("subagentsAsSessions requires createChildSession to be configured");
        const o2 = En(this.options), i2 = r2.toolCallId.trim(), a2 = (function(e3) {
          if (void 0 !== e3) return { interactionPolicy: gn(e3) };
        })(this.options.childInteractionPolicy), c2 = (r2.forkAgentId?.trim() ?? "").length > 0, l2 = this.options.getLatestParentCheckpoint, u2 = this.options.getParentBlobStore;
        let d2;
        if (c2 && void 0 === l2) throw new Error("Self-forking requires getLatestParentCheckpoint to be configured.");
        if (c2 && void 0 !== l2 && (d2 = l2().clone()), c2 && void 0 === u2) throw new Error("Self-forking requires getParentBlobStore to be configured.");
        const p2 = this.durableInvocations.takeVerifiedReplayChild(t2), m2 = await s2(e2, { sessionId: t2, ...void 0 === d2 ? {} : { initialHistory: d2 }, ...void 0 === a2 ? {} : { sessionOptions: a2 } }, { parent: { parentSessionId: this.options.parentConversationId, parentToolCallId: i2, rootSessionId: o2 }, ...p2 ? { adoptVerifiedDurableChild: true } : {}, ...n2 ? { requireExistingChild: true } : {} }, c2 ? u2?.() : void 0), h2 = gn(m2.interactionPolicy ?? this.options.childInteractionPolicy), f2 = this.createTranscriptWriter(t2, m2.store, r2);
        this.sessions.set(t2, { store: m2.store, toolCallId: r2.toolCallId, hosted: { interactionListener: m2.interactionListener, appendConversationState: m2.appendConversationState, beginBlobReadSummary: m2.beginBlobReadSummary, appendTurnStarted: m2.appendTurnStarted, appendTurnCompleted: m2.appendTurnCompleted, appendTurnSettledByError: m2.appendTurnSettledByError, appendTurnCancelled: m2.appendTurnCancelled, appendTurnInteractionsSuperseded: m2.appendTurnInteractionsSuperseded, setActiveTurnId: m2.setActiveTurnId, interactionPolicy: h2, subagentExecutor: m2.subagentExecutor, subagentAwaitExecutor: m2.subagentAwaitExecutor, forceBackgroundSubagentExecutor: m2.forceBackgroundSubagentExecutor, subagentCollectControl: m2.subagentCollectControl, ...void 0 === m2.surfaceInteraction ? {} : { surfaceInteraction: m2.surfaceInteraction }, ...void 0 === m2.surfaceHostQuestion ? {} : { surfaceHostQuestion: m2.surfaceHostQuestion } }, ...void 0 === f2 ? {} : { transcriptWriter: f2 } }), this.childCompletions.registerParentChildLink(t2, r2.parentConversationId);
        const g2 = It(r2);
        void 0 !== g2 && this.hostedChildByIdentity.set(g2, t2), this.options.emitSubagentStarted?.({ turnId: this.options.getParentActiveTurnId?.()?.trim() || "", parentToolCallId: i2, childSessionId: t2, rootSessionId: o2 });
      }
      async runSession(e2, t2, r2, n2) {
        return this.localSpawnMetrics.run(e2, r2, () => this.durableInvocations.runOnce(r2, () => this.runSessionOnce(e2, t2, r2, n2)));
      }
      async runSessionOnce(e2, t2, r2, s2) {
        _t(r2);
        const o2 = St(r2.environment);
        if ("local" === o2 && Yr(r2)) return Zr(this, r2.resumeAgentId, e2);
        if ("local" === o2) {
          const e3 = this.durableInvocations.completedOutcome({ parentToolCallId: r2.toolCallId, childSessionId: t2 });
          if (void 0 !== e3) return e3;
        }
        let i2;
        if ("cloud" === o2) {
          const e3 = this.requireCloudSubagentRunner();
          i2 = (n2) => e3.runCloudSubagent(n2, t2, In(r2, this.options));
        } else {
          const e3 = this.sessions.get(t2);
          if (!e3) return { status: "error", error: `Subagent session not found: ${t2}` };
          let s3;
          if ((0, n.UOG)(r2.prompt) && (s3 = this.tryAcquireLocalRunSlot(), void 0 === s3)) return { status: "error", error: (0, n.QCH)({ maxRunning: At(this.options.localSubagentLimits?.maxRunning, 32) }) };
          const o3 = s3;
          i2 = async (n2) => {
            try {
              const s4 = this.options.getParentEffectiveMaxMode?.(r2.parentConversationId?.trim() || this.options.parentConversationId);
              return await this.executeSubagent(n2, t2, r2, { ...e3, parentMaxMode: s4 });
            } catch (e4) {
              return n2.signal.aborted ? { status: "aborted", error: "Subagent was aborted" } : { status: "error", error: e4 instanceof Error ? e4.message : String(e4) };
            } finally {
              o3?.();
            }
          };
        }
        if (r2.runInBackground) {
          const [s3, o3] = e2.withDetached().withCancel(), a3 = this.registerBackgroundRun(t2, i2(s3), r2, o3), c3 = await this.ensureBackgroundTranscriptPath(e2, t2);
          a3.transcriptPath = c3;
          const l3 = { status: "background", backgroundReason: n.qLf.AGENT_REQUEST, ...void 0 === c3 ? {} : { transcriptPath: c3 }, toolCallCount: 0 };
          return await this.durableInvocations.markCompleted(r2, t2, l3), l3;
        }
        const [a2, c2] = e2.withDetached().withCancel();
        let l2 = false;
        const u2 = () => {
          l2 || c2();
        };
        e2.signal.addEventListener("abort", u2, { once: true }), e2.signal.aborted && u2();
        const d2 = i2(a2), p2 = Promise.withResolvers(), m2 = r2.toolCallId.trim(), h2 = () => {
          this.options.cancelBubbledInteractionToParent?.({ childSessionId: t2, parentToolCallId: m2 }, "Subagent force-backgrounded; cancelling pending bubbled interaction");
        }, f2 = { requestBackground: () => (l2 || (l2 = true, h2(), e2.signal.removeEventListener("abort", u2), p2.resolve()), true) };
        m2 && this.activeForegroundExecutions.set(m2, f2), this.activeForegroundExecutions.set(t2, f2);
        const g2 = !!m2 && this.pendingForegroundBackgroundToolCallIds.delete(m2), y2 = this.pendingForegroundBackgroundToolCallIds.delete(t2);
        (g2 || y2) && f2.requestBackground();
        try {
          const s3 = await Promise.race([d2.then((e3) => ({ case: "completed", outcome: e3 })), p2.promise.then(() => ({ case: "backgrounded" }))]);
          if ("backgrounded" === s3.case) {
            h2();
            const s4 = a2.signal.aborted || this.turnAbortRequestedAgentIds.has(t2) ? void 0 : this.registerBackgroundRun(t2, d2, r2, c2);
            void 0 === s4 && this.childCompletions.removeParentChildLink(t2);
            const o3 = await this.ensureBackgroundTranscriptPath(e2, t2);
            void 0 !== s4 && (s4.transcriptPath = o3);
            const i3 = { status: "background", backgroundReason: n.qLf.USER_REQUEST, ...void 0 === o3 ? {} : { transcriptPath: o3 }, toolCallCount: 0 };
            return await this.durableInvocations.markCompleted(r2, t2, i3), i3;
          }
          return this.childCompletions.removeParentChildLink(t2), await this.durableInvocations.markCompleted(r2, t2, s3.outcome), s3.outcome;
        } finally {
          m2 && this.activeForegroundExecutions.get(m2) === f2 && this.activeForegroundExecutions.delete(m2), this.activeForegroundExecutions.get(t2) === f2 && this.activeForegroundExecutions.delete(t2), l2 || e2.signal.removeEventListener("abort", u2);
        }
      }
      async ensureBackgroundTranscriptPath(e2, t2) {
        return this.sessions.get(t2)?.transcriptWriter?.ensureTranscriptFile(e2);
      }
      releaseSession(e2) {
        if (this.lifecycleStore.release(e2), this.isBackgroundRunBusy(e2)) return void this.childCompletions.deferCleanup(e2);
        this.childCompletions.cleanupChildCompletionState(e2), this.sessions.get(e2)?.hosted?.subagentCollectControl?.cleanup();
        const t2 = this.sessions.get(e2);
        void 0 === t2?.hosted && this.sessions.delete(e2);
      }
      async forceBackgroundByToolCallId(e2) {
        const t2 = e2.trim();
        if (!t2) return new ft.a3({ status: ft.jh.NOT_FOUND });
        const r2 = this.activeForegroundExecutions.get(t2);
        let n2;
        if (r2) n2 = r2.requestBackground() ? ft.jh.ACCEPTED : ft.jh.NOT_FOUND;
        else {
          if (this.pendingForegroundBackgroundToolCallIds.size >= 100) {
            const e3 = this.pendingForegroundBackgroundToolCallIds.values().next().value;
            void 0 !== e3 && this.pendingForegroundBackgroundToolCallIds.delete(e3);
          }
          this.pendingForegroundBackgroundToolCallIds.add(t2), n2 = ft.jh.ACCEPTED;
        }
        return new ft.a3({ status: n2 });
      }
      isBackgroundRunBusy(e2) {
        return this.lifecycleStore.isBusy(e2) || this.backgroundRuns.has(e2);
      }
      getTrackedBackgroundRun(e2) {
        return this.backgroundRuns.get(e2);
      }
      throwIfFollowupTargetsBusyRun(e2) {
        if (Rt(e2) && this.isBackgroundRunBusy(e2.resumeAgentId)) throw new Error(n.y7k);
      }
      async interruptBusyLocalBackgroundRun(e2) {
        const t2 = e2.resumeAgentId, r2 = t2 ? this.backgroundRuns.get(t2) : void 0;
        t2 && void 0 !== r2 ? (this.interruptedBackgroundRunKeys.add(Ct(t2, r2.runId)), this.lifecycleStore.abort(t2), await r2.promise) : this.throwIfFollowupTargetsBusyRun(e2);
      }
      detachBusyCloudRunForInterrupt(e2) {
        const t2 = e2.resumeAgentId, r2 = t2 ? this.backgroundRuns.get(t2) : void 0;
        t2 && void 0 !== r2 && (this.backgroundRuns.delete(t2), this.lifecycleStore.finishRun(t2, r2.runId));
      }
      requireCloudSubagentRunner() {
        if (void 0 !== this.options.getParentToolRestriction?.()) throw new Error("A turn that restricts its tools cannot start a cloud subagent.");
        const e2 = this.options.cloudSubagentsUnavailableReason?.();
        if (void 0 !== e2) throw new Error(e2);
        if (void 0 === this.options.cloudSubagentRunner) throw new Error("Cloud subagent runner is not available.");
        return this.options.cloudSubagentRunner;
      }
      registerBackgroundRun(e2, t2, r2, s2) {
        const o2 = (function(e3, t3) {
          const r3 = e3.prompt?.trim();
          if (r3) {
            const e4 = r3.indexOf("\n");
            return (-1 === e4 ? r3 : r3.slice(0, e4)).slice(0, 80);
          }
          return `Subagent ${t3.slice(0, 8)}`;
        })(r2, e2), i2 = "cloud" !== St(r2.environment), a2 = this.lifecycleStore.startRun(e2, { abort: s2 }), c2 = t2.catch((e3) => ({ status: "error", error: e3 instanceof Error ? e3.message : String(e3) })), l2 = { runId: a2, promise: c2 };
        return this.backgroundRuns.set(e2, l2), this.backgroundPromises.add(c2), i2 && (this.childCompletions.registerParentChildLink(e2, r2.parentConversationId), this.options.backgroundWorkRegistry.upsertWork({ id: e2, kind: "subagent", state: "running", ownerId: this.options.parentConversationId, abort: s2, metadata: (0, n.zyy)({ title: o2, startTimeMs: Date.now() }) })), c2.then((t3) => {
          this.lifecycleStore.finishRun(e2, a2);
          const n2 = this.interruptedBackgroundRunKeys.delete(Ct(e2, a2)), s3 = this.backgroundRuns.get(e2);
          if (s3?.runId === a2) {
            if (this.backgroundRuns.delete(e2), i2) {
              if (!n2) {
                this.childCompletions.enqueueChildCompletion(e2, t3) || this.options.backgroundWorkRegistry.enqueue({ conversationId: this.options.parentConversationId, id: e2, source: "subagent", payload: { taskId: e2, toolCallId: r2.toolCallId || void 0, kind: "subagent", status: bt(t3), title: o2, detail: Et(t3), reason: "task_finished" } });
              }
              this.options.backgroundWorkRegistry.clearWork(e2);
            }
            this.maybeCleanupReleasedChildCompletionState(e2);
          }
          return t3;
        }).finally(() => this.backgroundPromises.delete(c2)), l2;
      }
      async executeSubagent(e2, t2, r2, s2) {
        if (!(0, n.UOG)(r2.prompt)) return { status: "completed", toolCallCount: 0 };
        await this.localSpawnMetrics.recordStoreInheritance(e2, r2, () => this.storeMounts.applyForRun(e2, t2, r2));
        try {
          const n2 = await (async function(e3, t3, r3) {
            return new ft.Pw({ ...t3, prompt: await xt({ ctx: e3, args: t3, resolveRequiredGlobalCommands: r3.resolveRequiredGlobalCommands, parentConversationId: r3.parentConversationId, rootSessionId: r3.rootSessionId }) });
          })(e2, r2, { ...this.options, rootSessionId: En(this.options) });
          return n2.continuationConfig ? await (async function(e3, t3, r3, n3, s3) {
            const o2 = n3.collectBackgroundChildren ? s3.hostedCollectControl : void 0;
            o2?.enableCollect();
            try {
              const i2 = n3.maxLoops > 0 ? n3.maxLoops : Number.POSITIVE_INFINITY;
              let a2 = await ln(e3, t3, r3, n3, i2, s3);
              if (!n3.collectBackgroundChildren || "completed" !== a2.status) return a2;
              const c2 = 500;
              for (let l2 = 0; l2 < c2; l2++) {
                if (e3.signal.aborted) return { status: "aborted", error: "Subagent was aborted" };
                let c3;
                try {
                  c3 = void 0 !== o2 ? await o2.collectAvailableChildCompletions(e3.signal) : await s3.collectAvailableChildCompletions(e3.signal);
                } catch {
                  return { status: "aborted", error: "Subagent was aborted" };
                }
                if (0 === c3.length) return a2;
                const l3 = Tt([...c3], n3.childrenCompletedMessageTemplate);
                if (a2 = await ln(e3, t3, new ft.Pw({ ...r3, prompt: l3, resumeAgentId: t3, runInBackground: false }), n3, i2, s3), "completed" !== a2.status) return a2;
              }
              return a2;
            } finally {
              o2?.cleanup();
            }
          })(e2, t2, n2, n2.continuationConfig, { runTurn: (e3, r3) => this.executeSubagentTurn(e3, t2, r3, s2), collectAvailableChildCompletions: (e3) => this.childCompletions.collectAvailableChildCompletions(t2, e3), ...void 0 === s2.hosted?.subagentCollectControl ? {} : { hostedCollectControl: s2.hosted.subagentCollectControl } }) : await this.executeSubagentTurn(e2, t2, n2, s2);
        } finally {
          await this.storeMounts.clearAfterRun(e2, t2);
        }
      }
      async executeSubagentTurn(e2, t2, r2, s2) {
        const o2 = new n.nRD();
        let a2 = 0, c2 = n.yWW, l2 = 0;
        const u2 = s2.hosted, d2 = { sendUpdate: async (e3, n2) => {
          o2.onUpdate(n2), "toolCallStarted" === n2.message.case && (a2 += 1), void 0 !== u2 && await u2.interactionListener.sendUpdate(e3, n2), void 0 !== this.options.onInteractionUpdate && await this.options.onInteractionUpdate(t2, n2, r2.toolCallId || void 0);
        }, query: async (e3, n2) => void 0 === u2 ? (function(e4) {
          const t3 = e4.query.case;
          switch (t3) {
            case "webSearchRequestQuery":
              return mt.x1.webSearchRejected(e4.id, "Web search is not supported in headless subagent");
            case "webFetchRequestQuery":
              return mt.x1.webFetchRejected(e4.id, "Web fetch is not supported in headless subagent");
            case "switchModeRequestQuery":
              return mt.x1.switchModeRejected(e4.id, "Subagent mode switches are not supported in headless mode");
            case "askQuestionInteractionQuery": {
              const t4 = new ht.tz({ result: { case: "rejected", value: new ht.ox({ reason: "Interactive questions are not supported in headless subagent mode" }) } });
              return mt.x1.askQuestion(e4.id, t4);
            }
            default:
              throw new Error(`Unhandled interaction query type in headless subagent: ${String(t3)}`);
          }
        })(n2) : An(e3, { policy: u2.interactionPolicy, query: n2, correlation: { childSessionId: t2, parentToolCallId: r2.toolCallId.trim() }, bubbleToParent: (e4, t3, r3) => {
          const n3 = this.options.bubbleInteractionToParent;
          if (void 0 === n3) throw new Error("BUBBLE_TO_PARENT requires bubbleInteractionToParent to be configured");
          return n3(e4, t3, r3);
        }, ...void 0 === this.options.getParentActiveTurnId ? {} : { parentHasActiveTurn: () => "" !== (this.options.getParentActiveTurnId?.()?.trim() ?? "") }, ...void 0 === u2.surfaceInteraction ? {} : { surfaceToUser: u2.surfaceInteraction } }) }, p2 = this.options.getResources({ agentId: t2, parentAgentId: r2.parentConversationId, askHostQuestion: (e3, n2) => void 0 === u2 ? Promise.resolve((0, sn.sJ)(n2, fn)) : (async function(e4, t3) {
          return bn(e4, { ...t3, kind: t3.question.case, reject: (e5) => (0, sn.sJ)(t3.question, e5) });
        })(e3, { question: n2, correlation: { childSessionId: t2, parentToolCallId: r2.toolCallId.trim() }, bubbleToParent: (e4, t3, r3) => {
          const n3 = this.options.bubbleHostQuestionToParent;
          if (void 0 === n3) throw new Error("Bubbling a Host question requires bubbleHostQuestionToParent");
          return n3(e4, t3, r3);
        }, ...void 0 === this.options.getParentActiveTurnId ? {} : { parentHasActiveTurn: () => "" !== (this.options.getParentActiveTurnId?.()?.trim() ?? "") }, ...void 0 === u2.surfaceHostQuestion ? {} : { surfaceToUser: u2.surfaceHostQuestion } }), ...void 0 === u2?.subagentExecutor ? {} : { childSubagentExecutor: u2.subagentExecutor }, ...void 0 === u2?.subagentAwaitExecutor ? {} : { childSubagentAwaitExecutor: u2.subagentAwaitExecutor }, ...void 0 === u2?.forceBackgroundSubagentExecutor ? {} : { childForceBackgroundSubagentExecutor: u2.forceBackgroundSubagentExecutor } }), m2 = this.options.getParentRequestContext?.(), h2 = void 0 === m2 ? void 0 : Ur(m2), f2 = this.options.getParentRequestContextDecoration?.();
        void 0 !== h2 && (0, Gr.P7)(h2, f2);
        const g2 = (0, Gr.DS)($r(p2, h2), f2), y2 = r2.readonly ? (0, n.uaw)(g2) : g2, w2 = await this.durableInvocations.createConversationAction(r2, t2, s2.store.getConversationState(), (function(e3) {
          return e3.resumeAgentId && e3.mode === gt.FL.UNSPECIFIED && !e3.readonly ? le.xyI.UNSPECIFIED : e3.mode === gt.FL.PLAN ? le.xyI.PLAN : e3.readonly ? le.xyI.ASK : le.xyI.AGENT;
        })(r2)), v2 = this.options.getParentRetryStallSettings?.(), _2 = this.options.getParentSubagentModelSettings?.(), A2 = this.options.getParentBlobEncryptionKey?.(), S2 = this.options.getParentClientTurnSettings?.(), b2 = this.options.getParentTurnLineage?.(), E2 = (function(e3, t3, r3) {
          const n2 = (0, j.RE)(e3) ?? r3?.requestId;
          return { subagentTypeName: t3.subagentType || void 0, parentAgentToolCallId: t3.toolCallId || void 0, directMetaParentChildSubagent: true === t3.directMetaParentChildSubagent, parentRequestId: n2, rootParentRequestId: (0, j.nH)(e3) ?? r3?.rootParentRequestId ?? n2 };
        })(e2, r2, b2), I2 = this.options.getParentToolRestriction?.(), C2 = this.options.getParentCustomSubagents?.(), k2 = this.options.getParentProjectFolder?.();
        void 0 !== h2 && Lr(h2, C2, k2), await (async function(e3) {
          const { ctx: t3, action: r3, resources: s3, notesSessionId: o3, parentRequestContext: a3, parentCustomSubagents: c3, parentProjectFolder: l3 } = e3, u3 = (0, i.tK)(r3);
          if (void 0 === u3 || void 0 !== u3.requestContext) return;
          const d3 = { childSessionId: o3, actionCase: r3.action.case, usedParentRequestContext: void 0 !== a3 };
          try {
            let e4;
            if (void 0 !== a3) e4 = Ur(a3);
            else {
              const r4 = s3.get(n.MZM);
              if (void 0 === r4) return void Fr.warn(t3, "Hosted child turn runs without request context: executor missing", d3);
              const i2 = await r4.execute(t3, new Mr._K({ notesSessionId: o3 }));
              if (e4 = "success" === i2.result.case ? i2.result.value.requestContext : void 0, void 0 === e4) return void Fr.warn(t3, "Hosted child turn runs without request context: executor returned none", { ...d3, resultCase: i2.result.case });
            }
            Lr(e4, c3, l3), u3.requestContext = e4;
          } catch (e4) {
            Fr.warn(t3, "Hosted child turn runs without request context: fetch failed", { ...d3, error: String(e4) });
          }
        })({ ctx: e2, action: w2, resources: y2, notesSessionId: t2, ...void 0 === h2 ? {} : { parentRequestContext: h2 }, ...void 0 === C2 ? {} : { parentCustomSubagents: C2 }, ...void 0 === k2 ? {} : { parentProjectFolder: k2 } });
        const T2 = this.options.getParentRequestContextBlobTransportSettings?.(), { requestedModel: R2, modelDetails: B2, lastTurnModel: P2 } = await Dt({ ctx: e2, subagentArgs: r2, parentMaxMode: s2.parentMaxMode, retrySettings: v2, requestContextBlobTransport: T2, ...void 0 === _2 ? {} : { subagentModelSettings: _2 }, ...void 0 === A2 ? {} : { blobEncryptionKey: A2 }, ...void 0 === S2 ? {} : { clientTurnSettings: S2 }, ...void 0 === I2 ? {} : { toolRestriction: I2 }, ...void 0 === C2 ? {} : { customSubagents: C2 }, ...void 0 === k2 ? {} : { projectFolder: k2 }, ...void 0 === h2 ? {} : { requestContext: h2 }, ...void 0 === f2?.smartModeClassifierAutoModeEnabled ? {} : { subagentSmartModeAutoRun: f2.smartModeClassifierAutoModeEnabled }, resolveSavedModelParameters: this.options.resolveSavedModelParameters, parentConversationId: this.options.parentConversationId, rootSessionId: En(this.options) }), J2 = void 0 === u2 ? void 0 : (0, x.randomUUID)(), M2 = J2 ?? (0, x.randomUUID)(), q2 = { ...P2, requestId: M2, ...void 0 === E2.parentRequestId ? {} : { parentRequestId: E2.parentRequestId }, ...void 0 === E2.rootParentRequestId ? {} : { rootParentRequestId: E2.rootParentRequestId } }, D2 = new dn({ ctx: e2, onAbortRequested: () => this.turnAbortRequestedAgentIds.add(t2) }), O2 = (t3) => {
          if (void 0 !== u2 && void 0 !== J2 && D2.claimSettle()) try {
            t3(u2, J2);
          } catch (t4) {
            Fn.warn(e2, "Hosted child turn settle append failed", { turnId: J2, error: String(t4) });
          }
        }, N2 = () => {
          const e3 = r2.toolCallId.trim();
          e3 && this.options.cancelBubbledInteractionToParent?.({ childSessionId: t2, parentToolCallId: e3 }, "Subagent was aborted; cancelling pending bubbled interaction");
        };
        let F2 = false;
        const U2 = (t3) => s2.transcriptWriter?.writeTurnEnded(e2, s2.store.getConversationState(), t3);
        try {
          void 0 !== u2 && void 0 !== J2 && (u2.appendTurnStarted(J2, (function(e4, t3) {
            return void 0 === t3 ? e4 : { ...e4, requestContextDecoration: t3 };
          })(q2, f2), D2.abortTurn), u2.setActiveTurnId(J2));
          const e3 = u2?.beginBlobReadSummary(D2.turnCtx) ?? { ctx: D2.turnCtx, finish: () => {
          } };
          try {
            const i2 = G(e3.ctx, { requestId: M2, parentRequestId: E2.parentRequestId, rootParentRequestId: E2.rootParentRequestId });
            await Wr({ ctx: i2, adapter: this.options.adapter, conversationState: s2.store.getConversationState(), action: w2, interactionListener: d2, resources: y2, blobStore: s2.store.getBlobStore(), checkpointHandler: { handleCheckpoint: async (e4, n2, i3) => {
              c2 = o2.snapshot(), l2 = a2, "ineligible_terminal_turn" === i3?.resumeEligibility && (F2 = true), await s2.store.handleCheckpoint(e4, n2), await this.durableInvocations.markCheckpointed(r2, t2), u2?.appendConversationState((0, ur.ks)(n2)), s2.transcriptWriter?.writeFromState(e4, n2);
            }, getLatestCheckpoint: () => s2.store.getConversationState() }, runOptions: { conversationId: t2, conversationGroupId: En(this.options), generationUUID: M2, ...E2, selectedSubagentModels: [..._2?.selectedSubagentModels ?? []], subagentModelOverrides: [..._2?.subagentModelOverrides ?? []], enableAgentRetries: v2?.enableAgentRetries ?? false, fixedRetryDelayMs: v2?.fixedRetryDelayMs, endlessRetries: v2?.endlessRetries, stallDetectorConfig: v2?.stallDetectorConfig, isRunningInTest: v2?.isRunningInTest, ...T2, headers: (0, pt.Pb)(S2?.headers, (0, pt.jz)(A2)), maxSteps: S2?.maxSteps, canCreateCloudSubagents: S2?.canCreateCloudSubagents, localLoopGateEnabled: S2?.localLoopGateEnabled, startedAsNewProject: S2?.startedAsNewProject, firstProjectOnboarding: S2?.firstProjectOnboarding, harness: S2?.harness, suggestNextPrompt: S2?.suggestNextPrompt, clientSupportsInlineImages: S2?.clientSupportsInlineImages, clientSupportsPreviewCard: S2?.clientSupportsPreviewCard, clientSupportsSendToUser: S2?.clientSupportsSendToUser, clientSupportsRoutedModelUpdate: S2?.clientSupportsRoutedModelUpdate, toolRestriction: I2, ...void 0 === C2 ? {} : { customSubagents: [...C2] }, ...void 0 === k2 ? {} : { projectFolder: k2 }, onRetryStarting: async (e4, t3) => {
              t3.isResume ? (o2.restore(c2), a2 = l2) : (o2.restore(n.yWW), a2 = 0, c2 = n.yWW, l2 = 0), void 0 !== u2 && void 0 !== J2 && u2.appendTurnInteractionsSuperseded(J2, t3.isResume ? { case: "resumeFromCheckpoint", value: t3.conversationState } : { case: "replayActionFromState", value: t3.conversationState });
            }, ...void 0 === R2 ? {} : { requestedModel: R2 } }, modelDetails: B2, conversationActionManager: D2.conversationActionManager });
          } finally {
            e3.finish();
          }
          return D2.isAborted() ? (O2((e4, t3) => e4.appendTurnCancelled(t3, D2.abortReason ?? "Subagent was aborted", D2.abortInitiatedBy)), N2(), await U2({ status: "aborted" }), { status: "aborted", error: "Subagent was aborted" }) : (O2((e4, t3) => e4.appendTurnCompleted(t3)), await U2({ status: "success" }), { status: "completed", finalMessage: o2.finalize(), toolCallCount: a2 });
        } catch (e3) {
          return D2.isAborted() ? (O2((t3, r3) => t3.appendTurnCancelled(r3, D2.abortReason ?? (e3 instanceof Error ? e3.message : "Subagent was aborted"), D2.abortInitiatedBy)), N2(), await U2({ status: "aborted" }), { status: "aborted", error: "Subagent was aborted" }) : F2 ? (o2.restore(c2), a2 = l2, O2((e4, t3) => e4.appendTurnCompleted(t3)), await U2({ status: "success" }), { status: "completed", finalMessage: o2.finalize(), toolCallCount: a2 }) : (O2((t3, r3) => t3.appendTurnSettledByError(r3, e3)), await U2({ status: "error", error: e3 instanceof Error ? e3.message : String(e3) }), { status: "error", error: e3 instanceof Error ? e3.message : String(e3) });
        } finally {
          if (D2.dispose(), this.turnAbortRequestedAgentIds.delete(t2), void 0 !== u2 && void 0 !== J2) try {
            u2.setActiveTurnId(void 0);
          } catch (t3) {
            Fn.warn(e2, "Clearing hosted child active turn failed", { turnId: J2, error: String(t3) });
          }
        }
      }
      maybeCleanupReleasedChildCompletionState(e2) {
        this.childCompletions.hasDeferredCleanup(e2) && !this.isBackgroundRunBusy(e2) && (this.childCompletions.cleanupChildCompletionState(e2), this.sessions.get(e2)?.hosted?.subagentCollectControl?.cleanup());
      }
    }
    class Ln {
      constructor() {
        this.fanout = new Sr.W();
      }
      async *subscribe(e2, t2) {
        const r2 = { getSnapshot: t2, events: new Sr.l(), notify: void 0 };
        this.fanout.add(r2);
        try {
          if (this.fanout.isClosed) return;
          for (yield { event: { case: "snapshot", value: { work: t2().map(ur.C8) } } }; !e2.signal.aborted && !this.fanout.isClosed; ) {
            const t3 = r2.events.shift();
            void 0 === t3 ? await this.fanout.waitForEvent(e2, r2) : yield t3;
          }
        } finally {
          this.fanout.delete(r2);
        }
      }
      emitState() {
        this.fanout.isClosed || this.fanout.forEach((e2) => {
          e2.events.push({ event: { case: "state", value: { work: e2.getSnapshot().map(ur.C8) } } }), this.fanout.wake(e2);
        });
      }
      close() {
        this.fanout.close();
      }
    }
    function $n(e2) {
      return `subagent:${e2.childSessionId}:${e2.parentToolCallId}`;
    }
    function Qn(e2) {
      return `subagent-surfaced:${e2.childSessionId}:${e2.parentToolCallId}`;
    }
    class jn {
      constructor(e2, t2, r2) {
        this.sessionId = e2, this.events = t2, this.registry = r2, this.bubbledInteractionSeq = 0, this.hostInteractionSeq = 0, this.surfacedInteractionSeq = 0;
      }
      setActiveTurnId(e2) {
        const t2 = this.activeTurnId;
        this.activeTurnId = e2, void 0 === e2 && void 0 !== t2 && this.registry.cancelTurn(t2, new Error("Parent turn ended while interaction was still pending"), { settleRejectBubbled: true });
      }
      cancelBubbledFromChild(e2, t2) {
        this.registry.settleRejectByRequestId({ requestId: $n(e2), reason: t2 ?? "Subagent force-backgrounded; cancelling pending bubbled interaction" });
      }
      getActiveTurnId() {
        return this.activeTurnId;
      }
      setUpdateInterceptor(e2) {
        this.interceptUpdate = e2;
      }
      async sendUpdate(e2, t2) {
        true !== this.interceptUpdate?.(t2) && this.events.appendInteractionUpdate(t2);
      }
      async query(e2, t2) {
        const r2 = this.activeTurnId;
        if (void 0 === r2) throw new Error(`Agent host interaction query has no active turn: ${this.sessionId}`);
        return this.registry.query(e2, r2, t2);
      }
      async queryFromChild(e2, t2, r2) {
        const { turnId: n2, key: s2 } = this.bubbledKey(r2, t2.id);
        return this.registry.query(e2, n2, t2, s2);
      }
      async querySurfacedForSubagent(e2, t2, r2) {
        const { turnId: n2, key: s2 } = this.surfacedKey(r2, t2.id);
        return this.registry.query(e2, n2, t2, s2);
      }
      async askHostQuestion(e2, t2) {
        const r2 = this.activeTurnId;
        if (void 0 === r2) throw new Error(`Agent host question has no active turn: ${this.sessionId}`);
        const n2 = ++this.hostInteractionSeq;
        return this.registry.askHostQuestion(e2, r2, t2, { requestId: `host:${n2}`, interactionId: `${r2}:host:${n2}` });
      }
      async askHostQuestionFromChild(e2, t2, r2) {
        const { turnId: n2, key: s2 } = this.bubbledKey(r2, 0);
        return this.registry.askHostQuestion(e2, n2, t2, s2);
      }
      async askHostQuestionSurfacedForSubagent(e2, t2, r2) {
        const { turnId: n2, key: s2 } = this.surfacedKey(r2, 0);
        return this.registry.askHostQuestion(e2, n2, t2, s2);
      }
      bubbledKey(e2, t2) {
        const r2 = this.activeTurnId;
        if (void 0 === r2) throw new mn(this.sessionId);
        const n2 = ++this.bubbledInteractionSeq;
        return { turnId: r2, key: { requestId: $n(e2), interactionId: (s2 = { turnId: r2, correlation: e2, queryId: t2, seq: n2 }, `${s2.turnId}:${$n(s2.correlation)}:${s2.queryId}:${s2.seq}`) } };
        var s2;
      }
      surfacedKey(e2, t2) {
        const r2 = this.activeTurnId;
        if (void 0 === r2) throw new Error(`Agent host surfaced interaction has no active child turn: ${this.sessionId}`);
        const n2 = ++this.surfacedInteractionSeq;
        return { turnId: r2, key: { requestId: Qn(e2), interactionId: (s2 = { turnId: r2, correlation: e2, queryId: t2, seq: n2 }, `${s2.turnId}:${Qn(s2.correlation)}:${s2.queryId}:${s2.seq}`) } };
        var s2;
      }
    }
    var Gn = r(76183);
    class Hn {
      constructor() {
        this.fanout = new Sr.W(), this.unwatched = new Sr.l();
      }
      async *subscribe(e2) {
        const t2 = { events: new Sr.l(), notify: void 0 };
        for (let e3 = this.unwatched.shift(); void 0 !== e3; e3 = this.unwatched.shift()) t2.events.push(e3);
        this.fanout.add(t2);
        try {
          for (yield new Ot.m$({ event: { case: "ready", value: new Ot.lX() } }); !e2.signal.aborted && !this.fanout.isClosed; ) {
            const r2 = t2.events.shift();
            void 0 === r2 ? await this.fanout.waitForEvent(e2, t2) : yield r2;
          }
        } finally {
          this.fanout.delete(t2);
        }
      }
      emit(e2) {
        if (!this.fanout.isClosed) return 0 === this.fanout.size ? (this.unwatched.length >= 256 && this.unwatched.shift(), void this.unwatched.push(new Ot.m$({ event: { case: "lifecycle", value: e2.clone() } }))) : void this.fanout.forEach((t2) => {
          t2.events.push(new Ot.m$({ event: { case: "lifecycle", value: e2.clone() } })), this.fanout.wake(t2);
        });
      }
      close() {
        this.fanout.close(), this.unwatched = new Sr.l();
      }
    }
    var zn, Wn = r(42956), Vn = function(e2, t2, r2, n2) {
      if ("a" === r2 && !n2) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t2 ? e2 !== t2 || !n2 : !t2.has(e2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r2 ? n2 : "a" === r2 ? n2.call(e2) : n2 ? n2.value : t2.get(e2);
    };
    zn = /* @__PURE__ */ new WeakMap();
    const Kn = new class {
      constructor() {
        zn.set(this, /* @__PURE__ */ new WeakMap());
      }
      mark(e2, t2) {
        Vn(this, zn, "f").set(e2, t2);
      }
      get(e2, t2) {
        return Vn(this, zn, "f").get(e2)?.get(t2);
      }
    }();
    function Yn(e2) {
      const t2 = /* @__PURE__ */ new Map();
      for (const [r2, n2] of Xn(e2)) {
        const e3 = n2.history[n2.history.length - 1];
        t2.set(r2, { latestStep: e3?.step?.trim() || void 0, finalSummary: n2.finalSummary || void 0, completedSubtitle: n2.completedSubtitle || void 0 });
      }
      return t2;
    }
    function Zn(e2, t2) {
      const r2 = e2.communicateUpdateStatesByParentToolCallId;
      return r2 instanceof Map ? r2.get(t2) : r2?.[t2];
    }
    function Xn(e2) {
      const t2 = e2.communicateUpdateStatesByParentToolCallId;
      return t2 instanceof Map ? [...t2.entries()] : Object.entries(t2 ?? {});
    }
    const es = "x-cursor-agent-transport-mode";
    function ts(e2, t2, r2) {
      e2.activeTurnMaxModeHolds += 1, t2?.(e2.sessionId, r2);
    }
    function rs(e2, t2) {
      e2.activeTurnMaxModeHolds = Math.max(0, e2.activeTurnMaxModeHolds - 1), 0 === e2.activeTurnMaxModeHolds && t2?.(e2.sessionId, void 0);
    }
    function ns(e2, t2, r2) {
      e2.pendingTurns = Math.max(0, e2.pendingTurns - 1), e2.hostedTaskTurnCompleters.get(t2)?.(), e2.hostedTaskTurnCompleters.delete(t2), e2.hostedTaskTurnAborts.delete(t2), rs(e2, r2), e2.onAwaitingInputChanged?.(), (0, Er.YF)(e2);
    }
    async function ss(e2) {
      const { ctx: t2, request: r2, options: s2 } = e2, o2 = e2.parent?.rootSessionId ?? r2.sessionId, i2 = e2.sessionStore?.getBlobStore() ?? e2.sharedBlobStore ?? s2.createBlobStore?.({ sessionId: r2.sessionId, rootSessionId: o2, ...void 0 !== e2.parent?.parentSessionId ? { parentSessionId: e2.parent.parentSessionId } : {} }) ?? new er.ve(), a2 = (0, Wn.a)(i2), c2 = e2.sessionStore ?? s2.createSessionStore?.({ sessionId: r2.sessionId, blobStore: i2 }), l2 = void 0 === c2 && "seed" === e2.initialHistoryMode ? r2.initialHistory : void 0, u2 = c2 ?? Vr(r2.sessionId, i2, l2);
      void 0 !== r2.initialHistory && void 0 === l2 && await u2.handleCheckpoint(t2, r2.initialHistory);
      const d2 = s2.createBackgroundWorkRegistry?.() ?? new Nr(t2), p2 = new Ln();
      d2.setOnWorkChanged(() => {
        p2.emitState(), Y2.onBackgroundWorkChanged?.();
      });
      const m2 = true === s2.subagentsAsSessions, h2 = new Gn.aJ(m2 ? { maxInMemoryEvents: s2.sessionEventLogMaxInMemoryEvents ?? Gn.Cw, ...void 0 === s2.sessionEventLogOverflowSink ? {} : { overflowSink: s2.sessionEventLogOverflowSink } } : {}), f2 = new Hn();
      d2.setOnCompletionEnqueued(() => {
        const t3 = d2.drainCompletions().map((e3) => (function(e4) {
          const t4 = (0, n.NSZ)(e4.reason);
          return new le.KFq({ taskId: e4.taskId, kind: qr(e4.kind), status: Dr(e4.status), title: e4.title, ...e4.detail ? { detail: e4.detail } : {}, ...e4.outputPath ? { outputPath: e4.outputPath } : {}, ...e4.toolCallId ? { toolCallId: e4.toolCallId } : {}, ...void 0 !== t4 ? { reason: t4 } : {} });
        })(e3));
        for (const e3 of t3) h2.appendBackgroundTaskCompleted(e3);
        t3.length > 0 && e2.hostHooks?.queueBackgroundWakeup?.(t3);
      });
      const g2 = new sn.vS(h2, { onAwaitingInputStarted: () => {
        Y2.awaitingInputCount += 1, Y2.onAwaitingInputChanged?.();
      }, onAwaitingInputEnded: () => {
        Y2.awaitingInputCount = Math.max(0, Y2.awaitingInputCount - 1), Y2.onAwaitingInputChanged?.();
      }, onInteractionKeyReuse: (e3) => s2.metrics?.increment?.({ stat: sn.zv, value: 1, tags: { outcome: e3.outcome, query_case: e3.queryCase } }), onInteractionResponded: (e3, t3) => {
        const r3 = (0, sn.c3)(e3, t3);
        void 0 !== r3 && s2.onMcpAuthApproved?.(r3);
      } }), y2 = new jn(r2.sessionId, h2, g2), w2 = e2.parent?.rootSessionId ?? r2.sessionId, v2 = void 0 !== e2.parent ? gn(r2.sessionOptions?.interactionPolicy) : void 0;
      let _2, A2, S2;
      const b2 = s2.subagentTranscripts;
      let E2, I2, C2, k2, x2, T2, R2, B2, P2, J2, M2;
      const q2 = (e3) => {
        const t3 = e3.clone();
        false !== t3.customSubagentsInfoComplete && (J2 = t3.customSubagents), void 0 !== P2 && false === t3.customSubagentsInfoComplete || (P2 = t3), M2 = t3.env?.projectFolder || void 0;
        const r3 = t3.env?.smartModeClassifierAutoModeEnabled;
        void 0 !== r3 && (k2 = new Ot.hV({ smartModeClassifierAutoModeEnabled: r3 }));
      }, D2 = s2.findExistingSubagentSessionId, O2 = s2.getLocalSubagentRunSlots, N2 = s2.getLocalSubagentSpawnSurfaceKind, F2 = new Un({ adapter: s2.adapter, backgroundWorkRegistry: d2, cloudSubagentRunner: s2.cloudSubagentRunner, cloudSubagentsUnavailableReason: s2.cloudSubagentsUnavailableReason, getParentEffectiveMaxMode: s2.getParentEffectiveMaxMode, getParentRetryStallSettings: () => E2 ?? (function(e3) {
        const t3 = (0, pt.pA)(e3);
        if (void 0 !== t3) return { enableAgentRetries: t3.enableAgentRetries, fixedRetryDelayMs: t3.fixedRetryDelayMs, endlessRetries: t3.endlessRetries, stallDetectorConfig: t3.stallDetectorConfig, isRunningInTest: t3.isRunningInTest };
      })(Y2.lastTurnModel?.turnOptions), getParentSubagentModelSettings: () => I2 ?? (function(e3) {
        const t3 = (0, pt.pA)(e3);
        if (void 0 !== t3 && (void 0 !== t3.selectedSubagentModels || void 0 !== t3.subagentModelOverrides)) return { selectedSubagentModels: t3.selectedSubagentModels ?? [], subagentModelOverrides: t3.subagentModelOverrides ?? [] };
      })(Y2.lastTurnModel?.turnOptions), getParentRequestContextBlobTransportSettings: () => {
        return C2 ?? (e3 = Y2.lastTurnModel?.turnOptions, Mt((0, pt.pA)(e3)));
        var e3;
      }, getParentRequestContextDecoration: () => {
        return e3 = k2 ?? Y2.lastTurnModel?.requestContextDecoration, t3 = Y2.lastTurnModel?.turnOptions?.subagentSmartModeAutoRun, void 0 === t3 ? e3 : new Ot.hV({ smartModeClassifierAutoModeEnabled: t3 });
        var e3, t3;
      }, getParentRequestContext: () => P2 ?? Y2.lastTurnModel?.requestContext, getParentBlobEncryptionKey: () => x2 ?? Y2.lastTurnModel?.turnOptions?.blobEncryptionKey, getParentClientTurnSettings: () => {
        return T2 ?? (e3 = Y2.lastTurnModel?.turnOptions, qt((0, pt.pA)(e3)));
        var e3;
      }, getParentTurnLineage: () => R2 ?? (function(e3) {
        if (void 0 !== e3?.requestId || void 0 !== e3?.rootParentRequestId) return { requestId: e3.requestId, rootParentRequestId: e3.rootParentRequestId ?? e3.requestId };
      })(Y2.lastTurnModel), getParentToolRestriction: () => B2 ?? (0, pt.G5)(Y2.lastTurnModel?.turnOptions), getParentCustomSubagents: () => J2 ?? Y2.lastTurnModel?.customSubagents, getParentProjectFolder: () => M2 ?? Y2.lastTurnModel?.projectFolder, resolveSavedModelParameters: s2.resolveSavedModelParameters, resolveRequiredGlobalCommands: s2.resolveRequiredGlobalCommands, durableSubagentInvocations: s2.durableSubagentInvocations, ...void 0 === s2.metrics ? {} : { metrics: s2.metrics }, ...void 0 === N2 ? {} : { getLocalSubagentSpawnSurfaceKind: () => N2(Y2.parent?.rootSessionId ?? r2.sessionId) }, ...void 0 === D2 ? {} : { findExistingChildSessionId: ({ parentToolCallId: e3 }) => D2({ parentSessionId: r2.sessionId, rootSessionId: w2, parentToolCallId: e3 }) }, ...void 0 === r2.sessionOptions?.localSubagentLimits && void 0 === s2.localSubagentLimits ? {} : { localSubagentLimits: r2.sessionOptions?.localSubagentLimits ?? s2.localSubagentLimits }, ...void 0 === O2 ? {} : { getLocalRunSlots: () => O2(Y2.parent?.rootSessionId ?? r2.sessionId) }, parentConversationId: r2.sessionId, conversationGroupId: w2, rootSessionId: w2, getRootSessionId: () => Y2.parent?.rootSessionId ?? r2.sessionId, subagentsAsSessions: m2, ...void 0 === b2 ? {} : { subagentTranscripts: { projectDir: () => (function(e3, t3) {
        if (void 0 === e3) return;
        const r3 = e3.projectDir;
        if ("string" == typeof r3) return r3 || void 0;
        try {
          return r3({ sessionId: t3 }) || void 0;
        } catch {
          return;
        }
      })(b2, r2.sessionId) } }, ...void 0 === s2.subagentInteractionPolicy ? {} : { childInteractionPolicy: s2.subagentInteractionPolicy }, getResources: ({ agentId: e3, parentAgentId: t3, childSubagentExecutor: r3, childSubagentAwaitExecutor: n2, childForceBackgroundSubagentExecutor: o3, askHostQuestion: i3 }) => {
        if (void 0 === _2) throw new Error("Subagent executor was requested before initialization");
        return s2.createResources({ sessionId: e3, rootSessionId: w2, parentSessionId: t3, subagentExecutor: r3 ?? _2, subagentAwaitExecutor: n2 ?? as(A2), forceBackgroundSubagentExecutor: o3 ?? is(S2), backgroundWorkRegistry: d2, askHostQuestion: i3 });
      }, onInteractionUpdate: (e3, r3, n2) => (async function(e4, t3, r4, n3, s3) {
        if ("toolCallStarted" !== n3.message.case && "toolCallCompleted" !== n3.message.case) return;
        const o3 = n3.message.value.toolCall;
        if ("communicateUpdateToolCall" !== o3?.tool.case) return;
        const i3 = o3.tool.value.args, a3 = i3?.currentStep?.trim(), c3 = i3?.finalSummary?.trim(), l3 = i3?.completedSubtitle?.trim();
        if (!a3 && !c3 && !l3) return;
        const u3 = s3?.trim();
        if (!u3) return;
        const d3 = t3.getConversationState(), p3 = Zn(d3, u3), m3 = p3?.history ?? [], h3 = m3[m3.length - 1], f3 = void 0 !== a3 && a3.length > 0 && (h3?.step?.trim() || void 0) !== a3, g3 = c3 || p3?.finalSummary || void 0, y3 = l3 || p3?.completedSubtitle || void 0, w3 = { latestStep: f3 ? a3 : h3?.step?.trim() || void 0, finalSummary: g3, completedSubtitle: y3 };
        if (!f3 && g3 === (p3?.finalSummary || void 0) && y3 === (p3?.completedSubtitle || void 0) && (v3 = Kn.get(t3, u3), _3 = w3, void 0 !== v3 && v3.latestStep === _3.latestStep && v3.finalSummary === _3.finalSummary && v3.completedSubtitle === _3.completedSubtitle)) return;
        var v3, _3;
        const A3 = (0, ur.ks)(d3), S3 = Zn(A3, u3), b3 = S3?.history ?? [], E3 = b3[b3.length - 1], I3 = f3 ? b3.reduce((e5, t4) => Math.max(e5, t4.messageIndex), -1) + 1 : E3?.messageIndex, C3 = f3 ? [...b3, new le.NH9({ step: a3, messageIndex: I3 ?? 0 })] : b3, k3 = new le.RCW({ history: C3, finalSummary: g3, completedSubtitle: y3 }), x3 = A3.communicateUpdateStatesByParentToolCallId ?? {};
        A3.communicateUpdateStatesByParentToolCallId = { ...x3, [u3]: k3 }, r4.appendConversationState(A3), await t3.handleCheckpoint(e4, A3), Kn.mark(t3, Yn(A3));
      })(t2, u2, h2, r3, n2), createChildSession: m2 ? async (t3, r3, n2, o3) => {
        const i3 = e2.hostHooks;
        if (void 0 === i3) throw new Error("subagentsAsSessions requires host hooks for createChildSession");
        const a3 = await i3.createChildSession(t3, r3, n2, o3);
        return { sessionId: a3.sessionId, store: a3.store, interactionListener: a3.interactionListener, appendConversationState: (e3) => a3.events.appendConversationState(e3), beginBlobReadSummary: a3.beginBlobReadSummary, appendTurnStarted: (e3, t4, r4) => {
          a3.events.appendTurnStarted(e3), void 0 !== t4 && (a3.lastTurnModel = t4), ts(a3, s2.noteActiveTurnMaxMode, Pt(t4)), a3.pendingTurns += 1, a3.hostedTaskTurnCompleters.set(e3, (function(e4) {
            let t5;
            const r5 = new Promise((e5) => {
              t5 = e5;
            });
            return e4.turnChain = e4.turnChain.then(() => r5, () => r5), t5;
          })(a3)), void 0 !== r4 && a3.hostedTaskTurnAborts.set(e3, r4), a3.onAwaitingInputChanged?.();
        }, appendTurnCompleted: (e3) => {
          try {
            a3.events.appendTurnCompleted(e3);
          } finally {
            ns(a3, e3, s2.noteActiveTurnMaxMode);
          }
        }, appendTurnSettledByError: (e3, t4) => {
          try {
            a3.events.appendTurnSettledByError(e3, t4);
          } finally {
            ns(a3, e3, s2.noteActiveTurnMaxMode);
          }
        }, appendTurnCancelled: (e3, t4, r4) => {
          try {
            a3.events.appendTurnCancelled(e3, t4, r4);
          } finally {
            ns(a3, e3, s2.noteActiveTurnMaxMode);
          }
        }, appendTurnInteractionsSuperseded: (e3, t4) => a3.events.appendTurnInteractionsSuperseded(e3, t4), setActiveTurnId: (e3) => a3.interactionListener.setActiveTurnId(e3), interactionPolicy: a3.interactionPolicy ?? gn(r3.sessionOptions?.interactionPolicy), subagentExecutor: a3.subagentExecutor, subagentAwaitExecutor: a3.subagentAwaitExecutor, forceBackgroundSubagentExecutor: a3.forceBackgroundSubagentExecutor, subagentCollectControl: a3.subagentCollectControl, surfaceInteraction: (e3, t4, r4) => a3.interactionListener.querySurfacedForSubagent(e3, t4, r4), surfaceHostQuestion: (e3, t4, r4) => a3.interactionListener.askHostQuestionSurfacedForSubagent(e3, t4, r4) };
      } : void 0, getLatestParentCheckpoint: () => u2.getConversationState(), getParentBlobStore: () => u2.getBlobStore(), getParentActiveTurnId: () => y2.getActiveTurnId(), bubbleInteractionToParent: (U2 = y2, async (e3, t3, r3) => void 0 !== U2.queryFromChild ? U2.queryFromChild(e3, t3, r3) : U2.query(e3, t3)), bubbleHostQuestionToParent: (e3, t3, r3) => y2.askHostQuestionFromChild(e3, t3, r3), cancelBubbledInteractionToParent: (e3, t3) => {
        y2.cancelBubbledFromChild(e3, t3);
      }, emitSubagentStarted: (e3) => {
        h2.appendSubagentStarted(e3);
      } });
      var U2;
      const L2 = ($2 = F2, (0, n.hv_)($2));
      var $2;
      _2 = L2;
      const Q2 = (j2 = F2, { execute: async (e3, t3) => tn(j2, e3, t3) });
      var j2;
      A2 = Q2;
      const H2 = /* @__PURE__ */ (function(e3) {
        return { execute: async (t3, r3) => e3.forceBackgroundByToolCallId(r3.toolCallId) };
      })(F2);
      S2 = H2;
      const z2 = e2.parent?.parentSessionId ?? e2.forkedFromSessionId, W2 = s2.createResources({ sessionId: r2.sessionId, rootSessionId: w2, ...void 0 === z2 ? {} : { parentSessionId: z2 }, ...void 0 === e2.parent ? {} : { parent: e2.parent }, subagentExecutor: L2, subagentAwaitExecutor: Q2, forceBackgroundSubagentExecutor: H2, backgroundWorkRegistry: d2, askHostQuestion: (e3, t3) => y2.askHostQuestion(e3, t3) }), V2 = e2.parent, K2 = r2.owningClientInstanceId?.trim() || r2.clientInstanceId?.trim() || void 0, Y2 = { sessionId: r2.sessionId, ...void 0 === r2.sessionOptions ? {} : { sessionOptions: os(r2.sessionOptions) }, ...void 0 === K2 ? {} : { owningClientInstanceId: K2 }, store: u2, events: h2, interactionListener: y2, interactionRegistry: g2, backgroundWorkRegistry: d2, backgroundWorkWatchers: p2, subagentExecutor: L2, subagentAwaitExecutor: Q2, forceBackgroundSubagentExecutor: H2, subagentCollectControl: F2.getOwnSessionChildCollectControl(), turnLifecycleWatchers: f2, finishTurnLifecycle: (e3) => {
        f2.emit(new Ot.JW({ turnId: e3, event: { case: "finished", value: new Ot.zU() } }));
      }, beginBlobReadSummary: (e3) => {
        const t3 = s2.storageInstruments;
        return void 0 === t3 ? { ctx: e3, finish: () => {
        } } : t3.beginBlobReadSummary(e3, r2.sessionId, a2);
      }, applyCheckpoint: async (e3, t3) => {
        await (async function(e4, t4, r3) {
          const n2 = (0, ur.ks)(r3), s3 = Xn(t4.store.getConversationState());
          s3.length > 0 && (function(e5, t5) {
            const r4 = Xn(e5), n3 = new Map(t5);
            for (const [e6, t6] of r4) n3.set(e6, t6);
            e5.communicateUpdateStatesByParentToolCallId = Object.fromEntries(n3);
          })(n2, s3);
          await t4.store.handleCheckpoint(e4, n2), Kn.mark(t4.store, Yn(n2)), t4.events.appendConversationState(n2);
        })(e3, Y2, t3);
      }, rebase: async (e3, t3) => {
        const r3 = (0, ur.ks)(t3);
        await u2.handleCheckpoint(e3, r3), Kn.mark(u2, Yn(r3)), h2.appendConversationState(r3);
      }, disposeResources: () => s2.disposeResources?.(W2), run: async (t3) => {
        y2.setActiveTurnId(t3.turnId), E2 = { enableAgentRetries: t3.runOptions?.enableAgentRetries, fixedRetryDelayMs: t3.runOptions?.fixedRetryDelayMs, endlessRetries: t3.runOptions?.endlessRetries, stallDetectorConfig: t3.runOptions?.stallDetectorConfig, isRunningInTest: t3.runOptions?.isRunningInTest }, I2 = { selectedSubagentModels: t3.runOptions?.selectedSubagentModels ?? [], subagentModelOverrides: t3.runOptions?.subagentModelOverrides ?? [] }, C2 = Mt(t3.runOptions), k2 = t3.requestContextDecoration, x2 = t3.runOptions?.headers?.[pt.WI], T2 = qt(t3.runOptions);
        const n2 = t3.runOptions?.generationUUID ?? t3.turnId, o3 = t3.runOptions?.parentRequestId ?? Y2.lastTurnModel?.parentRequestId, i3 = t3.runOptions?.rootParentRequestId ?? Y2.lastTurnModel?.rootParentRequestId, a3 = i3 ?? o3 ?? n2;
        R2 = { requestId: n2, rootParentRequestId: a3 };
        const c3 = G(t3.ctx, { requestId: n2, parentRequestId: o3, rootParentRequestId: a3 });
        B2 = t3.runOptions?.toolRestriction;
        try {
          ts(Y2, s2.noteActiveTurnMaxMode, Pt({ requestedModel: t3.runOptions?.requestedModel, modelDetails: t3.modelDetails }));
          const n3 = t3.runOptions?.generationUUID ?? t3.turnId, a4 = s2.requestContextOverlayMailbox, l3 = true === s2.ownRequestContext && void 0 === e2.parent && void 0 !== a4;
          if (l3 && void 0 !== a4) {
            const e3 = (0, Gr.DC)(t3.action);
            void 0 !== e3 && (a4.expect(n3), a4.offer(n3, (0, Qr.He)(e3)), (0, Gr.tY)(t3.action));
          } else {
            (0, Gr.ko)(t3.action, t3.requestContextDecoration);
            const e3 = (0, Gr.DC)(t3.action);
            void 0 !== e3 && q2(e3);
          }
          const d3 = (e3) => {
            q2(l3 ? (0, Gr.yj)(e3) : e3);
          }, p3 = l3 ? (0, jr.G)(W2) : void 0, m3 = void 0 === a4 || void 0 === p3 || a4.isExpected(n3) ? void 0 : () => p3({ ctx: c3, args: new Mr._K() }), g3 = l3 && void 0 !== a4 ? { mailbox: a4, requestId: n3, composerId: r2.sessionId, pullOverlay: m3, prefetchFileAccess: s2.prefetchFileAccess, onTiming: (e3) => {
            s2.metrics?.distribution({ stat: "agent_host.own_request_context.base_ms", value: e3.baseMs }), s2.metrics?.distribution({ stat: "agent_host.own_request_context.overlay_wait_after_base_ms", value: e3.overlayWaitMs, tags: { used_overlay: e3.usedOverlay ? "true" : "false", overlay_source: e3.overlaySource, timed_out: e3.timedOut ? "true" : "false", used_last_overlay: e3.usedLastOverlay ? "true" : "false", first_turn_waited: e3.firstTurnWaited ? "true" : "false" } }), s2.metrics?.distribution({ stat: "agent_host.own_request_context.prefetch_ms", value: e3.prefetchMs, tags: { file_count: String(e3.prefetchFileCount) } }), s2.metrics?.distribution({ stat: "agent_host.own_request_context.prefetch_file_count", value: e3.prefetchFileCount }), s2.metrics?.distribution({ stat: "agent_host.own_request_context.prefetch_total_bytes", value: e3.prefetchTotalBytes });
          } } : void 0;
          await (async function(e3) {
            const [t4] = e3.ctx.withCancel();
            let r3 = e3.initialState ?? new le.Y9z();
            const n4 = { async handleCheckpoint(t5, n5) {
              r3 = n5, await e3.onCheckpoint?.(n5);
            }, getLatestCheckpoint: () => r3 }, s3 = e3.modelDetails ?? (void 0 === e3.runOptions?.requestedModel ? et() : void 0), o4 = { conversationId: e3.conversationId, ...e3.runOptions, subagentModelOverrides: e3.runOptions?.subagentModelOverrides ?? [] };
            return await Wr({ ctx: t4, adapter: e3.adapter, conversationState: r3, action: e3.initialAction, modelDetails: s3, interactionListener: e3.interactionListener, resources: e3.resources, blobStore: e3.blobStore, checkpointHandler: n4, mcpTools: e3.mcpTools, runOptions: o4, conversationActionManager: e3.conversationActionManager }), { finalState: r3 };
          })({ ctx: c3, adapter: s2.adapter, conversationId: r2.sessionId, initialAction: t3.action, initialState: u2.getConversationState(), modelDetails: t3.modelDetails, interactionListener: y2, resources: (0, Gr.DS)((0, Hr.QF)($r(W2, void 0 === e2.parent ? void 0 : P2 ?? Y2.lastTurnModel?.requestContext), g3), t3.requestContextDecoration, d3), blobStore: u2.getBlobStore(), mcpTools: s2.mcpTools, conversationActionManager: t3.conversationActionManager, onCheckpoint: (e3) => Y2.applyCheckpoint(c3, e3), runOptions: { ...t3.runOptions, conversationId: r2.sessionId, generationUUID: t3.runOptions?.generationUUID ?? t3.turnId, ...void 0 === o3 ? {} : { parentRequestId: o3 }, ...void 0 === i3 ? {} : { rootParentRequestId: i3 }, onNetworkPhaseStart: () => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "networkPhaseStarted", value: new Ot.mX() } }));
          }, onTurnRuntimeSelected: (e3) => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "turnRuntimeSelected", value: new Ot.bt({ runtime: e3.runtime, reason: e3.reason }) } }));
          }, onHeader: (e3) => {
            const r3 = e3.get("x-cursor-server-region") ?? void 0, n4 = e3.get(es) ?? void 0;
            void 0 === r3 && void 0 === n4 || f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "responseMetadata", value: new Ot.gW({ serverRegion: r3, transportMode: n4 }) } }));
          }, onConnectionStateChange: (e3) => {
            const r3 = "connected" === e3.state ? new Ot.P4({ state: { case: "connected", value: new Ot.PY() } }) : new Ot.P4({ state: { case: "reconnecting", value: new Ot.tP({ attempt: e3.attempt, trigger: void 0 === e3.trigger ? void 0 : new Ot.Lk(e3.trigger) }) } });
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "connectionStateChanged", value: r3 } }));
          }, onFirstMessage: (e3) => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "firstMessage", value: new Ot.F0({ elapsedMs: e3 }) } }));
          }, onFirstMessageNetwork: (e3) => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "firstMessageNetwork", value: new Ot.Zg({ elapsedMs: e3 }) } }));
          }, onFirstNonHeartbeatResponse: (e3, r3) => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "firstNonHeartbeatResponse", value: new Ot.uQ({ handshakeMs: e3, attempt: r3 }) } }));
          }, onTtftBreakdown: (e3, r3) => {
            f2.emit(new Ot.JW({ turnId: t3.turnId, event: { case: "ttftBreakdown", value: new Ot.PF({ serverFirstTokenMs: e3.serverFirstTokenMs, preStreamSetupMs: e3.preStreamSetupMs, waitForFirstEventMs: e3.waitForFirstEventMs, providerTtftMs: e3.providerTtftMs, slowPoolWaitMs: e3.slowPoolWaitMs, clientPrepMs: e3.clientPrepMs, clientClock: "client" === e3.clock, attempt: r3 }) } }));
          }, onRetryStarting: async (e3, r3) => {
            await t3.runOptions?.onRetryStarting?.(e3, r3), h2.appendTurnInteractionsSuperseded(t3.turnId, r3.isResume ? { case: "resumeFromCheckpoint", value: r3.conversationState } : { case: "replayActionFromState", value: r3.conversationState });
          } } });
        } finally {
          rs(Y2, s2.noteActiveTurnMaxMode), y2.setActiveTurnId(void 0);
        }
      }, turnChain: Promise.resolve(), hostedTaskTurnCompleters: /* @__PURE__ */ new Map(), hostedTaskTurnAborts: /* @__PURE__ */ new Map(), pendingTurns: 0, activeTurnMaxModeHolds: 0, awaitingInputCount: 0, ...void 0 === V2 ? {} : { parent: V2 }, ...void 0 === v2 ? {} : { interactionPolicy: v2 }, deleted: false, turns: /* @__PURE__ */ new Map(), queuedRunOrder: [] };
      return h2.appendConversationState(u2.getConversationState()), { session: Y2, events: h2 };
    }
    function os(e2) {
      return { ...e2, ...void 0 === e2.workspacePaths ? {} : { workspacePaths: [...e2.workspacePaths] }, ...void 0 === e2.owningProject ? {} : { owningProject: { ...e2.owningProject } }, ...void 0 === e2.localSubagentLimits ? {} : { localSubagentLimits: { ...e2.localSubagentLimits } } };
    }
    function is(e2) {
      if (void 0 === e2) throw new Error("Force-background subagent executor was requested before initialization");
      return e2;
    }
    function as(e2) {
      if (void 0 === e2) throw new Error("Subagent await executor was requested before initialization");
      return e2;
    }
    const cs = (0, s.h)("agent-host:private-inference-usage"), ls = (0, s.h)("@anysphere/agent-host:turn-routing");
    async function us(e2, t2) {
      return ds(e2, void 0, t2);
    }
    async function ds(e2, t2, s2, i2) {
      if (void 0 !== e2.cloudSubagentRunner && void 0 !== e2.nativeCloudSubagents) throw new Error("Configure either cloudSubagentRunner or nativeCloudSubagents, not both.");
      if (void 0 !== e2.nativeCloudSubagents && "builtin" !== e2.network.kind) throw new Error("Native cloud subagent support requires builtin networking.");
      if (void 0 !== e2.storage && (void 0 === e2.storageDir || e2.storage.storageDir !== e2.storageDir)) throw new Error("A prebuilt AgentHostStorage requires its matching CreateAgentHostOptions.storageDir.");
      const a2 = new Jr.Pz({ ...void 0 === e2.hostContext ? {} : { ctx: e2.hostContext }, ...void 0 === e2.metrics ? {} : { metrics: e2.metrics }, ...void 0 === e2.onStorageFault ? {} : { onStorageFault: e2.onStorageFault } }), c2 = e2.storage ?? ps({ ...e2, storageObserver: a2.storageObserver }), l2 = void 0 === c2 ? void 0 : new Pr(() => c2.openGlobalStore());
      let u2;
      try {
        u2 = await (async function(e3, t3, n2, s3, i3) {
          const a3 = await _(e3.network, n2), c3 = new X(a3.agentClient, { llmGatewayCredential: "from-local-env" }), l3 = void 0 !== i3.globalStore && void 0 !== a3.privateInferenceBackend ? new D({ store: i3.globalStore, backend: a3.privateInferenceBackend, metrics: e3.metrics, onError: (t4) => {
            const r2 = t4 instanceof Error ? t4.name : typeof t4;
            try {
              cs.warn(e3.hostContext?.() ?? (0, o.q6)(), "Private inference usage reporting failed", { errorName: r2 });
            } catch {
              console.warn("Private inference usage reporting failed", r2);
            }
          } }) : void 0, u3 = e3.piOptions?.routing ?? ("private-inference" === s3?.kind ? s3.privateInference : void 0), d3 = { ...i3, ...void 0 === l3 ? {} : { privateInferenceUsage: l3 } }, p3 = void 0 !== t3, m3 = void 0 === u3 ? new E() : void 0, h3 = (t4, r2, n3) => {
            const s4 = void 0 === r2 ? void 0 : (0, k.kI)(new X(r2), e3.metrics, n3);
            p3 && void 0 === s4 && ls.warn(e3.hostContext?.() ?? (0, o.q6)(), "Local loop requested but no managed client could be built; turns will run on the backend loop", { networkKind: e3.network.kind });
            const i4 = (0, C.QZ)({ managedLocalAvailable: void 0 !== s4, localLoopRequested: p3, ...void 0 === a3.runtimeCapabilities ? {} : { runtimeCapabilities: a3.runtimeCapabilities }, ...void 0 === u3 ? {} : { privateInference: u3 }, ...void 0 === e3.readPrivateInferenceEnrollment ? {} : { readEnrollmentAfterActivation: e3.readPrivateInferenceEnrollment }, ...void 0 === m3 ? {} : { enrollmentLatch: m3 } });
            return new ae(t4, i4, s4, e3.metrics, m3);
          }, f3 = "local-loop" === s3?.kind ? s3.agentHarness?.log : void 0, g3 = new ut(f3 ?? ((t4) => ls.warn(e3.hostContext?.() ?? (0, o.q6)(), t4)));
          let y3;
          try {
            const o2 = (function(e4, t4, r2) {
              if ("local-loop" !== t4?.kind || void 0 === t4.agentHarness) return;
              const { agentHarness: n3 } = t4;
              if (void 0 !== e4.piOptions) return void n3.log("private inference configured; managed-local turns stay on the statically linked client");
              if (void 0 === r2.inferenceTransport) return void n3.log("no backend transport to lend a generation; managed-local turns stay on the statically linked client");
              return { agentHarness: n3, inferenceTransport: r2.inferenceTransport };
            })(e3, s3, a3);
            if (void 0 !== o2) y3 = (function(e4, t4, r2, n3, s4, o3, i4) {
              const a4 = e4.loader(), c4 = i4.follow(a4), l4 = { run: (e5) => r2.run(e5), dispose: () => {
              } }, u4 = new at.Wn({ loader: a4, compose: (r3, i5, a5) => {
                const c5 = /* @__PURE__ */ new Map();
                let u5;
                try {
                  u5 = r3.harness.createTransport((0, it.k)(r3, { backendTransport: (0, ot.bL)(t4, c5), getPrivacyModeEnum: s4, log: e4.log, metrics: o3, loopLogContext: e4.loopLogContext }));
                } catch (e5) {
                  throw new ot.R2(r3.info, { reason: e5 instanceof Error ? e5.message : String(e5), errorClass: "compose", early: true, cause: e5 });
                }
                const d4 = (0, at.y)(r3.info, r3.channel, r3.sequence);
                let p4;
                try {
                  p4 = n3(l4, (0, ot.hj)(u5, r3.info, i5, c5, d4, { onQuietStop: a5 }), d4);
                } catch (t5) {
                  try {
                    u5.dispose();
                  } catch (t6) {
                    e4.log(`transport dispose failed after composition failed: ${t6 instanceof Error ? t6.message : String(t6)}`);
                  }
                  throw t5;
                }
                return { run: (e5) => p4.run(e5), dispose: () => {
                  try {
                    p4.dispose();
                  } finally {
                    u5.dispose();
                  }
                } };
              }, log: e4.log, ...void 0 === o3 ? {} : { metrics: o3 }, logContext: e4.loopLogContext, ...void 0 === e4.onModuleReverted ? {} : { onRevert: e4.onModuleReverted }, disposeShared: () => {
                c4();
                try {
                  r2.dispose();
                } finally {
                  a4.retire("this host is going away");
                }
              } });
              return a4.announce(), u4;
            })(o2.agentHarness, o2.inferenceTransport, c3, h3, () => a3.runtimeCapabilities?.getPrivacyModeEnum?.(), e3.metrics, g3);
            else if (void 0 !== e3.piOptions) {
              const t4 = n2?.createPrivateInferenceLoopClient ?? (await r.e(695).then(r.bind(r, 93695))).createPrivateInferenceLoopClient;
              y3 = h3(c3, await t4({ piOptions: e3.piOptions, backendClients: a3, host: d3, attachAttemptContext: e3.attachLocalLoopAttemptContext }), {});
            } else {
              const e4 = "local-loop" === s3?.kind, r2 = e4 ? at.yi : {}, n3 = t3?.(a3, d3, r2);
              e4 && void 0 !== n3 && g3.serve(lt, void 0, "no_harness"), y3 = h3(c3, n3, r2);
            }
          } catch (e4) {
            throw l3?.dispose(), a3.dispose(), e4;
          }
          return { adapter: y3, backendClients: a3, privateInferenceUsage: l3, servingModule: g3 };
        })(e2, t2, s2, i2, { globalStore: l2 });
      } catch (e3) {
        throw l2?.close(), e3;
      }
      const d2 = u2.adapter, p2 = /* @__PURE__ */ new Map(), m2 = /* @__PURE__ */ new Map(), h2 = new tt(), f2 = /* @__PURE__ */ new Map(), g2 = (0, nt.cK)({ gitExecutor: e2.gitExecutor });
      let y2 = e2.cloudSubagentRunner;
      try {
        if (void 0 !== e2.nativeCloudSubagents) {
          const t3 = u2.backendClients.backgroundComposerClientProvider;
          if (void 0 === t3) throw new Error("Native cloud subagent support requires builtin networking.");
          y2 = Ee({ nativeCloudSubagents: e2.nativeCloudSubagents, gitExecutor: g2, backend: { backgroundComposerClientProvider: t3, getTeamId: () => u2.backendClients.runtimeCapabilities?.getTeamId?.(), getParentEffectiveMaxMode: (e3) => p2.get(e3), resolveSavedModelParameters: e2.resolveSavedModelParameters }, resolveSessionOptions: (e3) => m2.get(e3) });
        }
      } catch (e3) {
        throw d2.dispose(), u2.privateInferenceUsage?.dispose(), u2.backendClients.dispose(), l2?.close(), e3;
      }
      const w2 = (0, st._)({ mcpProvider: e2.mcpProvider }), v2 = void 0 === e2.mcpProvider, A2 = /* @__PURE__ */ new Set(), S2 = (function(e3) {
        return new Rr(e3);
      })({ servingModule: u2.servingModule, subagentsAsSessions: e2.subagentsAsSessions, ...true === e2.surfaceOwnsBackgroundWakeups ? { surfaceOwnsBackgroundWakeups: true } : {}, getSendNowBehavior: e2.getSendNowBehavior, onSessionDeleted: (e3) => {
        m2.delete(e3), p2.delete(e3), f2.delete(e3);
      }, ...void 0 === e2.sessionCatalog ? {} : { sessionCatalog: e2.sessionCatalog }, ...void 0 === e2.workspaceCatalog ? {} : { workspaceCatalog: e2.workspaceCatalog }, ...void 0 === e2.userHomeDirectory ? {} : { userHomeDirectory: e2.userHomeDirectory }, createModelDetails: (t3) => e2.modelDetails ?? et(t3 ?? e2.modelId), createHostedSession: async (t3, r2, s3, o2, i3) => {
        const c3 = await ss({ ctx: t3, request: r2, sessionStore: s3, sharedBlobStore: i3, parent: o2?.parent, forkedFromSessionId: o2?.forkedFromSessionId, initialHistoryMode: o2?.initialHistoryMode, hostHooks: o2?.hostHooks, options: { adapter: d2, cloudSubagentRunner: y2, cloudSubagentsUnavailableReason: e2.cloudSubagentsUnavailableReason, getParentEffectiveMaxMode: (e3) => p2.get(e3), onMcpAuthApproved: (e3) => w2.noteGrantChanged?.(t3, e3), resolveSavedModelParameters: e2.resolveSavedModelParameters, resolveRequiredGlobalCommands: e2.resolveRequiredGlobalCommands, findExistingSubagentSessionId: e2.findExistingSubagentSessionId, durableSubagentInvocations: e2.durableSubagentInvocations, ...void 0 === e2.metrics ? {} : { metrics: e2.metrics }, storageInstruments: a2, getLocalSubagentSpawnSurfaceKind: (e3) => void 0 === m2.get(e3)?.owningProject ? "agent" : "project", localSubagentLimits: e2.localSubagentLimits, getLocalSubagentRunSlots: (e3) => {
          let t4 = f2.get(e3);
          return void 0 === t4 && (t4 = new rt(), f2.set(e3, t4)), t4;
        }, ...void 0 === e2.nativeCloudSubagents && void 0 === e2.resolveSavedModelParameters ? {} : { noteActiveTurnMaxMode: (e3, t4) => {
          void 0 === t4 ? p2.delete(e3) : p2.set(e3, t4);
        } }, createBlobStore: e2.createBlobStore, createSessionStore: e2.createSessionStore, subagentsAsSessions: e2.subagentsAsSessions, subagentInteractionPolicy: e2.subagentInteractionPolicy, ...void 0 === e2.sessionEventLogMaxInMemoryEvents ? {} : { sessionEventLogMaxInMemoryEvents: e2.sessionEventLogMaxInMemoryEvents }, ...void 0 === e2.sessionEventLogOverflowSink ? {} : { sessionEventLogOverflowSink: e2.sessionEventLogOverflowSink }, ...void 0 === e2.subagentTranscripts ? {} : { subagentTranscripts: e2.subagentTranscripts }, ...true === e2.ownRequestContext ? (l3 = h2, u3 = e2.prefetchFileAccess, void 0 === u3 ? { ownRequestContext: true, requestContextOverlayMailbox: l3 } : { ownRequestContext: true, requestContextOverlayMailbox: l3, prefetchFileAccess: u3 }) : {}, createResources: (t4) => {
          const r3 = (function(e3, t5, r4, s4) {
            const o3 = e3.createResources({ sessionId: t5.sessionId, rootSessionId: t5.rootSessionId, parentSessionId: t5.parentSessionId, ...void 0 === t5.parent ? {} : { parent: t5.parent }, backgroundWorkRegistry: t5.backgroundWorkRegistry, gitExecutor: r4, mcpLease: s4, askHostQuestion: t5.askHostQuestion }), i4 = new ms(o3);
            return i4.register(n.ZnQ, t5.subagentExecutor), i4.register(n.rz0, t5.subagentAwaitExecutor), i4.register(n.I2x, t5.forceBackgroundSubagentExecutor), i4;
          })(e2, t4, g2, w2);
          return A2.add(r3), r3;
        }, disposeResources: async (e3) => {
          e3 instanceof ms && (A2.delete(e3), await e3.dispose());
        } } });
        var l3, u3;
        return void 0 === c3.session.sessionOptions ? m2.delete(r2.sessionId) : m2.set(r2.sessionId, c3.session.sessionOptions), c3;
      }, dispose: async () => {
        let e3;
        for (const t3 of A2) try {
          await t3.dispose();
        } catch (t4) {
          e3 ??= t4;
        }
        A2.clear(), m2.clear(), f2.clear();
        try {
          d2.dispose();
        } catch (t3) {
          e3 ??= t3;
        }
        u2.servingModule.clear();
        try {
          u2.privateInferenceUsage?.dispose();
        } catch (t3) {
          e3 ??= t3;
        }
        try {
          l2?.close();
        } catch (t3) {
          e3 ??= t3;
        }
        try {
          u2.backendClients.dispose();
        } catch (t3) {
          e3 ??= t3;
        }
        if (v2) try {
          w2.dispose();
        } catch (t3) {
          e3 ??= t3;
        }
        if (void 0 !== e3) throw e3;
      } });
      try {
        if (u2.privateInferenceUsage?.start(), true === e2.ownRequestContext) {
          const e3 = h2;
          return Object.assign(S2, { expectRequestContextOverlay(t3) {
            e3.expect(t3);
          }, offerRequestContextOverlay(t3, r2) {
            e3.offer(t3, r2);
          } });
        }
        return S2;
      } catch (e3) {
        try {
          await S2.dispose();
        } catch (t3) {
          throw new AggregateError([e3, t3], "Agent host initialization failed");
        }
        throw e3;
      }
    }
    function ps(e2) {
      if (void 0 !== e2.storageDir) return new Br.DH(e2.storageDir, e2.storageObserver ?? new Jr.Pz({ ...void 0 === e2.hostContext ? {} : { ctx: e2.hostContext }, ...void 0 === e2.metrics ? {} : { metrics: e2.metrics }, ...void 0 === e2.onStorageFault ? {} : { onStorageFault: e2.onStorageFault } }).storageObserver);
    }
    class ms {
      constructor(e2) {
        this.provider = e2;
      }
      register(e2, t2) {
        this.provider.register(e2, t2);
      }
      get(e2) {
        return this.provider.get(e2);
      }
      entries() {
        return this.provider.entries();
      }
      async dispose() {
        await this.provider.dispose?.();
      }
    }
  }