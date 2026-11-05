// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../agent-kv/dist/index.js" range:352762..372170
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "@anysphere/proto/generated/agent/v1/agent_pb";
import * as __dep1 from "@anysphere/proto/generated/agent/v1/todo_tool_pb";
import * as __dep2 from "@anysphere/utils/disposable";
import * as __dep3 from "zod/v4";
import * as __dep4 from "@anysphere/metrics/index";
import * as __dep5 from "@anysphere/context/logger";
import * as __dep6 from "@anysphere/utils/promise-extras";
import * as __dep7 from "@anysphere/context/core";
import * as __dep8 from "@anysphere/context/otel";
import * as __dep9 from "@anysphere/proto/generated/agent/v1/kv_pb";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = __dep4;
const u = new TextDecoder(),
  c = new TextEncoder(),
  l = new class {
    serialize(t) {
      return c.encode(t);
    }
    deserialize(t) {
      return u.decode(t);
    }
    getBlobType() {
      return {
        kind: "string"
      };
    }
  }();
class m {
  constructor(t) {
    this.proto = t;
  }
  serialize(t) {
    return t.toBinary();
  }
  deserialize(t) {
    return this.proto.fromBinary(t);
  }
  getBlobType() {
    return {
      kind: "proto",
      typeName: this.proto.typeName
    };
  }
}
const d = Array.from({
  length: 256
}, (t, r) => r.toString(16).padStart(2, "0"));
function p(t) {
  if ("undefined" != typeof Buffer) return Buffer.from(t).toString("hex");
  let r = "";
  for (let e = 0; e < t.length; e++) r += d[t[e]];
  return r;
}
const f = /^[0-9a-f]*$/;
function h(t) {
  const r = t.trim().toLowerCase();
  if (r.length % 2 != 0) throw new Error("Invalid hex string length");
  if (r.length >= 64 && "undefined" != typeof Buffer) {
    const t = function (t) {
      if (f.test(t)) try {
        const r = new Uint8Array(t.length / 2);
        if (Buffer.from(r.buffer, r.byteOffset, r.byteLength).write(t, "hex") === r.length) return r;
      } catch {}
    }(r);
    if (void 0 !== t) return t;
  }
  const e = new Uint8Array(r.length / 2);
  for (let t = 0; t < r.length; t += 2) e[t / 2] = parseInt(r.slice(t, t + 2), 16);
  return e;
}
function g(t) {
  const r = t.buffer;
  return r instanceof ArrayBuffer ? new Uint8Array(r, t.byteOffset, t.byteLength) : new Uint8Array(t);
}
async function _(t) {
  const r = await crypto.subtle.digest("SHA-256", g(t));
  return new Uint8Array(r);
}
const w = (0, a.v5)("agent_kv.in_memory.get_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore getBlob operations in milliseconds"
  }),
  y = (0, a.v5)("agent_kv.in_memory.set_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore setBlob operations in milliseconds"
  });
class J {
  constructor() {
    this.blobs = new Map();
  }
  getBlob(t, r) {
    const e = performance.now();
    try {
      const t = this.blobs.get(p(r));
      return Promise.resolve(t);
    } finally {
      const r = performance.now() - e;
      w.histogram(t, r);
    }
  }
  setBlob(t, r, e) {
    const n = performance.now();
    try {
      return this.blobs.set(p(r), e), Promise.resolve();
    } finally {
      const r = performance.now() - n;
      y.histogram(t, r);
    }
  }
  setBlobLocallyOnly(t, r, e) {
    return this.setBlob(t, r, e);
  }
  flush(t) {
    return Promise.resolve();
  }
}
class S {
  constructor() {
    this.store = new Map();
  }
  set(t, r) {
    this.store.set(t, r);
  }
  subscribe(t, r) {
    return () => {};
  }
  get(t) {
    const r = this.store.get(t);
    if (void 0 === r) throw new Error(`Key ${String(t)} not found in store`);
    return r;
  }
}
var q = __dep5,
  B = __dep6;
const b = (0, q.h)("@anysphere/agent-kv:subagent-states"),
  P = (0, a.Pu)("agent_kv.subagent_state_ref.missing_blob", {
    description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.",
    labelNames: ["reader", "fallback"]
  });
function I(t, r) {
  b.warn(t, "Subagent state ref blob not found; restoring without its transcript", r), P.increment(t, 1, {
    reader: r.reader,
    fallback: r.fallback
  });
}
async function x(t, r, e) {
  const s = {
      ...(r.subagentStates ?? {})
    },
    i = Object.entries(r.subagentStateRefs ?? {});
  if (0 === i.length) return s;
  const o = await (0, B.PH)(i, async ([r, s]) => {
      const i = await e.getBlob(t, s);
      if (void 0 === i) return {
        kind: "missing",
        subagentId: r,
        blobIdHex: p(s)
      };
      try {
        return {
          kind: "loaded",
          subagentId: r,
          state: n.aK_.fromBinary(i)
        };
      } catch (t) {
        return {
          kind: "failed",
          error: t
        };
      }
    }, {
      max: 8
    }),
    a = o.find(t => "failed" === t.kind);
  if (void 0 !== a && "failed" === a.kind) throw a.error;
  for (const r of o) if ("loaded" === r.kind) s[r.subagentId] = r.state;else if ("missing" === r.kind) {
    const e = void 0 !== s[r.subagentId];
    I(t, {
      reader: "resolve",
      fallback: e ? "inline" : "dropped",
      subagentId: r.subagentId,
      blobIdHex: r.blobIdHex
    });
  }
  return s;
}
const v = ["default", "plan", "debug", "search"],
  R = ["allowlist", "unrestricted", "auto-review"],
  E = /^[0-9a-f]+$/;
function k() {
  const t = new Uint8Array(32);
  return crypto.getRandomValues(t), p(t);
}
function T(t) {
  return "string" == typeof t && 64 === t.length && E.test(t);
}
let C = null;
const U = t => ({
    agentId: t ?? crypto.randomUUID(),
    latestRootBlobId: new Uint8Array(),
    name: "New Agent",
    mode: "default",
    isRunEverything: !1,
    approvalMode: void 0,
    createdAt: Date.now(),
    lastUsedModel: void 0,
    lastDebugServerPort: void 0,
    currentPlanUri: void 0,
    subagentInfo: void 0,
    blobEncryptionKey: k()
  }),
  A = new Set(v),
  $ = new Set(R);
function O(t, r) {
  const e = function (t) {
    return "object" == typeof t && null !== t;
  }(t) && r in t ? t[r] : void 0;
  return "string" == typeof e && e.length > 0 ? e : void 0;
}
class j {
  serialize(t) {
    const r = p(t.latestRootBlobId);
    return l.serialize(JSON.stringify({
      ...t,
      latestRootBlobId: r
    }));
  }
  deserialize(t) {
    const r = JSON.parse(l.deserialize(t)),
      e = U(r.agentId),
      n = "string" == typeof r.latestRootBlobId ? h(r.latestRootBlobId) : e.latestRootBlobId;
    let s = !0 === r.isRunEverything,
      i = r.mode;
    "auto-run" === i && (i = "default", s = !0);
    const a = "string" == typeof i && (u = i, A.has(u)) ? i : "default";
    var u;
    const c = r.approvalMode,
      m = "string" == typeof c && function (t) {
        return $.has(t);
      }(c) ? c : void 0,
      d = function (t) {
        if (!t || "object" != typeof t) return;
        const r = O(t, "parentAgentId"),
          e = O(t, "rootParentAgentId"),
          n = O(t, "toolCallId"),
          s = O(t, "typeName");
        return void 0 !== r && void 0 !== e && void 0 !== n && void 0 !== s ? {
          parentAgentId: r,
          rootParentAgentId: e,
          toolCallId: n,
          typeName: s
        } : void 0;
      }(r.subagentInfo),
      p = T(r.blobEncryptionKey) ? r.blobEncryptionKey : e.blobEncryptionKey;
    return (null === C && (C = o.object({
      agentId: o.string(),
      latestRootBlobId: o.custom(t => t instanceof Uint8Array, {
        error: "Expected Uint8Array"
      }),
      name: o.string(),
      createdAt: o.number(),
      mode: o.enum(v),
      isRunEverything: o.boolean(),
      approvalMode: o.enum(R).optional(),
      lastUsedModel: o.string().optional(),
      lastDebugServerPort: o.number().int().positive().optional(),
      currentPlanUri: o.string().optional(),
      subagentInfo: o.object({
        parentAgentId: o.string().min(1),
        rootParentAgentId: o.string().min(1),
        toolCallId: o.string().min(1),
        typeName: o.string().min(1)
      }).optional(),
      blobEncryptionKey: o.string().optional()
    })), C).parse({
      ...e,
      ...r,
      mode: a,
      isRunEverything: s,
      approvalMode: m,
      latestRootBlobId: n,
      subagentInfo: d,
      blobEncryptionKey: p
    });
  }
  getBlobType() {
    return {
      kind: "json"
    };
  }
}
const M = new m(s.kW),
  D = new m(n.RGk),
  N = new m(n.kJk),
  G = new m(n.cmU),
  L = new m(n.KRq),
  F = new m(n.oIR),
  K = new m(n.qKL);
class z {
  constructor(t, r, e = {}) {
    this.blobStore = t, this.metadataStore = r, this.serde = new m(n.Y9z), this.conversationStateStructure = new n.Y9z(), this.fixedRootBlobId = e.fixedRootBlobId;
  }
  subscribeToMetadata(t, r) {
    return this.metadataStore.subscribe(t, () => {
      r(this.metadataStore.get(t));
    });
  }
  setMetadata(t, r) {
    this.metadataStore.set(t, r);
  }
  getMetadata(t) {
    return this.metadataStore.get(t);
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
  async getLastRequestIdFromConversation(t) {
    const r = this.conversationStateStructure.turns;
    if (0 === r.length) return null;
    for (let e = r.length - 1; e >= 0; e--) {
      const n = r[e],
        s = await this.blobStore.getBlob(t, n);
      if (!s) continue;
      const i = G.deserialize(s);
      if ("agentConversationTurn" === i.turn.case) return i.turn.value.requestId ?? null;
    }
    return null;
  }
  async getFullConversation(t) {
    return this.deserializeConversationStateStructure(t, this.conversationStateStructure);
  }
  async deserializeConversationStateStructure(t, r) {
    return async function (t, r, e) {
      const s = new n.ljj(),
        i = [],
        o = r.turns;
      for (const r of o) {
        const s = await e.getBlob(t, r);
        if (!s) continue;
        const o = G.deserialize(s);
        let a;
        switch (o.turn.case) {
          case "agentConversationTurn":
            {
              const r = o.turn.value,
                s = await e.getBlob(t, r.userMessage);
              if (!s) continue;
              const i = D.deserialize(s),
                u = [];
              for (const n of r.steps) {
                const r = await e.getBlob(t, n);
                if (r) {
                  const t = N.deserialize(r);
                  u.push(t);
                }
              }
              const c = new n.i9c({
                userMessage: i,
                steps: u
              });
              a = new n.j97({
                turn: {
                  case: "agentConversationTurn",
                  value: c
                }
              });
              break;
            }
          case "shellConversationTurn":
            {
              const r = o.turn.value,
                s = await e.getBlob(t, r.shellCommand);
              if (!s) continue;
              const i = F.deserialize(s),
                u = await e.getBlob(t, r.shellOutput);
              if (!u) continue;
              const c = K.deserialize(u),
                l = new n.tms({
                  shellCommand: i,
                  shellOutput: c
                });
              a = new n.j97({
                turn: {
                  case: "shellConversationTurn",
                  value: l
                }
              });
              break;
            }
        }
        a && i.push(a);
      }
      s.turns = i;
      const a = [];
      for (const n of r.todos) {
        const r = await e.getBlob(t, n);
        if (r) {
          const t = M.deserialize(r);
          a.push(t);
        }
      }
      if (s.todos = a, r.summary) {
        const n = await e.getBlob(t, r.summary);
        if (n) {
          const t = L.deserialize(n);
          s.summary = t;
        }
      }
      return s;
    }(t, r, this.blobStore);
  }
  async getFullConversationWithSubagents(t) {
    const r = this.conversationStateStructure,
      e = await this.deserializeConversationStateStructure(t, r),
      n = {},
      s = await x(t, r, this.blobStore);
    for (const [r, e] of Object.entries(s)) if (e.conversationState) {
      const s = await this.deserializeConversationStateStructure(t, e.conversationState);
      n[r] = {
        conversationState: s,
        createdTimestampMs: e.createdTimestampMs,
        lastUsedTimestampMs: e.lastUsedTimestampMs,
        subagentType: e.subagentType
      };
    }
    return {
      conversationState: e,
      subagentStates: n
    };
  }
  getLatestCheckpoint() {
    return this.getConversationStateStructure();
  }
  async handleCheckpoint(t, r) {
    const e = this.serde.serialize(r),
      n = this.fixedRootBlobId ?? (await _(e));
    await this.blobStore.setBlob(t, n, e), this.setMetadata("latestRootBlobId", n), this.conversationStateStructure = r;
  }
  async resetFromDb(t) {
    await this.tryResetFromDb(t);
  }
  async tryResetFromDb(t) {
    try {
      const r = this.getMetadata("latestRootBlobId");
      if (!r || 0 === r.length) return this.conversationStateStructure = new n.Y9z(), !1;
      const e = await this.blobStore.getBlob(t, r);
      if (!e) return this.conversationStateStructure = new n.Y9z(), !1;
      const s = this.serde.deserialize(e);
      return this.conversationStateStructure = s, !0;
    } catch (t) {
      return this.conversationStateStructure = new n.Y9z(), !1;
    }
  }
  async dispose() {
    this.blobStore instanceof i.j && (await this.blobStore.dispose());
  }
}
(0, __dep7.cF)(Symbol("blob-read-kind"), void 0);
class W extends Error {
  constructor(t, r) {
    super(`This conversation's data is missing and can't be restored. Start a new chat to continue.${function (t) {
      if (0 === t.length) return "";
      const r = t.slice(0, 3).map(t => t.slice(0, 12));
      return ` (${1 === t.length ? `missing blob ${r[0]}` : `${t.length} missing blobs: ${r.join(", ")}${t.length > r.length ? ", …" : ""}`})`;
    }(t)}`, void 0 !== r?.cause ? {
      cause: r.cause
    } : void 0), this.isUsageError = !0, this.isBlobNotFound = !0, this.name = "BlobNotFoundError", this.blobIdHexes = [...t];
  }
}
function H(t) {
  return t instanceof Error && (t instanceof W || "isBlobNotFound" in t && !0 === t.isBlobNotFound || "BlobNotFoundError" === t.name);
}
function V(t) {
  let r = t;
  for (let t = 0; t < 10; t++) {
    if (null == r) return;
    if (H(r)) return r;
    if ("object" != typeof r || !("cause" in r)) return;
    r = r.cause;
  }
}
"function" == typeof SuppressedError && SuppressedError, (0, q.h)("@anysphere/agent-kv"), (0, a.v5)("agent_kv.cached.get_blob.duration_ms", {
  description: "Duration of CachedBlobStore getBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.cached.set_blob.duration_ms", {
  description: "Duration of CachedBlobStore setBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.cached.flush.duration_ms", {
  description: "Duration of CachedBlobStore flush operations in milliseconds"
}), (0, a.v5)("agent_kv.cached.cache_bytes", {
  description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush"
}), (0, a.Pu)("agent_kv.cached.get_blob.results", {
  description: "Number of CachedBlobStore getBlob operations by cache result type",
  labelNames: ["cache_type"]
}), (0, a.Pu)("agent_kv.nearby.decrypt_errors", {
  description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)"
});
const Q = (0, a.Pu)("agent_kv.nearby.decrypt_fallback_success", {
    description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob"
  }),
  X = (0, a.v5)("agent_kv.encrypted.get_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore getBlob operations in milliseconds"
  }),
  Y = (0, a.v5)("agent_kv.encrypted.set_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore setBlob operations in milliseconds"
  });
class Z extends Error {
  constructor(t) {
    super("Failed to decrypt nearby blob (encryption key mismatch)", {
      cause: t
    }), this.name = "NearbyBlobDecryptError";
  }
}
class tt {
  constructor(t, r, e = null) {
    this.blobStore = t, this.encryptionKeyStr = r, this.fallbackDecryptKeyStr = e;
  }
  static async deriveKey(t) {
    const r = new TextEncoder().encode(t),
      e = await crypto.subtle.digest("SHA-256", r);
    return crypto.subtle.importKey("raw", e, {
      name: tt.ALGORITHM,
      length: 256
    }, !0, ["encrypt", "decrypt"]);
  }
  async getEncryptionKey() {
    return void 0 === this.encryptionKey && (this.encryptionKey = await tt.deriveKey(this.encryptionKeyStr)), this.encryptionKey;
  }
  async getFallbackDecryptKey() {
    return null === this.fallbackDecryptKeyStr ? null : (void 0 === this.fallbackDecryptKey && (this.fallbackDecryptKey = await tt.deriveKey(this.fallbackDecryptKeyStr)), this.fallbackDecryptKey);
  }
  async getBlob(t, r) {
    const e = performance.now();
    try {
      const e = await this.blobStore.getBlob(t, r);
      if (void 0 === e) return;
      const n = e.slice(0, tt.IV_LENGTH),
        s = e.slice(tt.IV_LENGTH);
      let i;
      try {
        i = await crypto.subtle.decrypt({
          name: tt.ALGORITHM,
          iv: n
        }, await this.getEncryptionKey(), s);
      } catch (r) {
        const e = await this.getFallbackDecryptKey();
        if (null === e) throw new Z(r);
        try {
          i = await crypto.subtle.decrypt({
            name: tt.ALGORITHM,
            iv: n
          }, e, s), Q.increment(t, 1);
        } catch {
          throw new Z(r);
        }
      }
      return new Uint8Array(i);
    } finally {
      const r = performance.now() - e;
      X.histogram(t, r);
    }
  }
  async encryptBlob(t) {
    const r = crypto.getRandomValues(new Uint8Array(tt.IV_LENGTH)),
      e = await crypto.subtle.encrypt({
        name: tt.ALGORITHM,
        iv: r
      }, await this.getEncryptionKey(), g(t)),
      n = new Uint8Array(r.length + e.byteLength);
    return n.set(r, 0), n.set(new Uint8Array(e), r.length), n;
  }
  async setBlob(t, r, e) {
    const n = performance.now();
    try {
      const n = await this.encryptBlob(e);
      await this.blobStore.setBlob(t, r, n);
    } finally {
      const r = performance.now() - n;
      Y.histogram(t, r);
    }
  }
  async setBlobLocallyOnly(t, r, e) {
    const n = performance.now();
    try {
      const n = await this.encryptBlob(e);
      await this.blobStore.setBlobLocallyOnly(t, r, n);
    } finally {
      const r = performance.now() - n;
      Y.histogram(t, r);
    }
  }
  async flush(t) {
    return await this.blobStore.flush(t);
  }
}
tt.ALGORITHM = "AES-GCM", tt.IV_LENGTH = 12;
var rt = __dep8,
  et = __dep9,
  nt = function (t) {
    return function (r) {
      function e(e) {
        r.error = r.hasError ? new t(e, r.error, "An error was suppressed during disposal.") : e, r.hasError = !0;
      }
      var n,
        s = 0;
      return function t() {
        for (; n = r.stack.pop();) try {
          if (!n.async && 1 === s) return s = 0, r.stack.push(n), Promise.resolve().then(t);
          if (n.dispose) {
            var i = n.dispose.call(n.value);
            if (n.async) return s |= 2, Promise.resolve(i).then(t, function (r) {
              return e(r), t();
            });
          } else s |= 1;
        } catch (t) {
          e(t);
        }
        if (1 === s) return r.hasError ? Promise.reject(r.error) : Promise.resolve();
        if (r.hasError) throw r.error;
      }();
    };
  }("function" == typeof SuppressedError ? SuppressedError : function (t, r, e) {
    var n = new Error(e);
    return n.name = "SuppressedError", n.error = t, n.suppressed = r, n;
  });
const st = (0, q.h)("ControlledKvManager");
function it(t, r, e) {
  return t ? (0, rt.F)({
    traceId: t.traceId,
    spanId: t.spanId,
    traceFlags: t.traceFlags ?? 1
  }, r, e) : e;
}
function ot(t, r, e, n, s) {
  s <= e || (0, rt.xd)(t.withName(`${r}.slow`), {
    startTime: n,
    attributes: {
      durationMs: s,
      slowThresholdMs: e
    }
  }, n + s);
}
const at = (0, a.v5)("agent_kv.controlled.get_blob.duration_ms", {
    description: "Duration of ControlledKvManager getBlob operations in milliseconds"
  }),
  ut = (0, a.v5)("agent_kv.controlled.set_blob.duration_ms", {
    description: "Duration of ControlledKvManager setBlob operations in milliseconds"
  });
class ct {
  constructor(t, r, e, n = {}) {
    this.serverStream = t, this.clientStream = r, this.blobStore = e, this.options = n;
  }
  async run(t) {
    const r = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const e = function (t, r, e) {
          if (null != r) {
            if ("object" != typeof r && "function" != typeof r) throw new TypeError("Object expected.");
            var n, s;
            if (e) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = r[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = r[Symbol.dispose], e && (s = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            s && (n = function () {
              try {
                s.call(this);
              } catch (t) {
                return Promise.reject(t);
              }
            }), t.stack.push({
              value: r,
              dispose: n,
              async: e
            });
          } else e && t.stack.push({
            async: !0
          });
          return r;
        }(r, (0, rt.VI)(t.withName("ControlledKvManager.run")), !1).ctx,
        n = new Set(),
        s = t => {
          n.add(t), t.finally(() => {
            n.delete(t);
          });
        };
      try {
        for await (const t of this.serverStream) {
          const r = performance.now(),
            n = Date.now();
          switch (t.message.case) {
            case "getBlobArgs":
              {
                const i = t.message.value.blobId;
                s((async () => {
                  const s = it(t.spanContext, "ControlledKvManager.getBlob", e);
                  try {
                    await this.options.beforeGetBlob?.(s, i);
                    const r = await this.blobStore.getBlob(s, i);
                    await this.clientStream.write(new et.gm({
                      id: t.id,
                      message: {
                        case: "getBlobResult",
                        value: {
                          blobData: r ? g(r) : void 0
                        }
                      }
                    }));
                  } catch (r) {
                    st.error(s, "Error handling getBlob", r);
                    const e = r instanceof Error ? r.message : String(r);
                    try {
                      await this.clientStream.write(new et.gm({
                        id: t.id,
                        message: {
                          case: "getBlobResult",
                          value: {
                            blobData: void 0,
                            error: {
                              message: e
                            }
                          }
                        }
                      }));
                    } catch (t) {
                      st.error(s, "Error writing failed getBlobResult", t);
                    }
                  } finally {
                    const t = performance.now() - r;
                    at.histogram(s, t), ot(s, "ControlledKvManager.getBlob", 50, n, t);
                  }
                })());
                break;
              }
            case "setBlobArgs":
              {
                const i = t.message.value.blobId,
                  o = t.message.value.blobData;
                s((async () => {
                  const s = it(t.spanContext, "ControlledKvManager.setBlob", e);
                  try {
                    await this.blobStore.setBlob(s, i, o), await this.clientStream.write(new et.gm({
                      id: t.id,
                      message: {
                        case: "setBlobResult",
                        value: {
                          error: void 0
                        }
                      }
                    }));
                  } catch (r) {
                    const e = r instanceof Error ? r.message : String(r);
                    try {
                      await this.clientStream.write(new et.gm({
                        id: t.id,
                        message: {
                          case: "setBlobResult",
                          value: {
                            error: {
                              message: e
                            }
                          }
                        }
                      }));
                    } catch (t) {
                      st.error(s, "Error writing setBlobResult", t);
                    }
                  } finally {
                    const t = performance.now() - r;
                    ut.histogram(s, t), ot(s, "ControlledKvManager.setBlob", 100, n, t);
                  }
                })());
                break;
              }
          }
        }
      } finally {
        await Promise.allSettled(n);
      }
    } catch (t) {
      r.error = t, r.hasError = !0;
    } finally {
      nt(r);
    }
  }
}
"function" == typeof SuppressedError && SuppressedError, (0, q.h)("@anysphere/agent-kv"), (0, a.v5)("agent_kv.writethrough.get_blob.duration_ms", {
  description: "Duration of WritethroughBlobStore getBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.writethrough.set_blob.duration_ms", {
  description: "Duration of WritethroughBlobStore setBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.writethrough.flush.duration_ms", {
  description: "Duration of WritethroughBlobStore flush operations in milliseconds"
}), Symbol.for("anysphere.blobMetadataCallback"), (0, q.h)("@anysphere/agent-kv:reference"), (0, a.Pu)("agent_kv.lazy_reference.cache_miss", {
  description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob",
  labelNames: ["blob_type"]
}), (0, a.v5)("agent_kv.lazy_reference.deserialize_bytes", {
  description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss",
  labelNames: ["blob_type"]
}), (0, a.v5)("agent_kv.lazy_reference.deserialize_ms", {
  description: "Time spent deserializing a blob on a large or slow LazyReference cache miss",
  labelNames: ["blob_type"]
}), "function" == typeof SuppressedError && SuppressedError, (0, q.h)("RetryBlobStore"), (0, a.Pu)("agent_kv.retry.retries", {
  description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)",
  labelNames: ["operation", "outcome"]
}), (0, a.v5)("agent_kv.retry.get_blob.duration_ms", {
  description: "Duration of RetryBlobStore getBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.retry.set_blob.duration_ms", {
  description: "Duration of RetryBlobStore setBlob operations in milliseconds"
}), (0, a.v5)("agent_kv.retry.set_blob_locally_only.duration_ms", {
  description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds"
}), (0, a.v5)("agent_kv.retry.flush.duration_ms", {
  description: "Duration of RetryBlobStore flush operations in milliseconds"
});
export { j as aY, z as pH, ct as hC, J as ve, S as We, V as y_, h as aD, _ as Bk, U as sh, T as TU, x as Vn, p as nj };
