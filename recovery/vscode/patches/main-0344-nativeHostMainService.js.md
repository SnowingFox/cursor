# Patch evidence: nativeHostMainService.js

- module: app-out-main-js:0344
- bundle: app/out/main.js range 799849..844708
- upstream: src/vs/platform/native/electron-main/nativeHostMainService.ts sha256:57e90204f963b0da3e9f0a7d0cb3bc727d43c2c9f730b4e1c87ddf6170bb904a
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.727; shared rare anchors: 178
- bundle-only anchors: 43; upstream anchors absent from bundle: 218

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursor-heic-conversion | 801018..801040 | yes | ._onDidChangePassword.event, this.heicConversionFolderPath = L(kA(), "cursor-heic-conversion"), this.heicCleanupDone = false, v.isEnabled && this._register(v.onDi |
| query-session-end | 803539..803556 | yes | ); return k ? new q7e((y) => { const I = DG(k, "query-session-end").pipe($7e((G) => G.reasons.includes("shutdown") \|\| G.reasons.include |
| logoff | 803629..803635 | yes | pipe($7e((G) => G.reasons.includes("shutdown") \|\| G.reasons.includes("logoff"))).subscribe(y); return I.add(DG(k, "closed").subscribe( |
| closed | 803686..803692 | no (exists elsewhere upstream) | ns.includes("logoff"))).subscribe(y); return I.add(DG(k, "closed").subscribe(() => T.next())), I; }) : H7e; }), j7e( |
| browser-window-created | 803899..803921 | no (exists elsewhere upstream) | O.any(O.fromNodeEventEmitter(vA, "shutdown"), O.fromRxJS(S)), di.on("browser-window-created", () => T.next()), T.next(), this.onDidChangeColorScheme = O.map(this |
| Window not found | 810404..810420 | yes | .codeWindowById(t.windowId); if (n === void 0) throw new Error("Window not found"); const r = n.parentWindowId; if (r !== void 0 && e !== |
| vscode:runAction | 811920..811936 | no (exists elsewhere upstream) | rom: "menu", args: [{ windowId: o.id }] }; o.sendWhenReady("vscode:runAction", Ie.None, l); } } t.doNotFocus \|\| n.webContents? |
| codeBin | 813229..813236 | yes | if (ee) { const e = xn(this.environmentMainService.appRoot, "codeBin"), t = xn(this.environmentMainService.appRoot, "restoreCode.bat"), n |
| restoreCode.bat | 813285..813300 | yes | ice.appRoot, "codeBin"), t = xn(this.environmentMainService.appRoot, "restoreCode.bat"), n = await Promise.allSettled([Lc(Zp)(t, { shell: "cmd.exe", window |
| cmd.exe | 813354..813361 | no (exists elsewhere upstream) | "restoreCode.bat"), n = await Promise.allSettled([Lc(Zp)(t, { shell: "cmd.exe", windowsHide: true, env: { ...process.env, codeBinDir: e } }), Xt.pr |
| code.cmd | 813569..813577 | yes | ), Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "code.cmd")), Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", |
| code.sh | 813649..813656 | yes | ), Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "code.sh")), Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", |
| server-env-setup | 813728..813744 | yes | ), Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "server-env-setup"))]); let r = false; for (const s of n) if (s.status |
| rejected | 813819..813827 | no (exists elsewhere upstream) | ; let r = false; for (const s of n) if (s.status === "rejected") { if (s.reason instanceof Error && "code" in s.reason && |
| Error removing old code command from the path | 813978..814023 | yes | de === "ENOENT") continue; r = true, this.logService.error("Error removing old code command from the path", s.reason); } if (r) { const s = xn(this.e |
| replaceCode.bat | 814820..814835 | yes | he path`); const i = xn(this.environmentMainService.appRoot, "replaceCode.bat"); try { await Lc(Zp)(i, { shell: "cmd.exe", window |
| EEXIST | 815867..815873 | no (exists elsewhere upstream) | if (s.code !== "EACCES" && s.code !== "ENOENT" && s.code !== "EEXIST") throw s; const { response: i } = await this.showMessageBox( |
| browserView | 810747..810758 | no (exists elsewhere upstream) | e); if (n.lastShownAtUnixMs = Date.now(), t.explicitBounds && n.browserView && (n.windowInWindowExplicitBounds = t.explicitBounds, n.browserView. |
| Dialogs are skipped in hidden window-in-windows | 818894..818941 | yes | i && (r = i.win ?? void 0); } else throw new Error("Dialogs are skipped in hidden window-in-windows"); } return this.dialogMainService.showMessageBox(t, r); |
| resources | 827681..827690 | no (exists elsewhere upstream) | ationIconPath() { const e = di.isPackaged ? L(di.getAppPath(), "resources") : L(this.environmentMainService.appRoot, "resources"); if (Fe |
| linux/code.png | 827775..827789 | yes | ironmentMainService.appRoot, "resources"); if (Fe) return L(e, "linux/code.png"); if (ee) return L(e, "win32/code_150x150.png"); if (q) |
| win32/code_150x150.png | 827820..827842 | yes | if (Fe) return L(e, "linux/code.png"); if (ee) return L(e, "win32/code_150x150.png"); if (q) return di.isPackaged ? L(st(di.getAppPath()), `${this |
| darwin/code.icns | 827954..827970 | yes | st(di.getAppPath()), `${this.productService.nameShort}.icns`) : L(e, "darwin/code.icns"); } async readIcnsAsPngViaSips(e) { const t = await Xt |
| cursor-app-icon- | 828067..828083 | yes | sAsPngViaSips(e) { const t = await Xt.promises.mkdtemp(L(kA(), "cursor-app-icon-")), n = L(t, "icon.png"); try { await Lc(eh)("sips", [" |
| icon.png | 828098..828106 | yes | t = await Xt.promises.mkdtemp(L(kA(), "cursor-app-icon-")), n = L(t, "icon.png"); try { await Lc(eh)("sips", ["-s", "format", "png", e |
| HEIC/HEIF conversion is only supported on macOS. | 829848..829896 | yes | } async convertHeicToPng(e, t) { if (!q) throw new Error("HEIC/HEIF conversion is only supported on macOS."); await this.cleanupOrphanedHeicFiles(), await Xt.promises.mkd |
| input | 830076..830081 | no (exists elsewhere upstream) | rsive: true }); const n = `${rc(this.heicConversionFolderPath, "input")}.heic`, r = `${rc(this.heicConversionFolderPath, "output")}.png`; |
| output | 830134..830140 | no (exists elsewhere upstream) | olderPath, "input")}.heic`, r = `${rc(this.heicConversionFolderPath, "output")}.png`; try { await ie.writeFile(n, Buffer.from(t.buff |
| http: | 830986..830991 | no (exists elsewhere upstream) | ; } catch { return; } if (!(n.protocol !== "http:" && n.protocol !== "https:")) try { const r = await _A.fetch( |
| content-type | 831195..831207 | no (exists elsewhere upstream) | ($t.REMOTE_IMAGE_TIMEOUT_MS) }); if (!r.ok \|\| !r.headers.get("content-type")?.toLowerCase().startsWith("image/") \|\| Number(r.headers.get("conten |
| image/ | 831237..831243 | no (exists elsewhere upstream) | f (!r.ok \|\| !r.headers.get("content-type")?.toLowerCase().startsWith("image/") \|\| Number(r.headers.get("content-length")) > $t.MAX_REMOTE_IMAGE_BY |
| content-length | 831271..831285 | no (exists elsewhere upstream) | t-type")?.toLowerCase().startsWith("image/") \|\| Number(r.headers.get("content-length")) > $t.MAX_REMOTE_IMAGE_BYTES) return; const a = new Uint8Ar |
| complete | 831890..831898 | no (exists elsewhere upstream) | ses.readFile("/proc/net/tcp6", "utf8")]); return { status: "complete", ports: EG(t, n) }; } if (q) return await this.captu |
| netstat.exe | 832169..832180 | yes | st [t, n] = await Promise.all([this.captureListeningPortsWithCommand("netstat.exe", ["-ano"], w7e, false), this.captureRunningWslListeningPorts()]); |
| unavailable | 832279..832290 | no (exists elsewhere upstream) | s.captureRunningWslListeningPorts()]); return t.status === "unavailable" && n.length === 0 ? { status: "unavailable" } : { status: "complete" |
| wsl.exe | 832857..832864 | no (exists elsewhere upstream) | ngWslListeningPorts() { return new Promise((e) => { eh("wsl.exe", ["--list", "--running", "--quiet"], { encoding: "utf16le", maxBuffe |
| utf16le | 832916..832923 | no (exists elsewhere upstream) | eh("wsl.exe", ["--list", "--running", "--quiet"], { encoding: "utf16le", maxBuffer: 64 * 1024, timeout: $t.LISTENING_PORTS_SNAPSHOT_TIMEOUT_ |
| cat /proc/net/tcp /proc/net/tcp6 | 833555..833587 | yes | w Promise((t) => { eh("wsl.exe", ["-d", e, "-e", "sh", "-c", "cat /proc/net/tcp /proc/net/tcp6"], { encoding: "utf8", maxBuffer: 1024 * 1024, timeout: $t.LISTENING_ |
| redirect | 834504..834512 | no (exists elsewhere upstream) | try { n = _A.request({ method: "GET", url: e + "/", redirect: "manual", cache: "no-store", useSessionCookies: false }); } |
| no-store | 834532..834540 | no (exists elsewhere upstream) | _A.request({ method: "GET", url: e + "/", redirect: "manual", cache: "no-store", useSessionCookies: false }); } catch { t(void 0); |
| new-window | 839433..839443 | no (exists elsewhere upstream) | this.windowsMainService.open({ context: 5, cli: { ...r, glass: true, "new-window": true }, forceNewWindow: true, forceEmpty: true, allowAdditionalGlas |
| CSS Dev is not enabled | 842898..842920 | yes | (); if (!this.cssDevelopmentService.isEnabled) throw new Error("CSS Dev is not enabled"); const n = await this.cssDevelopmentService.getCssModules(tru |
| Shell Command: Install  | 814469..814492 | yes | mand to the path. Please open the VSCode command palette and run the 'Shell Command: Install 'code' command in PATH' command."); } async replaceShellComman |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| browser-window-blur | 108 |
| browser-window-focus | 111 |
| suspend | 123 |
| resume | 124 |
| on-battery | 129 |
| thermal-state-change | 134 |
| speed-limit-change | 140 |
| shutdown | 145 |
| lock-screen | 148 |
| unlock-screen | 149 |
| display-metrics-changed | 154 |
| workArea | 158 |
| display-added | 160 |
| display-removed | 161 |
| Not implemented in electron-main | 169 |
| Open in VS Code | 301 |
| vscode:openChatSession | 306 |
| number | 330 |
| leave-full-screen | 397 |
| default | 411 |
| ${allowed} | 478 |
| ENOENT | 501 |
| warnEscalation | 512 |
| , comment: [ | 514 |
| cancel | 515 |
| do shell script \\ | 524 |
| cantCreateBinFolder | 527 |
| EACCES | 538 |
| warnEscalationUninstall | 541 |
| cantUninstall | 556 |
| sourceMissing | 575 |
| workbench.externalBrowser | 674 |
| ${url} | 705 |
| openExternalErrorLinkMessage | 723 |
| openExternalProgramErrorMessage | 726 |
| copyLink | 734 |
| microphone | 753 |
| granted | 757 |
| native-is-elevated | 767 |
| @vscode/sudo-prompt | 776 |

