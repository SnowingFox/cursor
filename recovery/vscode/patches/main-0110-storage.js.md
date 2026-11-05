# Patch evidence: storage.js

- module: app-out-main-js:0110
- bundle: app/out/main.js range 520019..569289
- upstream: src/vs/base/parts/storage/node/storage.ts sha256:8b964ca010ea0088061cd3bc08f70462f8a064d5af1da3decee7b4e0074f1d6f
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.417; shared rare anchors: 48
- bundle-only anchors: 86; upstream anchors absent from bundle: 25

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| composerId | 520174..520184 | yes | gn(), fp(), t8(), j5e(), z5e(), nk = { composerHeaders: { pkColumn: "composerId", columns: [{ name: "workspaceId", type: "TEXT" }, { name: "createdAt |
| workspaceId | 520206..520217 | yes | nk = { composerHeaders: { pkColumn: "composerId", columns: [{ name: "workspaceId", type: "TEXT" }, { name: "createdAt", type: "INTEGER" }, { name: "la |
| createdAt | 520245..520254 | no (exists elsewhere upstream) | omposerId", columns: [{ name: "workspaceId", type: "TEXT" }, { name: "createdAt", type: "INTEGER" }, { name: "lastUpdatedAt", type: "INTEGER" }, { na |
| INTEGER | 520264..520271 | yes | : [{ name: "workspaceId", type: "TEXT" }, { name: "createdAt", type: "INTEGER" }, { name: "lastUpdatedAt", type: "INTEGER" }, { name: "isArchived", |
| lastUpdatedAt | 520285..520298 | yes | Id", type: "TEXT" }, { name: "createdAt", type: "INTEGER" }, { name: "lastUpdatedAt", type: "INTEGER" }, { name: "isArchived", type: "INTEGER" }, { name: |
| isArchived | 520329..520339 | no (exists elsewhere upstream) | pe: "INTEGER" }, { name: "lastUpdatedAt", type: "INTEGER" }, { name: "isArchived", type: "INTEGER" }, { name: "isSubagent", type: "INTEGER" }, { name: |
| isSubagent | 520370..520380 | yes | type: "INTEGER" }, { name: "isArchived", type: "INTEGER" }, { name: "isSubagent", type: "INTEGER" }, { name: "recency", type: "INTEGER" }, { name: "c |
| recency | 520411..520418 | no (exists elsewhere upstream) | type: "INTEGER" }, { name: "isSubagent", type: "INTEGER" }, { name: "recency", type: "INTEGER" }, { name: "checkpointAt", type: "INTEGER" }, { nam |
| checkpointAt | 520449..520461 | yes | t", type: "INTEGER" }, { name: "recency", type: "INTEGER" }, { name: "checkpointAt", type: "INTEGER" }, { name: "subagentTypeName", type: "TEXT" }], ind |
| subagentTypeName | 520492..520508 | yes | ype: "INTEGER" }, { name: "checkpointAt", type: "INTEGER" }, { name: "subagentTypeName", type: "TEXT" }], indexes: [["workspaceId", "isSubagent", "isArchive |
| stickyArchiveRecency | 520641..520661 | yes | Archived", "recency"], ["recency", "composerId"]], conflictStrategy: "stickyArchiveRecency" } }, a8 = class extends Error { }, Gr = class Pt { constructor |
| begin transaction | 521389..521406 | yes | n = t.trim().replace(/\s+/g, " ").toLowerCase(); return n === "begin transaction" ? "transaction_begin" : n === "end transaction" \|\| n === "commit" ? |
| transaction_begin | 521411..521428 | yes | /\s+/g, " ").toLowerCase(); return n === "begin transaction" ? "transaction_begin" : n === "end transaction" \|\| n === "commit" ? "transaction_end" : n. |
| end transaction | 521439..521454 | yes | return n === "begin transaction" ? "transaction_begin" : n === "end transaction" \|\| n === "commit" ? "transaction_end" : n.startsWith("pragma increme |
| commit | 521466..521472 | no (exists elsewhere upstream) | ransaction" ? "transaction_begin" : n === "end transaction" \|\| n === "commit" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "p |
| transaction_end | 521477..521492 | yes | ? "transaction_begin" : n === "end transaction" \|\| n === "commit" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "pragma_incremental_va |
| pragma incremental_vacuum | 521510..521535 | yes | nd transaction" \|\| n === "commit" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "pragma_incremental_vacuum" : n === "vacuum" ? "vacuum" : n.start |
| pragma_incremental_vacuum | 521541..521566 | yes | t" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "pragma_incremental_vacuum" : n === "vacuum" ? "vacuum" : n.startsWith("pragma ") ? "pragma" : n |
| pragma  | 521510..521517 | yes | nd transaction" \|\| n === "commit" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "pragma_incremental_vacuum" : n === "vacuum" ? |
| create table | 521649..521661 | yes | cuum" ? "vacuum" : n.startsWith("pragma ") ? "pragma" : n.startsWith("create table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("selec |
| create_table | 521667..521679 | yes | n.startsWith("pragma ") ? "pragma" : n.startsWith("create table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("select key") && n.inclu |
| cursordiskkv | 521695..521707 | yes | pragma" : n.startsWith("create table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("select key") && n.includes("where key >= ? and key |
| select key | 521726..521736 | yes | table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("select key") && n.includes("where key >= ? and key < ?") ? "cursor_kv_prefix_sca |
| cursor_kv_prefix_scan | 521786..521807 | yes | artsWith("select key") && n.includes("where key >= ? and key < ?") ? "cursor_kv_prefix_scan" : n.startsWith("select") ? "cursor_kv_get" : n.startsWith("insert") |
| select | 521726..521732 | no (exists elsewhere upstream) | table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("select key") && n.includes("where key >= ? and key < ?") ? "cursor_kv_prefix |
| cursor_kv_get | 521837..521850 | yes | ? and key < ?") ? "cursor_kv_prefix_scan" : n.startsWith("select") ? "cursor_kv_get" : n.startsWith("insert") ? "cursor_kv_upsert" : n.startsWith("delete |
| cursor_kv_upsert | 521880..521896 | yes | n.startsWith("select") ? "cursor_kv_get" : n.startsWith("insert") ? "cursor_kv_upsert" : n.startsWith("delete") ? n.includes("where key >= ? and key < ?") |
| cursor_kv_prefix_delete | 522010..522033 | yes | re key >= ? and key < ?") \|\| n.includes("where key like ? \|\| '%'") ? "cursor_kv_prefix_delete" : n === "delete from cursordiskkv" ? "cursor_kv_clear_all" : "cursor |
| delete from cursordiskkv | 522044..522068 | yes | ludes("where key like ? \|\| '%'") ? "cursor_kv_prefix_delete" : n === "delete from cursordiskkv" ? "cursor_kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n |
| cursor_kv_clear_all | 522073..522092 | yes | '") ? "cursor_kv_prefix_delete" : n === "delete from cursordiskkv" ? "cursor_kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n.includes("itemtable") ? |
| cursor_kv_delete | 522097..522113 | yes | delete" : n === "delete from cursordiskkv" ? "cursor_kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n.includes("itemtable") ? n.startsWith("select |
| cursor_kv_other | 522118..522133 | yes | te from cursordiskkv" ? "cursor_kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n.includes("itemtable") ? n.startsWith("select") ? "item_table_loa |
| itemtable | 522149..522158 | yes | _kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n.includes("itemtable") ? n.startsWith("select") ? "item_table_load" : n.startsWith("insert |
| item_table_load | 522189..522204 | yes | ursor_kv_other" : n.includes("itemtable") ? n.startsWith("select") ? "item_table_load" : n.startsWith("insert") ? "item_table_upsert" : n.startsWith("delet |
| item_table_upsert | 522234..522251 | yes | .startsWith("select") ? "item_table_load" : n.startsWith("insert") ? "item_table_upsert" : n.startsWith("delete") ? "item_table_delete" : "item_table_other" |
| item_table_delete | 522281..522298 | yes | tartsWith("insert") ? "item_table_upsert" : n.startsWith("delete") ? "item_table_delete" : "item_table_other" : "other"; } trackCursorKVKey(t) { |
| item_table_other | 522303..522319 | yes | "item_table_upsert" : n.startsWith("delete") ? "item_table_delete" : "item_table_other" : "other"; } trackCursorKVKey(t) { this.lastCursorKVKe |
| DELETE FROM cursorDiskKV | 529975..529999 | yes | KVKey(t); try { n !== void 0 ? await this.runParams(r, "DELETE FROM cursorDiskKV WHERE key = ? AND value = ?", [t, n]) : await this.runParams(r, "DELE |
| cursorDiskKVGetPrefix requires a non-empty prefix | 534649..534698 | yes | efix:${t}`); try { if (t.length === 0) throw new Error("cursorDiskKVGetPrefix requires a non-empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVG |
| cursorDiskKVGetPrefix requires an ASCII-only prefix | 534755..534806 | yes | -empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefix requires an ASCII-only prefix"); const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1 |
| cursorDiskKVGetPrefixKeys requires a non-empty prefix | 535417..535470 | yes | Keys:${t}`); try { if (t.length === 0) throw new Error("cursorDiskKVGetPrefixKeys requires a non-empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVG |
| cursorDiskKVGetPrefixKeys requires an ASCII-only prefix | 535527..535582 | yes | -empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefixKeys requires an ASCII-only prefix"); const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1 |
| cursorDiskKVGetPrefixBinary requires a non-empty prefix | 536141..536196 | yes | nary:${t}`); try { if (t.length === 0) throw new Error("cursorDiskKVGetPrefixBinary requires a non-empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVG |
| cursorDiskKVGetPrefixBinary requires an ASCII-only prefix | 536253..536310 | yes | -empty prefix"); if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefixBinary requires an ASCII-only prefix"); const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1 |
| SQLite storage is closed | 540035..540059 | yes | getStorageSizeBreakdown(t) { if (this.closed) throw new Error("SQLite storage is closed"); const n = this.scanEpoch, r = t?.phase === ad \|\| typeof t?.p |
| overview | 540513..540521 | no (exists elsewhere upstream) | et i = cC(); i = lC(i, await this.measureStorageSizePhase(s, "overview", n)), this.throwIfScanCancelled(n); for (const a of V6) i = |
| SQLITE_INTERRUPT | 543577..543593 | yes | liteInterruptError(t) { if (!t \|\| typeof t != "object") return /SQLITE_INTERRUPT\|interrupted/i.test(String(t)); const n = "code" in t ? String(t |
| otherKv | 544417..544424 | yes | o.bytes, o.keyCount); return await this.addUserTableBytes(t, "otherKv", i), this.totalsToBreakdown(s); } const a = L6("key", n) |
| composerIndex | 545021..545034 | yes | i(n, d.bytes, d.keyCount); } } if (n === "composerIndex" \|\| n === "settings") { this.throwIfScanCancelled(r); |
| settings | 545046..545054 | no (exists elsewhere upstream) | eyCount); } } if (n === "composerIndex" \|\| n === "settings") { this.throwIfScanCancelled(r); const o = n === "co |
| PRAGMA page_count | 546327..546344 | yes | eStorageSizeOverview(t) { const n = await this.getUnchecked(t, "PRAGMA page_count"), r = await this.getUnchecked(t, "PRAGMA page_size"), s = await this |
| PRAGMA page_size | 546380..546396 | yes | getUnchecked(t, "PRAGMA page_count"), r = await this.getUnchecked(t, "PRAGMA page_size"), s = await this.getUnchecked(t, "PRAGMA freelist_count"), i = Numbe |
| PRAGMA freelist_count | 546432..546453 | yes | .getUnchecked(t, "PRAGMA page_size"), s = await this.getUnchecked(t, "PRAGMA freelist_count"), i = Number(r?.page_size ?? 0), a = Number(s?.freelist_count ?? 0) |
| close_wal_checkpoint_stuck | 549061..549087 | yes | K_CLOSE_WAL_CHECKPOINT_TIMEOUT}ms`), { tags: { cursor_storage_event: "close_wal_checkpoint_stuck", storage_name: this.name }, extra: { stuck_threshold_ms: Pt.STUCK_CL |
| warning | 549251..549258 | no (exists elsewhere upstream) | UT }, fingerprint: ["close_wal_checkpoint_stuck", this.name], level: "warning" }); }, Pt.STUCK_CLOSE_WAL_CHECKPOINT_TIMEOUT); try { |
| close_wal_checkpoint_failed | 549481..549508 | yes | this.logger.sentryException(i, { tags: { cursor_storage_event: "close_wal_checkpoint_failed", storage_name: this.name }, extra: { wal_checkpoint_ms: Date.now() - |
| close_backup_failed | 550140..550159 | yes | l}`), this.logger.sentryException(l, { tags: { cursor_storage_event: "close_backup_failed", storage_name: this.name }, extra: { db_path_type: "disk" }, level: |
| close_recovery_attempt | 550396..550418 | yes | sqlite close: attempting recovery"), { tags: { cursor_storage_event: "close_recovery_attempt", storage_name: this.name }, extra: { db_path_type: this.path === Pt. |
| in_memory | 550506..550515 | yes | his.name }, extra: { db_path_type: this.path === Pt.IN_MEMORY_PATH ? "in_memory" : "disk", connection_is_erroneous: t.isErroneous === true, connectio |
| auto_vacuum | 551139..551150 | yes | et i, a; try { const o = await this.getPragmaNumber(t, "auto_vacuum"); if (o !== Pt.AUTO_VACUUM_NONE && o !== Pt.AUTO_VACUUM_INCR |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| :memory: | 42 |
| SELECT * FROM ItemTable | 73 |
| }), delete(${request.delete ? setToString(request.delete) :  | 91 |
| ).join( | 154 |
| VACUUM | 172 |
| function | 212 |
| Database has errors or is in-memory without recovery option | 239 |
| PRAGMA integrity_check | 258 |
| SQLITE_BUSY | 289 |
| SQLITE_CANTOPEN | 335 |
| PRAGMA user_version = 1; | 342 |
| CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB); | 343 |
| PRAGMA journal_mode=WAL; | 346 |
| BEGIN TRANSACTION | 416 |
| END TRANSACTION | 420 |
| VSCODE_TRACE_STORAGE | 459 |

