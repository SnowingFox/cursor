# Patch evidence: app.js

- module: app-out-main-js:1001
- bundle: app/out/main.js range 3190224..3238793
- upstream: src/vs/code/electron-main/app.ts sha256:d3abed3a54296a97eed4c964c2f4e639d52f42972a37f192f5fbe64ab6ab732d
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.621; shared rare anchors: 221
- bundle-only anchors: 65; upstream anchors absent from bundle: 216

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| geolocation | 3191630..3191641 | no (exists elsewhere upstream) | E__ */ new Set(["pointerLock", "clipboard-sanitized-write", "media", "geolocation", "notifications", "fullscreen", "local-network", "loopback-network", |
| fullscreen | 3191662..3191672 | no (exists elsewhere upstream) | clipboard-sanitized-write", "media", "geolocation", "notifications", "fullscreen", "local-network", "loopback-network", "local-network-access"]), tm = |
| local-network | 3191676..3191689 | yes | tized-write", "media", "geolocation", "notifications", "fullscreen", "local-network", "loopback-network", "local-network-access"]), tm = class extends J |
| loopback-network | 3191693..3191709 | yes | dia", "geolocation", "notifications", "fullscreen", "local-network", "loopback-network", "local-network-access"]), tm = class extends J { constructor(e, |
| local-network-access | 3191713..3191733 | no (exists elsewhere upstream) | "notifications", "fullscreen", "local-network", "loopback-network", "local-network-access"]), tm = class extends J { constructor(e, t, n, r, s, i, a, o, l, |
| file:// | 3192791..3192798 | no (exists elsewhere upstream) | .startsWith("http://") \|\| T?.startsWith("https://") \|\| T?.startsWith("file://"), o = cb; Bo.defaultSession.setPermissionRequestHandler((T, S, |
| ignore | 3196863..3196869 | no (exists elsewhere upstream) | ingWindow: v !== void 0 }); switch (T.kind) { case "ignore": this.logService.trace(`app#activate: no window work (${ |
| focus-existing | 3196989..3197003 | yes | : no window work (${T.reason})`); return; case "focus-existing": v?.focus(); return; case "warm-op |
| warm-open | 3197066..3197075 | yes | xisting": v?.focus(); return; case "warm-open": await f.openOnWarmDockActivation(); return; |
| vscode-webview:// | 3197579..3197596 | yes | !T.startsWith(`${$.vscodeFileResource}://`) && !T.startsWith("vscode-webview://") \|\| (this.logService.error("webContents#will-navigate: Prevented web |
| vscode:webviewPopupOpenTab | 3197865..3197891 | yes | const v = m.hostWebContents; return v && v.send("vscode:webviewPopupOpenTab", { openerWebContentsId: m.id, url: f.url, disposition: f.disposition |
| vscode:webviewEmulateColorScheme | 3199856..3199888 | yes | rn !!(T && T.id === u.id \|\| v.id === u.id); }; Te.handle("vscode:webviewEmulateColorScheme", async (u, m, f) => { if (!["light", "dark", "no-preference" |
| light | 3199927..3199932 | no (exists elsewhere upstream) | scode:webviewEmulateColorScheme", async (u, m, f) => { if (!["light", "dark", "no-preference"].includes(f)) return; const { webCo |
| no-preference | 3199944..3199957 | yes | ateColorScheme", async (u, m, f) => { if (!["light", "dark", "no-preference"].includes(f)) return; const { webContents: T } = await impor |
| vscode:webviewGetMatchedCSSStyles | 3201744..3201777 | yes | xecuteJavaScript(b); } catch { } }), Te.handle("vscode:webviewGetMatchedCSSStyles", async (u, m, f) => { if (typeof f != "string" \|\| f.length > |
| vscode:webviewGetNavigationState | 3202301..3202333 | yes | Error ? S.message : String(S)), null; } }), Te.handle("vscode:webviewGetNavigationState", async (u, m) => { const { webContents: f } = await import(" |
| vscode:webviewNavigateHistory | 3202591..3202620 | yes | v.canGoBack(), canGoForward: v.canGoForward() }; }), Te.handle("vscode:webviewNavigateHistory", async (u, m, f) => { const { webContents: v } = await impor |
| vscode:webviewGetURL | 3202959..3202979 | yes | rward() ? (T.goForward(), true) : false : false; }), Te.handle("vscode:webviewGetURL", async (u, m) => { const { webContents: f } = await import(" |
| vscode:webviewSendCDPCommand | 3203187..3203215 | yes | = f.fromId(m); if (v) return v.getURL(); }), Te.handle("vscode:webviewSendCDPCommand", async (u, m, f, v) => { const T = iF(f); if (T) thr |
| vscode:webviewForcefullyCrashRenderer | 3203822..3203859 | yes | led to send CDP command ${f}:`, y), y; } }), Te.handle("vscode:webviewForcefullyCrashRenderer", async (u, m) => { const { webContents: f } = await import(" |
| Webview is not owned by sender | 3204006..3204036 | yes | n"); if (!n(u.sender, m, f)) return { success: false, error: "Webview is not owned by sender" }; const v = f.fromId(m); if (!v) return { success: |
| WebContents not found | 3204121..3204142 | yes | nst v = f.fromId(m); if (!v) return { success: false, error: "WebContents not found" }; if (v.isDestroyed()) return { success: false, error: "Web |
| WebContents already destroyed | 3204209..3204238 | yes | und" }; if (v.isDestroyed()) return { success: false, error: "WebContents already destroyed" }; try { return v.forcefullyCrashRenderer(), this. |
| vscode:setupWebviewCertificateHandler | 3204812..3204849 | yes | _PURE__ */ new Set(), a = /* @__PURE__ */ new Map(); Te.handle("vscode:setupWebviewCertificateHandler", async (u, m) => { if (i.has(m)) return; i.add(m); |
| net::OK | 3205267..3205274 | yes | = v, I = k.fingerprint, G = r.has(I); if (b === 0 \|\| y === "net::OK") { T(0); return; } if (G |
| vscode:getWebviewCertificateError | 3206004..3206037 | yes | t(I, { callback: T, timeoutId: W }); }); }), Te.handle("vscode:getWebviewCertificateError", async (u, m) => a.get(m) \|\| null), Te.handle("vscode:getAnyPendingC |
| vscode:getAnyPendingCertificateError | 3206086..3206122 | yes | bviewCertificateError", async (u, m) => a.get(m) \|\| null), Te.handle("vscode:getAnyPendingCertificateError", async () => { if (a.size === 0) return null; const |
| vscode:webviewAcceptCertificate | 3206507..3206538 | yes | a.delete(m); break; } }; Te.handle("vscode:webviewAcceptCertificate", async (u, m, f, v, T) => { const { webContents: S } = await |
| vscode:webviewRejectCertificate | 3206812..3206843 | yes | k.timeoutId), s.delete(f), k.callback(0)), o(f); }), Te.handle("vscode:webviewRejectCertificate", async (u, m, f) => { const { webContents: v } = await impor |
| vscode:webviewClearAcceptedCertificates | 3207094..3207133 | yes | .timeoutId), s.delete(f), T.callback(-2)), o(f); }), Te.handle("vscode:webviewClearAcceptedCertificates", async () => { r.clear(); }), Te.handle("vscode:webvie |
| vscode:webviewLoadRememberedCertificates | 3207190..3207230 | yes | dCertificates", async () => { r.clear(); }), Te.handle("vscode:webviewLoadRememberedCertificates", async (u, m) => { if (!(!Array.isArray(m) \|\| m.length > 1e3 |
| vscode:setDevToolsWebContents | 3207395..3207424 | yes | eof f == "string" && f.length < 256 && r.add(f); }), Te.handle("vscode:setDevToolsWebContents", async (u, m, f, v) => { const { webContents: T } = await im |
| WebContents ownership validation failed | 3207583..3207622 | yes | if (!n(u.sender, m, T) \|\| !n(u.sender, f, T)) throw new Error("WebContents ownership validation failed"); const S = T.fromId(m), k = T.fromId(f); if (!S \|\| |
| devtools:// | 3207846..3207857 | yes | nst y = k.getURL(); if (y !== "about:blank" && !y.startsWith("devtools://")) throw new Error(`DevTools WebContents has navigated to ${y}. It mu |
| vscode:registerGalleryBrowserWebview | 3208338..3208374 | yes | _PURE__ */ new Map(), d = /* @__PURE__ */ new Map(); Te.handle("vscode:registerGalleryBrowserWebview", async (u, m) => { const { webContents: f } = await import(" |
| destroyed | 3204229..3204238 | no (exists elsewhere upstream) | v.isDestroyed()) return { success: false, error: "WebContents already destroyed" }; try { return v.forcefullyCrashRenderer(), this. |
| vscode:setupWebviewDevtoolsAutoConnect | 3208773..3208811 | yes | oolsWebContents(S), k.openDevTools()); } }), Te.handle("vscode:setupWebviewDevtoolsAutoConnect", async (u) => { const { webContents: m } = await import("ele |
| will-attach-webview | 3209362..3209381 | yes | } else d.set(v, G); }, b = () => { f.off("will-attach-webview", k), f.off("did-attach-webview", y); }; f.once("dest |
| did-attach-webview | 3209395..3209413 | yes | }, b = () => { f.off("will-attach-webview", k), f.off("did-attach-webview", y); }; f.once("destroyed", b), f.on("will-attach-we |
| Resolving machine identifier... | 3210523..3210554 | no (exists elsewhere upstream) | v.reason === 2 && t.dispose(); }), this.logService.trace("Resolving machine identifier..."); const [n, r, s, i] = await Promise.all([XZe(this.stateServic |
| terminal.integrated.persistentSessionScrollback | 3222934..3222981 | no (exists elsewhere upstream) | shortGraceTime: 6e3, scrollback: this.configurationService.getValue("terminal.integrated.persistentSessionScrollback") ?? 100 }, this.configurationService, this.environmentMainService, t |
| Partitions | 3224745..3224755 | yes | 2, new pe(Y1)), i.set(z2, new pe(gve, [Bo, L(Wo.getPath("userData"), "Partitions")])), this.productService.quality !== "stable" && i.set(fve, new pe(x |
| stable | 3224795..3224801 | no (exists elsewhere upstream) | tPath("userData"), "Partitions")])), this.productService.quality !== "stable" && i.set(fve, new pe(xu, void 0, true)), await Qn.settled([u.initial |
| tracing | 3226160..3226167 | yes | const v = Oe.fromService(e.get(sf), s); t.registerChannel("tracing", v), n.then((Qt) => Qt.registerChannel("tracing", v)), _nt(e, t, n, |
| abuse | 3226393..3226398 | yes | const T = Oe.fromService(e.get(K2), s); t.registerChannel("abuse", T); const S = Oe.fromService(e.get(z2), s); t.registerC |
| browserSessionData | 3226476..3226494 | yes | const S = Oe.fromService(e.get(z2), s); t.registerChannel("browserSessionData", S); const k = s.add(new Jfe(e.get(bo))); t.registerChan |
| systemNotification | 3227221..3227239 | no (exists elsewhere upstream) | te", G); const U = new yke(e.get(If)); t.registerChannel("systemNotification", U); const X = Oe.fromService(e.get(qE), s); t.registerC |
| localAgentStorageService | 3227399..3227423 | yes | const W = Oe.fromService(e.get(lU), s); t.registerChannel("localAgentStorageService", W); const K = Oe.fromService(e.get(uU), s); t.registerC |
| localModeDataImportService | 3227501..3227527 | yes | const K = Oe.fromService(e.get(uU), s); t.registerChannel("localModeDataImportService", K); const H = e.get(wU), ue = Oe.fromService(H, s); t.r |
| worktreeCleanupMainService | 3227613..3227639 | yes | st H = e.get(wU), ue = Oe.fromService(H, s); t.registerChannel("worktreeCleanupMainService", ue); const Ee = e.get(CU), me = Oe.fromService(Ee, s); |
| localScheduledTasksMainService | 3227728..3227758 | yes | Ee = e.get(CU), me = Oe.fromService(Ee, s); t.registerChannel("localScheduledTasksMainService", me); const Nt = e.get(FU), Le = Oe.fromService(Nt, s); |
| localSubscriptionMailboxMainService | 3227847..3227882 | yes | Nt = e.get(FU), Le = Oe.fromService(Nt, s); t.registerChannel("localSubscriptionMailboxMainService", Le); const re = Oe.fromService(e.get(DD), s); t.registe |
| ipc-client-disconnect | 3228143..3228164 | yes | emoveConnection((Qt) => { z.releaseWakelocksForOwner(Qt.ctx, "ipc-client-disconnect"), z.releaseBackgroundThrottlingDisablesForOwner(Qt.ctx, "ipc-client- |
| extensionMonitor | 3228539..3228555 | yes | const de = Oe.fromService(e.get(BD), s); t.registerChannel("extensionMonitor", de); const _e = Oe.fromService(e.get(Xl), s); t.registe |
| processSampler | 3231187..3231201 | yes | const kv = Oe.fromService(e.get(BU), s); t.registerChannel("processSampler", kv); const Sv = Oe.fromService(e.get(M2), s); t.registe |
| vscode:osFileAssociationOpen | 3234678..3234706 | yes | sedWindow() ?? s?.getLastActiveWindow(); i ? i.sendWhenReady("vscode:osFileAssociationOpen", Ie.None, r) : s && s.sendToOpeningWindow("vscode:osFileAssociationO |
| granted | 3237058..3237065 | no (exists elsewhere upstream) | ssion(); this.logService.info(`Notification permission ${e ? "granted" : "denied"}`); }, 1e3); } }, tm.SECURITY_PROTOCOL_HANDLI |
| data-forced-theme | 3200640..3200657 | yes | eference" ? "" : f}'; if (!mode) { html.removeAttribute('data-forced-theme'); html.removeAttribute('data-theme'); html.removeAttri |
| data-theme | 3200690..3200700 | yes | ml.removeAttribute('data-forced-theme'); html.removeAttribute('data-theme'); html.removeAttribute('data-color-mode'); html.classL |
| data-color-mode | 3200733..3200748 | yes | html.removeAttribute('data-theme'); html.removeAttribute('data-color-mode'); html.classList.remove('light', 'dark', 'theme-light', 'them |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| security.promptForLocalFileProtocolHandling | 156 |
| security.promptForRemoteFileProtocolHandling | 157 |
| pointerLock | 194 |
| clipboard-read | 198 |
| clipboard-sanitized-write | 199 |
| deprecated-sync-clipboard-read | 202 |
| local-fonts | 208 |
| display-added | 238 |
| display-removed | 239 |
| display-metrics-changed | 240 |
| screen | 263 |
| devtools | 295 |
| /index.html | 329 |
| Blocked vscode-webview request | 354 |
| Blocked vscode-file request | 361 |
| content-type | 381 |
| Content-Type | 387 |
| image/svg | 395 |
| https://vscode.download.prss.microsoft.com/ | 409 |
| Access-Control-Allow-Origin | 412 |
| function | 434 |
| chrome | 439 |
| security.restrictUNCAccess | 447 |
| security.allowedUNCHosts | 450 |
| accessibility-support-changed | 466 |
| vscode:accessibilitySupportChanged | 467 |
| activate | 471 |
| app#activate | 472 |
| web-contents-created | 484 |
| [aux window]  app.on("web-contents-created"): Registering auxiliary window | 488 |
| will-navigate | 494 |
| webContents#will-navigate: Prevented webcontent navigation | 499 |
| about:blank | 509 |
| [aux window] webContents#setWindowOpenHandler: Allowing auxiliary window to open on about:blank | 510 |
| open-file | 533 |
| app#open-file:  | 536 |
| new-window-for-tab | 563 |
| vscode:fetchShellEnv | 569 |
| vscode:toggleDevTools | 594 |
| vscode:openDevTools | 595 |

