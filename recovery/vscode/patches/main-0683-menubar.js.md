# Patch evidence: menubar.js

- module: app-out-main-js:0683
- bundle: app/out/main.js range 1695247..1714958
- upstream: src/vs/platform/menubar/electron-main/menubar.ts sha256:556a481c44b160aec7740465a1d8aceb1d2954092b9dd30557cbbf6b2951df8b
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.905; shared rare anchors: 182
- bundle-only anchors: 6; upstream anchors absent from bundle: 133

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| aiFeedback.action.open | 1698217..1698239 | yes | "workbench.action.openIssueReporter"] = n, this.fallbackMenuHandlers["aiFeedback.action.open"] = n; } const t = this.productService.licenseUrl; |
| checking for updates | 1709969..1709989 | no (exists elsewhere upstream) | dateService.checkForUpdates(true); }, 0) })]; case "checking for updates": return [new Et({ label: E(2150, null), enabled: false })] |
| available for download | 1710075..1710097 | no (exists elsewhere upstream) | urn [new Et({ label: E(2150, null), enabled: false })]; case "available for download": return [new Et({ label: this.mnemonicLabel(E(2151, null)) |
| downloading | 1710264..1710275 | no (exists elsewhere upstream) | this.updateService.downloadUpdate(); } })]; case "downloading": return [new Et({ label: E(2152, null), enabled: false })] |
| downloaded | 1710361..1710371 | no (exists elsewhere upstream) | urn [new Et({ label: E(2152, null), enabled: false })]; case "downloaded": return q ? [] : [new Et({ label: this.mnemonicLabel(E(215 |
| glass.osEditCut | 1711637..1711652 | yes | (d = t[0]), q && (d === "editor.action.clipboardCutAction" \|\| d === "glass.osEditCut" ? l.role = "cut" : d === "editor.action.clipboardCopyAction" \|\| d == |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| commandId | 38 |
| keybinding | 39 |
| lastKnownMenubarData | 48 |
| workbench.action.files.newUntitledFile | 125 |
| workbench.action.newWindow | 130 |
| workbench.action.files.openFileFolder | 131 |
| workbench.action.files.openFolder | 132 |
| workbench.action.openWorkspace | 133 |
| workbench.action.clearRecentFiles | 136 |
| workbench.action.openYouTubeUrl | 141 |
| workbench.action.openRequestFeatureUrl | 146 |
| workbench.action.openIssueReporter | 151 |
| workbench.action.openLicenseUrl | 156 |
| ) > 0 ?  | 158 |
| openLicenseUrl | 159 |
| workbench.action.openPrivacyStatementUrl | 168 |
| openPrivacyStatement | 169 |
| Restart to Update | 185 |
| window.enableMenuBarMnemonics | 190 |
| boolean | 191 |
| window.nativeTabs | 203 |
| miNewWindow | 295 |
| Selection | 317 |
| mSelection | 319 |
| Terminal | 349 |
| mTerminal | 351 |
| Window | 358 |
| mWindow | 360 |
| mAbout | 409 |
| Preferences | 413 |
| miPreferences | 416 |
| mServices | 420 |
| mHideOthers | 422 |
| mShowAll | 423 |
| workbench.action.quit | 424 |
| miQuit | 425 |
| always | 469 |
| question | 472 |
| cancel | 475 |
| quitMessageMac | 477 |

