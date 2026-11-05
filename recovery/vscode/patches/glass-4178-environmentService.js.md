# Patch evidence: environmentService.js

- module: app-out-vs-workbench-workbench-glass-main-js:4178
- bundle: app/out/vs/workbench/workbench.glass.main.js range 24028718..24043143
- upstream: src/vs/workbench/services/environment/browser/environmentService.ts sha256:ac6c225f618af5e9dbfb2ab955b2148a7a15db81ba5804966e4a6d5f0e89a9ae
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.909; shared rare anchors: 79
- bundle-only anchors: 12; upstream anchors absent from bundle: 5

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| skipOnboarding | 24035325..24035339 | yes | return this.payload?.get("skipWelcome") === "true"; } get skipOnboarding() { return this.payload?.get("skipOnboarding") === "true"; |
| suppressPopupsOnStartup | 24035419..24035442 | yes | return this.payload?.get("skipOnboarding") === "true"; } get suppressPopupsOnStartup() { return this.payload?.get("suppressPopupsOnStartup") === "tr |
| overrideCursorAuthToken | 24035531..24035554 | yes | his.payload?.get("suppressPopupsOnStartup") === "true"; } get overrideCursorAuthToken() { return this.payload?.get("overrideCursorAuthToken"); } |
| shadowWindowForWorkspaceId | 24029511..24029537 | yes | isBuilt() { return !!this.productService.commit; } get shadowWindowForWorkspaceId() { } get isVmDaemonParallelProcess() { return false; |
| isVmDaemonParallelProcess | 24029556..24029581 | yes | ce.commit; } get shadowWindowForWorkspaceId() { } get isVmDaemonParallelProcess() { return false; } get logLevel() { const t = th |
| testFeatureFlags | 24033540..24033556 | yes | this.options.developmentOptions?.enableSmokeTestDriver; } get testFeatureFlags() { return this.options.developmentOptions?.testFeatureFlags; |
| testExperiments | 24033639..24033654 | yes | turn this.options.developmentOptions?.testFeatureFlags; } get testExperiments() { return this.options.developmentOptions?.testExperiments; |
| testDynamicConfigs | 24033736..24033754 | yes | eturn this.options.developmentOptions?.testExperiments; } get testDynamicConfigs() { return this.options.developmentOptions?.testDynamicConfigs; |
| testLayers | 24033839..24033849 | yes | rn this.options.developmentOptions?.testDynamicConfigs; } get testLayers() { return this.options.developmentOptions?.testLayers; } |
| isGlass | 24033926..24033933 | yes | return this.options.developmentOptions?.testLayers; } get isGlass() { return false; } get glassWorkspaceRole() { } |
| glassWorkspaceRole | 24033972..24033990 | yes | stLayers; } get isGlass() { return false; } get glassWorkspaceRole() { } get isGlassCursorWorktreeAgentWorkspace() { retur |
| isGlassCursorWorktreeAgentWorkspace | 24034009..24034044 | yes | return false; } get glassWorkspaceRole() { } get isGlassCursorWorktreeAgentWorkspace() { return false; } get disableExtensions() { ret |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| logLevel | 59 |
| profDurationMarkers | 85 |
| window.log | 102 |
| argv.json | 108 |
| caches | 111 |
| workspaceStorage | 114 |
| sharedData | 117 |
| History | 120 |
| keyboardLayout.json | 139 |
| Workspaces | 142 |
| agent-sessions.code-workspace | 145 |
| machineid | 148 |
| exthost | 151 |
| disableExtensions | 222 |
| https://{{uuid}}.vscode-cdn.net/{{quality}}/{{commit}}/out/vs/workbench/contrib/webview/browser/pre/ | 231 |
| webviewExternalEndpointCommit | 233 |
| {{commit}} | 235 |
| {{quality}} | 236 |
| extensionTelemetry.log | 240 |
| verbose | 249 |
| logExtensionHostCommunication | 252 |
| skipReleaseNotes | 255 |
| skipWelcome | 258 |
| isSessionsWindow | 264 |
| profile | 267 |
| extensionDevelopmentPath | 305 |
| extensionDevelopmentKind | 312 |
| extensionTestsPath | 315 |
| debugRenderer | 318 |
| debugId | 321 |
| inspect-brk-extensions | 324 |
| inspect-extensions | 328 |
| extensionEnvironment | 331 |
| enableProposedApi | 338 |
| openFile | 363 |
| gotoLineMode | 368 |
| diffFilePrimary | 389 |
| diffFileSecondary | 390 |
| mergeFile1 | 405 |
| mergeFile2 | 406 |

