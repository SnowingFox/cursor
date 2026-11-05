# Patch evidence: actions.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0308
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 819995..836965
- upstream: src/vs/platform/actions/common/actions.ts sha256:58f454b1b1964c4be2026a6e59a7a9ca7c0bbc7af03045fe497341477fd1050f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.889; shared rare anchors: 197
- bundle-only anchors: 6; upstream anchors absent from bundle: 105

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| EditorContextCursorBlame | 821505..821529 | yes | ntextPeek"), oi.EditorContextShare = new oi("EditorContextShare"), oi.EditorContextCursorBlame = new oi("EditorContextCursorBlame"), oi.EditorTitle = new oi("Editor |
| SCMHistoryItemHover | 824651..824670 | yes | tle"), oi.SCMHistoryItemContext = new oi("SCMHistoryItemContext"), oi.SCMHistoryItemHover = new oi("SCMHistoryItemHover"), oi.SCMHistoryItemRefContext = new oi |
| AuxiliaryBarHeader | 829034..829052 | yes | "PanelTitle"), oi.AuxiliaryBarTitle = new oi("AuxiliaryBarTitle"), oi.AuxiliaryBarHeader = new oi("AuxiliaryBarHeader"), oi.TerminalInstanceContext = new oi(" |
| ChatExecuteSecondary | 830314..830334 | yes | w oi("ChatMessageFooter"), oi.ChatExecute = new oi("ChatExecute"), oi.ChatExecuteSecondary = new oi("ChatExecuteSecondary"), oi.ChatInput = new oi("ChatInput"), |
| ChatModelPicker | 830452..830467 | no (exists elsewhere upstream) | = new oi("ChatInput"), oi.ChatInputSide = new oi("ChatInputSide"), oi.ChatModelPicker = new oi("ChatModelPicker"), oi.ChatEditingWidgetToolbar = new oi("Ch |
| Could not find element in list | 833518..833548 | yes | n.remove(i), this._onDidChangeMenu.fire(Zqe.for(e))) : console.error("Could not find element in list"); } return rn(() => { this._onDidChangeMenu.fire |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| navigation | 25 |
| CommandPalette | 69 |
| DebugBreakpointsContext | 70 |
| DebugCallStackContext | 71 |
| DebugConsoleContext | 72 |
| DebugVariablesContext | 73 |
| NotebookVariablesContext | 74 |
| DebugHoverContext | 75 |
| DebugWatchContext | 76 |
| DebugToolBar | 77 |
| DebugToolBarStop | 78 |
| DebugDisassemblyContext | 79 |
| DebugCallStackToolbar | 80 |
| DebugCreateConfiguration | 81 |
| DebugScopesContext | 82 |
| EditorContext | 83 |
| SimpleEditorContext | 84 |
| EditorContent | 85 |
| EditorLineNumberContext | 86 |
| EditorContextCopy | 87 |
| EditorContextPeek | 88 |
| EditorContextShare | 89 |
| EditorTitle | 90 |
| EditorTitleLayout | 91 |
| ModalEditorTitle | 92 |
| ModalEditorTitleContext | 93 |
| ModalEditorEditorTitle | 94 |
| CompactWindowEditorTitle | 95 |
| EditorTitleRun | 96 |
| EditorTitleContext | 97 |
| EditorTitleContextShare | 98 |
| EmptyEditorGroup | 99 |
| EmptyEditorGroupContext | 100 |
| EditorGroupWatermarkToolbar | 101 |
| EditorTabsBarContext | 102 |
| EditorTabsBarAddTab | 107 |
| EditorTabsBarShowTabsSubmenu | 108 |
| EditorTabsBarShowTabsZenModeSubmenu | 109 |
| EditorActionsPositionSubmenu | 110 |
| EditorRenderWhitespaceSubmenu | 111 |

