# Patch evidence: storageIpc.js

- module: app-out-main-js:0714
- bundle: app/out/main.js range 1767114..1774452
- upstream: src/vs/platform/storage/electron-main/storageIpc.ts sha256:b0b80134df13ef80f5dd13b6c9f19c16a55ea32a0f261e241dd7da94c6fe08e6
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.571; shared rare anchors: 33
- bundle-only anchors: 26; upstream anchors absent from bundle: 6

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursorDiskKVGet | 1769331..1769346 | yes | if (Array.isArray(r)) { if (!(/* @__PURE__ */ new Set(["cursorDiskKVGet", "cursorDiskKVGetBatch", "cursorDiskKVSet", "cursorDiskKVSetIfAbsent |
| cursorDiskKVGetBatch | 1769350..1769370 | yes | rray(r)) { if (!(/* @__PURE__ */ new Set(["cursorDiskKVGet", "cursorDiskKVGetBatch", "cursorDiskKVSet", "cursorDiskKVSetIfAbsent", "cursorDiskKVReplaceI |
| cursorDiskKVSet | 1769374..1769389 | yes | (/* @__PURE__ */ new Set(["cursorDiskKVGet", "cursorDiskKVGetBatch", "cursorDiskKVSet", "cursorDiskKVSetIfAbsent", "cursorDiskKVReplaceIfEquals", "cursorDi |
| cursorDiskKVSetIfAbsent | 1769393..1769416 | yes | w Set(["cursorDiskKVGet", "cursorDiskKVGetBatch", "cursorDiskKVSet", "cursorDiskKVSetIfAbsent", "cursorDiskKVReplaceIfEquals", "cursorDiskKVGetWithLogs", "cursorDi |
| cursorDiskKVReplaceIfEquals | 1769420..1769447 | yes | cursorDiskKVGetBatch", "cursorDiskKVSet", "cursorDiskKVSetIfAbsent", "cursorDiskKVReplaceIfEquals", "cursorDiskKVGetWithLogs", "cursorDiskKVSetBinary", "cursorDiskKVSe |
| cursorDiskKVGetWithLogs | 1769451..1769474 | yes | iskKVSet", "cursorDiskKVSetIfAbsent", "cursorDiskKVReplaceIfEquals", "cursorDiskKVGetWithLogs", "cursorDiskKVSetBinary", "cursorDiskKVSetBinaryBatch", "cursorDiskK |
| cursorDiskKVSetBinary | 1769478..1769499 | yes | IfAbsent", "cursorDiskKVReplaceIfEquals", "cursorDiskKVGetWithLogs", "cursorDiskKVSetBinary", "cursorDiskKVSetBinaryBatch", "cursorDiskKVSetBatch", "cursorDiskKV |
| cursorDiskKVSetBinaryBatch | 1769503..1769529 | yes | eplaceIfEquals", "cursorDiskKVGetWithLogs", "cursorDiskKVSetBinary", "cursorDiskKVSetBinaryBatch", "cursorDiskKVSetBatch", "cursorDiskKVGetBinary", "cursorDiskKVDelet |
| cursorDiskKVSetBatch | 1769533..1769553 | yes | GetWithLogs", "cursorDiskKVSetBinary", "cursorDiskKVSetBinaryBatch", "cursorDiskKVSetBatch", "cursorDiskKVGetBinary", "cursorDiskKVDelete", "collectionBulkInser |
| cursorDiskKVGetBinary | 1769557..1769578 | yes | kKVSetBinary", "cursorDiskKVSetBinaryBatch", "cursorDiskKVSetBatch", "cursorDiskKVGetBinary", "cursorDiskKVDelete", "collectionBulkInsert", "collectionUpsertIfPr |
| cursorDiskKVDelete | 1769582..1769600 | yes | kKVSetBinaryBatch", "cursorDiskKVSetBatch", "cursorDiskKVGetBinary", "cursorDiskKVDelete", "collectionBulkInsert", "collectionUpsertIfPreferred", "collectionD |
| collectionBulkInsert | 1769604..1769624 | yes | ursorDiskKVSetBatch", "cursorDiskKVGetBinary", "cursorDiskKVDelete", "collectionBulkInsert", "collectionUpsertIfPreferred", "collectionDeleteMany", "collectionQ |
| collectionUpsertIfPreferred | 1769628..1769655 | yes | ursorDiskKVGetBinary", "cursorDiskKVDelete", "collectionBulkInsert", "collectionUpsertIfPreferred", "collectionDeleteMany", "collectionQuery"])).has(n)) throw new Erro |
| collectionDeleteMany | 1769659..1769679 | yes | iskKVDelete", "collectionBulkInsert", "collectionUpsertIfPreferred", "collectionDeleteMany", "collectionQuery"])).has(n)) throw new Error(`Unexpected array argu |
| collectionQuery | 1769683..1769698 | yes | nBulkInsert", "collectionUpsertIfPreferred", "collectionDeleteMany", "collectionQuery"])).has(n)) throw new Error(`Unexpected array argument for command: $ |
| getStorageStats | 1772591..1772606 | yes | ntalPages, checkpointWal: l.checkpointWal }); } case "getStorageStats": return o.getStorageStats(); case "getStorageSizeB |
| getStorageSizeBreakdown | 1772661..1772684 | yes | getStorageStats": return o.getStorageStats(); case "getStorageSizeBreakdown": return o.getStorageSizeBreakdown(N5e(s.payload)); |
| cancelStorageSizeBreakdown | 1772761..1772787 | yes | return o.getStorageSizeBreakdown(N5e(s.payload)); case "cancelStorageSizeBreakdown": return o.cancelStorageSizeBreakdown(); case "isUs |
| cursorDiskKVClearPrefix | 1772997..1773020 | yes | g") return this.storageMainService.isUsed(l); } case "cursorDiskKVClearPrefix": { if (!Xw(s)) throw new Error("Invalid request for cursor |
| Invalid request for cursorDiskKVClearPrefix | 1773064..1773107 | yes | e "cursorDiskKVClearPrefix": { if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVClearPrefix"); const l = s; return o.cursorDiskKVClearPrefix( |
| cursorDiskKVGetPrefix | 1773212..1773233 | yes | return o.cursorDiskKVClearPrefix(l.prefix); } case "cursorDiskKVGetPrefix": { if (!Xw(s)) throw new Error("Invalid request for cursor |
| Invalid request for cursorDiskKVGetPrefix | 1773277..1773318 | yes | ase "cursorDiskKVGetPrefix": { if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefix"); const l = s; return o.cursorDiskKVGetPrefix(l. |
| cursorDiskKVGetPrefixKeys | 1773421..1773446 | yes | return o.cursorDiskKVGetPrefix(l.prefix); } case "cursorDiskKVGetPrefixKeys": { if (!Xw(s)) throw new Error("Invalid request for cursor |
| Invalid request for cursorDiskKVGetPrefixKeys | 1773490..1773535 | yes | "cursorDiskKVGetPrefixKeys": { if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefixKeys"); const l = s; return o.cursorDiskKVGetPrefixKey |
| cursorDiskKVGetPrefixBinary | 1773642..1773669 | yes | return o.cursorDiskKVGetPrefixKeys(l.prefix); } case "cursorDiskKVGetPrefixBinary": { if (!Xw(s)) throw new Error("Invalid request for cursor |
| Invalid request for cursorDiskKVGetPrefixBinary | 1773713..1773760 | yes | ursorDiskKVGetPrefixBinary": { if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefixBinary"); const l = s; return o.cursorDiskKVGetPrefixBin |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 63 |
| onDidChangeStorage | 79 |
| getItems | 119 |
| getFallbackApplicationStorageItems | 124 |
| updateItems | 131 |
| optimize | 145 |
| isUsed | 149 |
| workspace | 177 |

