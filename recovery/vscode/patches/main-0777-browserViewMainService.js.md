# Patch evidence: browserViewMainService.js

- module: app-out-main-js:0777
- bundle: app/out/main.js range 2253157..2294577
- upstream: src/vs/platform/browserView/electron-main/browserViewMainService.ts sha256:7b17ed6d8c6997725de70b5aae9958390233857ce60d1f7b404ef410b1825fed
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0.294; shared rare anchors: 25
- bundle-only anchors: 71; upstream anchors absent from bundle: 152

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| keyDown | 2254773..2254780 | no (exists elsewhere upstream) | { this.inputEventHandler = (e, t) => { if (t.type !== "keyDown") return; const n = Dfe(t); n && (e.preventDefault(), |
| before-input-event | 2254918..2254936 | no (exists elsewhere upstream) | ), this.handleShortcut(n)); }, this.browserView.webContents.on("before-input-event", this.inputEventHandler); } handleShortcut(e) { if (e |
| focus-composer | 2255011..2255025 | yes | is.inputEventHandler); } handleShortcut(e) { if (e === "focus-composer") try { this.parentWindow.webContents.focus(); } catch |
| select-all | 2255205..2255215 | yes | wState] Failed to focus parent window:", t); } if (e === "select-all") { try { this.browserView.webContents.selectAll(); |
| keyboard-shortcut | 2255459..2255476 | yes | return; } this.onBrowserMessage.fire({ channel: "keyboard-shortcut", args: [{ shortcut: e }], viewId: this.viewId }); } dispose( |
| web-contents-created | 2257359..2257379 | no (exists elsewhere upstream) | anup(), this._register({ dispose: () => { $fe.removeListener("web-contents-created", this.onInAppBrowserWebContentsCreated); } }), $fe.on("web-con |
| webview | 2256511..2256518 | no (exists elsewhere upstream) | Map(), this.sessionNetworkTrackers = /* @__PURE__ */ new Map(), this.webviewTracker = new Vfe(), this.webviewDestroyListeners = /* @__PURE__ */ ne |
| will-redirect | 2257981..2257994 | no (exists elsewhere upstream) | Commit({ event: s, url: i, isMainFrame: o, webContentsId: t, source: "will-redirect" }); }, r = (s) => { this.guardGuestNavigationBeforeCom |
| will-frame-navigate | 2258147..2258166 | yes | s, url: s.url, isMainFrame: s.isMainFrame, webContentsId: t, source: "will-frame-navigate" }); }; e.on("will-redirect", n), e.on("will-frame-naviga |
| allow | 2258589..2258594 | no (exists elsewhere upstream) | ontentsId: s, source: i } = e, a = Ffe(n, r); if (a.action === "allow") return; if (t.preventDefault(), a.action !== "cancel-and-conf |
| cancel-and-confirm-external | 2258649..2258676 | yes | tion === "allow") return; if (t.preventDefault(), a.action !== "cancel-and-confirm-external") { this.logService.warn(`[BrowserViewMainService] Cancelled |
| question | 2263149..2263157 | no (exists elsewhere upstream) | r confirmation for ${t}: URL`), (await hZe.showMessageBox(n, { type: "question", buttons: ["Cancel", "Open"], defaultId: 0, cancelId: 0, title: "Ope |
| Cancel | 2258736..2258742 | no (exists elsewhere upstream) | m-external") { this.logService.warn(`[BrowserViewMainService] Cancelled guest ${i} to denied or non-main-frame URL (webview ${s}):`, n); |
| Open External Link | 2263224..2263242 | yes | ion", buttons: ["Cancel", "Open"], defaultId: 0, cancelId: 0, title: "Open External Link", message: "Do you want to open this link?", detail: `${e} This will |
| StandardizedBrowserZoom | 2267863..2267886 | yes | e, javascript: true, navigateOnDragDrop: false, enableBlinkFeatures: "StandardizedBrowserZoom", preload: Jt.asFileUri("vs/platform/browserView/electron-main/preloa |
| vs/platform/browserView/electron-main/preload-browser.js | 2267912..2267968 | yes | nableBlinkFeatures: "StandardizedBrowserZoom", preload: Jt.asFileUri("vs/platform/browserView/electron-main/preload-browser.js").fsPath } }); i.setBackgroundColor("#00000000"); const a |
| pointerLock | 2268086..2268097 | no (exists elsewhere upstream) | 00000"); const a = i.webContents, o = /* @__PURE__ */ new Set(["pointerLock", "clipboard-sanitized-write", "local-network", "loopback-network", " |
| clipboard-sanitized-write | 2268101..2268126 | no (exists elsewhere upstream) | const a = i.webContents, o = /* @__PURE__ */ new Set(["pointerLock", "clipboard-sanitized-write", "local-network", "loopback-network", "local-network-access"]), l = |
| local-network | 2268130..2268143 | yes | /* @__PURE__ */ new Set(["pointerLock", "clipboard-sanitized-write", "local-network", "loopback-network", "local-network-access"]), l = a.session; |
| loopback-network | 2268147..2268163 | yes | ew Set(["pointerLock", "clipboard-sanitized-write", "local-network", "loopback-network", "local-network-access"]), l = a.session; l.setPermissionReque |
| local-network-access | 2268167..2268187 | no (exists elsewhere upstream) | ", "clipboard-sanitized-write", "local-network", "loopback-network", "local-network-access"]), l = a.session; l.setPermissionRequestHandler((f, v, T) => T |
| console-message | 2268371..2268386 | no (exists elsewhere upstream) | v, T) => o.has(v)); const d = new jfe(i, r, t, s); a.on("console-message", (f, v, T, S, k) => { const b = ["log", "warning", "error", |
| warning | 2268437..2268444 | no (exists elsewhere upstream) | on("console-message", (f, v, T, S, k) => { const b = ["log", "warning", "error", "debug", "info"][v] \|\| "log", I = Date.now(); d.co |
| debug | 2268457..2268462 | no (exists elsewhere upstream) | , (f, v, T, S, k) => { const b = ["log", "warning", "error", "debug", "info"][v] \|\| "log", I = Date.now(); d.consoleLogs.push({ t |
| native-console | 2268896..2268910 | yes | , column: 0 } : void 0 }; d.onBrowserMessage.fire({ channel: "native-console", args: [U], viewId: r }); }), this.setupSessionNetworkTracking |
| did-start-loading | 2269003..2269020 | no (exists elsewhere upstream) | }); }), this.setupSessionNetworkTracking(t, a.id, r, d), a.on("did-start-loading", () => { d.onDidStartLoading.fire({ viewId: r }); }), |
| did-stop-loading | 2269096..2269112 | no (exists elsewhere upstream) | => { d.onDidStartLoading.fire({ viewId: r }); }), a.on("did-stop-loading", () => { d.onDidStopLoading.fire({ viewId: r }); }), a |
| did-finish-load | 2269187..2269202 | no (exists elsewhere upstream) | => { d.onDidStopLoading.fire({ viewId: r }); }), a.on("did-finish-load", () => { this.injectColorSchemePreferenceForState(d), d.onDi |
| did-fail-load | 2269321..2269334 | no (exists elsewhere upstream) | ceForState(d), d.onDidFinishLoad.fire({ viewId: r }); }), a.on("did-fail-load", (f, v, T, S, k) => { this.logService.error(`[BrowserViewMai |
| did-navigate | 2269651..2269663 | no (exists elsewhere upstream) | on: T, validatedURL: S, isMainFrame: k, viewId: r }); }), a.on("did-navigate", (f, v) => { d.consoleLogs = [], d.networkRequests = [], d.o |
| did-navigate-in-page | 2269810..2269830 | no (exists elsewhere upstream) | igate.fire({ url: v, isMainFrame: true, viewId: r }); }), a.on("did-navigate-in-page", (f, v, T) => { d.onDidNavigateInPage.fire({ url: v, isMainF |
| will-navigate | 2269939..2269952 | no (exists elsewhere upstream) | teInPage.fire({ url: v, isMainFrame: T, viewId: r }); }), a.on("will-navigate", (f, v) => { this.logService.info(`[BrowserViewMainService] |
| confirm-external | 2258660..2258676 | yes | llow") return; if (t.preventDefault(), a.action !== "cancel-and-confirm-external") { this.logService.warn(`[BrowserViewMainService] Cancelled |
| page-title-updated | 2271187..2271205 | no (exists elsewhere upstream) | entWindow: s, logLabel: `window ${e} viewId ${r}` }); }), a.on("page-title-updated", (f, v) => { this.logService.trace(`[BrowserViewMainService] |
| update-target-url | 2271397..2271414 | yes | , d.onPageTitleUpdated.fire({ title: v, viewId: r }); }), a.on("update-target-url", (f, v) => { d.onBrowserMessage.fire({ channel: "update-targ |
| vscode:browser-view-message | 2271547..2271574 | yes | te-target-url", args: [{ url: v }], viewId: r }); }), a.ipc.on("vscode:browser-view-message", (f, v, ...T) => { this.logService.trace(`[BrowserViewMainSe |
| devtools-opened | 2272115..2272130 | no (exists elsewhere upstream) | {e}, viewId ${r})`), d.onDidBlur.fire({ viewId: r }); }), a.on("devtools-opened", () => { this.logService.trace(`[BrowserViewMainService] Dev |
| devtools-closed | 2272337..2272352 | no (exists elsewhere upstream) | { channel: "devtools-opened", args: [], viewId: r }); }), a.on("devtools-closed", () => { this.logService.trace(`[BrowserViewMainService] Dev |
| browserView.acceptedCertificates | 2273940..2273972 | yes | ; } const I = u(); if ((I ? JSON.parse(I.get("browserView.acceptedCertificates", "{}")) : {})[b]) { this.logService.info(`[BrowserViewMain |
| disposition: | 2275172..2275184 | yes | BrowserViewMainService] new-window requested (window ${e}):`, f.url, "disposition:", f.disposition); const v = _2(f.url); if (v === "dro |
| foreground-tab | 2276145..2276159 | no (exists elsewhere upstream) | }), { action: "deny" }; } return f.disposition === "foreground-tab" \|\| f.disposition === "background-tab" \|\| f.disposition === "new-wind |
| background-tab | 2276183..2276197 | no (exists elsewhere upstream) | return f.disposition === "foreground-tab" \|\| f.disposition === "background-tab" \|\| f.disposition === "new-window" ? (this.logService.info(`[BrowserV |
| new-window | 2275126..2275136 | no (exists elsewhere upstream) | ndler((f) => { this.logService.info(`[BrowserViewMainService] new-window requested (window ${e}):`, f.url, "disposition:", f.disposition); |
| open-url-new-tab | 2276398..2276414 | yes | , "disposition:", f.disposition), d.onBrowserMessage.fire({ channel: "open-url-new-tab", args: [{ url: f.url, disposition: f.disposition }], viewId: r }), { |
| flush storage data | 2277529..2277547 | yes | sync flushStorageData(e, t) { const n = this.getStateOrWarn(e, "flush storage data", t); if (n) try { const r = n.browserView.webContents. |
| set bounds | 2280221..2280231 | yes | async setBounds(e, t, n) { const r = this.getStateOrWarn(e, "set bounds", n); if (r) { r.browserView.setBounds({ x: Math.round( |
| set visibility | 2280566..2280580 | yes | async setVisible(e, t, n) { const r = this.getStateOrWarn(e, "set visibility", n); r && (r.isVisible = t, r.browserView.setVisible(t)); |
| navigate | 2258158..2258166 | no (exists elsewhere upstream) | rl, isMainFrame: s.isMainFrame, webContentsId: t, source: "will-frame-navigate" }); }; e.on("will-redirect", n), e.on("will-frame-naviga |
| reload ignoring cache | 2281693..2281714 | yes | c reloadIgnoringCache(e, t) { const n = this.getStateOrWarn(e, "reload ignoring cache", t); n && (this.logService.info(`[BrowserViewMainService] Perf |
| execute JavaScript | 2282275..2282293 | yes | executeJavaScript(e, t, n) { const r = this.getStateOrWarn(e, "execute JavaScript", n); if (r) try { return await r.browserView.webConten |
| open DevTools | 2282888..2282901 | yes | async openDevTools(e, t) { const n = this.getStateOrWarn(e, "open DevTools", t); n && (n.browserView.webContents.openDevTools({ mode: "rig |
| toggle DevTools | 2283185..2283200 | yes | ync toggleDevTools(e, t, n) { const r = this.getStateOrWarn(e, "toggle DevTools", n); if (r) try { r.browserView.webContents.isDevTools |
| detach | 2283384..2283390 | no (exists elsewhere upstream) | vTools() : r.browserView.webContents.openDevTools({ mode: t?.mode \|\| "detach" }), this.logService.info(`[BrowserViewMainService] DevTools toggled |
| set zoom level | 2284018..2284032 | yes | async setZoomLevel(e, t, n) { const r = this.getStateOrWarn(e, "set zoom level", n); r && (r.browserView.webContents.setZoomLevel(t), this.log |
| get zoom level | 2284287..2284301 | yes | async getZoomLevel(e, t) { const n = this.getStateOrWarn(e, "get zoom level", t); if (!n) return 0; const r = n.browserView.webConten |
| zoom in | 2284594..2284601 | yes | } async zoomIn(e, t) { const n = this.getStateOrWarn(e, "zoom in", t); if (!n) return; const r = n.browserView.webContents |
| zoom out | 2284950..2284958 | yes | } async zoomOut(e, t) { const n = this.getStateOrWarn(e, "zoom out", t); if (!n) return; const r = n.browserView.webContents |
| reset zoom | 2285311..2285321 | yes | } async resetZoom(e, t) { const n = this.getStateOrWarn(e, "reset zoom", t); n && (n.browserView.webContents.setZoomLevel(0), this.log |
| reload-page | 2286090..2286101 | yes | const i = (a, o) => { o.type !== "keyDown" \|\| Dfe(o) !== "reload-page" \|\| (a.preventDefault(), t.reloadIgnoringCache()); }; |
| white | 2287598..2287603 | no (exists elsewhere upstream) | lorScheme(), n = t.dark ? "dark" : "light", r = t.dark ? "#1e1e1e" : "white", s = ` :root { color-scheme: ${n}; } html { backgro |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| cdpCreated | 115 |
| number | 365 |
| browser.contextMenu.openLinkInNewTab | 508 |
| browserLinkBackground | 514 |
| browser.contextMenu.openLinkInExternalBrowser | 519 |
| separator | 522 |
| browser.contextMenu.copyLink | 524 |
| ${encodeURI(params.linkURL)} | 528 |
| browser.contextMenu.openImageInNewTab | 539 |
| browser.contextMenu.copyImage | 550 |
| browser.contextMenu.copyImageUrl | 554 |
| pasteAndMatchStyle | 563 |
| selectAll | 564 |
| browser.contextMenu.back | 573 |
| browser.contextMenu.forward | 580 |
| browser.contextMenu.reload | 586 |
| browser.contextMenu.addElementToChat | 595 |
| menu-will-close | 599 |
| browser.contextMenu.inspect | 602 |

