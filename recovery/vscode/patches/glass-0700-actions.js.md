# Patch evidence: actions.js

- module: app-out-vs-workbench-workbench-glass-main-js:0700
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2677708..2694687
- upstream: src/vs/platform/actions/common/actions.ts sha256:58f454b1b1964c4be2026a6e59a7a9ca7c0bbc7af03045fe497341477fd1050f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.889; shared rare anchors: 197
- bundle-only anchors: 6; upstream anchors absent from bundle: 105

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| EditorContextCursorBlame | 2679218..2679242 | yes | ntextPeek"), zi.EditorContextShare = new zi("EditorContextShare"), zi.EditorContextCursorBlame = new zi("EditorContextCursorBlame"), zi.EditorTitle = new zi("Editor |
| SCMHistoryItemHover | 2682364..2682383 | yes | tle"), zi.SCMHistoryItemContext = new zi("SCMHistoryItemContext"), zi.SCMHistoryItemHover = new zi("SCMHistoryItemHover"), zi.SCMHistoryItemRefContext = new zi |
| AuxiliaryBarHeader | 2686747..2686765 | yes | "PanelTitle"), zi.AuxiliaryBarTitle = new zi("AuxiliaryBarTitle"), zi.AuxiliaryBarHeader = new zi("AuxiliaryBarHeader"), zi.TerminalInstanceContext = new zi(" |
| ChatExecuteSecondary | 2688027..2688047 | yes | w zi("ChatMessageFooter"), zi.ChatExecute = new zi("ChatExecute"), zi.ChatExecuteSecondary = new zi("ChatExecuteSecondary"), zi.ChatInput = new zi("ChatInput"), |
| ChatModelPicker | 2688165..2688180 | no (exists elsewhere upstream) | = new zi("ChatInput"), zi.ChatInputSide = new zi("ChatInputSide"), zi.ChatModelPicker = new zi("ChatModelPicker"), zi.ChatEditingWidgetToolbar = new zi("Ch |
| Could not find element in list | 2691231..2691261 | yes | n.remove(i), this._onDidChangeMenu.fire(Pbt.for(t))) : console.error("Could not find element in list"); } return Pn(() => { this._onDidChangeMenu.fire |

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

