# Patch evidence: updateService.linux.js

- module: app-out-main-js:0746
- bundle: app/out/main.js range 1878150..1882852
- upstream: src/vs/platform/update/electron-main/updateService.linux.ts sha256:1f9af6bfb1f319c5a7c1998436d19694ad83a42ba5e11d861d05b48a11a52f55
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.733; shared rare anchors: 15
- bundle-only anchors: 5; upstream anchors absent from bundle: 8

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ready | 1878890..1878895 | no (exists elsewhere upstream) | e) { return e?.addArgs \|\| e?.removeArgs \|\| this.state.type !== "ready" ? false : (this.logService.trace("update#handleRelaunch(): running r |
| UpdateService: doCheckForUpdates | 1880533..1880565 | yes | ; } async doCheckForUpdates(e) { this.logService.debug("UpdateService: doCheckForUpdates"), this.setState(xe.CheckingForUpdates(e)); for (const t of [th |
| Failed to check for updates: | 1880767..1880795 | yes | tes(e, t)) return; } catch (n) { this.logService.error("Failed to check for updates:", n); } } async doDownloadUpdate(e) { if (e.packa |
| appimageupdatetool.AppImage | 1882395..1882422 | yes | pImage at " + e); const n = `${dXe.join(process.resourcesPath, "appimageupdatetool.AppImage")} -u "zsync\|${this.state.update.url}" -O "${e}"; ${e} &`; this |
| inherit | 1882606..1882613 | no (exists elsewhere upstream) | tarting updater with command " + n), uXe(n, { detached: true, stdio: "inherit", shell: true }); } }, d1 = B([w(1, ht), w(2, ot), w(3, qe), w( |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| updateService.linux.checkForUpdates | 51 |

