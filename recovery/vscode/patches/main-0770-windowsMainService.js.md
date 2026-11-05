# Patch evidence: windowsMainService.js

- module: app-out-main-js:0770
- bundle: app/out/main.js range 2199939..2245586
- upstream: src/vs/platform/windows/electron-main/windowsMainService.ts sha256:d07a6c7c8227a9e0e178222c65265defed921eec9d4f09d2f922f5f03992a602
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.833; shared rare anchors: 178
- bundle-only anchors: 10; upstream anchors absent from bundle: 133

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ssh-remote | 2204519..2204529 | yes | 0 ? false : t.some((n) => VWe(Mc(this.resourceFromOpenable(n))) === "ssh-remote"); } shouldApplyGlassWindowRestrictions(e) { return e.c |
| dockWorkspace | 2205904..2205917 | yes | t === 1 && e.urisToOpen?.length === 1 && zT(e.urisToOpen[0])) return "dockWorkspace"; } async resolveExternalWorkspaceGlassHandoff(e, t) { |
| enable-smoke-test-driver | 2206646..2206670 | no (exists elsewhere upstream) | sExtensionDevelopment, isSmokeTest: this.environmentMainService.args["enable-smoke-test-driver"] === true }); } static createExternalWorkspaceGlassOpenConfi |
| new-window | 2206835..2206845 | no (exists elsewhere upstream) | e, cli: { ...e.cli, _: [], "folder-uri": void 0, "file-uri": void 0, "new-window": true, classic: false, glass: true }, urisToOpen: void 0, forceEmpty |
| glass.applyIdeWorkspaceHandoff | 2207428..2207458 | yes | } sendGlassIdeWorkspaceHandoff(e, t) { const n = { id: "glass.applyIdeWorkspaceHandoff", from: "menu", args: [{ workspaceIdentifier: { id: t.id, configPath: |
| vscode:runAction | 2207582..2207598 | no (exists elsewhere upstream) | .id, configPath: t.configPath.toJSON() } }] }; e.sendWhenReady("vscode:runAction", Ie.None, n); } getExistingGlassWindow() { const e = t |
| vscode:createNewComposer | 2208573..2208597 | yes | to existing glass window", s.toString()), K.focus(), K.sendWhenReady("vscode:createNewComposer", Ie.None, W), this.handleWaitMarkerFile(e, [K]), [K]; this.l |
| remote-debugging-port | 2233570..2233591 | no (exists elsewhere upstream) | t: h6({ rawRemoteDebuggingPortSwitch: Pfe.commandLine.getSwitchValue("remote-debugging-port"), applicationName: Xn.applicationName }), windowId: -1, shadowWindow |
| shadow-window-for-workspace-id | 2233743..2233773 | yes | Id: e.shadowWindowForWorkspaceId ?? this.environmentMainService.args["shadow-window-for-workspace-id"] ?? e.cli?.["shadow-window-for-workspace-id"], windowInWindow: e.win |
| cursorAuth/accessToken | 2243305..2243327 | yes | sToken() { return (await this.resolveApplicationStorage()).get("cursorAuth/accessToken", -1); } async resolveApplicationStorage() { return awa |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| preserve | 65 |
| windowsManager#openAgentsWindow | 296 |
| vscode:selectAgentsFolder | 306 |
| Agents workspace is not configured | 315 |
| windowsManager#open | 338 |
| windowsManager#open pathsToOpen | 361 |
| file-uri | 435 |
| vscode:handleChatRequest | 536 |
| windowsManager#doOpenFilesInExistingWindow | 730 |
| TERM_PROGRAM | 739 |
| vscode:openFiles | 741 |
| windowsManager#doAddRemoveFoldersToExistingWindow | 761 |
| vscode:addRemoveFolders | 766 |
| number | 772 |
| windowsManager#doOpenEmpty | 783 |
| windowsManager#doOpenFolderOrWorkspace | 803 |
| folder-uri | 843 |
| window | 892 |
| , comment: [ | 921 |
| pathNotExistTitle | 922 |
| pathNotExistDetail | 924 |
| uriInvalidDetail | 925 |
| folders | 1023 |
| /dev/null | 1230 |
| ERR_UNC_HOST_NOT_ALLOWED | 1239 |
| ENOENT | 1249 |
| warning | 1267 |
| cancel | 1270 |
| learnMore | 1271 |
| confirmOpenMessage | 1273 |
| confirmOpenDetail | 1274 |
| doNotAskAgain | 1275 |
| vscode:configureAllowedUNCHost | 1287 |
| https://aka.ms/vscode-windows-unc | 1296 |
| default | 1367 |
|  \|\| openFolderInNewWindowConfig ===  | 1371 |
|  \|\| openFilesInNewWindowConfig ===  | 1397 |
| more than one extension development path authority | 1451 |
| code/willCreateCodeWindow | 1607 |
| code/didCreateCodeWindow | 1614 |

