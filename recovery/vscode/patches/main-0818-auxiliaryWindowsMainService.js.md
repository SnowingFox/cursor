# Patch evidence: auxiliaryWindowsMainService.js

- module: app-out-main-js:0818
- bundle: app/out/main.js range 2428535..2435654
- upstream: src/vs/platform/auxiliaryWindow/electron-main/auxiliaryWindowsMainService.ts sha256:a51a921bfa4585ce1deb6a4d18f318f3ae87e9e972596eae527b3611c9c72c43
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.9; shared rare anchors: 49
- bundle-only anchors: 3; upstream anchors absent from bundle: 16

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| vs/base/parts/sandbox/electron-sandbox/preload-aux.js | 2432498..2432551 | yes | nstantiationService.invokeFunction(XT, n, r, { preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload-aux.js").fsPath }); return r.supplemental === true && (s.supplemental |
| window-glass-vibrancy | 2433548..2433569 | yes | n.forceNativeTitlebar = true; break; case "window-glass-vibrancy": n.glassVibrancy = true; break; ca |
| window-supplemental | 2433643..2433662 | yes | n.glassVibrancy = true; break; case "window-supplemental": n.supplemental = true; break; } |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| browser-window-created | 58 |
| [aux window] app.on("browser-window-created"): Trying to claim auxiliary window | 63 |
| did-create-window | 71 |
| [aux window] window.on("did-create-window"): Trying to claim auxiliary window | 74 |
| closed | 79 |
| vscode:registerAuxiliaryWindow | 83 |
| [aux window] vscode:registerAuxiliaryWindow: Registering auxiliary window to main window | 86 |
| vs/base/parts/sandbox/electron-browser/preload-aux.js | 98 |
| height | 115 |
| window-maximized | 124 |
| window-fullscreen | 127 |
| window-disable-fullscreen | 130 |
| window-native-titlebar | 133 |
| window-always-on-top | 136 |
| window-frameless | 139 |
| window-transparent | 142 |
| window-not-resizable | 145 |
| window-background-color | 148 |
| string | 149 |
| [aux window] using window state | 158 |

