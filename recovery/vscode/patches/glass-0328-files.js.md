# Patch evidence: files.js

- module: app-out-vs-workbench-workbench-glass-main-js:0328
- bundle: app/out/vs/workbench/workbench.glass.main.js range 720182..728265
- upstream: src/vs/platform/files/common/files.ts sha256:501d9d5c97ed86f225f1c6e7cebd16879650f0dc313fb1afdaa0749bd3bcecb7
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.833; shared rare anchors: 68
- bundle-only anchors: 2; upstream anchors absent from bundle: 39

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| FileReaddirWithMetadata | 721275..721298 | yes | 536] = "FileAtomicDelete", t[t.FileClone = 131072] = "FileClone", t[t.FileReaddirWithMetadata = 262144] = "FileReaddirWithMetadata", t))(h_t \|\| {}), IS = ((t) => ( |
| FILE_CANCELED | 725669..725682 | yes | _NOT_DIRECTORY", t[t.FILE_OTHER_ERROR = 10] = "FILE_OTHER_ERROR", t[t.FILE_CANCELED = 11] = "FILE_CANCELED", t))(Cve \|\| {}), d7 = { OFF: "off", AFTER_DEL |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| resolveTo | 107 |
| resolveSingleChildDescendants | 111 |
| resolveMetadata | 115 |
| function | 595 |
| EntryExists | 814 |
| EntryNotFound | 815 |
| EntryNotADirectory | 816 |
| EntryIsADirectory | 817 |
| EntryExceedsStorageQuota | 818 |
| EntryTooLarge | 819 |
| EntryWriteLocked | 820 |
| NoPermissions | 821 |
| Unavailable | 822 |
| Unknown | 823 |
| unknownError | 851 |
| number | 1031 |
| afterDelay | 1505 |
| onFocusChange | 1506 |
| onWindowChange | 1507 |
| onExit | 1512 |
| onExitAndWindowClose | 1513 |
| askUser | 1547 |
| sizeKB | 1613 |
| sizeMB | 1617 |
| sizeGB | 1621 |
| sizeTB | 1624 |
| string | 1633 |

