# Patch evidence: updateService.darwin.js

- module: app-out-main-js:0743
- bundle: app/out/main.js range 1855873..1877491
- upstream: src/vs/platform/update/electron-main/updateService.darwin.ts sha256:9a82c29f6238f504a5c0ee28ccf98caaa84419447b7775cec5b203c6d93976b9
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.48; shared rare anchors: 38
- bundle-only anchors: 38; upstream anchors absent from bundle: 26

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| darwin-update-exit-watchdog.json | 1856101..1856133 | yes | , or(), _a(), c1(), _O(), gc(), VJe(), qJe(), zJe(), HO = 5e3, ege = "darwin-update-exit-watchdog.json", tge = 6e4, nge = 1e4, l1 = "cursor-update-supervisor", qO = "update |
| cursor-update-supervisor | 1856164..1856188 | yes | ege = "darwin-update-exit-watchdog.json", tge = 6e4, nge = 1e4, l1 = "cursor-update-supervisor", qO = "update-supervisor", KO = "active.json", zO = 113, YO = "curso |
| update-supervisor | 1856171..1856188 | yes | darwin-update-exit-watchdog.json", tge = 6e4, nge = 1e4, l1 = "cursor-update-supervisor", qO = "update-supervisor", KO = "active.json", zO = 113, YO = "curso |
| active.json | 1856223..1856234 | yes | 1e4, l1 = "cursor-update-supervisor", qO = "update-supervisor", KO = "active.json", zO = 113, YO = "cursor.update.shipItCacheResetTarget", JO = "cursor |
| cursor.update.shipItCacheResetTarget | 1856253..1856289 | yes | visor", qO = "update-supervisor", KO = "active.json", zO = 113, YO = "cursor.update.shipItCacheResetTarget", JO = "cursor.update.shipItCacheResetAt", Ao = class extends Re { |
| cursor.update.shipItCacheResetAt | 1856298..1856330 | yes | e.json", zO = 113, YO = "cursor.update.shipItCacheResetTarget", JO = "cursor.update.shipItCacheResetAt", Ao = class extends Re { constructor(e, t, n, r, s, i, a, o, l, |
| ready | 1857239..1857244 | no (exists elsewhere upstream) | e) { return e?.addArgs \|\| e?.removeArgs \|\| this.state.type !== "ready" ? false : (this.logService.trace("update#handleRelaunch(): running r |
| cursorAuth/accessToken | 1857871..1857893 | yes | posables.add(this.applicationStorageMainService.onDidChangeValue(-1, "cursorAuth/accessToken", this.disposables)((e) => { this.refreshFeedUrl(); })) |
| startup | 1857995..1858002 | no (exists elsewhere upstream) | this.refreshFeedUrl(); })), this.logUpdateSupervisorGate("startup"), this.disposables.add(this.applicationStorageMainService.onDidChang |
| storage-change | 1858141..1858155 | yes | geValue(-1, IO, this.disposables)(() => this.logUpdateSupervisorGate("storage-change"))); } logUpdateSupervisorGate(e) { this.logService.inf |
| warning | 1859338..1859345 | no (exists elsewhere upstream) | const n = t?.match(/OSStatus error (-?\d+)/)?.[1], r = { level: "warning", exception: { values: [{ type: "DarwinUpdateDownloadInterrupted", va |
| DarwinUpdateDownloadInterrupted | 1859379..1859410 | yes | -?\d+)/)?.[1], r = { level: "warning", exception: { values: [{ type: "DarwinUpdateDownloadInterrupted", value: `Update download interrupted (${e})` }] }, tags: { "event.pr |
| event.process | 1859472..1859485 | yes | errupted", value: `Update download interrupted (${e})` }] }, tags: { "event.process": "main", cursor_update_event: "darwin_update_download_interrupted", |
| darwin_update_download_interrupted | 1859518..1859552 | yes | (${e})` }] }, tags: { "event.process": "main", cursor_update_event: "darwin_update_download_interrupted", interruption_reason: e, ...n !== void 0 ? { os_status: n } : {} }, |
| DarwinUpdateExitWatchdogTimeout | 1860411..1860442 | yes | t.samplePath), r = { level: "warning", exception: { values: [{ type: "DarwinUpdateExitWatchdogTimeout", value: "Darwin update exit watchdog timed out" }] }, tags: { "event |
| Darwin update exit watchdog timed out | 1860453..1860490 | yes | eption: { values: [{ type: "DarwinUpdateExitWatchdogTimeout", value: "Darwin update exit watchdog timed out" }] }, tags: { "event.process": "main", cursor_update_event: "darwin_ |
| darwin_exit_watchdog_timeout | 1860553..1860581 | yes | med out" }] }, tags: { "event.process": "main", cursor_update_event: "darwin_exit_watchdog_timeout", schema_version: String(t.schemaVersion), expected_command: t.expect |
| light | 1866082..1866087 | no (exists elsewhere upstream) | , appearance: this.themeMainService.getColorScheme().dark ? "dark" : "light", targetBundlePath: _i(_i(_i(process.execPath))) }, this.logService.i |
| app-ready.json | 1866960..1866974 | yes | r = kn(n, t.installationId), s = kn(r, l1), i = kn(n, KO), a = kn(r, "app-ready.json"), o = { schemaVersion: 1, installationId: t.installationId, currentV |
| ShipItState.plist | 1867257..1867274 | yes | lePath: e.targetBundlePath, shipItStatePath: kn(_i(e.shipItLogPath), "ShipItState.plist"), shipItLogPath: e.shipItLogPath, shipItLogStartOffset: e.shipItLogS |
| events.jsonl | 1867375..1867387 | no (exists elsewhere upstream) | ath, shipItLogStartOffset: e.shipItLogStartOffset, eventsPath: kn(r, "events.jsonl"), resultPath: kn(r, "result.json"), appReadyPath: a, oldMainPid: pro |
| result.json | 1867410..1867421 | yes | LogStartOffset, eventsPath: kn(r, "events.jsonl"), resultPath: kn(r, "result.json"), appReadyPath: a, oldMainPid: process.pid, createdAt: (/* @__PURE__ |
| ignore | 1867998..1868004 | no (exists elsewhere upstream) | Zhe(i, o); const l = Jhe(s, [i], { detached: true, stdio: "ignore" }); l.on("error", (d) => { this.logService.warn(`[ |
| unknown | 1868350..1868357 | no (exists elsewhere upstream) | upervisor] Armed (installationId=${t.installationId}, pid=${l.pid ?? "unknown"})`); } catch (l) { this.logService.warn(`[UpdateSuperv |
| resources | 1868599..1868608 | no (exists elsewhere upstream) | urcePath() { const e = kn(this.environmentMainService.appRoot, "resources", "helpers", l1); if (Zt.existsSync(e)) return e; const t |
| helpers | 1868612..1868619 | no (exists elsewhere upstream) | const e = kn(this.environmentMainService.appRoot, "resources", "helpers", l1); if (Zt.existsSync(e)) return e; const t = kn(this. |
| vs/platform/update/electron-main/darwinUpdateExitWatchdog.js | 1869133..1869193 | yes | ationStorageMainService.getBoolean(Vpe, -1, false), s = Jt.asFileUri("vs/platform/update/electron-main/darwinUpdateExitWatchdog.js").fsPath; try { const i = Jhe(process.execPath, [s, e, |
| shipit_install_error | 1870740..1870760 | yes | getNumber(JO, -1, 0) }; const r = n?.supervisorFailureCode === "shipit_install_error" \|\| n?.supervisorFailureCode === "shipit_attempts_exhausted" \|\| n?.su |
| shipit_attempts_exhausted | 1870795..1870820 | yes | ilureCode === "shipit_install_error" \|\| n?.supervisorFailureCode === "shipit_attempts_exhausted" \|\| n?.supervisorFailureCode === "overall_timeout" && n.supervisorTim |
| overall_timeout | 1870855..1870870 | yes | Code === "shipit_attempts_exhausted" \|\| n?.supervisorFailureCode === "overall_timeout" && n.supervisorTimeoutPhase === "installing"; if (t \|\| !r \|\| ! |
| installing | 1870905..1870915 | no (exists elsewhere upstream) | sorFailureCode === "overall_timeout" && n.supervisorTimeoutPhase === "installing"; if (t \|\| !r \|\| !this.resetShipItForThisApp()) return; c |
| print | 1871466..1871471 | yes | \|\| t === void 0) return false; const n = GO("/bin/launchctl", ["print", `system/${e}.ShipIt`], { timeout: 1e3 }); if (n.status !== zO |
| bootout | 1872054..1872061 | yes | s}`), false; if (!i) { const a = GO("/bin/launchctl", ["bootout", r], { timeout: 1e3 }); if (this.logService.info(`update#res |
| DarwinUpdateInstallFailed | 1875477..1875502 | yes | const s = { level: "error", exception: { values: [{ type: "DarwinUpdateInstallFailed", value: "Darwin update install did not reach the target version" }] |
| Darwin update install did not reach the target version | 1875513..1875567 | yes | ", exception: { values: [{ type: "DarwinUpdateInstallFailed", value: "Darwin update install did not reach the target version" }] }, tags: { "event.process": "main", cursor_update_event: "darwin_ |
| darwin_update_install_failed | 1875630..1875658 | yes | version" }] }, tags: { "event.process": "main", cursor_update_event: "darwin_update_install_failed", ship_it_log_attached: String(r !== void 0) }, extra: { restart_time |
| SlowUpdateRestart | 1876263..1876280 | yes | const s = { level: "warning", exception: { values: [{ type: "SlowUpdateRestart", value: `Update restart took ${e.restartTimeSeconds}s (threshold ${t |
| slow_update_restart | 1876444..1876463 | yes | onds}s)` }] }, tags: { "event.process": "main", cursor_update_event: "slow_update_restart", update_success: String(e.updateSuccess), ship_it_log_attached: Stri |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| checking-for-update | 26 |
| update-not-available | 27 |
| update-available | 28 |
| update-downloaded | 30 |
| update#handleRelaunch(): running raw#quitAndInstall() | 62 |
| update#onCheckingForUpdate - Electron autoUpdater is checking for updates | 79 |
| update:error | 83 |
| UpdateService error: | 84 |
| darwin | 97 |
| update#buildUpdateFeedUrl - setting feed URL for Electron autoUpdater | 101 |
| Failed to set update feed URL | 105 |
| update#doCheckForUpdates - checking for update without auto-download because connection is metered | 129 |
| update#doCheckForUpdates - using Electron autoUpdater | 134 |
| update#checkForUpdateNoDownload - checking update server | 145 |
| updateService.darwin.checkForUpdates | 148 |
| update#checkForUpdateNoDownload - response | 150 |
| update#checkForUpdateNoDownload - no update available | 154 |
| update#checkForUpdateNoDownload - update available | 158 |
| update#checkForUpdateNoDownload - failed to check for update | 162 |
| update#onUpdateAvailable - Electron autoUpdater reported update available | 168 |
| update#onUpdateNotAvailable - Electron autoUpdater reported no update available | 189 |
| update#quitAndInstall(): running raw#quitAndInstall() | 207 |

