// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 27322 range:4746612..4778101
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27322: (e, t, r) => {
    "use strict";
    r.d(t, { pH: () => x, Bc: () => B, hC: () => K, aq: () => de, ve: () => i.ve, We: () => i.We, wf: () => pe, cm: () => a.cm, iE: () => ue, l9: () => ne, y_: () => M, aD: () => a.aD, Bk: () => i.Bk, Yy: () => oe, sh: () => _, d_: () => i.d_, h4: () => q, TU: () => v, n: () => m, nk: () => a.nk, nj: () => a.nj, Fo: () => i.Fo, bO: () => a.bO, CI: () => R });
    var n = r(69584), s = r(76222);
    class o {
    }
    var i = r(47030), a = r(20600), c = r(37949), l = r(46144), u = r(65716);
    const d = (0, c.h)("@anysphere/agent-kv:subagent-states"), p = (0, l.Pu)("agent_kv.subagent_state_ref.missing_blob", { description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.", labelNames: ["reader", "fallback"] });
    function m(e2, t2) {
      d.warn(e2, "Subagent state ref blob not found; restoring without its transcript", t2), p.increment(e2, 1, { reader: t2.reader, fallback: t2.fallback });
    }
    const h = ["default", "plan", "debug", "search"], f = ["allowlist", "unrestricted", "auto-review"], g = 32, y = /^[0-9a-f]+$/;
    function w() {
      const e2 = new Uint8Array(g);
      return crypto.getRandomValues(e2), (0, a.nj)(e2);
    }
    function v(e2) {
      return "string" == typeof e2 && e2.length === 2 * g && y.test(e2);
    }
    const _ = (e2) => ({ agentId: e2 ?? crypto.randomUUID(), latestRootBlobId: new Uint8Array(), name: "New Agent", mode: "default", isRunEverything: false, approvalMode: void 0, createdAt: Date.now(), lastUsedModel: void 0, lastDebugServerPort: void 0, currentPlanUri: void 0, subagentInfo: void 0, blobEncryptionKey: w() });
    new Set(h);
    new Set(f);
    const A = new a.cm(s.kW), S = new a.cm(n.RGk), b = new a.cm(n.kJk), E = new a.cm(n.cmU), I = new a.cm(n.KRq), C = new a.cm(n.oIR), k = new a.cm(n.qKL);
    class x {
      constructor(e2, t2, r2 = {}) {
        this.blobStore = e2, this.metadataStore = t2, this.serde = new a.cm(n.Y9z), this.conversationStateStructure = new n.Y9z(), this.fixedRootBlobId = r2.fixedRootBlobId;
      }
      subscribeToMetadata(e2, t2) {
        return this.metadataStore.subscribe(e2, () => {
          t2(this.metadataStore.get(e2));
        });
      }
      setMetadata(e2, t2) {
        this.metadataStore.set(e2, t2);
      }
      getMetadata(e2) {
        return this.metadataStore.get(e2);
      }
      getId() {
        return this.getMetadata("agentId");
      }
      getBlobStore() {
        return this.blobStore;
      }
      getConversationStateStructure() {
        return this.conversationStateStructure;
      }
      async getLastRequestIdFromConversation(e2) {
        const t2 = this.conversationStateStructure.turns;
        if (0 === t2.length) return null;
        for (let r2 = t2.length - 1; r2 >= 0; r2--) {
          const n2 = t2[r2], s2 = await this.blobStore.getBlob(e2, n2);
          if (!s2) continue;
          const o2 = E.deserialize(s2);
          if ("agentConversationTurn" === o2.turn.case) {
            return o2.turn.value.requestId ?? null;
          }
        }
        return null;
      }
      async getFullConversation(e2) {
        return this.deserializeConversationStateStructure(e2, this.conversationStateStructure);
      }
      async deserializeConversationStateStructure(e2, t2) {
        return (async function(e3, t3, r2) {
          const s2 = new n.ljj(), o2 = [], i2 = t3.turns;
          for (const t4 of i2) {
            const s3 = await r2.getBlob(e3, t4);
            if (!s3) continue;
            const i3 = E.deserialize(s3);
            let a3;
            switch (i3.turn.case) {
              case "agentConversationTurn": {
                const t5 = i3.turn.value, s4 = await r2.getBlob(e3, t5.userMessage);
                if (!s4) continue;
                const o3 = S.deserialize(s4), c2 = [];
                for (const n2 of t5.steps) {
                  const t6 = await r2.getBlob(e3, n2);
                  if (t6) {
                    const e4 = b.deserialize(t6);
                    c2.push(e4);
                  }
                }
                const l2 = new n.i9c({ userMessage: o3, steps: c2 });
                a3 = new n.j97({ turn: { case: "agentConversationTurn", value: l2 } });
                break;
              }
              case "shellConversationTurn": {
                const t5 = i3.turn.value, s4 = await r2.getBlob(e3, t5.shellCommand);
                if (!s4) continue;
                const o3 = C.deserialize(s4), c2 = await r2.getBlob(e3, t5.shellOutput);
                if (!c2) continue;
                const l2 = k.deserialize(c2), u2 = new n.tms({ shellCommand: o3, shellOutput: l2 });
                a3 = new n.j97({ turn: { case: "shellConversationTurn", value: u2 } });
                break;
              }
            }
            a3 && o2.push(a3);
          }
          s2.turns = o2;
          const a2 = [];
          for (const n2 of t3.todos) {
            const t4 = await r2.getBlob(e3, n2);
            if (t4) {
              const e4 = A.deserialize(t4);
              a2.push(e4);
            }
          }
          if (s2.todos = a2, t3.summary) {
            const n2 = await r2.getBlob(e3, t3.summary);
            if (n2) {
              const e4 = I.deserialize(n2);
              s2.summary = e4;
            }
          }
          return s2;
        })(e2, t2, this.blobStore);
      }
      async getFullConversationWithSubagents(e2) {
        const t2 = this.conversationStateStructure, r2 = await this.deserializeConversationStateStructure(e2, t2), s2 = {}, o2 = await (async function(e3, t3, r3) {
          const s3 = { ...t3.subagentStates ?? {} }, o3 = Object.entries(t3.subagentStateRefs ?? {});
          if (0 === o3.length) return s3;
          const i2 = await (0, u.PH)(o3, async ([t4, s4]) => {
            const o4 = await r3.getBlob(e3, s4);
            if (void 0 === o4) return { kind: "missing", subagentId: t4, blobIdHex: (0, a.nj)(s4) };
            try {
              return { kind: "loaded", subagentId: t4, state: n.aK_.fromBinary(o4) };
            } catch (e4) {
              return { kind: "failed", error: e4 };
            }
          }, { max: 8 }), c2 = i2.find((e4) => "failed" === e4.kind);
          if (void 0 !== c2 && "failed" === c2.kind) throw c2.error;
          for (const t4 of i2) if ("loaded" === t4.kind) s3[t4.subagentId] = t4.state;
          else if ("missing" === t4.kind) {
            const r4 = void 0 !== s3[t4.subagentId];
            m(e3, { reader: "resolve", fallback: r4 ? "inline" : "dropped", subagentId: t4.subagentId, blobIdHex: t4.blobIdHex });
          }
          return s3;
        })(e2, t2, this.blobStore);
        for (const [t3, r3] of Object.entries(o2)) if (r3.conversationState) {
          const n2 = await this.deserializeConversationStateStructure(e2, r3.conversationState);
          s2[t3] = { conversationState: n2, createdTimestampMs: r3.createdTimestampMs, lastUsedTimestampMs: r3.lastUsedTimestampMs, subagentType: r3.subagentType };
        }
        return { conversationState: r2, subagentStates: s2 };
      }
      getLatestCheckpoint() {
        return this.getConversationStateStructure();
      }
      async handleCheckpoint(e2, t2) {
        const r2 = this.serde.serialize(t2), n2 = this.fixedRootBlobId ?? await (0, i.Bk)(r2);
        await this.blobStore.setBlob(e2, n2, r2), this.setMetadata("latestRootBlobId", n2), this.conversationStateStructure = t2;
      }
      async resetFromDb(e2) {
        await this.tryResetFromDb(e2);
      }
      async tryResetFromDb(e2) {
        try {
          const t2 = this.getMetadata("latestRootBlobId");
          if (!t2 || 0 === t2.length) return this.conversationStateStructure = new n.Y9z(), false;
          const r2 = await this.blobStore.getBlob(e2, t2);
          if (!r2) return this.conversationStateStructure = new n.Y9z(), false;
          const s2 = this.serde.deserialize(r2);
          return this.conversationStateStructure = s2, true;
        } catch (e3) {
          return this.conversationStateStructure = new n.Y9z(), false;
        }
      }
      async dispose() {
        this.blobStore instanceof o && await this.blobStore.dispose();
      }
    }
    const T = (0, r(33002).cF)(/* @__PURE__ */ Symbol("blob-read-kind"), void 0);
    function R(e2, t2) {
      return e2.get(T) === t2 ? e2 : e2.with(T, t2);
    }
    class B extends Error {
      constructor(e2, t2) {
        super(`This conversation's data is missing and can't be restored. Start a new chat to continue.${(function(e3) {
          if (0 === e3.length) return "";
          const t3 = e3.slice(0, 3).map((e4) => e4.slice(0, 12));
          return ` (${1 === e3.length ? `missing blob ${t3[0]}` : `${e3.length} missing blobs: ${t3.join(", ")}${e3.length > t3.length ? ", …" : ""}`})`;
        })(e2)}`, void 0 !== t2?.cause ? { cause: t2.cause } : void 0), this.isUsageError = true, this.isBlobNotFound = true, this.name = "BlobNotFoundError", this.blobIdHexes = [...e2];
      }
    }
    const P = 10;
    function J(e2) {
      return e2 instanceof Error && (e2 instanceof B || true === e2.isBlobNotFound || "BlobNotFoundError" === e2.name);
    }
    function M(e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < P; e3++) {
        if (null == t2) return;
        if (J(t2)) return t2;
        if ("object" != typeof t2 || !("cause" in t2)) return;
        t2 = t2.cause;
      }
    }
    function q(e2) {
      return void 0 !== M(e2);
    }
    "function" == typeof SuppressedError && SuppressedError;
    (0, c.h)("@anysphere/agent-kv"), (0, l.v5)("agent_kv.cached.get_blob.duration_ms", { description: "Duration of CachedBlobStore getBlob operations in milliseconds" }), (0, l.v5)("agent_kv.cached.set_blob.duration_ms", { description: "Duration of CachedBlobStore setBlob operations in milliseconds" }), (0, l.v5)("agent_kv.cached.flush.duration_ms", { description: "Duration of CachedBlobStore flush operations in milliseconds" }), (0, l.v5)("agent_kv.cached.cache_bytes", { description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush" }), (0, l.Pu)("agent_kv.cached.get_blob.results", { description: "Number of CachedBlobStore getBlob operations by cache result type", labelNames: ["cache_type"] }), (0, l.Pu)("agent_kv.nearby.decrypt_errors", { description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)" });
    const D = (0, l.Pu)("agent_kv.nearby.decrypt_fallback_success", { description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob" }), O = (0, l.v5)("agent_kv.encrypted.get_blob.duration_ms", { description: "Duration of EncryptedBlobStore getBlob operations in milliseconds" }), N = (0, l.v5)("agent_kv.encrypted.set_blob.duration_ms", { description: "Duration of EncryptedBlobStore setBlob operations in milliseconds" });
    class F extends Error {
      constructor(e2) {
        super("Failed to decrypt nearby blob (encryption key mismatch)", { cause: e2 }), this.name = "NearbyBlobDecryptError";
      }
    }
    class U {
      constructor(e2, t2, r2 = null) {
        this.blobStore = e2, this.encryptionKeyStr = t2, this.fallbackDecryptKeyStr = r2;
      }
      static async deriveKey(e2) {
        const t2 = new TextEncoder().encode(e2), r2 = await crypto.subtle.digest("SHA-256", t2);
        return crypto.subtle.importKey("raw", r2, { name: U.ALGORITHM, length: 256 }, true, ["encrypt", "decrypt"]);
      }
      async getEncryptionKey() {
        return void 0 === this.encryptionKey && (this.encryptionKey = await U.deriveKey(this.encryptionKeyStr)), this.encryptionKey;
      }
      async getFallbackDecryptKey() {
        return null === this.fallbackDecryptKeyStr ? null : (void 0 === this.fallbackDecryptKey && (this.fallbackDecryptKey = await U.deriveKey(this.fallbackDecryptKeyStr)), this.fallbackDecryptKey);
      }
      async getBlob(e2, t2) {
        const r2 = performance.now();
        try {
          const r3 = await this.blobStore.getBlob(e2, t2);
          if (void 0 === r3) return;
          const n2 = r3.slice(0, U.IV_LENGTH), s2 = r3.slice(U.IV_LENGTH);
          let o2;
          try {
            o2 = await crypto.subtle.decrypt({ name: U.ALGORITHM, iv: n2 }, await this.getEncryptionKey(), s2);
          } catch (t3) {
            const r4 = await this.getFallbackDecryptKey();
            if (null === r4) throw new F(t3);
            try {
              o2 = await crypto.subtle.decrypt({ name: U.ALGORITHM, iv: n2 }, r4, s2), D.increment(e2, 1);
            } catch {
              throw new F(t3);
            }
          }
          return new Uint8Array(o2);
        } finally {
          const t3 = performance.now() - r2;
          O.histogram(e2, t3);
        }
      }
      async encryptBlob(e2) {
        const t2 = crypto.getRandomValues(new Uint8Array(U.IV_LENGTH)), r2 = await crypto.subtle.encrypt({ name: U.ALGORITHM, iv: t2 }, await this.getEncryptionKey(), (0, i.Fo)(e2)), n2 = new Uint8Array(t2.length + r2.byteLength);
        return n2.set(t2, 0), n2.set(new Uint8Array(r2), t2.length), n2;
      }
      async setBlob(e2, t2, r2) {
        const n2 = performance.now();
        try {
          const n3 = await this.encryptBlob(r2);
          await this.blobStore.setBlob(e2, t2, n3);
        } finally {
          const t3 = performance.now() - n2;
          N.histogram(e2, t3);
        }
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        const n2 = performance.now();
        try {
          const n3 = await this.encryptBlob(r2);
          await this.blobStore.setBlobLocallyOnly(e2, t2, n3);
        } finally {
          const t3 = performance.now() - n2;
          N.histogram(e2, t3);
        }
      }
      async flush(e2) {
        return await this.blobStore.flush(e2);
      }
    }
    U.ALGORITHM = "AES-GCM", U.IV_LENGTH = 12;
    var L = r(98875), $ = r(54386), Q = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, j = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const G = (0, c.h)("ControlledKvManager");
    function H(e2, t2, r2) {
      return e2 ? (0, L.F)({ traceId: e2.traceId, spanId: e2.spanId, traceFlags: e2.traceFlags ?? 1 }, t2, r2) : r2;
    }
    function z(e2, t2, r2, n2, s2) {
      s2 <= r2 || (0, L.xd)(e2.withName(`${t2}.slow`), { startTime: n2, attributes: { durationMs: s2, slowThresholdMs: r2 } }, n2 + s2);
    }
    const W = (0, l.v5)("agent_kv.controlled.get_blob.duration_ms", { description: "Duration of ControlledKvManager getBlob operations in milliseconds" }), V = (0, l.v5)("agent_kv.controlled.set_blob.duration_ms", { description: "Duration of ControlledKvManager setBlob operations in milliseconds" });
    class K {
      constructor(e2, t2, r2, n2 = {}) {
        this.serverStream = e2, this.clientStream = t2, this.blobStore = r2, this.options = n2;
      }
      async run(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = Q(t2, (0, L.VI)(e2.withName("ControlledKvManager.run")), false).ctx, n2 = /* @__PURE__ */ new Set(), s2 = (e3) => {
            n2.add(e3), e3.finally(() => {
              n2.delete(e3);
            });
          };
          try {
            for await (const e3 of this.serverStream) {
              const t3 = performance.now(), n3 = Date.now();
              switch (e3.message.case) {
                case "getBlobArgs": {
                  const o2 = e3.message.value.blobId;
                  s2((async () => {
                    const s3 = H(e3.spanContext, "ControlledKvManager.getBlob", r2);
                    try {
                      await this.options.beforeGetBlob?.(s3, o2);
                      const t4 = await this.blobStore.getBlob(s3, o2);
                      await this.clientStream.write(new $.gm({ id: e3.id, message: { case: "getBlobResult", value: { blobData: t4 ? (0, i.Fo)(t4) : void 0 } } }));
                    } catch (t4) {
                      G.error(s3, "Error handling getBlob", t4);
                      const r3 = t4 instanceof Error ? t4.message : String(t4);
                      try {
                        await this.clientStream.write(new $.gm({ id: e3.id, message: { case: "getBlobResult", value: { blobData: void 0, error: { message: r3 } } } }));
                      } catch (e4) {
                        G.error(s3, "Error writing failed getBlobResult", e4);
                      }
                    } finally {
                      const e4 = performance.now() - t3;
                      W.histogram(s3, e4), z(s3, "ControlledKvManager.getBlob", 50, n3, e4);
                    }
                  })());
                  break;
                }
                case "setBlobArgs": {
                  const o2 = e3.message.value.blobId, i2 = e3.message.value.blobData;
                  s2((async () => {
                    const s3 = H(e3.spanContext, "ControlledKvManager.setBlob", r2);
                    try {
                      await this.blobStore.setBlob(s3, o2, i2), await this.clientStream.write(new $.gm({ id: e3.id, message: { case: "setBlobResult", value: { error: void 0 } } }));
                    } catch (t4) {
                      const r3 = t4 instanceof Error ? t4.message : String(t4);
                      try {
                        await this.clientStream.write(new $.gm({ id: e3.id, message: { case: "setBlobResult", value: { error: { message: r3 } } } }));
                      } catch (e4) {
                        G.error(s3, "Error writing setBlobResult", e4);
                      }
                    } finally {
                      const e4 = performance.now() - t3;
                      V.histogram(s3, e4), z(s3, "ControlledKvManager.setBlob", 100, n3, e4);
                    }
                  })());
                  break;
                }
              }
            }
          } finally {
            await Promise.allSettled(n2);
          }
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          j(t2);
        }
      }
    }
    var Y = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Z = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const X = (0, c.h)("@anysphere/agent-kv"), ee = (0, l.v5)("agent_kv.writethrough.get_blob.duration_ms", { description: "Duration of WritethroughBlobStore getBlob operations in milliseconds" }), te = (0, l.v5)("agent_kv.writethrough.set_blob.duration_ms", { description: "Duration of WritethroughBlobStore setBlob operations in milliseconds" }), re = (0, l.v5)("agent_kv.writethrough.flush.duration_ms", { description: "Duration of WritethroughBlobStore flush operations in milliseconds" });
    class ne {
      constructor(e2, t2) {
        this.primaryStore = e2, this.secondaryStore = t2;
      }
      async getBlob(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = Y(r2, (0, L.VI)(e2.withName("WritethroughBlobStore.getBlob")), false), s2 = performance.now();
          try {
            return await this.primaryStore.getBlob(n2.ctx, t2);
          } finally {
            const t3 = performance.now() - s2;
            ee.histogram(e2, t3);
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Z(r2);
        }
      }
      async setBlob(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = Y(n2, (0, L.VI)(e2.withName("WritethroughBlobStore.setBlob")), false), o2 = performance.now();
          try {
            await this.writeBothStores(s2.ctx, t2, r2, { awaitSecondary: false });
          } finally {
            const t3 = performance.now() - o2;
            te.histogram(e2, t3);
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Z(n2);
        }
      }
      async setBlobAwaitingSecondary(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = Y(n2, (0, L.VI)(e2.withName("WritethroughBlobStore.setBlobAwaitingSecondary")), false), o2 = performance.now();
          try {
            await this.writeBothStores(s2.ctx, t2, r2, { awaitSecondary: true });
          } finally {
            const t3 = performance.now() - o2;
            te.histogram(e2, t3);
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Z(n2);
        }
      }
      async writeBothStores(e2, t2, r2, n2) {
        const s2 = this.primaryStore.setBlob(e2, t2, r2), o2 = this.secondaryStore.setBlob(e2, t2, r2).catch((t3) => {
          X.error(e2, "Secondary store write failed in WritethroughBlobStore", t3);
        });
        await s2, n2.awaitSecondary && (await o2, await this.secondaryStore.flush(e2).catch((t3) => {
          X.error(e2, "Secondary store flush failed in WritethroughBlobStore.setBlobAwaitingSecondary", t3);
        }));
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = Y(n2, (0, L.VI)(e2.withName("WritethroughBlobStore.setBlobLocallyOnly")), false);
          return this.setBlob(s2.ctx, t2, r2);
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Z(n2);
        }
      }
      async flush(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = Y(t2, (0, L.VI)(e2.withName("WritethroughBlobStore.flush")), false), n2 = performance.now();
          try {
            const e3 = this.primaryStore.flush(r2.ctx);
            this.secondaryStore.flush(r2.ctx).catch((e4) => {
              X.error(r2.ctx, "Secondary store flush failed in WritethroughBlobStore", e4);
            });
            await e3;
          } finally {
            const t3 = performance.now() - n2;
            re.histogram(e2, t3);
          }
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Z(t2);
        }
      }
      isBlobDurable(e2) {
        return this.primaryStore.isBlobDurable?.(e2) ?? true;
      }
    }
    const se = /* @__PURE__ */ Symbol.for("anysphere.blobMetadataCallback");
    function oe(e2) {
      if (se in e2) return e2[se];
    }
    const ie = (0, c.h)("@anysphere/agent-kv:reference"), ae = (0, l.Pu)("agent_kv.lazy_reference.cache_miss", { description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob", labelNames: ["blob_type"] }), ce = (0, l.v5)("agent_kv.lazy_reference.deserialize_bytes", { description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss", labelNames: ["blob_type"] }), le = (0, l.v5)("agent_kv.lazy_reference.deserialize_ms", { description: "Time spent deserializing a blob on a large or slow LazyReference cache miss", labelNames: ["blob_type"] });
    class ue {
    }
    class de {
      constructor(e2, t2, r2) {
        this.serde = e2, this.blobStore = t2, this.lastWrittenValue = void 0, this.value = r2;
      }
      get(e2) {
        return Promise.resolve(this.value);
      }
      set(e2) {
        this.value = e2;
      }
      async writeToBlobStore(e2) {
        if (this.value instanceof ue) return this.value.writeToBlobStore(e2);
        if (this.value === this.lastWrittenValue?.value) return (0, i.d_)(this.blobStore, this.lastWrittenValue.blobId) || await this.blobStore.setBlob(e2, this.lastWrittenValue.blobId, this.lastWrittenValue.blobData), this.lastWrittenValue.blobId;
        const t2 = this.serde.serialize(this.value), r2 = await (0, i.Bk)(t2), n2 = oe(this.blobStore), s2 = this.serde.getBlobType?.();
        return n2 && s2 && n2({ blobId: r2, blobType: s2 }), await this.blobStore.setBlob(e2, r2, t2), this.lastWrittenValue = { value: this.value, blobId: r2, blobData: t2 }, r2;
      }
    }
    class pe {
      constructor(e2, t2, r2) {
        this.serde = e2, this.blobStore = t2, this.blobId = r2, this.valuePromise = void 0, this.lastWrittenValue = void 0, this.lastWrittenBlobData = void 0;
      }
      async get(e2) {
        if (void 0 === this.valuePromise) {
          const t2 = (function(e3) {
            const t3 = e3.getBlobType?.();
            if (void 0 === t3) return "unknown";
            switch (t3.kind) {
              case "proto":
                return t3.typeName;
              case "json":
                return "json";
              case "string":
                return "string";
              case "image":
                return `image:${t3.mimeType}`;
              case "file":
                return t3.mimeType ? `file:${t3.mimeType}` : "file";
              default:
                return t3;
            }
          })(this.serde), r2 = (function(e3, t3) {
            return void 0 === e3.get(T) ? e3.with(T, t3) : e3;
          })(e2, "lazy_reference");
          this.valuePromise = this.blobStore.getBlob(r2, this.blobId).then((r3) => {
            if (void 0 === r3) throw new B([(0, a.nj)(this.blobId)]);
            const n2 = performance.now(), s2 = this.serde.deserialize(r3);
            this.lastWrittenBlobData = r3;
            const o2 = performance.now() - n2;
            return (r3.byteLength >= 524288 || o2 >= 100) && (ae.increment(e2, 1, { blob_type: t2 }), ce.histogram(e2, r3.byteLength, { blob_type: t2 }), le.histogram(e2, o2, { blob_type: t2 }), ie.warn(e2, "Large lazy reference deserialize", { blobType: t2, blobBytes: r3.byteLength, deserializeDurationMs: o2 })), s2;
          }), this.valuePromise.then((e3) => {
            this.lastWrittenValue = e3;
          }, () => {
          });
        }
        return this.valuePromise;
      }
      set(e2) {
        this.valuePromise = Promise.resolve(e2);
      }
      async writeToBlobStore(e2) {
        if (void 0 === this.valuePromise) return this.blobId;
        const t2 = await this.get(e2);
        if (t2 instanceof ue) return t2.writeToBlobStore(e2);
        if (t2 === this.lastWrittenValue) return void 0 === this.lastWrittenBlobData || (0, i.d_)(this.blobStore, this.blobId) || await this.blobStore.setBlob(e2, this.blobId, this.lastWrittenBlobData), this.blobId;
        const r2 = this.serde.serialize(t2), n2 = await (0, i.Bk)(r2), s2 = oe(this.blobStore), o2 = this.serde.getBlobType?.();
        return s2 && o2 && s2({ blobId: n2, blobType: o2 }), await this.blobStore.setBlob(e2, n2, r2), this.lastWrittenValue = t2, this.lastWrittenBlobData = r2, this.blobId = n2, n2;
      }
    }
    "function" == typeof SuppressedError && SuppressedError;
    (0, c.h)("RetryBlobStore"), (0, l.Pu)("agent_kv.retry.retries", { description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)", labelNames: ["operation", "outcome"] }), (0, l.v5)("agent_kv.retry.get_blob.duration_ms", { description: "Duration of RetryBlobStore getBlob operations in milliseconds" }), (0, l.v5)("agent_kv.retry.set_blob.duration_ms", { description: "Duration of RetryBlobStore setBlob operations in milliseconds" }), (0, l.v5)("agent_kv.retry.set_blob_locally_only.duration_ms", { description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds" }), (0, l.v5)("agent_kv.retry.flush.duration_ms", { description: "Duration of RetryBlobStore flush operations in milliseconds" });
  }