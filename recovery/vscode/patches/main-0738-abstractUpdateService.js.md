# Patch evidence: abstractUpdateService.js

- module: app-out-main-js:0738
- bundle: app/out/main.js range 1818366..1842406
- upstream: src/vs/platform/update/electron-main/abstractUpdateService.ts sha256:eed382c9786119414e24a87973a1c4233d6399bc220a1d857cb39f6cd73a321b
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 47
- bundle-only anchors: 34; upstream anchors absent from bundle: 74

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursor.update.ready | 1819656..1819675 | yes | Re.UPDATE_UPDATE_MODE, n.updateMode, -1, 1), this.storeEvent({ type: "cursor.update.ready", data: { updateVersion: e.update.version, targetVersionStr: e.update |
| cursor.update.restartCompleted | 1824042..1824072 | yes | , supervisorResult: T }) : void 0; this.storeEvent({ type: "cursor.update.restartCompleted", data: { restartTime: a ? a / 1e3 : void 0, targetVersion: t, curren |
| cursor.update.win32.postRestartSnapshot | 1824538..1824577 | yes | tRestartUpdateSnapshot(); if (k && this.storeEvent({ type: "cursor.update.win32.postRestartSnapshot", data: { targetVersion: t, currentVersion: o, ...k, ...v, ...i !== v |
| cursor.update.installationStarted | 1826710..1826743 | yes | t = JSON.parse(e); t.length > 0 && t[t.length - 1].type === "cursor.update.installationStarted" && (t.pop(), this.applicationStorageMainService.store(nl, JSON.strin |
| Failed to add update URL params | 1827544..1827575 | yes | ); } } catch (r) { this.logService.error("Failed to add update URL params", r); } return n; } } getProductQuality |
| Failed to get product quality | 1827808..1827837 | yes | yForUpdateMode(e); } catch (e) { this.logService.error("Failed to get product quality", e); } } getUpdateMode() { return this.productSe |
| cursor-alpha | 1827934..1827946 | yes | tUpdateMode() { return this.productService.applicationName === "cursor-alpha" ? "silentlyApplyOnQuit" : pJe(this.configurationService); } |
| silentlyApplyOnQuit | 1827951..1827970 | yes | return this.productService.applicationName === "cursor-alpha" ? "silentlyApplyOnQuit" : pJe(this.configurationService); } getProductQualityForUpda |
| unlock-screen | 1828835..1828848 | no (exists elsewhere upstream) | dateOnResume("resume"), n = () => this.recheckOutdatedUpdateOnResume("unlock-screen"); e.on("resume", t), e.on("unlock-screen", n), this._register( |
| trackChanged | 1832765..1832777 | yes | ) { const r = new URL(n); r.searchParams.set("trackChanged", "1"), n = r.toString(), this.logService.info("update#checkForUpdate |
| available for download | 1833322..1833344 | no (exists elsewhere upstream) | ate#downloadUpdate, state = ", this.state.type), this.state.type === "available for download" && await this.doDownloadUpdate(this.state); } async doDownlo |
| downloaded | 1832090..1832100 | no (exists elsewhere upstream) | update#abortBeforeReadyIfOutdated - pre-Ready check failed, surfacing downloaded update", r); } finally { n.dispose(), t.dispose(); |
| Server returned  | 1836621..1836637 | no (exists elsewhere upstream) | Service.version}` } }, Ie.None); if (!Md(n)) throw new Error("Server returned " + n.res.statusCode); return n.res.statusCode === 204; |
| cursorAuth/accessToken | 1837519..1837541 | yes | his.shouldSendAuthHeaders() ? this.applicationStorageMainService.get("cursorAuth/accessToken", -1) : void 0, t = this.productService.commit ?? this.productService |
| X-Cursor-Commit | 1837696..1837711 | yes | return { ...e ? { Authorization: `Bearer ${e}` } : {}, ...t ? { "X-Cursor-Commit": t } : {}, ...this.productService.version ? { "X-Cursor-Version": th |
| X-Cursor-Version | 1837760..1837776 | yes | ? { "X-Cursor-Commit": t } : {}, ...this.productService.version ? { "X-Cursor-Version": this.productService.version } : {} }; } catch (e) { r |
| Failed to get update request headers | 1837875..1837911 | yes | n } : {} }; } catch (e) { return this.logService.error("Failed to get update request headers", e), {}; } } doQuitAndInstall() { } prepareFor |
| update.enableWindowsBackgroundUpdates | 1838540..1838577 | no (exists elsewhere upstream) | return { isBackgroundUpdate: !!this.configurationService.getValue("update.enableWindowsBackgroundUpdates"), updateMode: this.getUpdateMode() }; } getStoredUpdateTelem |
| cursor-local | 1839376..1839388 | yes | t s = this._updateBaseUrlOverride ?? n.updateUrl, i = Js.localMode ? "cursor-local" : n.nameShort.replace(/ /g, "-").toLowerCase(), a = this.getReleaseT |
| updateURL | 1839570..1839579 | yes | .version}/${this.machineId}/${a}`; return this.logService.info("updateURL", o), o; } getOutdatedUpdateCheckURL() { if (!this.url) |
| isOutdatedCheck | 1839726..1839741 | yes | ; const e = new URL(this.url); return e.searchParams.set("isOutdatedCheck", "1"), e.toString(); } getReinstallUpdateCheckURL() { |
| forceUpdate | 1839902..1839913 | yes | ; const e = new URL(this.url); return e.searchParams.set("forceUpdate", "1"), e.toString(); } isReinstallUpdateCheckURL(e) { |
| stable | 1840158..1840164 | no (exists elsewhere upstream) | if (this.productService.applicationName === "cursor-alpha") return "stable"; try { return Zv(this.configurationService); } c |
| could not fetch release track - using default | 1840275..1840320 | yes | figurationService); } catch (e) { this.logService.warn("could not fetch release track - using default", e); } return "stable"; } removeUpdateFileIfExis |
| Failed to check for legacy shouldUpdate file | 1840556..1840600 | yes | teFileLocation()); } catch (e) { this.logService.error("Failed to check for legacy shouldUpdate file", e); } } updateFileLocation() { const e = this.p |
| shouldUpdate | 1840583..1840595 | yes | catch (e) { this.logService.error("Failed to check for legacy shouldUpdate file", e); } } updateFileLocation() { const e = t |
| cursor.update.restartMarker | 1841127..1841154 | yes | nl, JSON.stringify(n), -1, 1); } }, Re.UPDATE_RESTART_MARKER = "cursor.update.restartMarker", Re.UPDATE_TARGET_VERSION = "cursor.update.targetVersion", Re.UPDATE |
| cursor.update.targetVersion | 1841185..1841212 | yes | T_MARKER = "cursor.update.restartMarker", Re.UPDATE_TARGET_VERSION = "cursor.update.targetVersion", Re.UPDATE_READY_TIME = "cursor.update.readyTime", Re.UPDATE_QUIT_TI |
| cursor.update.readyTime | 1841239..1841262 | yes | RGET_VERSION = "cursor.update.targetVersion", Re.UPDATE_READY_TIME = "cursor.update.readyTime", Re.UPDATE_QUIT_TIME = "cursor.update.quitTime", Re.UPDATE_EXPLICIT_ |
| cursor.update.quitTime | 1841288..1841310 | yes | UPDATE_READY_TIME = "cursor.update.readyTime", Re.UPDATE_QUIT_TIME = "cursor.update.quitTime", Re.UPDATE_EXPLICIT_RESTART = "cursor.update.explicitRestart", Re.UP |
| cursor.update.explicitRestart | 1841343..1841372 | yes | E_QUIT_TIME = "cursor.update.quitTime", Re.UPDATE_EXPLICIT_RESTART = "cursor.update.explicitRestart", Re.UPDATE_INSTALLATION_ID = "cursor.update.installationId", Re.UPDA |
| cursor.update.installationId | 1841404..1841432 | yes | START = "cursor.update.explicitRestart", Re.UPDATE_INSTALLATION_ID = "cursor.update.installationId", Re.UPDATE_IS_BACKGROUND_UPDATE = "cursor.update.isBackgroundUpdate" |
| cursor.update.isBackgroundUpdate | 1841469..1841501 | yes | D = "cursor.update.installationId", Re.UPDATE_IS_BACKGROUND_UPDATE = "cursor.update.isBackgroundUpdate", Re.UPDATE_UPDATE_MODE = "cursor.update.updateMode", Re.OUTDATED_UPD |
| cursor.update.updateMode | 1841529..1841553 | yes | UPDATE = "cursor.update.isBackgroundUpdate", Re.UPDATE_UPDATE_MODE = "cursor.update.updateMode", Re.OUTDATED_UPDATE_PRE_READY_CHECK_TIMEOUT_MS = 10 * 1e3, Re.OUTDAT |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| abstractUpdateService/lastKnownVersion | 26 |
| , options?.internalOrg ??  | 40 |
| User-Agent | 58 |
| joaomoreno | 75 |
| SystemMetaData | 76 |
| This is used to know how often VS Code updates have failed. | 77 |
| update#setState | 129 |
| update#ctor - updates are disabled by the environment | 185 |
| update#ctor - updates are disabled as there is no update URL | 191 |
| update.mode | 197 |
| update#reconfigure - failed to apply update mode change | 198 |
| update#ctor - updates are disabled as the update URL is badly formed | 238 |
| update#disable - failed to cancel pending update | 273 |
| update#disable - updates are disabled by policy | 279 |
| update#disable - updates are disabled by user preference | 281 |
| manual | 297 |
| update#ctor - manual checks only; automatic updates are disabled by user preference | 298 |
| update#ctor - startup checks only; automatic updates are disabled by user preference | 303 |
| string | 324 |
| dmitriv | 359 |
| Fired when VS Code detects a version change on startup. | 360 |
| update:versionChanged | 370 |
| update#checkForUpdates, state =  | 405 |
| update#downloadUpdate, state =  | 415 |
| update#downloadUpdate - skipping download because connection is metered | 422 |
| update#applyUpdate, state =  | 434 |
| update#quitAndInstall, state =  | 448 |
| update#quitAndInstall(): overwrite update detected, postponing quitAndInstall | 459 |
| update#quitAndInstall(): before lifecycle quit() | 468 |
| update#quitAndInstall(): quit was vetoed, restoring Ready state | 473 |
| update#quitAndInstall(): running raw#quitAndInstall() | 478 |
| unknown | 492 |
| update#checkForOverwriteUpdates(): failed to check for updates, proceeding with restart | 504 |
| update#readyStateCheck: newer update available, restarting update machinery | 510 |
| update#checkForOverwriteUpdates(): failed to cancel pending update, aborting overwrite | 515 |
| update#isLatestVersion() - checking update server | 547 |
| updateService.isLatestVersion | 550 |
| update#isLatestVersion() - response | 552 |
| update#isLatestVersion(): failed to check for updates | 557 |
| update#setInternalOrg | 572 |

