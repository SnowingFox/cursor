# Patch evidence: windowImpl.js

- module: app-out-main-js:0768
- bundle: app/out/main.js range 2150646..2189841
- upstream: src/vs/platform/windows/electron-main/windowImpl.ts sha256:39e29df1f9419d33d58bf1c4e8bee30d4b5fb42a80fb5c49ed39ca193d44b149
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.878; shared rare anchors: 205
- bundle-only anchors: 4; upstream anchors absent from bundle: 216

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| vs/base/parts/sandbox/electron-sandbox/preload.js | 2160017..2160066 | yes | indow: me, isGlassWindow: e.isGlassWindow }, { preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload.js").fsPath, additionalArguments: [`--vscode-window-config=${this.config |
| resize | 2164571..2164577 | no (exists elsewhere upstream) | , this.parentWindowDisposableStore.add(O.fromNodeEventEmitter(e.win, "resize")(() => { if (!this.browserView \|\| !e.win \|\| this.windowInW |
| window.menuBarVisibility | 2171644..2171668 | no (exists elsewhere upstream) | onConfigurationUpdated(e) { if (!e \|\| e.affectsConfiguration("window.menuBarVisibility")) { const t = this.getMenuBarVisibility(); t !== thi |
| code/willReloadWindow | 2178304..2178325 | yes | tGlobalLoggers(), this.cssDevelopmentService.isEnabled) { At("code/willReloadWindow"), t.willReloadWindowMs = Date.now(); const n = ca.create(fal |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| maximize | 152 |
| unmaximize | 163 |
| closed | 172 |
| enter-full-screen | 182 |
| leave-full-screen | 183 |
| always-on-top-changed | 184 |
| hidden | 187 |
| system-context-menu | 204 |
| open-devtools | 223 |
| display-added | 242 |
| window | 278 |
| number | 281 |
| informational | 378 |
| windowControlHeight | 407 |
| boolean | 503 |
| window: native macOS fullscreen transition did not happen within 10s from restoring | 566 |
| window#ctor: using window state | 704 |
| vs/base/parts/sandbox/electron-browser/preload.js | 707 |
| bypassHeatCheck | 709 |
| code/willCreateCodeBrowserWindow | 718 |
| code/didCreateCodeBrowserWindow | 720 |
| unresponsive-sample-interval | 734 |
| unresponsive-sample-period | 735 |
| unresponsive | 810 |
| responsive | 811 |
| render-process-gone | 812 |
| did-fail-load | 813 |
| will-prevent-unload | 820 |
| did-finish-load | 823 |
| vscode:enterFullScreen | 848 |
| vscode:leaveFullScreen | 852 |
| https://*.vsassets.io/* | 862 |
| <unknown> | 898 |
| CodeWindow: detected unresponsive | 901 |
| CodeWindow: recovered from unresponsive | 904 |
| SystemMetaData | 913 |
| bpasero | 916 |
| Provides insight into reasons the vscode window had an error. | 917 |
| windowerror | 924 |
| enable-smoke-test-driver | 946 |

