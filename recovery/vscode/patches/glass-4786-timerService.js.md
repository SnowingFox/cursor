# Patch evidence: timerService.js

- module: app-out-vs-workbench-workbench-glass-main-js:4786
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27454977..27468912
- upstream: src/vs/workbench/services/timer/browser/timerService.ts sha256:bd282bc0bdf9f5bce95186fdc28401651b87d19179a74f954e0dfa68cc944c2b
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 98
- bundle-only anchors: 34; upstream anchors absent from bundle: 113

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| default | 27455149..27455156 | no (exists elsewhere upstream) | Wo(), Ty(), qn(), yo(), Qe(), rfl(), Pv(), GB(), Di(), C9e(), Kxg = "default", Yxg = /* @__PURE__ */ new Set([iud, rud, sud, oud, aud]), Xxg = cla |
| localBuiltInText | 27455340..27455356 | yes | rn e.length === 0 ? "none" : e.every(Dre.isLocalBuiltInTextEditor) ? "localBuiltInText" : e.some(Dre.isExtensionContributedEditor) ? "extensionContributed" |
| extensionContributed | 27455404..27455424 | yes | r) ? "localBuiltInText" : e.some(Dre.isExtensionContributedEditor) ? "extensionContributed" : e.some(Dre.isComposerEditor) ? "composer" : "nativeNonText"; } |
| composer | 27455460..27455468 | no (exists elsewhere upstream) | tedEditor) ? "extensionContributed" : e.some(Dre.isComposerEditor) ? "composer" : "nativeNonText"; } static isLocalBuiltInTextEditor(e) { |
| nativeNonText | 27455473..27455486 | yes | "extensionContributed" : e.some(Dre.isComposerEditor) ? "composer" : "nativeNonText"; } static isLocalBuiltInTextEditor(e) { return e.modif |
| glass/willCreateReactRoot | 27457937..27457962 | yes | getEntries() { return this._entries.slice(0); } }, n2n = "glass/willCreateReactRoot", aye = "glass/didPresentShell", T9e = "glass/didPresentUsableShell", |
| glass/didPresentShell | 27457972..27457993 | yes | ntries.slice(0); } }, n2n = "glass/willCreateReactRoot", aye = "glass/didPresentShell", T9e = "glass/didPresentUsableShell", hfl = ["ellapsedWorkbenchMainT |
| glass/didPresentUsableShell | 27458003..27458030 | yes | = "glass/willCreateReactRoot", aye = "glass/didPresentShell", T9e = "glass/didPresentUsableShell", hfl = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShel |
| ellapsedWorkbenchMainToReactRoot | 27458041..27458073 | yes | "glass/didPresentShell", T9e = "glass/didPresentUsableShell", hfl = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPre |
| ellapsedReactRootToShellPresent | 27458077..27458108 | yes | s/didPresentUsableShell", hfl = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], pfl = ["ellapsedShellPresen |
| ellapsedWorkbenchMainToShellPresent | 27458112..27458147 | yes | llapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], pfl = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShe |
| ellapsedShellPresentToUsable | 27458159..27458187 | yes | tRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], pfl = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShellUsable"], Qxg = /* @__PURE__ */ new Se |
| ellapsedWorkbenchMainToShellUsable | 27458191..27458225 | yes | orkbenchMainToShellPresent"], pfl = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShellUsable"], Qxg = /* @__PURE__ */ new Set([n2n, aye, T9e]), Jxg = ["ellapsedEx |
| ellapsedExtHostBoot | 27458285..27458304 | yes | hellUsable"], Qxg = /* @__PURE__ */ new Set([n2n, aye, T9e]), Jxg = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapse |
| ellapsedExtHostBundleLoad | 27458308..27458333 | yes | @__PURE__ */ new Set([n2n, aye, T9e]), Jxg = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHo |
| ellapsedExtHostWaitForInit | 27458337..27458363 | yes | e, T9e]), Jxg = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Xus = class ex |
| ellapsedExtHostInit | 27458367..27458386 | yes | ostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Xus = class extends st { construc |
| ellapsedExtHostActivation | 27458390..27458415 | yes | ostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Xus = class extends st { constructor(t, e, n, i, r, s, o, a) { |
| code/didLayoutReady | 27466131..27466150 | yes | llapsedLayoutReady: this._marks.getDuration("code/didStartRenderer", "code/didLayoutReady"), ellapsedMcpProcessConnected: this._marks.getDuration("code/willCon |
| code/willConnectMcpProcess | 27466208..27466234 | yes | dLayoutReady"), ellapsedMcpProcessConnected: this._marks.getDuration("code/willConnectMcpProcess", "code/didConnectMcpProcess"), ellapsedUserConfigurationInit: this._ |
| code/didConnectMcpProcess | 27466238..27466263 | yes | cessConnected: this._marks.getDuration("code/willConnectMcpProcess", "code/didConnectMcpProcess"), ellapsedUserConfigurationInit: this._marks.getDuration("code/willI |
| code/willInitUserConfiguration | 27466323..27466353 | no (exists elsewhere upstream) | McpProcess"), ellapsedUserConfigurationInit: this._marks.getDuration("code/willInitUserConfiguration", "code/didInitUserConfiguration"), ellapsedWorkspaceConfigurationLoa |
| code/didInitUserConfiguration | 27466357..27466386 | no (exists elsewhere upstream) | ationInit: this._marks.getDuration("code/willInitUserConfiguration", "code/didInitUserConfiguration"), ellapsedWorkspaceConfigurationLoad: this._marks.getDuration("code/ |
| code/willInitWorkspaceConfiguration | 27466451..27466486 | no (exists elsewhere upstream) | ation"), ellapsedWorkspaceConfigurationLoad: this._marks.getDuration("code/willInitWorkspaceConfiguration", "code/didInitWorkspaceConfiguration"), ellapsedWorkbenchContributio |
| code/didInitWorkspaceConfiguration | 27466490..27466524 | no (exists elsewhere upstream) | Load: this._marks.getDuration("code/willInitWorkspaceConfiguration", "code/didInitWorkspaceConfiguration"), ellapsedWorkbenchContributionsStarting: this._marks.getDuration("c |
| code/didCreateWorkbenchContributions/1 | 27466636..27466674 | yes | : this._marks.getDuration("code/willCreateWorkbenchContributions/1", "code/didCreateWorkbenchContributions/1"), ellapsedWorkbenchContributionsReady: this._marks.getDuration("code |
| code/willCreateWorkbenchContributions/2 | 27466740..27466779 | yes | ns/1"), ellapsedWorkbenchContributionsReady: this._marks.getDuration("code/willCreateWorkbenchContributions/2", "code/didCreateWorkbenchContributions/2"), ellapsedLifecycleStartin |
| code/LifecyclePhase/Ready | 27466911..27466936 | yes | eStartingToReady: this._marks.getDuration("code/willStartWorkbench", "code/LifecyclePhase/Ready"), ellapsedLifecycleReadyToRestored: this._marks.getDuration("code/Li |
| code/LifecyclePhase/Restored | 27467028..27467056 | yes | eadyToRestored: this._marks.getDuration("code/LifecyclePhase/Ready", "code/LifecyclePhase/Restored"), ellapsedEditorGroupsReady: this._marks.getDuration("code/willResto |
| code/restoreEditors/editorGroupsReady | 27467139..27467176 | no (exists elsewhere upstream) | ditorGroupsReady: this._marks.getDuration("code/willRestoreEditors", "code/restoreEditors/editorGroupsReady"), ellapsedEditorsResolve: this._marks.getDuration("code/restoreEdito |
| code/restoreEditors/editorsToOpenResolved | 27467270..27467311 | no (exists elsewhere upstream) | ve: this._marks.getDuration("code/restoreEditors/editorGroupsReady", "code/restoreEditors/editorsToOpenResolved"), ellapsedEditorsOpen: this._marks.getDuration("code/restoreEditors/ |
| code/restoreEditors/editorsOpened | 27467406..27467439 | no (exists elsewhere upstream) | this._marks.getDuration("code/restoreEditors/editorsToOpenResolved", "code/restoreEditors/editorsOpened"), ellapsedDesktopOpenSingleWorkspace: this._marks.getDuration("code/ |
| code/willOpenSingleWorkspace | 27467504..27467532 | yes | pened"), ellapsedDesktopOpenSingleWorkspace: this._marks.getDuration("code/willOpenSingleWorkspace", "code/didOpenSingleWorkspace"), ...this._computeGlassShellPresentTi |
| code/didOpenSingleWorkspace | 27467536..27467563 | yes | leWorkspace: this._marks.getDuration("code/willOpenSingleWorkspace", "code/didOpenSingleWorkspace"), ...this._computeGlassShellPresentTimers(), ...this._computeGlassSh |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| IMemoryInfo | 26 |
| workingSetSize | 27 |
| privateBytes | 28 |
| sharedBytes | 29 |
| IStartupMetrics | 39 |
| ellapsed | 40 |
| isLatestVersion | 41 |
| didUseCachedData | 42 |
| windowKind | 43 |
| windowCount | 44 |
| viewletId | 45 |
| panelId | 46 |
| editorIds | 47 |
| timers.ellapsedAppReady | 48 |
| timers.ellapsedNlsGeneration | 49 |
| timers.ellapsedLoadMainBundle | 50 |
| timers.ellapsedRunMainBundle | 51 |
| timers.ellapsedCrashReporter | 52 |
| timers.ellapsedMainServer | 53 |
| timers.ellapsedWindowCreate | 54 |
| timers.ellapsedWindowLoad | 55 |
| timers.ellapsedWindowLoadToRequire | 56 |
| timers.ellapsedWaitForWindowConfig | 57 |
| timers.ellapsedStorageInit | 58 |
| timers.ellapsedWorkspaceServiceInit | 59 |
| timers.ellapsedSharedProcesConnected | 60 |
| timers.ellapsedRequiredUserDataInit | 61 |
| timers.ellapsedOtherUserDataInit | 62 |
| timers.ellapsedRequire | 63 |
| timers.ellapsedExtensions | 64 |
| timers.ellapsedExtensionsReady | 65 |
| timers.ellapsedViewletRestore | 66 |
| timers.ellapsedAuxiliaryViewletRestore | 67 |
| timers.ellapsedPanelRestore | 68 |
| timers.ellapsedEditorRestore | 69 |
| timers.ellapsedWorkbenchContributions | 70 |
| timers.ellapsedWorkbench | 71 |
| platform | 72 |
| release | 73 |
| totalmem | 75 |

