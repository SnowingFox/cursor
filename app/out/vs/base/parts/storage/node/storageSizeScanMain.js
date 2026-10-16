/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f587a4e-a541-52e4-aa87-3f708aabe972");
  } catch (e2) {
  }
})();
var COMPOSER_CONVERSATION_STATE_KV_PREFIX = "composerConversationState:", COMPOSER_HEADER_LOG_KV_PREFIX = "composerConvHeaders:", STORAGE_KV_PREFIX_CATEGORIES = [{ id: "agentBlobs", prefixes: ["agentKv:blob:"] }, { id: "agentCheckpoints", prefixes: ["agentKv:checkpoint:", "agentKv:bubbleCheckpoint:"] }, { id: "agentArtifacts", prefixes: ["agentKv:artifact:"] }, { id: "chats", prefixes: ["composerData:", COMPOSER_CONVERSATION_STATE_KV_PREFIX, COMPOSER_HEADER_LOG_KV_PREFIX] }, { id: "messages", prefixes: ["bubbleId:"] }, { id: "checkpoints", prefixes: ["checkpointId:"] }, { id: "diffs", prefixes: ["codeBlockPartialInlineDiffFates:", "codeBlockDiff:", "inlineDiffUndoRedo", "inlineDiff"] }, { id: "cloudAgents", prefixes: ["bcCachedDetails:", "cloudAgent:"] }], STORAGE_CATEGORY_META = { chats: { label: "Chat conversations", description: "Per-chat composerData payloads and optional composerConversationState sidecars" }, messages: { label: "Chat messages", description: "Per-bubble message bodies (bubbleId:*)" }, agentBlobs: { label: "Agent blobs", description: "Conversation-state blobs (agentKv:blob:*)" }, agentCheckpoints: { label: "Agent checkpoints", description: "Turn and bubble checkpoints (agentKv:checkpoint:* / bubbleCheckpoint:*)" }, agentArtifacts: { label: "Agent artifacts", description: "Persisted agent artifacts (agentKv:artifact:*)" }, checkpoints: { label: "File checkpoints", description: "Composer file checkpoints (checkpointId:*)" }, diffs: { label: "Code diffs", description: "Inline diffs, code-block diffs, and undo/redo snapshots" }, cloudAgents: { label: "Cloud agents", description: "Cached cloud-agent details and metadata" }, composerIndex: { label: "Chat index", description: "Composer header collection and composer.* ItemTable keys" }, settings: { label: "Settings & state", description: "VS Code / Cursor ItemTable keys (window state, auth, UI)" }, otherKv: { label: "Other KV data", description: "cursorDiskKV keys that do not match a known prefix" }, wal: { label: "Write-ahead log", description: "SQLite WAL sidecar; checkpointed on close or vacuum" }, sqliteOverhead: { label: "SQLite overhead", description: "B-tree, indexes, and page rounding not counted in value lengths" }, sqliteFree: { label: "Reclaimable free space", description: "Freelist pages incremental vacuum can return to the OS" } }, STORAGE_CATEGORY_DISPLAY_ORDER = ["chats", "messages", "agentBlobs", "agentCheckpoints", "agentArtifacts", "checkpoints", "diffs", "cloudAgents", "composerIndex", "settings", "otherKv", "sqliteOverhead", "wal", "sqliteFree"], DISPLAY_ORDER_INDEX = new Map(STORAGE_CATEGORY_DISPLAY_ORDER.map((e, t) => [e, t])), STORAGE_SIZE_CONTENT_PHASES = STORAGE_CATEGORY_DISPLAY_ORDER.filter((e) => e !== "wal" && e !== "sqliteFree" && e !== "sqliteOverhead"), STORAGE_SIZE_FAST_KV_CATEGORY_IDS = ["cloudAgents", "diffs", "checkpoints", "agentArtifacts", "agentCheckpoints"], STORAGE_SIZE_KV_CATEGORY_IDS = ["chats", "messages", "agentBlobs", "otherKv"], STORAGE_SIZE_CHEAP_PHASES = ["settings", "composerIndex", ...STORAGE_SIZE_FAST_KV_CATEGORY_IDS], STORAGE_SIZE_IPC_PHASES = [...STORAGE_SIZE_CHEAP_PHASES, ...STORAGE_SIZE_KV_CATEGORY_IDS], STORAGE_SIZE_BREAKDOWN_CACHE_TTL_MS = 3600 * 1e3, MB = 1024 * 1024;
function emptyStorageSizeBreakdown() {
  return { fileBytes: 0, walBytes: 0, freeBytes: 0, categories: [] };
}
function isStorageSizeCategoryId(e) {
  return Object.prototype.hasOwnProperty.call(STORAGE_CATEGORY_META, e);
}
function buildKvRowBytesSql() {
  return "LENGTH(key) + COALESCE(LENGTH(value), 0)";
}
var STORAGE_SIZE_ISOLATE_SCAN_MIN_FILE_BYTES = 512 * 1024 * 1024, STORAGE_SIZE_KV_SCAN_TIMEOUT_MS = 900 * 1e3;
function buildKvCategoryWhereSql(e, t) {
  const s = STORAGE_KV_PREFIX_CATEGORIES.flatMap((n) => n.prefixes.map((i) => `${e} GLOB '${escapeSqlGlobLiteral(i)}*'`));
  if (t === "otherKv") return s.length === 0 ? "1" : `NOT (${s.join(" OR ")})`;
  const a = STORAGE_KV_PREFIX_CATEGORIES.find((n) => n.id === t);
  if (a) return a.prefixes.map((n) => `${e} GLOB '${escapeSqlGlobLiteral(n)}*'`).join(" OR ");
}
function escapeSqlGlobLiteral(e) {
  return e.replaceAll("'", "''").replaceAll("[", "[[]").replaceAll("*", "[*]").replaceAll("?", "[?]");
}
function wrapSqlite3Database(e) {
  return { get: (t, s = []) => new Promise((a, n) => {
    e.get(t, s, (i, o) => {
      if (i) return n(i);
      a(o);
    });
  }), exec: (t) => new Promise((s, a) => {
    e.exec(t, (n) => {
      if (n) return a(n);
      s();
    });
  }), close: () => new Promise((t) => {
    e.close(() => t());
  }) };
}
async function measureExactKvCategory(e, t) {
  const s = buildKvCategoryWhereSql("key", t);
  if (!s) return { id: t, bytes: 0, keyCount: 0 };
  const a = await e.get(`SELECT COUNT(*) AS keyCount, COALESCE(SUM(${buildKvRowBytesSql()}), 0) AS bytes FROM cursorDiskKV WHERE ${s}`);
  return { id: t, bytes: Number(a?.bytes ?? 0), keyCount: Number(a?.keyCount ?? 0) };
}
async function measureExactKvCategories(e, t = STORAGE_SIZE_KV_CATEGORY_IDS) {
  const s = [];
  for (const a of t) {
    const n = await measureExactKvCategory(e, a);
    (n.bytes > 0 || n.keyCount > 0) && s.push(n);
  }
  return s;
}
async function measureExactKvBreakdown(e, t) {
  const s = t ? [await measureExactKvCategory(e, t)].filter((a) => a.bytes > 0 || a.keyCount > 0) : await measureExactKvCategories(e);
  return { ...emptyStorageSizeBreakdown(), categories: s };
}
async function main() {
  const e = process.env.VSCODE_STORAGE_SIZE_SCAN_PATH;
  if (!e) throw new Error("VSCODE_STORAGE_SIZE_SCAN_PATH is required");
  const t = process.env.VSCODE_STORAGE_SIZE_SCAN_CATEGORY, s = t && isStorageSizeCategoryId(t) ? t : void 0, a = await import("@vscode/sqlite3"), n = await new Promise((o, c) => {
    const l = new a.default.Database(e, a.default.OPEN_READONLY, (r) => {
      if (r) return c(r);
      o(l);
    });
  }), i = wrapSqlite3Database(n);
  try {
    await i.exec("PRAGMA query_only = ON; PRAGMA busy_timeout = 5000; PRAGMA cache_size = -32768; PRAGMA temp_store = FILE;");
    const o = await measureExactKvBreakdown(i, s);
    process.send?.({ ok: true, breakdown: o });
  } finally {
    await i.close();
  }
}
main().then(() => process.exit(0), (e) => {
  try {
    process.send?.({ ok: false, error: e instanceof Error ? e.message : String(e) });
  } catch {
  }
  process.exit(1);
});
