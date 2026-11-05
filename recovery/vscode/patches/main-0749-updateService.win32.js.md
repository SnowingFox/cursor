# Patch evidence: updateService.win32.js

- module: app-out-main-js:0749
- bundle: app/out/main.js range 1888707..1907827
- upstream: src/vs/platform/update/electron-main/updateService.win32.ts sha256:b5a17113d89cc43720c57d73d37afc985d9562b5b2e3d7e73dd7b0fb41a30fe1
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.864; shared rare anchors: 57
- bundle-only anchors: 16; upstream anchors absent from bundle: 76

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| update-supervisor | 1888912..1888929 | yes | te(), Gi(), Tt(), fs(), ts(), Eo(), xO(), or(), sge(), h1 = 1, lge = "update-supervisor", dge = "win32", uge = "active.json", ol = "inno_updater.exe", mge = |
| active.json | 1888954..1888965 | yes | or(), sge(), h1 = 1, lge = "update-supervisor", dge = "win32", uge = "active.json", ol = "inno_updater.exe", mge = "cursor-update.journal.json", pge = |
| cursor-update.journal.json | 1889000..1889026 | yes | , dge = "win32", uge = "active.json", ol = "inno_updater.exe", mge = "cursor-update.journal.json", pge = "_bak", hge = 1e3, gge = 1440 * 60 * 1e3, fge = 300 * 1e3, g1 |
| cursor.update.installationId | 1889100..1889128 | yes | ge = "_bak", hge = 1e3, gge = 1440 * 60 * 1e3, fge = 300 * 1e3, g1 = "cursor.update.installationId", f1 = void 0, of = class extends Re { constructor(e, t, n, r, s, |
| win32UpdateSupervisor | 1889673..1889694 | yes | edQuitAndInstall(); return; } m.join("win32UpdateSupervisor", this.armUpdateSupervisor(f)); } })), this._register(O |
| cursor.update.win32.shutdownDuringPendingUpdate | 1890139..1890186 | yes | g1, -1, void 0); this.queueShutdownSafeUpdateEvent({ type: "cursor.update.win32.shutdownDuringPendingUpdate", data: { updateVersion: this.state.update.version, hasStagedFlag: !! |
| Server returned  | 1893337..1893353 | no (exists elsewhere upstream) | rl }, Ie.None).then((o) => { if (!Md(o)) throw new Error("Server returned " + o.res.statusCode); if (vG(o)) throw new Error("Server |
| Server returned no content | 1893416..1893442 | yes | turned " + o.res.statusCode); if (vG(o)) throw new Error("Server returned no content"); return o; }).then((o) => this.fileService.wr |
| cursor.update.win32.promotionTriggered | 1897416..1897454 | yes | leUpdate.updateFilePath ? (this.queueShutdownSafeUpdateEvent({ type: "cursor.update.win32.promotionTriggered", data: { ...n, triggerKind: "updateFlagUnlinked" } }), jt.unlinkSync |
| updateFlagUnlinked | 1897485..1897503 | yes | "cursor.update.win32.promotionTriggered", data: { ...n, triggerKind: "updateFlagUnlinked" } }), jt.unlinkSync(this.availableUpdate.updateFilePath)) : (this.qu |
| installerSpawned | 1897678..1897694 | yes | "cursor.update.win32.promotionTriggered", data: { ...n, triggerKind: "installerSpawned" } }), p1(this.availableUpdate.packagePath, ["/silent", "/log", "/mer |
| app-ready.json | 1900127..1900141 | yes | const n = L(this.getUpdateSupervisorRoot(), t.installationId, "app-ready.json"); try { cge(n, { schemaVersion: h1, installationId: t. |
| cursor.update.restartMarker | 1903506..1903533 | yes | ry { const e = this.applicationStorageMainService.getBoolean("cursor.update.restartMarker", -1, false); if (e && this.applicationStorageMainService.get |
| cursor.update.targetVersion | 1903605..1903632 | yes | -1, false); if (e && this.applicationStorageMainService.get("cursor.update.targetVersion", -1, void 0)) return; const t = this.getPostRestartUpdateSna |
| cursor.update.win32.postRestartSnapshot | 1903893..1903932 | yes | inService.get(g1, -1, void 0); this.storeUpdateEvent({ type: "cursor.update.win32.postRestartSnapshot", data: { currentVersion: this.productService.version, ...t, hadResta |
| cursor-update-pending-events.json | 1905411..1905444 | yes | ntsPath() { return L(this.environmentMainService.userDataPath, "cursor-update-pending-events.json"); } readShutdownSafeUpdateEvents(e) { for (const t of |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| undefined | 50 |
| unins000.exe | 51 |
| @vscode/windows-mutex | 79 |
| update#handleRelaunch(): running raw#quitAndInstall() | 114 |
| appUpdate | 123 |
| session-ending.flag | 124 |
| SystemMetaData | 133 |
| dmitriv | 135 |
| Tracks Windows OS release information during update initialization. | 136 |
| windowsUpdateInit | 140 |
| update#ctor - updates are disabled due to running as Admin in user setup | 144 |
| updating_version | 160 |
| update.enableWindowsBackgroundUpdates | 185 |
| ignore | 198 |
| update#collectGarbage - failed to spawn inno_updater | 204 |
| -archive | 215 |
| updateService.win32.checkForUpdates | 243 |
| update#doCheckForUpdates - update available but skipping download because connection is metered | 272 |
| updateService.win32.downloadUpdate | 289 |
| content-length | 292 |
| string | 293 |
| update:error | 344 |
| Setup is already running | 419 |
| update#doApplyUpdate: another instance is already running setup, waiting for it to finish | 421 |
| /verysilent | 429 |
| ${this.availableUpdate.updateFilePath} | 431 |
| ${progressFilePath} | 432 |
| ${sessionEndFlagPath} | 433 |
| ${cancelFilePath} | 434 |
| /nocloseapplications | 435 |
| /mergetasks=runcode,!desktopicon,!quicklaunchicon | 436 |
| RunAsInvoker | 442 |
| update#doApplyUpdate: polling timed out waiting for update to be ready | 501 |
| Update did not complete within expected time | 502 |
| update#collectGarbage - failed to collect garbage | 538 |
| update#cleanupTempFiles: failed to remove temporary download files | 548 |
| s still running so we don | 559 |
| Cannot cancel pending update: another instance is still running setup | 562 |
| update#cancelPendingUpdate: cancelling pending update | 570 |
| cancel | 579 |

