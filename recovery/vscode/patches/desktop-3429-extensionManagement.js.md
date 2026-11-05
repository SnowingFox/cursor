# Patch evidence: extensionManagement.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3429
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 19990362..19992678
- upstream: src/vs/platform/extensionManagement/common/extensionManagement.ts sha256:7ee0f9b0ee118521b552999e8108a083dc95403cc52c943e4f6e0d3f3c1280bb
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 53
- bundle-only anchors: 2; upstream anchors absent from bundle: 137

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| extensions.gallery.useUnpkgResourceApi | 19992517..19992555 | yes | ), OD = Ae(1942, "Extensions"), Aao = Ae(1943, "Preferences"), Rao = "extensions.gallery.useUnpkgResourceApi", Dao = "extensions.requestTimeout", Ckt = "extensions.allowed", Mao |
| extensions.installCooldownHours | 19992628..19992659 | yes | Dao = "extensions.requestTimeout", Ckt = "extensions.allowed", Mao = "extensions.installCooldownHours"; } }), mFd, GGi, VGi = V({ "localModeDataImport.js"() { "use stric |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| command | 33 |
| settingsSync | 34 |
| Windows 64 bit | 44 |
| Windows ARM | 45 |
| Linux 64 bit | 47 |
| Linux ARM 64 | 48 |
| Linux ARM | 49 |
| Alpine Linux 64 bit | 51 |
| Alpine ARM 64 | 52 |
| Mac Silicon | 55 |
| alpine | 110 |
| object | 197 |
| string | 198 |
| gallery | 219 |
| NoneOrRelevance | 296 |
| LastUpdatedDate | 297 |
| PublisherName | 299 |
| InstallCount | 300 |
| PublishedDate | 301 |
| AverageRating | 302 |
| WeightedRating | 303 |
| Category | 313 |
| ExtensionId | 314 |
| ExtensionName | 315 |
| ExcludeWithFlags | 316 |
| Featured | 317 |
| SearchText | 318 |
| Target | 320 |
| install | 335 |
| uninstall | 336 |
| Timeout | 472 |
| Cancelled | 473 |
| ClientError | 474 |
| ServerError | 475 |
| Failed | 476 |
| DownloadFailedWriting | 477 |
| Offline | 478 |
| NotFound | 489 |
| Unsupported | 490 |
| Deprecated | 491 |

