# Patch evidence: timerService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4362
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25575840..25589758
- upstream: src/vs/workbench/services/timer/browser/timerService.ts sha256:bd282bc0bdf9f5bce95186fdc28401651b87d19179a74f954e0dfa68cc944c2b
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 98
- bundle-only anchors: 34; upstream anchors absent from bundle: 113

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| default | 25576012..25576019 | no (exists elsewhere upstream) | Ni(), Op(), bn(), Ar(), Se(), bRo(), Zh(), $I(), jn(), z8e(), g3h = "default", f3h = /* @__PURE__ */ new Set([LRc, NRc, ORc, FRc, BRc]), v3h = cla |
| localBuiltInText | 25576201..25576217 | yes | urn t.length === 0 ? "none" : t.every(Cz.isLocalBuiltInTextEditor) ? "localBuiltInText" : t.some(Cz.isExtensionContributedEditor) ? "extensionContributed" : |
| extensionContributed | 25576264..25576284 | yes | or) ? "localBuiltInText" : t.some(Cz.isExtensionContributedEditor) ? "extensionContributed" : t.some(Cz.isComposerEditor) ? "composer" : "nativeNonText"; } |
| composer | 25576319..25576327 | no (exists elsewhere upstream) | utedEditor) ? "extensionContributed" : t.some(Cz.isComposerEditor) ? "composer" : "nativeNonText"; } static isLocalBuiltInTextEditor(t) { |
| nativeNonText | 25576332..25576345 | yes | "extensionContributed" : t.some(Cz.isComposerEditor) ? "composer" : "nativeNonText"; } static isLocalBuiltInTextEditor(t) { return t.modif |
| glass/willCreateReactRoot | 25578783..25578808 | yes | getEntries() { return this._entries.slice(0); } }, Tnr = "glass/willCreateReactRoot", qqt = "glass/didPresentShell", u5n = "glass/didPresentUsableShell", |
| glass/didPresentShell | 25578818..25578839 | yes | ntries.slice(0); } }, Tnr = "glass/willCreateReactRoot", qqt = "glass/didPresentShell", u5n = "glass/didPresentUsableShell", ERo = ["ellapsedWorkbenchMainT |
| glass/didPresentUsableShell | 25578849..25578876 | yes | = "glass/willCreateReactRoot", qqt = "glass/didPresentShell", u5n = "glass/didPresentUsableShell", ERo = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShel |
| ellapsedWorkbenchMainToReactRoot | 25578887..25578919 | yes | "glass/didPresentShell", u5n = "glass/didPresentUsableShell", ERo = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPre |
| ellapsedReactRootToShellPresent | 25578923..25578954 | yes | s/didPresentUsableShell", ERo = ["ellapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], xRo = ["ellapsedShellPresen |
| ellapsedWorkbenchMainToShellPresent | 25578958..25578993 | yes | llapsedWorkbenchMainToReactRoot", "ellapsedReactRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], xRo = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShe |
| ellapsedShellPresentToUsable | 25579005..25579033 | yes | tRootToShellPresent", "ellapsedWorkbenchMainToShellPresent"], xRo = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShellUsable"], b3h = /* @__PURE__ */ new Se |
| ellapsedWorkbenchMainToShellUsable | 25579037..25579071 | yes | orkbenchMainToShellPresent"], xRo = ["ellapsedShellPresentToUsable", "ellapsedWorkbenchMainToShellUsable"], b3h = /* @__PURE__ */ new Set([Tnr, qqt, u5n]), y3h = ["ellapsedEx |
| ellapsedExtHostBoot | 25579131..25579150 | yes | hellUsable"], b3h = /* @__PURE__ */ new Set([Tnr, qqt, u5n]), y3h = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapse |
| ellapsedExtHostBundleLoad | 25579154..25579179 | yes | @__PURE__ */ new Set([Tnr, qqt, u5n]), y3h = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHo |
| ellapsedExtHostWaitForInit | 25579183..25579209 | yes | t, u5n]), y3h = ["ellapsedExtHostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Enr = class ex |
| ellapsedExtHostInit | 25579213..25579232 | yes | ostBoot", "ellapsedExtHostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Enr = class extends we { construc |
| ellapsedExtHostActivation | 25579236..25579261 | yes | ostBundleLoad", "ellapsedExtHostWaitForInit", "ellapsedExtHostInit", "ellapsedExtHostActivation"], Enr = class extends we { constructor(e, t, n, i, r, s, o, a) { |
| code/didLayoutReady | 25586977..25586996 | yes | llapsedLayoutReady: this._marks.getDuration("code/didStartRenderer", "code/didLayoutReady"), ellapsedMcpProcessConnected: this._marks.getDuration("code/willCon |
| code/willConnectMcpProcess | 25587054..25587080 | yes | dLayoutReady"), ellapsedMcpProcessConnected: this._marks.getDuration("code/willConnectMcpProcess", "code/didConnectMcpProcess"), ellapsedUserConfigurationInit: this._ |
| code/didConnectMcpProcess | 25587084..25587109 | yes | cessConnected: this._marks.getDuration("code/willConnectMcpProcess", "code/didConnectMcpProcess"), ellapsedUserConfigurationInit: this._marks.getDuration("code/willI |
| code/willInitUserConfiguration | 25587169..25587199 | no (exists elsewhere upstream) | McpProcess"), ellapsedUserConfigurationInit: this._marks.getDuration("code/willInitUserConfiguration", "code/didInitUserConfiguration"), ellapsedWorkspaceConfigurationLoa |
| code/didInitUserConfiguration | 25587203..25587232 | no (exists elsewhere upstream) | ationInit: this._marks.getDuration("code/willInitUserConfiguration", "code/didInitUserConfiguration"), ellapsedWorkspaceConfigurationLoad: this._marks.getDuration("code/ |
| code/willInitWorkspaceConfiguration | 25587297..25587332 | no (exists elsewhere upstream) | ation"), ellapsedWorkspaceConfigurationLoad: this._marks.getDuration("code/willInitWorkspaceConfiguration", "code/didInitWorkspaceConfiguration"), ellapsedWorkbenchContributio |
| code/didInitWorkspaceConfiguration | 25587336..25587370 | no (exists elsewhere upstream) | Load: this._marks.getDuration("code/willInitWorkspaceConfiguration", "code/didInitWorkspaceConfiguration"), ellapsedWorkbenchContributionsStarting: this._marks.getDuration("c |
| code/didCreateWorkbenchContributions/1 | 25587482..25587520 | yes | : this._marks.getDuration("code/willCreateWorkbenchContributions/1", "code/didCreateWorkbenchContributions/1"), ellapsedWorkbenchContributionsReady: this._marks.getDuration("code |
| code/willCreateWorkbenchContributions/2 | 25587586..25587625 | yes | ns/1"), ellapsedWorkbenchContributionsReady: this._marks.getDuration("code/willCreateWorkbenchContributions/2", "code/didCreateWorkbenchContributions/2"), ellapsedLifecycleStartin |
| code/LifecyclePhase/Ready | 25587757..25587782 | yes | eStartingToReady: this._marks.getDuration("code/willStartWorkbench", "code/LifecyclePhase/Ready"), ellapsedLifecycleReadyToRestored: this._marks.getDuration("code/Li |
| code/LifecyclePhase/Restored | 25587874..25587902 | yes | eadyToRestored: this._marks.getDuration("code/LifecyclePhase/Ready", "code/LifecyclePhase/Restored"), ellapsedEditorGroupsReady: this._marks.getDuration("code/willResto |
| code/restoreEditors/editorGroupsReady | 25587985..25588022 | no (exists elsewhere upstream) | ditorGroupsReady: this._marks.getDuration("code/willRestoreEditors", "code/restoreEditors/editorGroupsReady"), ellapsedEditorsResolve: this._marks.getDuration("code/restoreEdito |
| code/restoreEditors/editorsToOpenResolved | 25588116..25588157 | no (exists elsewhere upstream) | ve: this._marks.getDuration("code/restoreEditors/editorGroupsReady", "code/restoreEditors/editorsToOpenResolved"), ellapsedEditorsOpen: this._marks.getDuration("code/restoreEditors/ |
| code/restoreEditors/editorsOpened | 25588252..25588285 | no (exists elsewhere upstream) | this._marks.getDuration("code/restoreEditors/editorsToOpenResolved", "code/restoreEditors/editorsOpened"), ellapsedDesktopOpenSingleWorkspace: this._marks.getDuration("code/ |
| code/willOpenSingleWorkspace | 25588350..25588378 | yes | pened"), ellapsedDesktopOpenSingleWorkspace: this._marks.getDuration("code/willOpenSingleWorkspace", "code/didOpenSingleWorkspace"), ...this._computeGlassShellPresentTi |
| code/didOpenSingleWorkspace | 25588382..25588409 | yes | leWorkspace: this._marks.getDuration("code/willOpenSingleWorkspace", "code/didOpenSingleWorkspace"), ...this._computeGlassShellPresentTimers(), ...this._computeGlassSh |

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

